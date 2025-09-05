import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/lib/mongodb";
import userModel from "@/lib/userModel";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        await connectDB();

        const user = await userModel.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");

        // ✅ Return full user object with username
        return { 
          id: user._id.toString(),
          name: user.firstname + " " + user.lastname,
          username: user.username,
          email: user.email,
          image: user.profilePic || null,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },

  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      await connectDB();

      if (account.provider === "google") {
        let existingUser = await userModel.findOne({ email: user.email });

        if (!existingUser) {
          existingUser = await userModel.create({
            username: user.name.replace(/\s+/g, "").toLowerCase(), // generate username
            email: user.email,
            profilePic: user.image,
            password: null,
          });
        }

        // ✅ Attach username to Google users
        user.username = existingUser.username;
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id || token._id;
        token.name = user.name;
        token.username = user.username; // ✅ always include username
        token.email = user.email;
        token.image = user.image || null;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.username = token.username; // ✅ pass username to frontend
        session.user.email = token.email;
        session.user.image = token.image;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
