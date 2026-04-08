import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      borderBottom: "3px solid #facc15",
      boxShadow: "0 5px 20px rgba(250, 204, 21, 0.1)"
    }}
    contentArrowStyle={{ borderRight: "7px solid #facc15" }}
    date={experience.date}
    dateClassName="text-yellow-500 font-bold"
    iconStyle={{
      background: experience.iconBg,
      boxShadow: "0 0 0 4px #facc15, 0 0 15px rgba(250, 204, 21, 0.3)",
      transition: "all 0.3s ease"
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full group">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-yellow-500 text-[24px] font-bold">{experience.title}</h3>

      {/* Company name with glowing yellow border - Centered */}
      <div className="mt-2">
          <div className="px-2 py-1 rounded-lg border border-yellow-500/50 bg-transparent shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300 inline-flex items-center justify-center">
            <p className="text-yellow-500 text-[14px] font-semibold m-0 leading-normal">
              {experience.company_name}
            </p>
          </div>
        </div>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Background and certifications</p>
        <h2 className={styles.sectionHeadText}>Technical journey.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="#facc15"
          animate={true}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")