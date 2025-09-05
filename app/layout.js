import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/components/Navbar";
import 'remixicon/fonts/remixicon.css';
import Script from "next/script";
import Providers from "./Providers";
import { ToastContainer } from "react-toastify";

import { Orbitron, Outfit, Ovo, Prata } from "next/font/google";
import Footer from "@/components/Footer";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const ovo = Ovo({ subsets: ["latin"], weight: "400", variable: "--font-ovo" });
const prata = Prata({ subsets: ["latin"], weight: "400", variable: "--font-prata" });

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
    <html lang="en" data-scroll-behavior="smooth" className={`${orbitron.variable} ${outfit.variable} ${ovo.variable} ${prata.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <div className="container mt-28 px-4 min-w-full ovo-regular">
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
          <Footer/>
          <Script
            src="https://cdn.lordicon.com/lordicon.js"
            strategy="afterInteractive"
          />
        </Providers>
      </body>
    </html>
  );
}




//animation adding on pricing and user dashboard page
//loading animation adding on login and signup page
//footer adding
//profile picture update
