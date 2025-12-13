import { motion as Motion } from 'motion/react';
import Container from '../ui/Container';
import { SOCIAL_LINKS } from '../../constants';
import { fadeInUp, staggerContainerFast, scrollViewport } from '../../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] text-white py-8 md:py-16 lg:py-20 rounded-t-[24px] md:rounded-t-[36px] lg:rounded-t-[64px]">
      <Container>
        <Motion.div 
          className="flex flex-col gap-8 sm:gap-10 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainerFast}
        >
          
          {/* Top Section - Logo and Social Links */}
          <Motion.div 
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8 pb-8 sm:pb-10 md:pb-12 border-b border-gray-700"
            variants={fadeInUp}
          >
            {/* Logo/Name */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">mar.</div>

            {/* Social Links */}
            <nav aria-label="Social media links">
              <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm sm:text-base md:text-lg hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>
          </Motion.div>

          {/* Bottom Section - Copyright and Email */}
          <Motion.div 
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
            variants={fadeInUp}
          >
            <div className="text-[#F1F1F1] text-xs sm:text-sm">
              © {currentYear} Marion Bailey. All rights reserved.
            </div>
            
            <a 
              href="mailto:noiramyeliab@gmail.com" 
              className="text-xs sm:text-sm text-[#F1F1F1] hover:text-white transition-colors duration-300"
            >
              noiramyeliab@gmail.com
            </a>
          </Motion.div>

        </Motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
