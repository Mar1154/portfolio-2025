import { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NAV_LINKS, SITE_CONFIG } from '../../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
        <Container>
            <div className="flex justify-between items-center h-20 py-6">
                {/* Logo */}
                <a href="#home" className="text-2xl font-semibold text-[#333333] mix-blend-difference" aria-label="Portfolio Home">
                    mar.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer uppercase font-medium pl-6 py-2 text-[#333333] transition-colors"
                    >
                        Menu
                    </button>

                    {/* Icon */}
                    <span className="p-1 ml-3 text-2xl rounded-full flex items-center justify-center" >
                        {/* Upside down stair icon hamburger */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="9" y1="12" x2="21" y2="12" />
                            <line x1="15" y1="18" x2="21" y2="18" />
                        </svg>
                    </span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden px-4 py-2 border-2 md:border-3 border-gray-900 rounded-full text-gray-900 text-sm "
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    Menu
                </button>
            </div>
        </Container>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
            <Container>
                <div className="py-4 space-y-2">
                {NAV_LINKS.map((link) => (
                    <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                    >
                    {link.name}
                    </a>
                ))}
                </div>
            </Container>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
