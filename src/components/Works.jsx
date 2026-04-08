import { motion } from "framer-motion"
import { styles } from '../styles'
import { github, externalLink } from '../assets'
import { SectionWrapper } from "../hoc";
import { projects } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { Utensils, BarChart3, Wallet, Code, Package, Box, PackageOpen, ClipboardList } from 'lucide-react';

// Icon mapping based on project name or description
const getProjectIcon = (name, description) => {
  const lowerName = name.toLowerCase();
  const lowerDesc = description.toLowerCase();

  // Inventory management project
  if (lowerName.includes('inventory') || lowerDesc.includes('inventory') ||
      lowerName.includes('stock') || lowerDesc.includes('stock') ||
      lowerName.includes('warehouse') || lowerDesc.includes('warehouse')) {
    return Box; // or Package, PackageOpen, or ClipboardList
  }

  if (lowerName.includes('expensify') || lowerDesc.includes('budget') || lowerDesc.includes('finance')) {
    return Wallet;
  }
  if (lowerName.includes('eat') || lowerDesc.includes('meal') || lowerDesc.includes('calorie')) {
    return Utensils;
  }
  if (lowerDesc.includes('dashboard') || lowerDesc.includes('tracking')) {
    return BarChart3;
  }
  return Code;
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  const IconComponent = getProjectIcon(name, description);
  const cardNumber = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 border border-transparent group relative">

        {/* Number at top left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-yellow-500 font-bold text-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">
            #{cardNumber}
          </span>
        </div>

        {/* Large Icon at the top with yellow border */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-full group-hover:scale-110 transition-transform duration-300 border-2 border-yellow-500 shadow-lg shadow-yellow-500/20">
            <IconComponent size={48} className="text-yellow-500" strokeWidth={1.5} />
          </div>
        </div>

        <div className="mt-2">
          <h3 className="text-white font-bold text-[24px] group-hover:text-yellow-500 transition-colors duration-300">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-3 py-1 rounded-full text-[12px] font-medium ${tag.color} bg-opacity-20 bg-gray-800 hover:scale-105 transition-transform duration-200 cursor-default`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Enhanced buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 group/btn"
          >
            <svg className="w-4 h-4 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Code
          </button>
          <button
            onClick={() => window.open(live_link, "_blank")}
            className="flex-1 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 group/btn"
          >
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects mark important milestones in my full-stack journey.
          Each one challenged me differently, from refining UI details to debugging backend logic at 2am
          and pushing features all the way to production.
          I've sharpened my JavaScript fundamentals,
          built dynamic React frontends,
          developed Python/Flask APIs,
          integrated databases
          and deployed complete full-stack applications.
          Along the way, I learned to connect every piece,
          from database to server to interface and manage the entire production pipeline.
          More than just "finishing projects," I focused on understanding how components communicate,
          how backend structure affects performance
          and how to ship reliable code to production.
          Every build stretched my problem-solving and made me more intentional about writing clean,
          scalable full-stack solutions.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");