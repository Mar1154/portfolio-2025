import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { PROJECTS } from '../../constants';

const Projects = () => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 lg:py-40 xl:py-56 bg-[#222] text-[#FFFFFF]">
      <Container>

        {/* Text Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 xl:mb-24">
          <SectionTitle className="text-4xl sm:text-5xl md:text-6xl uppercase leading-tight sm:leading-snug md:leading-normal w-full max-w-xl xl:max-w-2xl">
            Featured Works
          </SectionTitle>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 xl:gap-0 md:justify-between md:items-start">
            <h6 className="text-base sm:text-lg md:text-xl xl:text-2xl max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </h6>

            {/* View Toggle - Hidden on mobile */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => setIsGridView(true)}
                className={`px-4 sm:px-5 md:px-6 xl:px-8 py-2 sm:py-2.5 md:py-3 xl:py-4 rounded-l-full border-2 transition-colors duration-300 ${
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
                className={`px-4 sm:px-5 md:px-6 xl:px-8 py-2 sm:py-2.5 md:py-3 xl:py-4 rounded-r-full border-2 transition-colors duration-300 ${
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
        </div>

        {/* List View - Desktop only */}
        {!isGridView && (
          <div className="hidden md:flex w-full flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
            {PROJECTS.map((project, index) => (
              <Card 
                className={`flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} 
                key={project.id} 
                hover
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="shadow-2xl shadow-[rgba(255,255,255,0.05)] w-full lg:w-3/5 xl:max-w-5xl aspect-[16/9] object-cover rounded-2xl md:rounded-3xl bg-white flex-shrink-0" 
                />
                
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className={`font-['Boldonse'] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl uppercase leading-20 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-gray-300 text-sm sm:text-base md:text-lg ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {project.description}
                    </p>
                    {/* <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div> */}
                  </div>

                  <Button
                    variant="secondary"
                    size="md"
                    className={`mt-12 px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 md:py-3 w-fit border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#333333] text-sm sm:text-base ${index % 2 === 0 ? 'lg:place-self-end' : 'lg:place-self-start'}`}
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                  </Button>
                </div>

              </Card>
            ))}
          </div>
        )}

        {/* Grid View */}
        {isGridView && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {PROJECTS.map((project) => (
              <Card 
                className="flex flex-col items-start mb-6 sm:mb-8 md:mb-10" 
                key={project.id} 
                hover
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[16/9] object-cover rounded-2xl md:rounded-3xl bg-white mb-6 md:mb-10" 
                />
                
                <div className="flex flex-col flex-1">
                  <h3 className="font-['Boldonse'] text-xl sm:text-2xl md:text-2xl xl:text-3xl mb-2 sm:mb-3 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 md:mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    size="md"
                    className="px-6 sm:px-7 md:px-8 py-1.5 sm:py-2 w-fit border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#333333] text-sm sm:text-base mt-auto"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* List View - Desktop only */}
        {!isGridView && (
          <div className="hidden md:flex w-full flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
            {PROJECTS.map((project, index) => (
              <Card 
                className={`flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} 
                key={project.id} 
                hover
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="shadow-2xl shadow-[rgba(255,255,255,0.05)] w-full lg:w-3/5 xl:max-w-5xl aspect-[16/9] object-cover rounded-2xl md:rounded-3xl bg-white flex-shrink-0" 
                />
                
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className={`font-['Boldonse'] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl uppercase leading-20 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-gray-300 text-sm sm:text-base md:text-lg ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className={`flex flex-col gap-4 sm:gap-5 md:gap-6 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    <Button
                      variant="secondary"
                      size="md"
                      className="px-6 sm:px-7 md:px-8 py-1.5 sm:py-2 w-fit border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#222] text-sm sm:text-base"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                    </Button>
                  </div>

                </div>
              </Card>
            ))}
          </div>
        )}

      </Container>
    </section>
  );
};

export default Projects;
