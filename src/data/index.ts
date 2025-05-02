export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I value client collaboration and transparent communication throughout development.",
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
    title: "Web developer passionate about building dynamic applications.",
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
    id: 1,
    title: "Cycle Sphere - A Bicycle Shop",
    des: "A full-featured, responsive bicycle e-commerce app with secure JWT-based authentication, dynamic product browsing, and role-based dashboards for admins and customers.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/redux.svg" ,"/mongo.svg","/next.svg"],
    link: "https://cycle-sphere.vercel.app/",
  },
  {
    id: 2,
    title: "MediSphere - A Trusted Medicine Shop",
    des: "A secure and user-friendly medicine e-commerce platform with role-based access, JWT authentication, and real-time stock validation — built using the MERN stack.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/redux.svg" ,"/mongo.svg","/next.svg"],
    link: "https://medi-sphere-five.vercel.app/shop",
  },
  {
    id: 3,
    title: "Palate Pioneer - A Restaurent Website",
    des: "A modern, responsive restaurant website featuring an interactive menu, reservation system, and visually rich UI — optimized for both desktop and mobile users.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/mongo.svg","/html.svg","/node.svg" ],
    link: "https://palate-pioneer-54ab1.firebaseapp.com/",
  },
  {
    id: 4,
    title: "Trifola - Ecommerce Website",
    des: "A sleek and scalable online brand store offering dynamic product listings, filterable categories, secure checkout, and admin management — powered by the MERN stack.",
    img: "/p4.svg",
    iconLists: ["/css.svg", "/tail.svg", "/mongo.svg","/html.svg","/node.svg"],
    link: "https://fashion-web-12c3a.web.app/",
  },
];


export const testimonials = [
  {
    quote:
      "I am proficient in core web technologies that form the foundation of any full-stack application.I use HTML5, CSS3, and Tailwind CSS to build responsive, clean, and accessible UIs.With JavaScript (ES6+), I develop interactive frontend components using React.js and manage global state efficiently with Redux Toolkit.For backend development, I use Node.js with Express.js to create RESTful APIs, handle server logic, and implement authentication systems.I also work with MongoDB as my main database solution, using it to structure and query flexible NoSQL data.",
    name: "Level 1 Skills",
    title: "Core Web Development",
  },
  {
    quote:
      "Beyond the core, I work with modern frameworks and developer tools to enhance performance and scalability.I use Next.js to build server-rendered and statically generated applications.With TypeScript, I write strongly-typed, reliable code that prevents runtime errors.I implement secure JWT authentication, use React Hook Form for smooth form handling, and animate interfaces with Framer Motion.I also manage API integrations, deploy apps using Vercel or Netlify, and collaborate effectively using Git & GitHub.",
    name: "Level 2 Skills",
    title: "Expanding Tools & Frameworks",
  },
  {
    quote:
      "Technical skills aside, I bring a strong set of soft skills that make me an effective team member and self-driven developer.I’m a proactive problem solver, quick to debug and optimize code.I value team collaboration, open communication, and continuous self-learning.I manage my time well, adapt quickly to new technologies, and take ownership of tasks from planning to deployment.These qualities help me thrive in fast-paced development environments and deliver high-quality work.",
    name: "Soft Skills",
    title: "Professional Attributes",
  },
 
  
];

export const companies = [
  {
    id: 1,
    name: "NextJs",
    img: "/next.svg",
    // nameImg: "/cloudName.svg",
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
    title: "Exploring the Intersection of Web Development and Artificial Intelligence",
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
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
