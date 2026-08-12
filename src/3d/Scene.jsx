import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stars,
  Sparkles,
  Float,
  Environment,
} from "@react-three/drei";

import { useEffect, useRef } from "react";
import { MathUtils } from "three";


function Core() {

  const coreRef = useRef();

  const targetRotation = useRef({
    x: 0,
    y: 0,
  });


  useFrame(() => {

    if (!coreRef.current) return;


    /*
      Get page scroll
    */

    const maxScroll =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const scrollProgress =
      maxScroll > 0
        ? window.scrollY / maxScroll
        : 0;


    /*
      Mouse rotation
    */

    coreRef.current.rotation.x =
      MathUtils.lerp(
        coreRef.current.rotation.x,
        targetRotation.current.x,
        0.1
      );

    coreRef.current.rotation.y =
      MathUtils.lerp(
        coreRef.current.rotation.y,
        targetRotation.current.y,
        0.1
      );


    /*
      Continuous rotation
    */

    coreRef.current.rotation.z += 0.002;


    /*
      Scroll movement
    */

    const targetX =
      scrollProgress * -2;

    const targetY =
      scrollProgress * 0.8;

    const targetScale =
      1 - scrollProgress * 0.35;


    coreRef.current.position.x =
      MathUtils.lerp(
        coreRef.current.position.x,
        targetX,
        0.05
      );


    coreRef.current.position.y =
      MathUtils.lerp(
        coreRef.current.position.y,
        targetY,
        0.05
      );


    coreRef.current.scale.setScalar(
      MathUtils.lerp(
        coreRef.current.scale.x,
        targetScale,
        0.05
      )
    );

  });


  const handlePointerMove = (event) => {

    targetRotation.current.y =
      event.pointer.x * 2;

    targetRotation.current.x =
      event.pointer.y * 2;

  };


  return (

    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >

      <mesh
        ref={coreRef}
        onPointerMove={
          handlePointerMove
        }
      >

        <icosahedronGeometry
          args={[1.35, 1]}
        />

        <meshStandardMaterial
          color="#00e5ff"
          metalness={0.8}
          roughness={0.2}
          emissive="#003b44"
          emissiveIntensity={1.5}
        />

      </mesh>

    </Float>

  );
}


function Ring() {

  const ringRef = useRef();


  useFrame(() => {

    if (!ringRef.current) return;


    const maxScroll =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const scrollProgress =
      maxScroll > 0
        ? window.scrollY / maxScroll
        : 0;


    ringRef.current.rotation.x += 0.003;

    ringRef.current.rotation.y += 0.005;


    ringRef.current.rotation.z =
      MathUtils.lerp(
        ringRef.current.rotation.z,
        scrollProgress * Math.PI,
        0.03
      );

  });


  return (

    <mesh
      ref={ringRef}
      rotation={[1.2, 0, 0]}
    >

      <torusGeometry
        args={[2.1, 0.025, 16, 100]}
      />

      <meshStandardMaterial
        color="#7c3aed"
        emissive="#7c3aed"
        emissiveIntensity={2}
        metalness={0.8}
        roughness={0.2}
      />

    </mesh>

  );
}


function SecondRing() {

  const ringRef = useRef();


  useFrame(() => {

    if (!ringRef.current) return;


    const maxScroll =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const scrollProgress =
      maxScroll > 0
        ? window.scrollY / maxScroll
        : 0;


    ringRef.current.rotation.x -= 0.002;

    ringRef.current.rotation.y += 0.004;


    ringRef.current.rotation.z =
      MathUtils.lerp(
        ringRef.current.rotation.z,
        scrollProgress * -Math.PI,
        0.03
      );

  });


  return (

    <mesh
      ref={ringRef}
      rotation={[0.5, 0.8, 0]}
    >

      <torusGeometry
        args={[2.5, 0.018, 16, 100]}
      />

      <meshStandardMaterial
        color="#ff3cac"
        emissive="#ff3cac"
        emissiveIntensity={2}
        metalness={0.8}
        roughness={0.2}
      />

    </mesh>

  );
}


function Scene() {

  return (

    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
    >

      <Stars
        radius={80}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />


      <Sparkles
        count={100}
        scale={7}
        size={2}
        speed={0.4}
      />


      <Core />

      <Ring />

      <SecondRing />


      <ambientLight
        intensity={0.4}
      />


      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />


      <pointLight
        position={[3, 2, 4]}
        intensity={20}
        distance={10}
        color="#00e5ff"
      />


      <pointLight
        position={[-3, -2, 2]}
        intensity={15}
        distance={10}
        color="#ff3cac"
      />


      <Environment
        preset="city"
      />

    </Canvas>

  );

}


export default Scene;