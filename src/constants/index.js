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
  expensify,
  eatWise,
  joash,
  alice,
  lawrence,
  liam,
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
      "Working with Waseth on our gym website was a great experience. He took time to understand the vision and turned it into something clean, modern, and easy for our members to use. You can tell he genuinely cares about getting things right.",
    name: "Dr Joash Aloo",
    designation: "Managing Director",
    company: "JAREJA Limited Company",
    image: joash,
  },
  {
    testimonial:
      "I shared my idea for an online cake business, and Waseth brought it to life beautifully and professionally. The site feels warm, welcoming, and simple to navigate for customers of all ages. He really knows how to turn ideas into something real and meaningful.",
    name: "Alice Odhiambo",
    designation: "Founder, CEO and Managing director",
    company: "Wozeliz Link",
    image: alice,
  },
  {
    testimonial:
      "We’ve collaborated on several project ideas, and what stands out about Waseth is his creativity and willingness to explore new approaches. He’s not afraid to experiment, but he also thinks about structure and long-term scalability.",
    name: "Lawrence Wambua",
    designation: "Business Collaborator",
    company: "W & W Limited",
    image: lawrence,
  },
  {
    testimonial:
      "During our time at Moringa, Waseth was always the type to dig deeper instead of settling for surface-level solutions. He asks the right questions and genuinely wants to understand how things work.",
    name: "Liam Josiah",
    designation: "Software Developer",
    company: "Innovix solutions",
    image: liam,
  }
];

const projects = [
  {
    name: "Expensify",
    description:
      "A dynamic 4-week budgeting app with automated calculations and visual tracking.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: expensify,
    source_code_link: "https://github.com/Waseth/Expensify",
    live_link: "https://expensify-beta-orcin.vercel.app/",
  },
  {
    name: "Eat Wise",
    description:
      "EatWise is a personal health dashboard for tracking calories, meals and daily activity.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: eatWise,
    source_code_link: "https://github.com/Waseth/EatWise",
    live_link: "https://eat-wise-three.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };