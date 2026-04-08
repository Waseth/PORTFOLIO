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
  railway,
  vercel,
  moringa,
  reactIcon,
  pythonIcon,
  eatWise,
  joash,
  alice,
  lawrence,
  liam,
  ledgeraLogo,
  expensifyLogo,
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
    title: "Full-Stack development",
    icon: web,
  },
  {
    title: "React + Tailwind CSS",
    icon: mobile,
  },
  {
    title: "Python + Flask + SQL",
    icon: backend,
  },
  {
    title: "Responsive UI/UX",
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
    name: "MySQL",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Railway",
    icon: railway,
  }
];

const experiences = [
  {
    title: "MORINGA FULL-STACK DEVELOPMENT BOOTCAMP",
    company_name: "CERTIFICATION",
    icon: moringa,
    iconBg: "#ffffff",
    date: "2024 Feb - 2024 Aug",
    points: [
      "Mastered full-stack development with React, Python, Flask, and SQL through intensive hands-on training",
      "Built and deployed multiple web applications that address specific user needs and business requirements",
      "Leveraged Git and collaborative workflows to deliver projects efficiently in team settings",
      "Graduated with a certificate in Full-stack development having met all the program's expectetions"
    ],

  },
  {
    title: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY(JKUAT)",
    company_name: "EDUCATION (COMPUTER TECHNOLOGY)",
    icon: moringa,
    iconBg: "#ffffff",
    date: "In progress",
    points: [
      "Currently pursuing Computer Technology as a first-year student, balancing coursework with hands-on development",
      "Participate in practical lab sessions that sharpen my skills and reinforce real-world application",
    ],

  },
  {
    title: "EXPENSIFY",
    company_name: "PERSONAL PROJECT",
    icon: expensifyLogo,
    iconBg: "#08123a",
    date: "2025 Dec - 2026 Feb",
    points: [
      "Built a personal finance tracker that helps students track expenses, allocate savings, and manage weekly budgets",
      "Enabled users to track deficits and surpluses from allocated weekly amounts, promoting better financial habits",
      "Gained approval from JKUAT's J-HUB annual bootcamp and is now helping students manage their finances effectively",
      "Built with React, Python(Flask) and MySQL, featuring reusable components, optimized performance, and full GitHub documentation",
    ],
  },
  {
    title: "LEDGERA",
    company_name: "FREELANCE",
    icon: ledgeraLogo,
    iconBg: "#0c194c",
    date: "2026 Feb - 2026 Mar",
    points: [
      "Landed first freelance client, handling everything from initial discussion to final delivery",
      "Communicated directly with client to gather requirements and provide updates",
      "Took ownership of the project from testing through to production deployment",
      "Delivered a working solution that met the client's needs",
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
      "A dynamic 4-week budgeting app with automated calculations,surplus and deficit allocations and visual tracking.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "FLASK",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    // image: expensify,
    source_code_link: "https://github.com/Waseth/Expensify-React-version-",
    live_link: "https://expensifyv2.vercel.app/",
  },
  {
    name: "Ledgera",
    description:
      "A strict inventory and sales tracking system designed to eliminate losses and ensure accountability",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "FLASK",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    // image: eatWise,
    source_code_link: "https://github.com/Waseth/Ledgera",
    live_link: "https://ledgerav2.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };