import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as='div' center>
      <span style={{ color: 'white' }}>{progress.toFixed(2)}% loaded</span>
    </Html>
  )
}

export default CanvasLoader;