import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import { motion as Motion, AnimatePresence } from 'motion/react';
import { SITE_CONFIG, SOCIAL_LINKS, RESUME_DOWNLOAD, RESUME_IMAGE, HERO_3D_CONFIG } from '../../constants';
import { heroTitle, heroSubtitle, heroButtons } from '../../utils/animations';

import Button from '../ui/Button';
import Container from '../ui/Container';
import Hero3DModel, { DevPanel } from '../Hero3DModel';

const Hero = () => {
    const [isResumeAnimating, setIsResumeAnimating] = useState(false); // Controls 3D animation
    const [showResumeModal, setShowResumeModal] = useState(false); // Controls modal visibility
    const [showLeftSection, setShowLeftSection] = useState(true);
    const [zoom, setZoom] = useState(1);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    // Refs for 3D model dev mode
    const modelRef = useRef();
    const cameraRef = useRef();

    // Scroll to Projects Section
    const handleProjectsClick = (e) => {
        e.preventDefault();
        const target = document.querySelector('#projects');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Open Resume Modal with fade out animation
    const handleOpenResume = () => {
        // Immediate actions
        setShowLeftSection(false); // Fade out left section
        setIsResumeAnimating(true); // Start 3D camera movement
        
        // Wait for fade + delay, then show modal
        setTimeout(() => {
            setShowResumeModal(true);
            setZoom(1);
            setImageLoaded(false);
        }, 800); // 500ms fade out + 300ms delay
    };

    // Close Resume Modal
    const handleCloseResume = () => {
        // All immediate actions
        setShowResumeModal(false); // Close modal
        setIsResumeAnimating(false); // Move camera back
        setShowLeftSection(true); // Show text immediately
    };

    // Disable Interaction with Modal Background
    useEffect(() => {
        if (showResumeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showResumeModal]);

    return (
        <>
        {/* Dev Panel - Outside Canvas */}
        {HERO_3D_CONFIG.devMode?.enabled && HERO_3D_CONFIG.devMode?.showStats && (
            <DevPanel modelRef={modelRef} cameraRef={cameraRef} />
        )}
        
        <section id="home" className="relative h-screen flex items-end pb-12 md:items-center md:pb-0 w-full hero-gradient">
        
        {/* Layer 1 - 3D Model */}     
        <Canvas className="absolute top-0 left-0 w-full h-full pointer-events-auto">
            <Hero3DModel modelRef={modelRef} cameraRef={cameraRef} isResumeOpen={isResumeAnimating} />
        </Canvas>

        {/* Layer 2 */}
        <Container className="absolute top-0 left-0 h-full">

            {/* Left Section */} 
            <AnimatePresence>
            {showLeftSection && (
            <Motion.section 
                className="h-full flex flex-col justify-end md:justify-center md:w-3/5 lg:w-2/3 z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Text */}
                <Motion.h1 
                    className="font-['Boldonse'] text-center md:text-left md:-ml-1 mb-4 md:mb-6 2xl:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-[#333333]"
                    initial="hidden"
                    animate="visible"
                    variants={heroTitle}
                >
                    Hello, I'm Mar.
                </Motion.h1>
                <Motion.p 
                    className="text-center md:text-left mb-4 md:mb-8 2xl:mb-10 font-medium text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-[#333333]"
                    initial="hidden"
                    animate="visible"
                    variants={heroSubtitle}
                >
                    Front-end Developer & UI/UX Designer
                </Motion.p>

                {/* Buttons */}
                <Motion.div 
                    className="justify-center md:justify-start mb-8 md:mb-0 md:-ml-1 flex gap-2 md:gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={heroButtons}
                >
                    <Button 
                        variant="secondary" 
                        size="lg"
                        className="hover:bg-[#333333] hover:text-[#F1F1F1]"
                        onClick={handleProjectsClick}
                    >
                        View Projects
                    </Button>
                    <Button 
                        variant="primary" 
                        size="lg"
                        onClick={handleOpenResume}
                    >
                        View Resume
                    </Button>
                </Motion.div>
            </Motion.section>
            )}
            </AnimatePresence>

            {/* Socials */}
            {/* <Motion.div 
                className="md:absolute md:bottom-20 flex justify-center items-center gap-2 md:gap-4"
                initial="hidden"
                animate="visible"
                variants={heroSocials}
            >
                {SOCIAL_LINKS.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#333333] hover:text-[#555555] transition-colors duration-300"
                        aria-label={social.label}
                    >
                        {social.icon === 'instagram' && (
                            <svg className="md:-ml-1 w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                            </svg>
                        )}
                        {social.icon === 'github' && (
                            <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        )}
                        {social.icon === 'linkedin' && (
                            <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        )}
                    </a>
                ))}
            </Motion.div> */}


            {/* Element */}
            {/* <Motion.div 
                className="absolute top-0 right-0 md:right-[96px] h-full w-full px-4 md:w-2/5 flex items-start md:items-center justify-center md:justify-end z-0 pointer-events-none"
                initial="hidden"
                animate="visible"
                variants={heroImage}
            >
                <img
                    src={SITE_CONFIG.heroImage}
                    alt="Hero Image"
                    className="mt-24 md:mt-0 w-2xl xl:w-4xl h-auto object-contain"
                />
            </Motion.div> */}

        </Container>

        </section>

        {/* Resume Modal */}
        <AnimatePresence>
            {showResumeModal && (
                <>
                    {/* Backdrop */}
                    <Motion.div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={handleCloseResume}
                    />
                    
                    {/* Modal */}
                    <Motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div 
                            className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-end px-6 py-3 border-b border-gray-200">
                                
                                {/* Close Button */}
                                <button
                                    onClick={handleCloseResume}
                                    className="cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                                    aria-label="Close resume"
                                >
                                    <svg className="w-6 h-6 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                            </div>

                            {/* Resume Preview */}
                            <div className="flex-1 overflow-auto p-6 md:p-8">
                                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-inner flex justify-center items-center min-h-[500px]">
                                    {!imageLoaded && (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#333333]"></div>
                                        </div>
                                    )}
                                    <img
                                        src={RESUME_IMAGE}
                                        style={{
                                            transform: `scale(${zoom})`,
                                            transformOrigin: 'center center',
                                            transition: 'transform 0.2s ease',
                                            display: imageLoaded ? 'block' : 'none'
                                        }}
                                        className="max-w-full h-auto"
                                        alt="Resume Preview"
                                        onLoad={() => setImageLoaded(true)}
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6 border-t border-gray-200">

                                {/* ZOOM BUTTONS */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                                        className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={zoom <= 0.5}
                                        aria-label="Zoom out"
                                    >
                                        <svg className="w-5 h-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                                        </svg>
                                    </button>
                                    <span className="text-sm font-medium text-[#333333] min-w-[3.5rem] text-center">
                                        {Math.round(zoom * 100)}%
                                    </span>
                                    <button
                                        onClick={() => setZoom(Math.min(2, zoom + 0.25))}
                                        className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={zoom >= 2}
                                        aria-label="Zoom in"
                                    >
                                        <svg className="w-5 h-5 text-[#333333]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setZoom(1)}
                                        className="ml-2 px-3 py-1.5 text-sm text-[#333333] hover:bg-gray-100 rounded-full font-medium transition-colors"
                                    >
                                        Reset
                                    </button>
                                </div>

                                <div className="flex gap-2 md:gap-4 w-full md:w-auto">
                                    <button
                                        onClick={handleCloseResume}
                                        className="cursor-pointer flex-1 md:flex-none px-4 md:px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#333333] rounded-full transition-colors font-medium text-sm md:text-base"
                                    >
                                        Close
                                    </button>
                                    <a
                                        href={RESUME_DOWNLOAD}
                                        download="Marion_Bailey_Resume.pdf"
                                        className="flex items-center justify-center gap-2 flex-1 md:flex-none px-4 md:px-6 py-2.5 bg-[#333333] hover:bg-[#555555] text-white rounded-full transition-colors font-medium text-sm md:text-base"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        <span className="hidden sm:inline">Download Resume</span>
                                        <span className="sm:hidden">Download</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </Motion.div>
                </>
            )}
        </AnimatePresence>
        </>
    );
};

export default Hero;
