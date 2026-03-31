import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-28 h-28 transition-all duration-300 hover:scale-105"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(125, 255, 3, 0.83))',
            transition: 'filter 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(250, 204, 21, 0.8))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 5px rgba(250, 204, 21, 0.3))';
          }}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");