import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';

const About = () => {

    return (
        <section id="about" className="py-48 bg-[#FFF] text-[#333333]">
        <Container>

            {/* Element */}

            <div className="">
                
                <SectionTitle className="md:text-6xl mb-12 text-center leading-24">
                    Designing with Intention,<br/>Building with Precision
                </SectionTitle>

                <div className="space-y-3 sm:text-lg">
                    <p>
                        
                    </p>
                </div>

            </div>
        </Container>
        </section>
    );
};

export default About;
