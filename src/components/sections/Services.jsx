import { motion as Motion } from 'motion/react';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { SERVICES } from '../../constants';
import { fadeInUp, staggerContainer, scrollViewport } from '../../utils/animations';

const Services = () => {

  const getServiceIcon = (id) => {
    switch(id) {
      case 1:
        return (
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="relative py-28 lg:py-40 xl:py-56 bg-[#222222] text-white overflow-hidden">
      <Container>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Text Section */}
        <Motion.div 
          className="relative z-10 mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
        >
          <SectionTitle className="text-4xl sm:text-5xl md:text-6xl uppercase leading-tight sm:leading-snug md:leading-normal w-full max-w-xl xl:max-w-2xl mb-4">
            Services
          </SectionTitle>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl">
            Specialized in creating seamless digital experiences from concept to deployment
          </p>
        </Motion.div>

        <Motion.div 
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          {SERVICES.map((service, index) => (
            <Motion.div
              key={service.id}
              variants={fadeInUp}
            >
              <Card
                hover
                className="group relative p-8 md:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl flex flex-col justify-between min-h-[280px] md:min-h-[320px] overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                {/* Decorative Number */}
                <div className="absolute top-4 right-4 text-8xl md:text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  0{service.id}
                </div>

                {/* Icon */}
                <div className="mb-28">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            </Motion.div>
          ))}
        </Motion.div>

      </Container>
    </section>
  );
};

export default Services;
