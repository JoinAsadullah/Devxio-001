'use client'
import * as THREE from 'three';
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, ScrollControls } from "@react-three/drei";
import { Suspense , useRef, useMemo, useState, useEffect } from "react";





function Model(props) {
    const ref = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    useFrame(()=>{
        ref.current.rotation.x =-scrollPosition/100;
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
                color={0xfffff}
                size={0.01}
                sizeAttenuation 
                transparent={false}
                alphaTest={0.5} 
                opacity={1.0}
            />
        </points>
    )
}



export default function Particles() {
    const [sliderValue, setSliderValue] = useState(0);
    function chang(e){
        setSliderValue(e.target.value)
    }
  
  return (
    <>
    <div className='h-[400vh]'/>
    <div className='h-[100vh] fixed top-0 w-full'>
        <Canvas flat camera={{ position: [0, 0, 2] }}  >
            <Suspense fallback={null}>
            <Model sliderValue={sliderValue}/>
            </Suspense>
            <Preload all />
        </Canvas>
    </div> 
    <div className='fixed top-0 z-100'><form><input name='slider' type='range' min={0} max={1000} onChange={chang}/></form></div>
    </>
  );
}