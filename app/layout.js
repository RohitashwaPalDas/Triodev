import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/components/Navbar";
import 'remixicon/fonts/remixicon.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TrioDev",
  description: "We are building the future of AI development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`ovo-regular antialiased`}
      >
        <Navbar/>
        <div className="container mt-28 px-4 min-w-full">{children}</div>
        
      </body>
    </html>
  );
}
