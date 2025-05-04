"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import * as THREE from "three"

function Particles({ count = 100, color = "#3b82f6" }) {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const light = useRef<THREE.PointLight>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1

    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(time / 4)
      mesh.current.rotation.y = Math.sin(time / 2)
    }

    if (light.current) {
      light.current.position.x = Math.sin(time) * 3
      light.current.position.z = Math.cos(time) * 3
      light.current.intensity = 1 + Math.sin(time) * 0.5
    }
  })

  const dummy = new THREE.Object3D()
  const particles = Array.from({ length: count }, () => ({
    position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10],
    scale: Math.random() * 0.5 + 0.1,
  }))

  useEffect(() => {
    particles.forEach((particle, i) => {
      const [x, y, z] = particle.position
      dummy.position.set(x, y, z)
      dummy.scale.set(particle.scale, particle.scale, particle.scale)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  }, [])

  return (
    <>
      <pointLight ref={light} distance={10} intensity={1.5} color={color} />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={color} />
      </instancedMesh>
    </>
  )
}

export function Background3D() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10 opacity-20 dark:opacity-30"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Particles count={100} />
      </Canvas>
    </motion.div>
  )
}
