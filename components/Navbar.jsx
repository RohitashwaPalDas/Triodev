"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const menuButtonRef = useRef(null);
  const sideRef = useRef(null);
  const router = useRouter();

  const [showSide, setShowSide] = useState(false);
  const { data: session } = useSession(); // Auth.js session

  useGSAP(() => {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out", duration: 0.8 },
  });

  tl.from(logoRef.current, { y: -20, opacity: 0 })
    .from(navLinksRef.current, { y: -20, opacity: 0, stagger: 0.1 }, "-=0.3")
    .from(menuButtonRef.current, { y: -20, opacity: 0 }, "-=0.3");
}, { dependencies: [session], revertOnUpdate: true }); // ✅ prevents vanish


  useGSAP(
    () => {
      if (showSide) {
        gsap.fromTo(
          sideRef.current,
          { y: -100, opacity: 0 },
          {
            duration: 0.6,
            y: 0,
            opacity: 1,
            ease: "power3.out",
          }
        );
      }
    },
    { dependencies: [showSide] }
  );

  const closeMenu = () => setShowSide(false);

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
  ...[!session 
    ? { name: "Login", path: "/auth" } 
    : { name: "Profile", path: "/dashboard" }
  ]
];


  return (
    <nav className="w-full fixed top-0 px-6 py-6 flex items-center justify-between bg-white/80 backdrop-blur-lg shadow-md z-50 border-b border-gray-200">
      {/* Logo */}
      <Link href="/">
        <div
          ref={logoRef}
          className="font-extrabold text-2xl sm:text-4xl text-blue-600 orbitron"
        >
          TrioDev
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6 text-gray-800">
        <ul className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <li key={link.name} ref={(el) => (navLinksRef.current[index] = el)}>
              <Link
                href={link.path}
                className={`font-bold text-xl transition-colors duration-200 ${
                  pathname === link.path
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        
      </div>

      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        className="block cursor-pointer sm:hidden"
        onClick={() => setShowSide(!showSide)}
      >
        <i className="ri-menu-3-line text-2xl text-gray-700"></i>
      </button>

      {/* Mobile Sidebar */}
      <ul
        ref={sideRef}
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-white transition-all duration-500 ${
          showSide ? "right-0" : "-right-64"
        }`}
      >
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={closeMenu}
        >
          <i className="ri-close-line text-3xl text-gray-700"></i>
        </div>

        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`font-semibold text-xl transition-colors duration-200 ${
                pathname === link.path
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          </li>
        ))}

        
      </ul>
    </nav>
  );
};

export default Navbar;
