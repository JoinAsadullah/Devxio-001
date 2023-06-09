import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef, useMemo, useCallback } from "react";




export function Model(props) {
    const CircleImg = useLoader(THREE.TextureLoader, 'portfolio-pg/particle.png');

    const ref = useRef();


    let t = 0;
    let f = 0.008;
    let a = 2;
    const graph = useCallback((x, z) => {
        return Math.cos(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])

    const count = 100
    const sep = 2
    let positions = useMemo(() => {
        let positions = []

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y = graph(x, z);
                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }, [count, sep, graph])

    useFrame(() => {
        t += 10

        const positions = ref.current.array;

        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);

                positions[i + 1] = graph(x, z);
                i += 3;
            }
        }

        ref.current.needsUpdate = true;
    })


    return (
        <points>
            <bufferGeometry >
                <bufferAttribute
                    ref={ref}
                    attachObject={['attributes', 'position']}
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                map={CircleImg}
                color={0x33333}
                size={0.7}
                sizeAttenuation
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    )
}



export default function Ripples() {
    return (
        <Canvas flat camera={{ position:[0, 60, 0]}}  >
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    );
}
