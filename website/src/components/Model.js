import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'

export default function Model(props) {
  const meshRef = useRef()
  const [visible, setVisible] = useState(false)
  
  const { scale, opacity } = useSpring({
    scale: visible ? [2, 2, 2] : [0, 0, 0],
    opacity: visible ? 1 : 0,
    config: { tension: 300, friction: 10 }
  })
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  const { nodes, materials } = useGLTF('/Rover.glb')
  return (
    <animated.group {...props} dispose={null} scale={scale}>
      <animated.mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0031.geometry}
        material={materials['Material_0.031']}
        material-transparent={true}
        material-opacity={opacity}
      />
    </animated.group>
  )
}

useGLTF.preload('/Rover.glb')