import { useGLTF } from '@react-three/drei';
import { ABOUT_3D_CONFIG } from '../constants';
import Model3D, { DevPanel } from './Model3D';

const About3DModel = ({ modelRef, cameraRef, isResumeOpen }) => {
    return (
        <Model3D 
            config={ABOUT_3D_CONFIG}
            modelRef={modelRef}
            cameraRef={cameraRef}
            transitionState={isResumeOpen ? 'resume' : 'default'}
            enablePreloader={true}
        />
    );
};

// Preload the model
useGLTF.preload(ABOUT_3D_CONFIG.model.path);

// Export DevPanel for use in About.jsx
export { DevPanel };
export default About3DModel;
