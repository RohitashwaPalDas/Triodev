import connectDB from "@/lib/mongodb";
import userModel from "@/lib/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstname, lastname, username, email, password } = await req.json();
    console.log("📩 Incoming signup request:", { firstname, lastname, username, email });

    await connectDB();
    console.log("✅ Connected to MongoDB");

    // Check if user exists by email
    const userExists = await userModel.findOne({ email });
    console.log("🔎 Checking if user exists:", userExists ? "Yes" : "No");

    if (userExists) {
      return new Response(JSON.stringify({ error: "Email already exists" }), { status: 400 });
    }

    const usernameExists = await userModel.findOne({ username });
    console.log("🔎 Checking if user exists:", usernameExists ? "Yes" : "No");

    if (usernameExists) {
      return new Response(JSON.stringify({ error: "Username already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🔐 Password hashed");

    const newUser = new userModel({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("✅ User saved to DB");

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT == 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // allow self-signed certs
      },
    });

    console.log("📨 Nodemailer transporter created");

    try {
      const info = await transporter.sendMail({
        from: `"AIRDev" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "🎉 Welcome to AIRDev – Let’s Build Something Amazing",
        html: `
          <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
            <h2 style="color:#2563eb;">Hello ${firstname},</h2>
            <p>Welcome to <strong>AIRDev</strong>! 🎉</p>
            <p>Your account has been created successfully, and you’re now part of a growing community of innovators and businesses building modern web solutions with us.</p>

            <h3 style="color:#2563eb;">What you can do with AIRDev:</h3>
            <ul>
              <li>🚀 Launch and scale your web projects quickly</li>
              <li>🔒 Enjoy secure and reliable hosting</li>
              <li>⚡ Get access to powerful developer tools and integrations</li>
              <li>💡 Collaborate with our expert support team whenever you need</li>
            </ul>

            <p>We’re excited to have you onboard and can’t wait to see what you build with AIRDev.</p>

            <p style="margin-top:20px;">👉 <a href="https://airdev.com/dashboard" style="color:#2563eb; text-decoration:none; font-weight:bold;">Go to your Dashboard</a></p>

            <p style="margin-top:40px; font-size:0.9em; color:#555;">
              Cheers,<br>
              The AIRDev Team
            </p>
          </div>
        `,
      });

      console.log("✅ Email sent:", info.messageId);
    } catch (mailError) {
      console.error("❌ Email sending failed:", mailError);
      // Do not block signup if email fails
    }

    return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });

  } catch (error) {
    console.error("❌ Signup error (server):", error);

    // Handle duplicate key error from MongoDB
    if (error.code === 11000) {
      if (error.keyPattern?.email) {
        return new Response(JSON.stringify({ error: "Email already exists" }), { status: 400 });
      }
      if (error.keyPattern?.username) {
        return new Response(JSON.stringify({ error: "Username already exists" }), { status: 400 });
      }
    }

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
