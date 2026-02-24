import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"
import { styles } from '../styles'
import { github, externalLink } from '../assets'
import { SectionWrapper } from "../hoc";
import { projects } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[240px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end items-start gap-2 m-1 card-img_hover">


            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={externalLink}
                alt="live site"
                className="w-1/2 h-1/2 object-contain rounded-2xl"
              />
            </div>

          </div>

        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) =>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>

  )
}

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
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These projects mark important chapters in my technical journey.
          Each one challenged me in a different way, from refining UI details to figuring
          out why something wasn’t working at 2am. Along the way, I’ve sharpened my JavaScript
          fundamentals, built dynamic interfaces with React, experimented with interactive 3D elements,
          and learned how to make designs feel smooth across different devices using tailwind CSS. More
          than just “finishing projects,” I’ve focused on understanding what’s happening under the hood,
          how components communicate, how structure affects scalability, and how small UI decisions impact
          user experience. Every build has stretched me, improved my problem-solving, and made me more
          intentional about writing clean, thoughtful code.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");