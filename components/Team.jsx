import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const team = [
    {
      name: "Rohitashwa Pal Das",
      role: "Full Stack Developer",
      img: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop",
      bio: "Specializes in crafting responsive, user-friendly interfaces with modern designs.",
    },
    {
      name: "Indranil Paul",
      role: "Full Stack Developer",
      img: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop",
      bio: "Expert in building robust server-side architectures and APIs.",
    },
    {
      name: "Ananya Roy",
      role: "UI/UX Designer",
      img: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop",
      bio: "Bridges frontend and backend seamlessly to deliver complete solutions.",
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    // Timeline for heading + paragraph
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      })
      .from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        paraRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Cards animation
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-blue-50 to-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 ref={headingRef} className="text-4xl font-bold mb-4 text-blue-600">
          Meet Our Team
        </h2>
        {/* Paragraph */}
        <p ref={paraRef} className="text-gray-600 max-w-2xl mx-auto mb-12">
          The passionate people behind Triodev — turning ideas into beautiful,
          functional digital experiences.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 group"
            >
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-semibold text-blue-500">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>

              {/* Bio */}
              <p className="text-gray-600 mt-3 text-sm">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-5">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
