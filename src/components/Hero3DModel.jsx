import { useGLTF } from '@react-three/drei';
import { HERO_3D_CONFIG } from '../constants';
import Model3D, { DevPanel } from './Model3D';

const Hero3DModel = ({ modelRef, cameraRef, isResumeOpen }) => {
    return (
        <Model3D 
            config={HERO_3D_CONFIG}
            modelRef={modelRef}
            cameraRef={cameraRef}
            transitionState={isResumeOpen ? 'resume' : 'default'}
            enablePreloader={true}
        />
    );
};

// Preload the model
useGLTF.preload(HERO_3D_CONFIG.model.path);

// Export DevPanel for use in Hero.jsx
export { DevPanel };
export default Hero3DModel;
