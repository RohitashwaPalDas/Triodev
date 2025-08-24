const pricingData = [
    {
        category: "Website Development",
        plans: [
            {
                name: "Basic",
                price: 9000,
                billing: "One-time",
                delivery: "7 Days",
                features: [
                    "3-5 Pages",
                    "Responsive Design",
                    "Contact Form",
                    "Basic SEO"
                ],
                advantages: [
                    "Quick delivery for businesses needing an online presence fast.",
                    "Budget-friendly option without compromising professionalism.",
                    "Great for small businesses, freelancers, or startups.",
                    "Simple yet elegant design with core features to get started."
                ],
                extraDetails: [
                    "Responsive design ensures smooth display across desktops, tablets, and mobile devices.",
                    "Basic SEO setup allows your website to appear on search engines.",
                    "Includes a functional contact form so visitors can connect directly.",
                    "Optimized for speed and user-friendly navigation."
                ]
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
                    "1 Month Free Support"
                ],
                advantages: [
                    "Perfect balance between affordability and advanced features.",
                    "Custom design tailored to your brand identity and niche.",
                    "Showcase your work/products with an integrated gallery or portfolio.",
                    "Post-launch support ensures smooth website operation.",
                    "Enhanced SEO for better visibility and search engine ranking."
                ],
                extraDetails: [
                    "Custom UI design provides a unique and professional brand look.",
                    "Includes a gallery/portfolio to showcase services, products, or past projects beautifully.",
                    "SEO optimization with keyword focus and on-page improvements.",
                    "One month free support for technical assistance and adjustments.",
                    "Ideal for professionals, agencies, or growing businesses looking to scale."
                ]
            },
            {
                name: "Premium",
                price: 24000,
                billing: "One-time",
                delivery: "21 Days",
                features: [
                    "Unlimited Pages",
                    "Premium UI/UX",
                    "Advanced Features (Booking, Payments, Dashboards)",
                    "Full SEO Setup",
                    "3 Months Free Support"
                ],
                advantages: [
                    "Best choice for enterprises or e-commerce businesses.",
                    "Scalable solution with unlimited pages for long-term growth.",
                    "Premium UI/UX delivers a smooth and conversion-focused experience.",
                    "Advanced integrations like booking systems and payment gateways.",
                    "Dedicated post-launch support for three months ensures peace of mind."
                ],
                extraDetails: [
                    "Unlimited scalability—add pages as your business expands.",
                    "Premium UI/UX design optimized for engagement and conversions.",
                    "Full SEO setup including meta-tags, keyword research, speed optimization, and on-page SEO.",
                    "Integration of advanced features like booking systems, user accounts, or payment processing.",
                    "Three months of free technical and maintenance support.",
                    "Perfect for established businesses looking for strong online authority."
                ]
            }
        ]
    },

    {
        category: "UI UX Design",
        plans: [
            {
                name: "Basic",
                price: 6000,
                billing: "One-time",
                delivery: "5 Days",
                features: [
                    "Wireframes",
                    "Color Palette",
                    "Typography Setup"
                ],
                advantages: [
                    "Affordable entry point for startups and small projects.",
                    "Quick turnaround for clients who need a fast design setup.",
                    "Covers the foundation of brand identity with colors and fonts.",
                    "Great for MVPs, landing pages, or simple apps."
                ],
                extraDetails: [
                    "Wireframes map out the structure of each screen, ensuring clarity in flow.",
                    "Professional color palette tailored to your brand’s personality.",
                    "Typography setup defines fonts for headings, body text, and accents for consistency.",
                    "A strong foundation to expand into full UI/UX design later."
                ]
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
                    "Basic Animation Concepts"
                ],
                advantages: [
                    "Balanced plan suitable for growing businesses and apps.",
                    "Interactive prototypes to test flows before development.",
                    "Custom icons give your brand a unique and polished look.",
                    "Responsive layouts ensure designs adapt seamlessly to all devices.",
                    "Animations add a touch of interactivity to enhance user engagement."
                ],
                extraDetails: [
                    "Clickable prototypes allow stakeholders to visualize and interact with the design.",
                    "Custom-designed icons tailored for your brand aesthetics.",
                    "Responsive layouts crafted for desktop, tablet, and mobile devices.",
                    "Basic motion design concepts integrated to highlight user actions and flows.",
                    "Perfect for businesses ready to move from idea to market-ready product."
                ]
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
                    "Full UI Kit Export"
                ],
                advantages: [
                    "Best suited for enterprises or high-budget projects needing full-scale design.",
                    "Comprehensive design system ensures brand consistency across platforms.",
                    "High-fidelity prototypes replicate the final product for precise visualization.",
                    "Micro-interactions enhance usability and delight users.",
                    "Exported UI kit allows seamless developer handoff for faster implementation."
                ],
                extraDetails: [
                    "Complete design system covering typography, colors, grids, spacing, and components.",
                    "High-fidelity prototypes with pixel-perfect detailing for realistic previews.",
                    "Micro-interactions like hover effects, button feedback, and animations improve usability.",
                    "Full export of UI assets (icons, components, kits) in developer-friendly formats.",
                    "A long-term, scalable design solution for apps, websites, or enterprise platforms."
                ]
            }
        ]
    },

    {
        category: "SEO Optimization",
        plans: [
            {
                name: "Basic",
                price: 5000,
                billing: "Monthly",
                delivery: "5 Days",
                features: [
                    "Keyword Research",
                    "Meta Tags Setup",
                    "XML Sitemap"
                ],
                advantages: [
                    "Great for small websites or startups beginning their SEO journey.",
                    "Affordable monthly plan to build a foundation for organic growth.",
                    "Essential setup for indexing and search engine visibility.",
                    "Quick turnaround to get your website optimized in less than a week."
                ],
                extraDetails: [
                    "In-depth keyword research targeting your niche to identify ranking opportunities.",
                    "Meta title and description optimization to improve click-through rates.",
                    "XML sitemap creation ensures your site is properly indexed by search engines.",
                    "Basic SEO setup that prepares your website for future scaling."
                ]
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
                    "Analytics Setup"
                ],
                advantages: [
                    "Ideal for growing businesses looking to improve visibility and user experience.",
                    "Balances technical optimization with authority building.",
                    "Backlinks start building credibility and trust for your website.",
                    "Analytics setup provides insights into website traffic and performance."
                ],
                extraDetails: [
                    "On-page SEO covers headings, alt tags, internal linking, and keyword placement.",
                    "Website speed optimization for faster load times, improving rankings and user satisfaction.",
                    "Basic backlink strategy to improve authority and search engine trust.",
                    "Google Analytics and Search Console setup for data-driven insights.",
                    "Best choice for businesses wanting noticeable improvements in rankings."
                ]
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
                    "Monthly SEO Reports (3 months)"
                ],
                advantages: [
                    "Perfect for established businesses aiming to dominate search results.",
                    "Comprehensive SEO audit ensures no ranking opportunities are missed.",
                    "Competitor analysis helps you stay ahead in your industry.",
                    "Advanced backlinking boosts domain authority significantly.",
                    "Detailed monthly reports track performance and growth."
                ],
                extraDetails: [
                    "Full SEO audit covering technical SEO, on-page, off-page, and content gaps.",
                    "Competitor analysis with insights on keywords, backlinks, and strategies.",
                    "Advanced backlink building from high-authority domains for strong SEO growth.",
                    "Monthly SEO reports for three months, tracking rankings, traffic, and conversions.",
                    "Designed for long-term growth and dominating competitive markets."
                ]
            }
        ]
    },

    {
        category: "Website Maintenance",
        plans: [
            {
                name: "Basic",
                price: 4000,
                billing: "Monthly",
                delivery: "Ongoing",
                features: [
                    "Bug Fixes",
                    "Security Patches",
                    "Content Updates (2/month)"
                ],
                advantages: [
                    "Affordable solution for small businesses to keep websites healthy.",
                    "Ensures website security with regular patches.",
                    "Keeps your content fresh with monthly updates.",
                    "Quick bug fixes reduce downtime and improve user experience."
                ],
                extraDetails: [
                    "Covers small technical fixes and adjustments for smooth functionality.",
                    "Applies security patches to protect your website from vulnerabilities.",
                    "Includes two content updates per month (text, images, or minor edits).",
                    "Ideal for personal websites, blogs, or small business sites with light content needs."
                ]
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
                    "4 Content Updates/month"
                ],
                advantages: [
                    "Balanced plan suitable for businesses with moderate website activity.",
                    "Regular monitoring ensures faster load times and better performance.",
                    "Backups safeguard your site from accidental data loss.",
                    "More content updates keep your site active and engaging."
                ],
                extraDetails: [
                    "Includes all features from the Basic plan plus advanced monitoring tools.",
                    "Website speed checks and performance tweaks to maintain a smooth experience.",
                    "Monthly full-site backup to restore data if needed.",
                    "Up to 4 content updates per month to keep your website dynamic and SEO-friendly.",
                    "Perfect for small to mid-sized businesses updating content regularly."
                ]
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
                    "Unlimited Content Updates"
                ],
                advantages: [
                    "Best choice for high-traffic websites and e-commerce platforms.",
                    "Performance optimization keeps your site running at peak speed.",
                    "Weekly backups minimize risk of data loss.",
                    "Unlimited updates keep your content fresh, relevant, and SEO-optimized.",
                    "Peace of mind with proactive maintenance and priority support."
                ],
                extraDetails: [
                    "Includes everything from the Standard plan with advanced enhancements.",
                    "Comprehensive performance optimization for faster load times and reduced bounce rates.",
                    "Weekly automated backups for maximum data safety.",
                    "Unlimited content updates ensure your website never goes stale.",
                    "Perfect for e-commerce stores, large businesses, and organizations relying heavily on online presence."
                ]
            }
        ]
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
                    "Responsive Layout"
                ],
                advantages: [
                    "Affordable entry plan for small shops or startups selling limited products.",
                    "Quick setup to start selling online in just 10 days.",
                    "Seamless basic payment gateway integration for smooth transactions.",
                    "Mobile-friendly layout ensures customers can shop on any device."
                ],
                extraDetails: [
                    "Supports up to 20 products with simple product categorization.",
                    "Integration of basic payment methods like PayPal, Stripe, or direct bank transfer.",
                    "Responsive design adapts to mobiles, tablets, and desktops.",
                    "Ideal for small businesses, artisans, or local stores wanting an online presence."
                ]
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
                    "SEO for Products"
                ],
                advantages: [
                    "Perfect for growing businesses with larger product catalogs.",
                    "Advanced payment systems allow multiple methods including credit cards and wallets.",
                    "Discount and coupon system attracts and retains more customers.",
                    "SEO optimization ensures your products rank better on search engines."
                ],
                extraDetails: [
                    "Supports up to 100 products with detailed categories and filtering options.",
                    "Advanced payment gateways with support for multiple currencies and methods.",
                    "Discount codes, seasonal offers, and coupons to boost sales conversions.",
                    "Product-level SEO optimization for better search visibility and organic traffic.",
                    "A balanced plan for small to mid-sized e-commerce businesses aiming to scale."
                ]
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
                    "Full SEO & Marketing Tools"
                ],
                advantages: [
                    "Best suited for established businesses and large-scale e-commerce stores.",
                    "Unlimited product support ensures no restrictions on catalog growth.",
                    "Custom features like subscriptions, memberships, or bookings enhance functionality.",
                    "Advanced analytics give deep insights into sales, users, and performance.",
                    "Comprehensive SEO and marketing tools maximize reach and conversions."
                ],
                extraDetails: [
                    "Unlimited scalability for products with advanced categorization and filtering.",
                    "Integration of advanced features such as recurring subscriptions, booking systems, or membership access.",
                    "Analytics dashboards with customer insights, sales trends, and conversion tracking.",
                    "Full SEO setup for products, categories, and store visibility.",
                    "Built-in marketing tools such as email campaigns, upselling, and cross-selling.",
                    "Ideal for enterprises and brands looking to dominate their e-commerce niche."
                ]
            }
        ]
    },

    {
        category: "Mobile Responsive Design",
        plans: [
            {
                name: "Basic",
                price: 3000,
                billing: "One-time",
                delivery: "3 Days",
                features: [
                    "Mobile Layout Setup",
                    "Basic Touch Optimization"
                ],
                advantages: [
                    "Affordable plan for quickly making a website mobile-friendly.",
                    "Essential adjustments for smooth browsing on smartphones.",
                    "Ensures basic touch interactions work correctly on mobile devices.",
                    "Fast 3-day delivery gets your site responsive quickly."
                ],
                extraDetails: [
                    "Sets up mobile layouts so your site looks clean and functional on smaller screens.",
                    "Basic touch optimization ensures buttons, forms, and menus are usable by finger tap.",
                    "Helps reduce bounce rate by making your site more accessible on mobile.",
                    "Perfect for blogs, landing pages, or small websites with simple layouts."
                ]
            },
            {
                name: "Standard",
                price: 7000,
                billing: "One-time",
                delivery: "7 Days",
                features: [
                    "Full Mobile & Tablet Optimization",
                    "Speed Optimization",
                    "Touch-friendly Navigation"
                ],
                advantages: [
                    "Best for growing websites with moderate traffic from mobile users.",
                    "Optimized for both mobile and tablet screens with smooth layouts.",
                    "Navigation designed for finger taps and gestures improves usability.",
                    "Speed improvements reduce load times for better SEO and user experience."
                ],
                extraDetails: [
                    "Responsive design tailored for all screen sizes including tablets.",
                    "Performance tweaks like image compression and script optimization for faster loading.",
                    "Touch-friendly menus, sliders, and buttons for easier interaction.",
                    "Balanced plan for businesses wanting a professional mobile experience."
                ]
            },
            {
                name: "Premium",
                price: 12000,
                billing: "One-time",
                delivery: "10 Days",
                features: [
                    "Complete Mobile-first Design",
                    "Custom Mobile UI Components",
                    "Performance Optimization"
                ],
                advantages: [
                    "Best suited for businesses where majority traffic comes from mobile devices.",
                    "Mobile-first design ensures a seamless experience across all devices.",
                    "Custom UI components make your app-like website stand out.",
                    "Advanced performance optimization delivers lightning-fast browsing."
                ],
                extraDetails: [
                    "Designs are built with a mobile-first approach, scaling beautifully up to desktops.",
                    "Includes custom mobile components like sliders, cards, and pop-ups designed for touch use.",
                    "Optimized scripts, caching, and image handling for maximum performance.",
                    "Perfect for e-commerce, startups, or brands wanting a premium mobile user experience."
                ]
            }
        ]
    },

    {
        category: "Security & Backup",
        description: "Protect your website with robust security and reliable backup solutions, ensuring peace of mind and uninterrupted performance.",
        plans: [
            {
                name: "Basic",
                price: 4000,
                billing: "Monthly",
                delivery: "2 Days",
                features: [
                    "Basic Firewall Setup",
                    "Weekly Backup",
                    "Standard Security Patches"
                ],
                advantages: [
                    "Affordable entry-level protection",
                    "Quick setup for small websites",
                    "Minimizes risk of common cyber threats"
                ],
            },
            {
                name: "Standard",
                price: 8000,
                billing: "Monthly",
                delivery: "4 Days",
                features: [
                    "Advanced Firewall & Malware Protection",
                    "Daily Automated Backup",
                    "Security Monitoring Dashboard",
                    "SSL Certificate Integration"
                ],
                advantages: [
                    "Enhanced protection against modern threats",
                    "Daily data safety with reliable backup",
                    "Real-time monitoring for proactive defense",
                    "Ideal for growing businesses"
                ],
            },
            {
                name: "Premium",
                price: 15000,
                billing: "Monthly",
                delivery: "7 Days",
                features: [
                    "Enterprise-grade Multi-layer Security",
                    "Real-time Threat Detection & Response",
                    "Hourly Cloud Backup",
                    "Disaster Recovery Plan",
                    "24/7 Priority Support"
                ],
                advantages: [
                    "Maximum security for high-traffic websites",
                    "Zero data loss with frequent backups",
                    "Instant threat alerts & resolution",
                    "Business continuity with recovery planning",
                    "Peace of mind with round-the-clock support"
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
                features: [
                    "Domain Purchase Assistance",
                    "Basic Hosting Setup"
                ],
                advantages: [
                    "Quick and budget-friendly setup",
                    "Perfect for beginners and small websites",
                    "Hassle-free domain guidance"
                ]
            },
            {
                name: "Standard",
                price: 5000,
                billing: "Yearly",
                delivery: "2 Days",
                features: [
                    "Domain + Hosting Setup",
                    "SSL Certificate",
                    "Basic Email Setup"
                ],
                advantages: [
                    "Professional setup with secure SSL",
                    "Custom email to build trust & branding",
                    "Balanced solution for startups & businesses"
                ]
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
                    "Security Hardening"
                ],
                advantages: [
                    "High-performance hosting with top-tier security",
                    "Advanced email solutions for teams",
                    "Optimized speed, uptime, and reliability",
                    "Best choice for growing businesses & e-commerce"
                ]
            }
        ]
    }

];

export default pricingData;