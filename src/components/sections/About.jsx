import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion as Motion } from 'motion/react';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import { fadeInUp, scrollViewport } from '../../utils/animations';

import { ABOUT_3D_CONFIG } from '../../constants';
import About3DModel, {DevPanel} from '../About3DModel';

const About = () => {

    const modelRef = useRef();
    const cameraRef = useRef();

    return (
        <>
        {/* Dev Panel - Outside Canvas */}
        {ABOUT_3D_CONFIG.devMode?.enabled && ABOUT_3D_CONFIG.devMode?.showStats && (
            <DevPanel modelRef={modelRef} cameraRef={cameraRef} />
        )}

        <section id="about" className="py-48 bg-[#FEFEFE] text-[#333333]">
        
        {/* Layer 1 - 3D Model */}     
        <Canvas className="absolute top-0 left-0 w-full h-full pointer-events-auto">
            <About3DModel modelRef={modelRef} cameraRef={cameraRef} />
        </Canvas>
        
        {/* Layer 2 */}
        <Container>

            <Motion.div 
                className="flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={scrollViewport}
                variants={fadeInUp}
            >
                
                <SectionTitle className="mb-0 text-2xl md:text-5xl lg:text-6xl text-center leading-10 md:leading-24 lg:leading-28">
                    Designing with Intention,<br/>Building with Precision
                </SectionTitle>

                <Motion.p
                    className="text-center text-gray-600 text-base md:text-xl max-w-5xl leading-relaxed"
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    I'm a passionate front-end developer and UI/UX designer dedicated to crafting beautiful, 
                    functional digital experiences. With a keen eye for detail and a love for clean code, 
                    I transform creative visions into reality through thoughtful design and modern web technologies.
                </Motion.p>

            </Motion.div>
            
        </Container>
        </section>
        </>
    );
};

export default About;
