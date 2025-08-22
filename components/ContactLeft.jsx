import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const ContactLeft = () => {
  const lottieRef = useRef(null);
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const contactRef = useRef([]);
  const socialRef = useRef([]);

  // GSAP animations
  useGSAP(() => {
    // Animate lottie
    gsap.from(lottieRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: lottieRef.current,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse", // play again on enter and enter back
      },
    });

    // Animate heading
    gsap.from(headRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headRef.current,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });

    // Animate paragraph
    gsap.from(paraRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });

    gsap.set(contactRef.current, { x: 100, opacity: 0 }); // Initialize contact elements
    gsap.set(socialRef.current, { scale: 0.6, opacity: 0 }); // Initialize social icons
    // Animate contact elements (with stagger)
    gsap.to(contactRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });

    // Animate social icons (with stagger)
    gsap.to(socialRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: socialRef.current,
        start: "top 95%",
        toggleActions: "restart reverse restart reverse",
      },
    });
  }, []);

  return (
    <div className="space-y-6">
      <div ref={lottieRef} >
        <DotLottieReact
          src="https://lottie.host/84b18902-3712-4587-b18f-9979cab7a9ea/xNDHWBgqxK.lottie"
          loop
          autoplay
          className="scale-150 sm:scale-100 mx-auto"
        />
      </div>
      <h1 ref={headRef} className="text-4xl font-extrabold text-gray-900">
        Let’s Build Something Amazing 🚀
      </h1>
      <p ref={paraRef} className="text-lg text-gray-600">
        At <span className="font-semibold text-blue-600">Triodev</span>, we help
        startups, businesses, and creators bring their ideas to life with modern
        web solutions. Got a project in mind? Let’s connect today!
      </p>

      {/* Contact Info */}
      <div className="space-y-4">
        {[
          {
            icon: <FaPhoneAlt className="text-blue-600 text-2xl" />,
            text: "+91 98765 43210",
          },
          {
            icon: <FaEnvelope className="text-red-500 text-2xl" />,
            text: "hello@triodev.com",
          },
          {
            icon: <MdLocationOn className="text-green-600 text-3xl" />,
            text: "Kolkata, India",
          },
        ].map((item, i) => (
          <div
            key={i}
            ref={(el) => (contactRef.current[i] = el)}
            className="flex items-center gap-4"
          >
            {item.icon}
            <span className="text-lg">{item.text}</span>
          </div>
        ))}

        {/* WhatsApp Direct Message */}
        <div
          ref={(el) => (contactRef.current[3] = el)}
          className="flex items-center gap-4"
        >
          <FaWhatsapp className="text-green-500 text-3xl" />
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-green-600 hover:underline"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-6">
        {[
          { icon: <FaFacebook />, color: "hover:text-blue-600" },
          { icon: <FaTwitter />, color: "hover:text-sky-500" },
          { icon: <FaLinkedin />, color: "hover:text-blue-700" },
        ].map((social, i) => (
          <a
            key={i}
            href="#"
            ref={(el) => (socialRef.current[i] = el)}
            className={`${social.color} text-2xl`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactLeft;
