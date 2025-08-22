import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaCheckCircle,
  FaDumbbell,
  FaUtensils,
  FaSchool,
  FaLaptopCode,
  FaStore,
  FaShoppingCart,
  FaBriefcase,
  FaHeartbeat,
  FaCalendarAlt,
  FaCameraRetro,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const WebDomains = () => {
  const services = [
    {
      title: "Gyms & Fitness Studios",
      icon: <FaDumbbell className="text-white text-2xl" />,
      bgColor: "bg-blue-500",
      desc: "Your fitness brand deserves a strong online presence. We design high-energy, user-friendly websites for gyms and fitness studios with class schedules, trainer portfolios, membership management, and integrated health tips to keep your clients motivated — even outside the gym.",
      img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    },
    {
      title: "Restaurants & Cafés",
      icon: <FaUtensils className="text-white text-2xl" />,
      bgColor: "bg-red-500",
      desc: "Let your food do the talking — and your website do the serving! We build mouth-watering websites with digital menus, online reservations, order systems, customer reviews, and social media integration to keep your food business buzzing.",
      img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    },
    {
      title: "Learning Centres & Schools",
      icon: <FaSchool className="text-white text-2xl" />,
      bgColor: "bg-green-500",
      desc: "Education thrives on accessibility. We create modern websites for schools, coaching institutes, and learning centres with course listings, event calendars, secure data management, and communication portals for seamless parent-student-teacher interaction.",
      img: "https://images.pexels.com/photos/8423051/pexels-photo-8423051.jpeg",
    },
    {
      title: "E-learning Platforms",
      icon: <FaLaptopCode className="text-white text-2xl" />,
      bgColor: "bg-purple-500",
      desc: "We design e-learning platforms with video hosting, interactive quizzes, dashboards, progress tracking, and payment gateways — giving learners an engaging and smooth online education experience.",
      img: "https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg",
    },
    {
      title: "Local Businesses",
      icon: <FaStore className="text-white text-2xl" />,
      bgColor: "bg-orange-500",
      desc: "From salons to repair shops, we create websites that showcase your services, customer reviews, promotions, and Google Maps integration to help you get discovered locally.",
      img: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
    },
    {
      title: "E-commerce Websites",
      icon: <FaShoppingCart className="text-white text-2xl" />,
      bgColor: "bg-pink-500",
      desc: "We build powerful online stores with product catalogs, shopping carts, secure payments, order tracking, and promotional features — giving your customers a smooth shopping experience.",
      img: "https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg",
    },
    {
      title: "Corporate & Business Websites",
      icon: <FaBriefcase className="text-white text-2xl" />,
      bgColor: "bg-gray-700",
      desc: "Professional corporate websites with company profiles, service showcases, client testimonials, and custom solutions to enhance your brand credibility.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      title: "Healthcare Websites",
      icon: <FaHeartbeat className="text-white text-2xl" />,
      bgColor: "bg-teal-500",
      desc: "Custom healthcare websites for clinics, hospitals, and practitioners with appointment booking, service details, doctor profiles, and patient resources.",
      img: "https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg",
    },
    {
      title: "Event & Wedding Websites",
      icon: <FaCalendarAlt className="text-white text-2xl" />,
      bgColor: "bg-yellow-500",
      desc: "Personalized websites for weddings, parties, and events with RSVP forms, schedules, photo galleries, and location maps — making your event unforgettable.",
      img: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
    },
    {
      title: "Portfolio & Photography Websites",
      icon: <FaCameraRetro className="text-white text-2xl" />,
      bgColor: "bg-indigo-500",
      desc: "Stunning portfolio websites for photographers, designers, and artists to showcase work, receive inquiries, and grow your personal brand.",
      img: "https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg",
    },
  ];

  const headingRef = useRef(null);
  const domainRef = useRef([]);

  useGSAP(() => {
  // Heading animation
  gsap.from(headingRef.current, {
    scale: 0.6,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 80%",
      toggleActions: "restart reverse restart reverse",
    },
  });

  // Animate each card-part individually
  domainRef.current.forEach((el, i) => {
    const parts = el.querySelectorAll(".card-part");

    parts.forEach((part, idx) => {
      gsap.fromTo(
        part,
        {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100, // odd → left, even → right
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: idx * 0.2, // image → icon → title → desc
          scrollTrigger: {
            trigger: part,
            start: "top 85%", // trigger when each part enters
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  });
}, []);



  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 ref={headingRef} className="text-3xl font-bold text-center mb-12 text-blue-600">
        Our Service Domains
      </h2>
      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (domainRef.current[index] = el)}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 card-part">
              <img
                src={service.img}
                alt={service.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="flex-1 text-center md:text-left ">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mb-4 shadow-lg card-part`} 
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 card-part text-blue-600">{service.title}</h3>
              <p className="text-gray-600 card-part">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDomains;
