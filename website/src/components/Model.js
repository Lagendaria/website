import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { Environment } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default function Model(props) {
    const meshRef = useRef()
    const [visible, setVisible] = useState(false)
    const [model, setModel] = useState(null)

    const { scale, opacity } = useSpring({
        scale: visible ? [0.02, 0.02, 0.02] : [0, 0, 0],
        opacity: visible ? 1 : 0,
        config: { tension: 300, friction: 10 }
    })

    useEffect(() => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://raw.githubusercontent.com/google/draco/refs/heads/main/javascript/');

        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        gltfLoader.load('/RRoverglb-Optimized.glb', (gltf) => {
            setModel(gltf);
            const timer = setTimeout(() => setVisible(true), 100);
            return () => clearTimeout(timer);
        }, (error) => {
            console.error('Error loading model:', error);
        });
    }, [])

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5
        }
    })

    if (!model || !model.scene) {
        return null;
    }

    const renderMeshes = (object) => {
        const meshes = [];

        object.traverse((child) => {
            if (child.isMesh) {
                meshes.push(
                    <mesh
                        key={child.uuid}
                        geometry={child.geometry}
                        material={child.material}
                        position={child.position}
                        rotation={child.rotation}
                        scale={child.scale}
                        castShadow
                        receiveShadow
                    >
                        <Environment preset="sunset" />
                    </mesh>
                );
            }
        });

        return meshes;
    };

    return (
        <animated.group {...props} dispose={null} scale={scale}>
            <animated.group ref={meshRef}>
                {renderMeshes(model.scene)}
            </animated.group>
        </animated.group>
    )
}