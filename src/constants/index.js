import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  tailwind,
  flask,
  sql,
  git,
  moringa,
  reactIcon,
  pythonIcon,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "React and Tailwind Developer",
    icon: mobile,
  },
  {
    title: "Python Backend Engineer",
    icon: backend,
  },
  {
    title: "Frontend UI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactIcon,
  },
   {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Full-Stack Web Development Bootcamp",
    company_name: "Moringa School",
    icon: moringa,
    iconBg: "#ffffff",
    date: "2024",
    points: [
      "Completed intensive training in HTML, CSS, JavaScript, React, Python, Flask, and SQL.",
      "Built and deployed multiple full-stack web applications.",
      "Collaborated on team projects using Git and modern development workflows.",
      "Focused on writing clean, maintainable, and scalable code.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Personal Projects",
    icon: reactIcon,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Building modern and responsive web applications using React and Tailwind CSS.",
      "Implementing reusable components and clean UI architecture.",
      "Optimizing applications for performance and responsiveness.",
      "Maintaining and documenting projects consistently on GitHub.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Independent Development",
    icon: pythonIcon,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Developing RESTful APIs using Python.",
      "Working with databases and backend logic to power full-stack applications.",
      "Structuring scalable backend systems and clean API architecture.",
      "Integrating frontend React applications with backend services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };