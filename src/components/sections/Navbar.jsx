import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import Container from '../ui/Container';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navRect = document.querySelector('nav')?.getBoundingClientRect();
            
            if (!navRect) return;

            const navCenter = navRect.top + navRect.height / 2;

            // Check which section the navbar is currently over
            for (let section of sections) {
                const rect = section.getBoundingClientRect();
                
                if (rect.top <= navCenter && rect.bottom >= navCenter) {
                    const sectionId = section.getAttribute('id');
                    
                    // Projects and Services sections have dark backgrounds (white text)
                    // Hero, About, Contact have light backgrounds (black text)
                    setIsDark(sectionId === 'projects' || sectionId === 'services');
                    break;
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        
        // Initial check after a small delay
        setTimeout(handleScroll, 100);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <>
            <Motion.nav 
                className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md transition-colors"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Container>
                    <div className="flex justify-between items-center py-6 2xl:py-8">
                        <a 
                            href="#home" 
                            onClick={(e) => handleNavClick(e, '#home')}
                            className={`text-2xl 2xl:text-3xl font-semibold transition-colors ${
                                isDark ? 'text-white' : 'text-[#333333]'
                            }`}
                        >
                            mar.
                        </a>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`2xl:text-xl cursor-pointer rounded-full px-1 pl-4 py-1 flex items-center uppercase font-medium transition-all md:pl-4.5 ${
                                isDark ? 'text-white' : 'text-[#333333]'
                            } ${
                                isOpen 
                                    ? 'bg-white/20 backdrop-blur-sm' 
                                    : isDark 
                                        ? 'hover:bg-white/10' 
                                        : 'hover:bg-black/10'
                            }`}
                        >
                            Menu
                            <span className={`p-1.5 ml-2.5 2xl:p-2 2xl:ml-3 rounded-full transition-colors ${
                                isDark ? 'bg-white/10' : 'bg-black/10'
                            }`}>
                                <svg className="w-4 h-4 2xl:w-5 2xl:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="9" y1="12" x2="21" y2="12" />
                                    <line x1="15" y1="18" x2="21" y2="18" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </Container>
            </Motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <Motion.div 
                        className="fixed right-6 top-20 2xl:top-30 z-40 w-[calc(100vw-3rem)] md:w-96 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden md:right-24"
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        <nav className="p-6">
                            <ul className="flex flex-col gap-2">
                                {NAV_LINKS.map((link, index) => (
                                    <Motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="text-right block text-xl 2xl:text-2xl font-medium text-[#1a1a1a] hover:bg-gray-200 rounded-xl px-6 py-3 transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </Motion.li>
                                ))}
                            </ul>
                        </nav>
                    </Motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
