export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "/contactme" },
  { name: "All Projects", link: "/AllProjects" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I value client collaboration and transparent communication throughout development.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible hours for smooth collaboration.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I Constantly Improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "I'm a Final-year Software Engineering student skilled in full-stack development MERN and machine learning",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently working on a modern animation library using JavaScript.",
    description: "Crafting smooth, reusable UI animations.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have a project idea? Let's build something amazing together.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: "1",
    screenshots: ["/p1.1.png", "/p1.2.png", "/p1.3.png"],

    title: "Cycle Sphere - A Bicycle Shop",
    des: "A full-featured, responsive bicycle e-commerce app with secure JWT-based authentication, dynamic product browsing, and role-based dashboards for admins and customers.",
    img: "/p1.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/redux.svg",
      "/mongo.svg",
      "/next.svg",
    ],
    link: "https://cycle-sphere.vercel.app/",
    overview:
      "Cycle Sphere is a responsive bicycle e-commerce platform offering dynamic product listings, cart functionality, and role-based dashboards for Admins and Customers.",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Redux",
      "MongoDB",
      "Next.js",
    ],
    features: [
      "JWT-based secure login/signup",
      "Role-based dashboard for Admin and Customer",
      "Add/Edit/Delete bicycle products",
      "Dynamic filtering and search",
      "Responsive UI with Tailwind CSS",
    ],
    challenges: [
      "Implementing role-based access control",
      "Managing JWT authentication and token expiration",
      "Handling nested dashboard routing",
    ],
    futurePlans: [
      "Add Stripe payment integration",
      "Enable product reviews and ratings",
      "Implement email verification and notifications",
    ],
  },
  {
    id: "2",
    screenshots: ["/p2.1.png", "/p2.2.png", "/p2.3.png"],

    title: "MediSphere - A Trusted Medicine Shop",
    des: "A secure and user-friendly medicine e-commerce platform with role-based access, JWT authentication, and real-time stock validation — built using the MERN stack.",
    img: "/p2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/redux.svg",
      "/mongo.svg",
      "/next.svg",
    ],
    link: "https://medi-sphere-five.vercel.app/shop",
    overview:
      "MediSphere simplifies the medicine-buying experience with real-time stock validation, secure login, and user/admin dashboard features tailored for healthcare products.",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Redux",
      "MongoDB",
      "Next.js",
    ],
    features: [
      "JWT-based secure authentication",
      "Admin panel to manage inventory and orders",
      "Real-time stock validation before checkout",
      "Responsive design with dynamic product cards",
    ],
    challenges: [
      "Stock consistency with backend logic",
      "Dynamic route handling for individual products",
      "Dashboard-level routing for Admin vs Customer",
    ],
    futurePlans: [
      "Add prescription upload system",
      "Integrate a chatbot for medicine inquiries",
      "Implement delivery tracking feature",
    ],
  },
  {
    id: "3",
    screenshots: ["/p3.svg", "/p3.2.png", "/p3.3.png"],

    title: "Palate Pioneer - A Restaurant Website",
    des: "A modern, responsive restaurant website featuring an interactive menu, reservation system, and visually rich UI — optimized for both desktop and mobile users.",
    img: "/p3.1.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongo.svg", "/html.svg", "/node.svg"],
    link: "https://palate-pioneer-54ab1.firebaseapp.com/",
    overview:
      "Palate Pioneer provides an immersive dining experience with interactive menus, booking forms, and customer reviews built with a clean modern layout.",
    technologies: ["React", "Tailwind CSS", "MongoDB", "HTML", "Node.js"],
    features: [
      "Interactive food menu with filters",
      "Table reservation form with validation",
      "Fully responsive layout for all devices",
      "Firebase hosting and deployment",
    ],
    challenges: [
      "Designing a visually appealing layout",
      "Managing dynamic restaurant data",
      "Responsive styling for small screens",
    ],
    futurePlans: [
      "Enable online food ordering",
      "Add review and rating system",
      "Admin dashboard for menu and booking control",
    ],
  },
  {
    id: "4",
    screenshots: ["/p4.1.png", "/p4.2.png", "/p4.3.png"],

    title: "Trifola - Ecommerce Website",
    des: "A sleek and scalable online brand store offering dynamic product listings, filterable categories, secure checkout, and admin management — powered by the MERN stack.",
    img: "/p4.svg",
    iconLists: [
      "/css.svg",
      "/tail.svg",
      "/mongo.svg",
      "/html.svg",
      "/node.svg",
    ],
    link: "https://fashion-web-12c3a.web.app/",
    overview:
      "Trifola is an online fashion marketplace offering category filtering, admin product control, and a secure shopping experience using a robust backend.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "MongoDB", "Node.js"],
    features: [
      "Dynamic product categories and filters",
      "Secure checkout with cart management",
      "Admin panel for product control",
      "SEO-friendly product pages",
    ],
    challenges: [
      "Managing responsive layouts for multiple categories",
      "Creating reusable components for product cards",
      "Integrating admin control without auth library",
    ],
    futurePlans: [
      "Implement payment gateway",
      "Integrate social login",
      "Add newsletter and marketing tools",
    ],
  },
];

export const skills = [
  {
    level: "Level 1",
    title: "Core Web Development",
    items: [
      "HTML5, CSS3, Tailwind CSS",
      "JavaScript (ES6+), React.js",
      "Redux Toolkit",
      "Node.js & Express",
      "MongoDB",
    ].join(" • "),
  },
  {
    level: "Level 2",
    title: "Tools & Frameworks",
    items: [
      "Next.js & TypeScript",
      "JWT Authentication",
      "React Hook Form",
      "Framer Motion",
      "Git, GitHub, Vercel, Netlify",
    ].join(" • "),
  },
  {
    level: "Soft Skills",
    title: "Professional Attributes",
    items: [
      "Debugging & Optimization",
      "Team Collaboration",
      "Fast Learner",
      "Communication Skills",
      "Time Management",
    ].join(" • "),
  },
];

export const companies = [
  {
    id: 1,
    name: "NextJs",
    img: "/next.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Tailwind",
    img: "/tail.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "NodeJS",
    img: "/node.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "MongoDB",
    img: "/mongo.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "React.",
    img: "/re.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    desc: "Web development is constantly evolving, and keeping up with the latest trends is essential for any developer. In this blog post, we dive into the top web development trends expected to dominate the industry in 2025. From the rise of serverless architecture to advancements in AI-driven web development, learn how these trends will shape the way developers build modern applications.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title:
      "Exploring the Intersection of Web Development and Artificial Intelligence",
    desc: "The integration of AI with web development is one of the most exciting and transformative trends in the tech world. This post explores how artificial intelligence is enhancing the development process, from automated code generation to more intelligent user experiences. Discover the role of AI chatbots, recommendation systems, and personalized content delivery in shaping the future of web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: " Building Scalable Applications with Modern Web Technologies",
    desc: "As businesses grow, the need for scalable web applications becomes more apparent. In this blog, we’ll cover the importance of building scalable apps and the modern technologies that help achieve this. Learn about using Node.js, React, Next.js, and cloud services to create applications that can scale effortlessly and meet the demands of millions of users., Express, and React for client projects.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "How Today’s Tech World is Shaping the Future of Work",
    desc: "Technology is revolutionizing the way we work, and its impact is felt across every industry. From remote work tools to AI-powered productivity apps, today’s tech world is reshaping our daily work lives. This blog explores how emerging technologies are not only changing how we perform tasks but also how we collaborate, communicate, and learn in professional settings.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/afrinchowa",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.facebook.com/arfin.ayra.1/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/moriomafrinchowa1/",
  },
];
