Chowas Portfolio
Welcome to Chowas Portfolio, a sleek and interactive personal portfolio built with Next.js, React Three Fiber, and TailwindCSS. This portfolio showcases projects, skills, and achievements in a visually stunning way using 3D animations, SVGs, and engaging design elements. Designed for anyone looking to make a strong impression, this portfolio is fully responsive, interactive, and optimized for a smooth user experience.

Table of Contents
Overview

Technologies

Features

Installation Instructions

Available Scripts

Project Structure

Contributing

License

Overview
Chowas Portfolio is a personal website designed to showcase projects, skills, and accomplishments. Built using Next.js and React Three Fiber, it features a dynamic 3D globe, animations, and smooth transitions. The design is responsive and offers a modern, polished interface for users across all devices. The project also includes a mock blog API powered by JSON Server for fetching blog data.

Technologies
This project uses a variety of modern tools and libraries to create a smooth, responsive, and interactive experience:

Next.js: A powerful React framework for server-side rendering and static site generation.

React Three Fiber: A React renderer for Three.js, enabling 3D scenes in the browser.

TailwindCSS: A utility-first CSS framework for rapid UI development.

Lottie React: For adding high-quality, lightweight animations to the site.

JSON Server: Provides a mock REST API to serve the blog data.

React Icons: A library of popular icons for UI components.

Next-Themes: A library for easily managing light/dark themes.

Three-Globe: A React component to create interactive 3D globe visuals.

Motion: A React animation library for adding fluid transitions and animations.

Mini-SVG Data URI: For optimizing SVG images.

Features
Interactive 3D Globe: View a rotating globe with data-driven visualizations powered by React Three Fiber and Three-Globe.

Animations: Smooth transitions and animations across the portfolio using Lottie React and Motion.

Light/Dark Mode: Toggle between light and dark themes seamlessly with Next-Themes.

Responsive Design: Fully responsive portfolio optimized for both mobile and desktop screens.

Mock Blog API: Fetches blog data from a local JSON Server for dynamic content presentation.

Customizable Animations: Integrate custom Lottie animations for a personalized touch.

Optimized SVGs: Efficient SVG usage with Mini-SVG Data URI for faster loading.

TailwindCSS: Rapidly build modern and clean UI with utility-first CSS classes.

Icons: Use modern icons across the UI with React Icons.

Installation Instructions
Follow these steps to get your local development environment set up for Chowas Portfolio:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/chowas-portfolio.git
cd chowas-portfolio
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the mock API server (optional, for blog data)
To start the JSON server that provides the blog data:

bash
Copy
Edit
npm run json-server
By default, the API will run on http://localhost:5000.

4. Start the development server
To launch the portfolio in development mode:

bash
Copy
Edit
npm run dev
Your portfolio will be available at http://localhost:3000.

Available Scripts
Here are the available commands you can run within the project directory:

npm run dev: Starts the Next.js development server.

npm run build: Builds the application for production.

npm run start: Starts the application in production mode.

npm run json-server: Starts the mock JSON server to serve blog data locally.

npm run lint: Runs ESLint to ensure the code is clean and consistent.

Project Structure
Here’s an overview of the structure of the project:

ruby
Copy
Edit
├── public/                     # Static files (images, fonts, etc.)
├── src/
│   ├── components/             # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/                  # Pages (Home, About, Contact, etc.)
│   ├── styles/                 # TailwindCSS and custom CSS files
│   ├── utils/                  # Utility functions (for animations, etc.)
│   ├── hooks/                  # Custom React hooks
│   ├── _document.tsx           # Custom document setup for Next.js
│   └── App.tsx                 # Main App component
├── blogsData.json              # Sample blog data used by JSON Server
├── .env.local                  # Environment variables
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # TailwindCSS configuration
└── package.json                # Project metadata and dependency management
Contributing
We welcome contributions to Chowas Portfolio! To contribute:

Fork the repository.

Create a new branch: git checkout -b feature-branch.

Make your changes and commit them: git commit -m 'Add new feature'.

Push to your fork: git push origin feature-branch.

Open a pull request to the main repository.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For inquiries or feedback, feel free to reach out via email.
arfinchowa524@gmail.com
## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.
