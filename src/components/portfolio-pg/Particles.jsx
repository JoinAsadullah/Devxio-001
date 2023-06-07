import * as THREE from 'three';
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense , useRef, useMemo } from "react";





function Model(props) {
    const ref = useRef();
    const CircleImg = useLoader(THREE.TextureLoader, 'portfolio-pg/particle.png');
    const count = 30000;

    let positions = useMemo(() => {
        let positions = [];
        for (let xi = 0; xi < count; xi++) {
            positions[xi] = (Math.random() - 0.5) * 5;
        }
        return new Float32Array(positions);
    }, [count]);
    return (
        <points>
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
                color={0x00aaff}
                size={0.01}
                sizeAttenuation //merupakan parameter yang menscale object berdasarkan perspective camera
                transparent={false}
                alphaTest={0.5} //merupakan thresshold saat rendering untuk mencega bila opacity dibawah value alphatest
                opacity={1.0}
            />
        </points>
    )
}



export default function Particles() {
  
  return (
      <Canvas flat camera={{ position: [0, 0, 2] }}  >
        <Suspense fallback={null}>
          <Model />
        </Suspense>\
        <OrbitControls enableZoom={false} autoRotate />
        <Preload all />
      </Canvas>
  );
}