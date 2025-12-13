import { useRef, useEffect } from 'react';
import { useGLTF, OrbitControls, PerspectiveCamera, Environment, Grid } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { HERO_3D_CONFIG } from '../constants';
import * as THREE from 'three';

const Hero3DModel = () => {
    const modelRef = useRef();
    const cameraRef = useRef();
    const { scene } = useGLTF(HERO_3D_CONFIG.model.path);
    const { model, camera, lighting, environment, controls, animation, grid } = HERO_3D_CONFIG;

    // Set initial rotation
    useEffect(() => {
        if (modelRef.current && model.rotation) {
            modelRef.current.rotation.set(...model.rotation);
        }
    }, [model.rotation]);

    // Set camera look at
    useEffect(() => {
        if (cameraRef.current && camera.lookAt) {
            cameraRef.current.lookAt(new THREE.Vector3(...camera.lookAt));
        }
    }, [camera.lookAt]);

    // Animation frame
    useFrame((state) => {
        if (!animation.enabled || !modelRef.current) return;

        const time = state.clock.elapsedTime * animation.speed;

        switch (animation.type) {
            case 'sway':
                modelRef.current.rotation.y = model.rotation[1] + Math.sin(time) * animation.intensity;
                break;
            case 'rotate':
                modelRef.current.rotation.y += animation.speed * 0.01;
                break;
            case 'bounce':
                modelRef.current.position.y = model.position[1] + Math.sin(time) * animation.intensity;
                break;
            default:
                break;
        }
    });

    return (
        <>
            {/* Camera */}
            <PerspectiveCamera 
                ref={cameraRef}
                makeDefault 
                position={camera.position} 
                fov={camera.fov}
                near={camera.near}
                far={camera.far}
            />
            
            {/* Ambient Light */}
            <ambientLight 
                intensity={lighting.ambient.intensity} 
                color={lighting.ambient.color}
            />
            
            {/* Directional Lights */}
            {lighting.directional.map((light, index) => (
                <directionalLight
                    key={`directional-${index}`}
                    position={light.position}
                    intensity={light.intensity}
                    color={light.color}
                    castShadow={light.castShadow}
                />
            ))}
            
            {/* Point Lights */}
            {lighting.point.map((light, index) => (
                <pointLight
                    key={`point-${index}`}
                    position={light.position}
                    intensity={light.intensity}
                    color={light.color}
                />
            ))}
            
            {/* Environment */}
            <Environment 
                preset={environment.preset}
                background={environment.background}
            />
            
            {/* Grid Helper (Temporary Guide) */}
            {grid.enabled && (
                <Grid
                    args={[grid.size, grid.divisions]}
                    position={grid.position}
                    cellColor={grid.color1}
                    sectionColor={grid.color2}
                />
            )}
            
            <primitive 
                ref={modelRef}
                object={scene} 
                scale={Array.isArray(model.scale) ? model.scale : [model.scale, model.scale, model.scale]}
                position={model.position}
            />
            
            {/* Orbit Controls */}
            <OrbitControls 
                enableZoom={controls.enableZoom}
                enablePan={controls.enablePan}
                enableRotate={controls.enableRotate}
                autoRotate={controls.autoRotate}
                autoRotateSpeed={controls.autoRotateSpeed}
                minPolarAngle={controls.minPolarAngle}
                maxPolarAngle={controls.maxPolarAngle}
                minAzimuthAngle={controls.minAzimuthAngle}
                maxAzimuthAngle={controls.maxAzimuthAngle}
                enableDamping={controls.enableDamping}
                dampingFactor={controls.dampingFactor}
            />
        </>
    );
};

// Preload the model
useGLTF.preload(HERO_3D_CONFIG.model.path);

export default Hero3DModel;
