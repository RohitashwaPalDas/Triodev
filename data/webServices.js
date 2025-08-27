import {
  FaShoppingCart,
  FaCode,
  FaPencilRuler,
  FaSearch,
  FaWrench,
  FaMobileAlt,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";

const webServices = [
    {
      title: "Website Development",
      icon: <FaCode className="text-blue-500 text-4xl" />,
      desc: "Custom-built websites tailored to your needs — from simple static pages to complex dynamic platforms.",
    },
    {
      title: "UI UX Design",
      icon: <FaPencilRuler className="text-purple-500 text-4xl" />,
      desc: "Pixel-perfect, user-focused designs that are both beautiful and easy to navigate.",
    },
    {
      title: "SEO Optimization",
      icon: <FaSearch className="text-green-500 text-4xl" />,
      desc: "Boost your search rankings with keyword research, on-page SEO, and speed optimization.",
    },
    {
      title: "Website Maintenance",
      icon: <FaWrench className="text-orange-500 text-4xl" />,
      desc: "Keep your site secure, updated, and running smoothly with our regular maintenance plans.",
    },
    {
      title: "E-commerce Solutions",
      icon: <FaShoppingCart className="text-pink-500 text-4xl" />,
      desc: "Sell online with secure payment integration, product management, and customer tracking.",
    },
    {
      title: "Mobile Responsive Design",
      icon: <FaMobileAlt className="text-cyan-500 text-4xl" />,
      desc: "Ensure your website looks stunning and works perfectly on all devices.",
    },
    {
      title: "Security & Backup",
      icon: <FaShieldAlt className="text-red-500 text-4xl" />,
      desc: "Protect your website with robust security measures and regular backups.",
    },
    {
      title: "Hosting & Domain Setup",
      icon: <FaServer className="text-yellow-500 text-4xl" />,
      desc: "Get your site online with reliable hosting and domain configuration assistance.",
    },
  ];

  export default webServices;