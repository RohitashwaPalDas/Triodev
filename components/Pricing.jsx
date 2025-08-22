import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const DetailedPricingSection = ({selectedService}) => {
  const pricingData = [
    {
      category: "Website Development",
      plans: [
        {
          name: "Basic",
          price: 9000,
          billing: "One-time",
          delivery: "7 Days",
          features: ["3-5 Pages", "Responsive Design", "Contact Form", "Basic SEO"],
        },
        {
          name: "Standard",
          price: 15000,
          billing: "One-time",
          delivery: "14 Days",
          features: [
            "6-10 Pages",
            "Custom UI Design",
            "Gallery/Portfolio",
            "SEO Optimization",
            "1 Month Free Support",
          ],
        },
        {
          name: "Premium",
          price: 24000,
          billing: "One-time",
          delivery: "21 Days",
          features: [
            "Unlimited Pages",
            "Premium UI/UX",
            "Advanced Features (Booking, Payments)",
            "Full SEO Setup",
            "3 Months Free Support",
          ],
        },
      ],
    },
    {
      category: "UI/UX Design",
      plans: [
        {
          name: "Basic",
          price: 6000,
          billing: "One-time",
          delivery: "5 Days",
          features: ["Wireframes", "Color Palette", "Typography Setup"],
        },
        {
          name: "Standard",
          price: 12000,
          billing: "One-time",
          delivery: "10 Days",
          features: [
            "Wireframes & Prototypes",
            "Custom Icons",
            "Responsive Layout Design",
            "Basic Animation Concepts",
          ],
        },
        {
          name: "Premium",
          price: 20000,
          billing: "One-time",
          delivery: "15 Days",
          features: [
            "Complete Design System",
            "High-fidelity Prototypes",
            "Micro-interactions",
            "Full UI Kit Export",
          ],
        },
      ],
    },
    {
      category: "SEO Optimization",
      plans: [
        {
          name: "Basic",
          price: 5000,
          billing: "Monthly",
          delivery: "5 Days",
          features: ["Keyword Research", "Meta Tags Setup", "XML Sitemap"],
        },
        {
          name: "Standard",
          price: 10000,
          billing: "Monthly",
          delivery: "10 Days",
          features: [
            "On-page SEO",
            "Speed Optimization",
            "Basic Backlinks",
            "Analytics Setup",
          ],
        },
        {
          name: "Premium",
          price: 16000,
          billing: "Monthly",
          delivery: "15 Days",
          features: [
            "Full SEO Audit",
            "Competitor Analysis",
            "Advanced Backlinking",
            "Monthly SEO Reports (3 months)",
          ],
        },
      ],
    },
    {
      category: "Website Maintenance",
      plans: [
        {
          name: "Basic",
          price: 4000,
          billing: "Monthly",
          delivery: "Ongoing",
          features: ["Bug Fixes", "Security Patches", "Content Updates (2/month)"],
        },
        {
          name: "Standard",
          price: 8000,
          billing: "Monthly",
          delivery: "Ongoing",
          features: [
            "Everything in Basic",
            "Speed Monitoring",
            "Monthly Backup",
            "4 Content Updates/month",
          ],
        },
        {
          name: "Premium",
          price: 14000,
          billing: "Monthly",
          delivery: "Ongoing",
          features: [
            "Everything in Standard",
            "Performance Optimization",
            "Weekly Backup",
            "Unlimited Content Updates",
          ],
        },
      ],
    },
    {
      category: "E-commerce Solutions",
      plans: [
        {
          name: "Basic",
          price: 15000,
          billing: "One-time",
          delivery: "10 Days",
          features: [
            "Up to 20 Products",
            "Basic Payment Integration",
            "Responsive Layout",
          ],
        },
        {
          name: "Standard",
          price: 25000,
          billing: "One-time",
          delivery: "15 Days",
          features: [
            "Up to 100 Products",
            "Advanced Payment Integration",
            "Discount & Coupon System",
            "SEO for Products",
          ],
        },
        {
          name: "Premium",
          price: 40000,
          billing: "One-time",
          delivery: "25 Days",
          features: [
            "Unlimited Products",
            "Custom Features (Subscriptions, Bookings)",
            "Advanced Analytics",
            "Full SEO & Marketing Tools",
          ],
        },
      ],
    },
    {
      category: "Mobile Responsive Design",
      plans: [
        {
          name: "Basic",
          price: 3000,
          billing: "One-time",
          delivery: "3 Days",
          features: ["Mobile Layout Setup", "Basic Touch Optimization"],
        },
        {
          name: "Standard",
          price: 7000,
          billing: "One-time",
          delivery: "7 Days",
          features: [
            "Full Mobile & Tablet Optimization",
            "Speed Optimization",
            "Touch-friendly Navigation",
          ],
        },
        {
          name: "Premium",
          price: 12000,
          billing: "One-time",
          delivery: "10 Days",
          features: [
            "Complete Mobile-first Design",
            "Custom Mobile UI Components",
            "Performance Optimization",
          ],
        },
      ],
    },
    {
      category: "Security & Backup",
      plans: [
        {
          name: "Basic",
          price: 4000,
          billing: "Monthly",
          delivery: "2 Days",
          features: ["Basic Firewall Setup", "Weekly Backup"],
        },
        {
          name: "Standard",
          price: 8000,
          billing: "Monthly",
          delivery: "4 Days",
          features: [
            "Advanced Firewall & Malware Protection",
            "Daily Backup",
            "Security Monitoring",
          ],
        },
        {
          name: "Premium",
          price: 15000,
          billing: "Monthly",
          delivery: "7 Days",
          features: [
            "Enterprise-grade Security",
            "Real-time Threat Detection",
            "Hourly Backup",
            "Disaster Recovery Plan",
          ],
        },
      ],
    },
    {
      category: "Hosting & Domain Setup",
      plans: [
        {
          name: "Basic",
          price: 2000,
          billing: "Yearly",
          delivery: "1 Day",
          features: ["Domain Purchase Assistance", "Basic Hosting Setup"],
        },
        {
          name: "Standard",
          price: 5000,
          billing: "Yearly",
          delivery: "2 Days",
          features: [
            "Domain + Hosting Setup",
            "SSL Certificate",
            "Basic Email Setup",
          ],
        },
        {
          name: "Premium",
          price: 10000,
          billing: "Yearly",
          delivery: "3 Days",
          features: [
            "Domain + Premium Hosting",
            "Advanced Email Setup",
            "Performance Configuration",
            "Security Hardening",
          ],
        },
      ],
    },
  ];

  const headingRef = useRef(null);
  const cardRef = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      scale:0.6,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Cards animation with batching for one-by-one appearance
    const cards = cardRef.current.filter(Boolean); // ensure all elements exist
    gsap.set(cards, { x: 100, opacity: 0 }); // initial state

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      end: "bottom 20%",
      interval: 0.1, // group quickly appearing cards
      batchMax: 4, // max cards per batch
      onEnter: (batch) =>
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          
        }),
      onLeave: (batch) => gsap.set(batch, { x: 100, opacity: 0 }),
      onLeaveBack: (batch) => gsap.set(batch, { x: 100, opacity: 0 }),
    });
  }, []);

  const selectedCategory = pricingData.find(
    (service) => service.category === selectedService
  );

  if (!selectedCategory) return null;

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 ref={headingRef} className="text-4xl font-bold text-center mb-4 text-blue-600">
          Pricing for {selectedCategory.category}
        </h2>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {selectedCategory.plans.map((plan, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRef.current[idx] = el)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border-t-4 border-blue-500"
            >
              <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
              <p className="text-3xl font-bold text-blue-600">₹{plan.price}</p>
              <p className="text-sm text-gray-500 mb-4">{plan.billing}</p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
              <p className="font-medium">Delivery: {plan.delivery}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedPricingSection;
