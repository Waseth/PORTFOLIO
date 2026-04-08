import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

// Proficiency data for each technology
const techProficiency = {
  "HTML 5": 95,
  "CSS 3": 90,
  "JavaScript": 85,
  "React JS": 88,
  "Python": 83,
  "Flask": 80,
  "MySQL": 80,
  "Tailwind CSS": 90,
  "git": 90,
  "Vercel": 90,
  "Railway": 85
};

const ProgressBar = ({ proficiency, name }) => {
  return (
    <div className="w-full mt-2">
      <div className="relative w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-lg shadow-yellow-500/50"
          style={{ width: `${proficiency}%` }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent animate-pulse" />
        </motion.div>
      </div>
      <div className="flex justify-end mt-0.5">
        <span className="text-yellow-500 text-[8px] font-mono">{proficiency}%</span>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Toolkit</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mb-10"
        >
          Here are the technologies I work with and my proficiency levels. I continuously
          improve my skills and stay updated with the latest trends in web development.
        </motion.p>
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center w-28 group"
          >
            {/* Glowing shadow effect */}
            <div className="relative w-28 h-28">
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-full">
                <BallCanvas icon={technology.icon} />
              </div>
            </div>

            <p className="text-white text-center text-xs font-medium mt-3 mb-2">
              {technology.name}
            </p>

            <ProgressBar
              proficiency={techProficiency[technology.name] || 90}
              name={technology.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");