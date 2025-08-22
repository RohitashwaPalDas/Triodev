import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RiCalendarScheduleLine, RiTimeLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactRight = () => {
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.from(formRef.current, {
      x: 100, // slide from left
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",  // when top of form hits 80% of viewport height
        toggleActions: "play none none reverse", 
      },
    });
  }, []);
  return (
    <div ref={formRef} className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200 w-full max-w-2xl mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <RiCalendarScheduleLine className="text-blue-600 text-3xl sm:text-4xl" />
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
          Book Your Free 30-Min Strategy Session 🚀
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
        Lock in a{" "}
        <span className="font-semibold text-gray-800">30-minute call</span> with
        our experts. We’ll brainstorm ideas, share growth strategies, and map
        out the best way to bring your vision to life. Our team will reach out
        within <span className="font-semibold text-gray-800">24 hours</span>{" "}
        after you submit the form!
      </p>

      {/* Form */}
      <form className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-base" />
          <input
            type="text"
            placeholder=" "
            className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              hover:border-blue-400 transition text-sm sm:text-base peer bg-transparent"
          />
          <label
            className="absolute left-10 -top-2 bg-white px-1 text-gray-400 text-sm sm:text-base 
              pointer-events-none transition-all duration-300 ease-out transform
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-10 peer-focus:text-blue-600 peer-focus:text-xs"
          >
            Your Name
          </label>
        </div>

        {/* Email & Phone Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-base" />
            <input
              type="email"
              placeholder=" "
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition text-sm sm:text-base peer bg-transparent"
            />
            <label
              className="absolute left-10 -top-2 bg-white px-1 text-gray-400 text-sm sm:text-base 
              pointer-events-none transition-all duration-300 ease-out transform
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-10 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Your Email
            </label>
          </div>

          {/* Phone Number Input */}
          <div className="relative">
            <FaPhoneAlt className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-base" />
            <input
              type="tel"
              placeholder=" "
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition text-sm sm:text-base peer bg-transparent"
            />
            <label
              className="absolute left-10 -top-2 bg-white px-1 text-gray-400 text-sm sm:text-base 
              pointer-events-none transition-all duration-300 ease-out transform
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-10 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Your Phone Number
            </label>
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Date Input */}
          <div className="relative">
            <RiCalendarScheduleLine className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-base" />
            <input
              type="date"
              placeholder=" "
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
        hover:border-blue-400 transition text-sm sm:text-base peer bg-transparent"
            />
            <label
              className="absolute left-10 -top-2 bg-white px-1 text-gray-400 text-sm sm:text-base 
        pointer-events-none transition-all duration-300 ease-out transform
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
        peer-focus:-top-2 peer-focus:left-10 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Preferred Date
            </label>
          </div>

          {/* Time Input */}
          <div className="relative">
            <RiTimeLine className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-base" />
            <input
              type="time"
              placeholder=" "
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
        hover:border-blue-400 transition text-sm sm:text-base peer bg-transparent"
            />
            <label
              className="absolute left-10 -top-2 bg-white px-1 text-gray-400 text-sm sm:text-base 
        pointer-events-none transition-all duration-300 ease-out transform
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
        peer-focus:-top-2 peer-focus:left-10 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Preferred Time
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <BiMessageDetail className="absolute top-4 left-4 text-gray-400 text-base" />
          <textarea
            placeholder=" "
            rows="4"
            className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              hover:border-blue-400 transition text-sm sm:text-base peer bg-transparent"
          ></textarea>
          <label
            className="absolute left-10 -top-2 bg-white px-1 text-gray-400 text-sm sm:text-base 
              pointer-events-none transition-all duration-300 ease-out transform
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-10 peer-focus:text-blue-600 peer-focus:text-xs"
          >
            Tell us about your project...
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 
            transition font-semibold text-sm sm:text-base shadow-md hover:shadow-lg"
        >
          Schedule My Call
        </button>
      </form>
    </div>
  );
};

export default ContactRight;
