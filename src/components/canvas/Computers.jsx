import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
// import { canvas } from 'framer-motion/client';

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  const scale = isMobile ? 0.35 : isTablet ? 0.5 : 0.75;
  const position = isMobile ? [0, -1, -0.5] : isTablet ? [0, -1, -1] : [0, -3.8, -1];

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

    setIsMobile(mediaQuery.matches);
    setIsTablet(tabletQuery.matches);

    const handleMobileChange = (e) => setIsMobile(e.matches);
    const handleTabletChange = (e) => setIsTablet(e.matches);

    mediaQuery.addEventListener('change', handleMobileChange);
    tabletQuery.addEventListener('change', handleTabletChange);


   return () => {
      mediaQuery.removeEventListener('change', handleMobileChange);
      tabletQuery.removeEventListener('change', handleTabletChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}  isTablet={isTablet}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}


export default ComputersCanvas