"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../lib/utils";

const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{ position: [10, -7.5, -5] }}
        style={{ height: "100vh", background: "#000000" }} // <-- black background
      >
        <OrbitControls maxDistance={20} minDistance={10} enablePan={false} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <pointLight position={[-30, 0, -30]} intensity={5} />
        <GlowingParticleRing />
      </Canvas>

      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-medium text-2xl md:text-5xl pointer-events-none text-center drop-shadow-lg px-4">
        Helping businesses like yours achieve their goals since 2018. We combine creativity, technology, and strategy to deliver measurable results.
      </h1>
    </div>
  );
};

const GlowingParticleRing = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      // Multi-axis rotation
      ref.current.rotation.x = clock.getElapsedTime() * 0.02;
      ref.current.rotation.y = clock.getElapsedTime() * 0.03;
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;

      // Pulsating scale animation for particles
      ref.current.children.forEach((child, i) => {
        child.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2 + i) * 0.2);
      });
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Particle key={point.idx} position={point.position} />
      ))}
      {pointsOuter.map((point) => (
        <Particle key={point.idx} position={point.position} />
      ))}
    </group>
  );
};

const Particle = ({ position }) => {
  const orange = "#f97316"; // Tailwind orange-500

  return (
    <Sphere position={position} args={[0.12, 16, 16]}>
      <meshStandardMaterial
        color={orange}
        emissive={orange}
        emissiveIntensity={1}
        roughness={0.4}
        metalness={0.6}
      />
    </Sphere>
  );
};

export default ParticleRing;
