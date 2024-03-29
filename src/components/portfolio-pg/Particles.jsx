'use client'
import * as THREE from 'three';
import { Canvas, useThree, useFrame, useLoader, invalidate } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, ScrollControls } from "@react-three/drei";
import { Suspense , useRef, useMemo, useState, useEffect } from "react";
import { animate } from 'framer-motion';





function Model(props) {
    const ref = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
        invalidate()
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    useFrame(()=>{
        ref.current.rotation.x =scrollPosition/300;
    });

    const CircleImg = useLoader(THREE.TextureLoader, 'portfolio-pg/particle.png');
    const count = 5000;

    let positions = useMemo(() => {
        let positions = [];
        for (let xi = 0; xi < count; xi++) {
            positions[xi] = (Math.random() - 0.5) * 5;
        }
        return new Float32Array(positions);
    }, [count]);
    return (
        <points ref={ref}>
            <bufferGeometry >
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                map={CircleImg}
                
                size={0.02}
                sizeAttenuation 
                transparent={true}
                alphaTest={0.5} 
                opacity={1.0}
            />
        </points>
    )
}



export default function Particles() {

  
  return (
      <>
          <Canvas flat camera={{ position: [0, 0, 0] }}  frameloop='demand'>
              <Suspense fallback={null}>
                  <Model />
              </Suspense>
              <Preload all />
          </Canvas>
      </>
  );
}