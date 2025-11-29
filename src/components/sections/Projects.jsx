import { useState } from 'react';
import { motion as Motion } from 'motion/react';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { PROJECTS } from '../../constants';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scrollViewport } from '../../utils/animations';

const Projects = () => {
  const [isGridView, setIsGridView] = useState(window.innerWidth < 768);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (projectId) => {
    setExpandedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 lg:py-40 xl:py-56 bg-[#222] text-[#FFFFFF]">
      <Container>

        {/* Text Section */}
        <Motion.div 
          className="mb-12 sm:mb-16 md:mb-20 xl:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeInUp}
        >
          <SectionTitle className="text-4xl sm:text-5xl md:text-6xl uppercase leading-tight sm:leading-snug md:leading-normal w-full max-w-xl xl:max-w-2xl">
            Featured Works
          </SectionTitle>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 xl:gap-0 md:justify-between md:items-start">
            <h6 className="text-base sm:text-lg md:text-xl xl:text-2xl max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
              Featured projects across web apps, mobile apps, and prototypes, highlighting practical solutions and functional design.
            </h6>

            {/* View Toggle - Hidden on mobile */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => setIsGridView(true)}
                className={`cursor-pointer px-4 sm:px-5 md:px-6 xl:px-8 py-2 sm:py-2.5 md:py-3 xl:py-4 rounded-l-full border-2 transition-colors duration-300 ${
                  isGridView 
                    ? 'bg-[#FFFFFF] text-[#333333] border-[#FFFFFF]' 
                    : 'bg-transparent text-[#FFFFFF] border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#333333]'
                }`}
                aria-label="Grid View"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>

              <button
                onClick={() => setIsGridView(false)}
                className={`cursor-pointer px-4 sm:px-5 md:px-6 xl:px-8 py-2 sm:py-2.5 md:py-3 xl:py-4 rounded-r-full border-2 transition-colors duration-300 ${
                  !isGridView 
                    ? 'bg-[#FFFFFF] text-[#333333] border-[#FFFFFF]' 
                    : 'bg-transparent text-[#FFFFFF] border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#333333]'
                }`}
                aria-label="List View"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </Motion.div>

        {/* List View - Desktop only */}
        {!isGridView && (
          <div className="hidden md:flex w-full flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
            {PROJECTS.map((project, index) => (
              <Motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={scrollViewport}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <Card 
                  className={`flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-start`}
                  hover
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="shadow-2xl shadow-[rgba(255,255,255,0.05)] w-full lg:w-3/5 xl:max-w-5xl aspect-[16/9] object-cover rounded-2xl md:rounded-3xl bg-white flex-shrink-0" 
                  />
                  
                  <div className={`flex flex-col flex-1 place-self-center`}>
                    <div className="flex flex-col">
                      <h3 className={`font-['Boldonse'] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl uppercase leading-tight mb-2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-gray-300 text-sm sm:text-base md:text-lg mb-3 ${!expandedCards[project.id] ? 'line-clamp-2' : ''} ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        {project.description}
                      </p>

                      {/* See More/Less Button */}
                      {project.description.length > 100 && (
                        <button
                          onClick={() => toggleCard(project.id)}
                          className={`text-white hover:text-gray-300 text-sm font-medium ${expandedCards[project.id] ? 'mb-4' : 'mb-6'} transition-colors flex items-center gap-1 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}
                        >
                          {expandedCards[project.id] ? 'See Less' : 'See More'}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${expandedCards[project.id] ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}

                      {/* Tags - Show when expanded */}
                      {expandedCards[project.id] && (
                        <Motion.div 
                          className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                          ))}
                        </Motion.div>
                      )}
                    </div>

                    <Button
                      variant="secondary"
                      size="md"
                      className={`px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 md:py-3 w-fit border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#333333] text-sm sm:text-base ${index % 2 === 0 ? 'lg:place-self-end' : 'lg:place-self-start'}`}
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                    </Button>
                  </div>

                </Card>
              </Motion.div>
            ))}
          </div>
        )}

        {/* Grid View - Always visible on mobile, conditional on desktop */}
        <Motion.div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 ${!isGridView ? 'md:hidden' : ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          {PROJECTS.map((project) => (
            <Motion.div
              key={project.id}
              variants={fadeInUp}
            >
              <Card 
                className="flex flex-col items-start mb-6 sm:mb-8 md:mb-10"
                hover
              >
                <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl mb-6 md:mb-10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-[16/9] object-cover bg-white transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                
                <div className="flex flex-col flex-1 w-full">
                  <h3 className="font-['Boldonse'] text-xl sm:text-2xl md:text-2xl xl:text-3xl mb-2 sm:mb-3 uppercase">
                    {project.title}
                  </h3>
                  <p className={`text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 ${!expandedCards[project.id] ? 'line-clamp-3' : ''}`}>
                    {project.description}
                  </p>

                  {/* See More/Less Button */}
                  {project.description.length > 100 && (
                    <button
                      onClick={() => toggleCard(project.id)}
                      className="text-white hover:text-gray-300 text-sm font-medium mb-3 sm:mb-4 transition-colors text-left flex items-center gap-1"
                    >
                      {expandedCards[project.id] ? 'See Less' : 'See More'}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedCards[project.id] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Tags - Show when expanded */}
                  {expandedCards[project.id] && (
                    <Motion.div 
                      className="flex flex-wrap gap-2 mb-4 sm:mb-5 md:mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </Motion.div>
                  )}

                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full px-6 sm:px-7 md:px-8 py-1.5 sm:py-2 w-fit border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#333333] text-sm sm:text-base mt-auto"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                  </Button>
                </div>
              </Card>
            </Motion.div>
          ))}
        </Motion.div>

      </Container>
    </section>
  );
};

export default Projects;
