import { useRef, useEffect, useState } from 'react';
import { useGLTF, OrbitControls, PerspectiveCamera, Environment, Grid, TransformControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { HERO_3D_CONFIG } from '../constants';
import * as THREE from 'three';

// Hook to detect screen size and return appropriate config
const useResponsiveConfig = () => {
    const [screenSize, setScreenSize] = useState('largeDesktop');

    useEffect(() => {
        const updateScreenSize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize('mobile');
            } else if (width < 1024) {
                setScreenSize('tablet');
            } else if (width < 1440) {
                setScreenSize('desktop');
            } else {
                setScreenSize('largeDesktop');
            }
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return screenSize;
};

// Dev Panel 
export const DevPanel = ({ modelRef, cameraRef }) => {
    const [values, setValues] = useState({
        modelPosition: [0, 0, 0],
        modelRotation: [0, 0, 0],
        modelScale: [1, 1, 1],
        cameraPosition: [0, 0, 0],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (modelRef?.current && cameraRef?.current) {
                const pos = modelRef.current.position;
                const rot = modelRef.current.rotation;
                const scale = modelRef.current.scale;
                const camPos = cameraRef.current.position;
                
                setValues({
                    modelPosition: [pos.x.toFixed(2), pos.y.toFixed(2), pos.z.toFixed(2)],
                    modelRotation: [rot.x.toFixed(2), rot.y.toFixed(2), rot.z.toFixed(2)],
                    modelScale: [scale.x.toFixed(2), scale.y.toFixed(2), scale.z.toFixed(2)],
                    cameraPosition: [camPos.x.toFixed(2), camPos.y.toFixed(2), camPos.z.toFixed(2)],
                });
            }
        }, 100);

        return () => clearInterval(interval);
    }, [modelRef, cameraRef]);

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '15px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '12px',
            zIndex: 1000,
            maxWidth: '300px',
            backdropFilter: 'blur(10px)',
        }}>
            <div style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 'bold', color: '#4ade80' }}>
                🛠️ Dev Mode
            </div>
            <div style={{ marginBottom: '8px' }}>
                <div style={{ color: '#60a5fa', marginBottom: '2px' }}>Model Position:</div>
                <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                    [{values.modelPosition.join(', ')}]
                </code>
            </div>
            <div style={{ marginBottom: '8px' }}>
                <div style={{ color: '#60a5fa', marginBottom: '2px' }}>Model Rotation:</div>
                <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                    [{values.modelRotation.join(', ')}]
                </code>
            </div>
            <div style={{ marginBottom: '8px' }}>
                <div style={{ color: '#60a5fa', marginBottom: '2px' }}>Model Scale:</div>
                <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                    [{values.modelScale.join(', ')}]
                </code>
            </div>
            <div style={{ marginBottom: '8px' }}>
                <div style={{ color: '#60a5fa', marginBottom: '2px' }}>Camera Position:</div>
                <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                    [{values.cameraPosition.join(', ')}]
                </code>
            </div>
            <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '10px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '8px' }}>
                💡 Tips:
                <br/>• W/E/R: Translate/Rotate/Scale
                <br/>• Drag the gizmo to adjust
                <br/>• Right-click + drag to rotate view
            </div>
        </div>
    );
};

