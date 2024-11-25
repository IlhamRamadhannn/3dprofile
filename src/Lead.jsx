import React, { Suspense } from 'react';
import './index.css';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Environment, OrbitControls } from '@react-three/drei';
import Computer from '../public/Computer';
import CanvasLoader from './components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import Reactlogo from '../public/reactlogo/Reactlogo';
import Jslogo from '../public/Jslogo/Jslogo';
import LeadCamera from './components/LeadCamera';

const Lead = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="min-h-screen flex flex-col relative mb-0" id="home">
      <div className="absolute inset-0 z-0 flex ">
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera />
            <ambientLight intensity={-0.7} />
            <LeadCamera>
            <Computer
            rotation={isMobile ? [0.3, 0, 0] : [0.3, 0, 0]}
            position={isMobile ? [0, 2, -3] : [0, 0, -4.5]}
            scale={isMobile ? 0.5 : 1}/></LeadCamera>
            <group position={[1, 0, 0]}>
              <Reactlogo position={isMobile ? [1, 2.6, -1]:[4.15, 2.6, -1]} scale={0.0026} />
              <Jslogo position={isMobile ? [-2.5, 1.5, 0]:[-0.1, 1, 0]} scale={0.03} rotation={[1.8, 2, 0]} />
            </group>
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
      

      <div className="w-full mx-auto flex-col sm:mt-36 mt-20 gap-6 relative z-10 flex sm:flex-row items-center justify-center">
        <div className="sm:w-1/2 p-4 text-center sm:text-left">
          <p className="font-semibold sm:text-4xl text-2xl text-white font-generalisans">
            Hi, I'm Ilham Syahrul Ramadhan<span className="waving-hand">👋</span>
          </p>
          <p className="mt-4 text-lg font-medium text-white text-300 sm:text-xl">
            I’m a Computer Science Major at Binus University. <br />
            I specialize in front-end web development and UI/UX design. <br />
            I also enjoy working with data insights to enhance designs and make informed choices. 
          </p>
        </div>

        <div className="sm:w-1/3 flex justify-center z-10">
          <img src="ilham.jpg" alt="Ilham" className="rounded-lg w-60 h-75 object-cover z-0" /> {/* Ensure the image is behind */}
        </div>
      </div>


    </section>
  );
};

export default Lead;
