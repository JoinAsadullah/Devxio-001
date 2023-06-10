import * as THREE from 'three';
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, Environment } from "@react-three/drei";
import { Suspense , useRef, useEffect, useState } from "react";



export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('portfolio-pg/laptop.gltf')
  //const { actions, names } = useAnimations(animations, group)
 // useEffect(() =>{ animations.forEach((clip) => { actions[clip.name].play() })}, [animations, actions])
 //useEffect(() =>{actions[names[0]].play(); actions[names[1]].play();  actions[names[0]].clampWhenFinished = true; actions[names[1]].clampWhenFinished = true; actions[names[0]].setLoop(1,1); actions[names[1]].setLoop(1,1);}, [actions, names])

  //useEffect(() =>{ animations.forEach((clip) => { actions[clip.name].play()})}, [animations, actions])
  return (
    <group position={[0, -0.25, 0]} {...props} dispose={null}>
      <group position={[0, 0.03, -0.28]} rotation={[-0.26, 0, 0]} scale={0.26}>
        <group position={[0, -0.05, -0.02]} rotation={[1.81, 0, 0]} scale={1.06}>
          <mesh geometry={nodes.Cube011.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube011_1.geometry} material={materials['black.002']} />
          <mesh geometry={nodes.Cube011_2.geometry} material={materials.screen} />
          <mesh geometry={nodes.Cube011_3.geometry} material={materials.dark} />
          <mesh geometry={nodes.Cube011_4.geometry} material={materials['glass.002']} />
          <mesh geometry={nodes.Cube011_5.geometry} material={materials.screen} />
          <mesh geometry={nodes.Cube011_6.geometry} material={materials['Material.024']} />
          <mesh geometry={nodes.Cube011_7.geometry} material={materials['glass.003']} />
        </group>
      </group>
      <mesh geometry={nodes.Cube010.geometry} material={materials.black} position={[-0.39, 0.02, -0.19]} scale={[0.01, 0, 0]} />
      <group position={[0.01, 0.03, -0.09]} scale={0.26}>
        <mesh geometry={nodes.Cube013.geometry} material={materials.key} />
        <mesh geometry={nodes.Cube013_1.geometry} material={materials['Material.026']} />
      </group>
      <mesh geometry={nodes.Cube015.geometry} material={materials.body} position={[0, 0.02, 0.15]} scale={0.12} />
      <mesh geometry={nodes.Cube017.geometry} material={materials.black} position={[-0.39, 0.02, -0.19]} scale={[0.01, 0, 0]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['black.003']} position={[-0.39, 0.02, -0.18]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.black} position={[-0.39, 0.02, -0.23]} scale={[0.01, 0, 0]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials.black} position={[-0.39, 0.02, -0.23]} scale={[0.01, 0, 0]} />
      <group position={[0, 0.02, 0]} rotation={[-0.02, 0, 0]}>
        <mesh geometry={nodes.Cube021_1.geometry} material={materials.body} />
        <mesh geometry={nodes.Cube021_2.geometry} material={materials.Dark} />
        <mesh geometry={nodes.Cube021_3.geometry} material={materials['Material.028']} />
      </group>
      <mesh geometry={nodes.Cube022.geometry} material={materials['black.003']} position={[-0.39, 0.02, -0.22]} scale={[0.01, 0, 0.01]} />
    </group>
  )
}

useGLTF.preload('portfolio-pg/laptop.gltf')






export default function Laptop() {

  return (
    <Canvas flat camera={{ position: [0, 0.2, 2.5], fov: 30 }} >
      <ambientLight intensity={5} />
      <Suspense fallback={null}>
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
    // <pointLight position={[0, -3.25, -1.5]} />
    // <pointLight position={[0, 3.25, 1.5]} />
    // <pointLight position={[10, 1, 0]} />
    // <pointLight position={[0, 45, 1]} />