const Hero3DModel = ({ modelRef: providedModelRef, cameraRef: providedCameraRef, isResumeOpen }) => {
    const defaultModelRef = useRef();
    const defaultCameraRef = useRef();
    const transformRef = useRef();
    
    // Use provided refs or create new ones
    const modelRef = providedModelRef || defaultModelRef;
    const cameraRef = providedCameraRef || defaultCameraRef;
    
    const { scene } = useGLTF(HERO_3D_CONFIG.model.path);
    const screenSize = useResponsiveConfig();
    
    // Get responsive configuration based on screen size
    const responsiveConfig = HERO_3D_CONFIG.responsive[screenSize];
    const model = { ...HERO_3D_CONFIG.model, ...responsiveConfig.model };
    const camera = responsiveConfig.camera;
    const resumeView = responsiveConfig.resumeView;
    
    // Use default configs for non-responsive settings
    const { lighting, environment, controls, animation, grid, devMode, transition } = HERO_3D_CONFIG;
    const [transformMode, setTransformMode] = useState(devMode.transformMode);
    
    // Animation state
    const animationProgress = useRef(0);
    const isAnimating = useRef(false);
    const targetState = useRef(isResumeOpen);
    
    // Preloader animation state
    const [isPreloading, setIsPreloading] = useState(true);
    const preloadProgress = useRef(0);
    const preloadDuration = 2; // 2 seconds for the spin animation

    // Set initial rotation
    useEffect(() => {
        if (modelRef.current && model.rotation) {
            modelRef.current.rotation.set(...model.rotation);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.rotation]);

    // Set camera look at
    useEffect(() => {
        if (cameraRef.current && camera.lookAt) {
            cameraRef.current.lookAt(new THREE.Vector3(...camera.lookAt));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [camera.lookAt]);

    // Keyboard controls for transform mode (W=translate, E=rotate, R=scale)
    useEffect(() => {
        if (!devMode.enabled || !devMode.showTransformControls) return;

        const handleKeyDown = (e) => {
            switch(e.key.toLowerCase()) {
                case 'w':
                    setTransformMode('translate');
                    break;
                case 'e':
                    setTransformMode('rotate');
                    break;
                case 'r':
                    setTransformMode('scale');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [devMode.enabled, devMode.showTransformControls]);

    // Track when resume state changes
    useEffect(() => {
        if (targetState.current !== isResumeOpen) {
            targetState.current = isResumeOpen;
            isAnimating.current = true;
            animationProgress.current = 0;
        }
    }, [isResumeOpen]);

    // Easing function
    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    // Lerp helper
    const lerp = (start, end, t) => {
        return start + (end - start) * t;
    };

    // Animation frame
    useFrame((state, delta) => {
        if (!modelRef.current || !cameraRef.current) return;

        // Handle preloader animation (camera spinning around model)
        if (isPreloading) {
            preloadProgress.current += delta;
            const spinProgress = Math.min(preloadProgress.current / preloadDuration, 1);
            
            // Target final position from config
            const targetX = camera.position[0];
            const targetY = camera.position[1];
            const targetZ = camera.position[2];
            
            // Calculate angle - only 180 degrees rotation (half circle)
            const angle = easeInOutCubic(spinProgress) * Math.PI;
            
            // Start from target position and rotate around
            // This ensures we end where we should be
            const radius = 5; // Smaller radius for subtler effect
            const offsetX = Math.cos(angle) * radius;
            const offsetZ = Math.sin(angle) * radius;
            
            // Position starts offset and returns to target
            // Use inverse progress for the offset so it diminishes over time
            const offsetScale = 1 - easeInOutCubic(spinProgress);
            
            cameraRef.current.position.x = targetX + offsetX * offsetScale;
            cameraRef.current.position.y = targetY;
            cameraRef.current.position.z = targetZ + offsetZ * offsetScale;
            
            // Always look at the model center during preload
            const modelCenter = new THREE.Vector3(
                model.position[0],
                model.position[1],
                model.position[2]
            );
            cameraRef.current.lookAt(modelCenter);
            
            // End preloader animation
            if (spinProgress >= 1) {
                setIsPreloading(false);
                // Reset camera to look at target
                if (camera.lookAt) {
                    cameraRef.current.lookAt(new THREE.Vector3(...camera.lookAt));
                }
            }
            
            return;
        }

        // Handle transition animation
        if (isAnimating.current) {
            animationProgress.current += delta / transition.duration;
            
            if (animationProgress.current >= 1) {
                animationProgress.current = 1;
                isAnimating.current = false;
            }

            const progress = easeInOutCubic(animationProgress.current);
            const direction = isResumeOpen ? progress : 1 - progress;

            // Animate model position
            modelRef.current.position.x = lerp(model.position[0], resumeView.model.position[0], direction);
            modelRef.current.position.y = lerp(model.position[1], resumeView.model.position[1], direction);
            modelRef.current.position.z = lerp(model.position[2], resumeView.model.position[2], direction);

            // Animate model scale
            const scaleStart = Array.isArray(model.scale) ? model.scale[0] : model.scale;
            const scaleEnd = Array.isArray(resumeView.model.scale) ? resumeView.model.scale[0] : resumeView.model.scale;
            const newScale = lerp(scaleStart, scaleEnd, direction);
            modelRef.current.scale.set(newScale, newScale, newScale);

            // Animate model rotation
            modelRef.current.rotation.y = lerp(model.rotation[1], resumeView.model.rotation[1], direction);

            // Animate camera position
            cameraRef.current.position.x = lerp(camera.position[0], resumeView.camera.position[0], direction);
            cameraRef.current.position.y = lerp(camera.position[1], resumeView.camera.position[1], direction);
            cameraRef.current.position.z = lerp(camera.position[2], resumeView.camera.position[2], direction);

            return;
        }

        // Disable default animation in dev mode with transform controls
        if (devMode.enabled && devMode.showTransformControls) return;
        
        if (!animation.enabled) return;

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
            
            {/* 3D Model */}
            <primitive 
                ref={modelRef}
                object={scene} 
                scale={Array.isArray(model.scale) ? model.scale : [model.scale, model.scale, model.scale]}
                position={model.position}
            />
            
            {/* Transform Controls (Dev Mode) */}
            {devMode.enabled && devMode.showTransformControls && (
                <TransformControls
                    ref={transformRef}
                    object={modelRef.current}
                    mode={transformMode}
                />
            )}
            
            {/* Orbit Controls */}
            <OrbitControls 
                ref={(ref) => {
                    // Disable orbit controls when transform controls are active
                    if (transformRef.current && ref) {
                        transformRef.current.addEventListener('dragging-changed', (event) => {
                            ref.enabled = !event.value;
                        });
                    }
                }}
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

// Export with Dev Panel
const Hero3DModelWithDevTools = ({ modelRef: externalModelRef, cameraRef: externalCameraRef, isResumeOpen }) => {
    const internalModelRef = useRef();
    const internalCameraRef = useRef();
    
    // Use external refs if provided, otherwise use internal ones
    const modelRef = externalModelRef || internalModelRef;
    const cameraRef = externalCameraRef || internalCameraRef;

    return <Hero3DModel modelRef={modelRef} cameraRef={cameraRef} isResumeOpen={isResumeOpen} />;
};

// Preload the model
useGLTF.preload(HERO_3D_CONFIG.model.path);

export default Hero3DModelWithDevTools;
