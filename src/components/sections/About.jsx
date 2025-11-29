import { motion as Motion } from 'motion/react';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { fadeInUp, scaleIn, scrollViewport } from '../../utils/animations';

const About = () => {

    return (
        <section id="about" className="py-48 bg-[#FEFEFE] text-[#333333]">
        <Container>

            {/* Element */}

            <Motion.div 
                className="flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={scrollViewport}
                variants={fadeInUp}
            >
                
                <SectionTitle className="mb-6 text-2xl md:text-5xl text-center leading-12 md:leading-20">
                    Designing with Intention,<br/>Building with Precision
                </SectionTitle>

                <Motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    variants={scaleIn}
                >
                    <Button
                        variant="primary"
                        size="lg"
                        className="px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 md:py-3 w-fit border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white text-sm sm:text-base"
                        onClick={() => window.open('https://drive.google.com/file/d/1a2b3c4D5EfGhIjKlMnOpQrStUvWxYz/view?usp=sharing', '_blank')}
                    >
                        Lorem Ipsum
                    </Button>
                </Motion.div>

            </Motion.div>
        </Container>
        </section>
    );
};

export default About;
