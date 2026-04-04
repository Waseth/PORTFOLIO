import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import Terminal from './Terminal';
import { motion, AnimatePresence } from 'framer-motion';

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  const scale = isMobile ? 0.35 : isTablet ? 0.5 : 0.75;
  const position = isMobile ? [0, 2, -0.5] : isTablet ? [0, -1, -1] : [0, -1, -1];

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

const ComputersCanvas = ({ on3DLoaded, onMobileTerminalComplete }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);

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

  const handleTerminalComplete = () => {
    setShowTerminal(false);

    if (isMobile) {
      if (onMobileTerminalComplete) {
        onMobileTerminalComplete();
      }
    } else {
      setTimeout(() => {
        if (on3DLoaded) on3DLoaded();
      }, 500);
    }
  };

  // For mobile: show terminal in normal flow
  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        {showTerminal && (
          <Terminal
            onComplete={handleTerminalComplete}
            isMobile={true}
          />
        )}
      </div>
    );
  }

  // For tablet/desktop: show terminal while loading, then computer
  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Terminal
              onComplete={handleTerminalComplete}
              isMobile={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: showTerminal ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
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
            <Computers isMobile={isMobile} isTablet={isTablet}/>
          </Suspense>
          <Preload all />
        </Canvas>
      </motion.div>
    </div>
  )
}

export default ComputersCanvas