// Site Configuration
export const SITE_CONFIG = {
    name: 'mar',
    title: 'mar',
    description: 'Lorem Ipsum',
    url: 'https://yourportfolio.com',
    author: 'Marion Bailey',
    email: 'noiramyeliab@gmail.com',
    // heroImage: '/images/my-3d-setup-with-me-gemini-2.png',
    heroImage: '/images/3d-setup-2.png'
};

// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

// Images
export const heroImage = "public/images/my-3d-setup-with-me-gemini-2.png";

// Social Links
export const SOCIAL_LINKS = [
    { 
        name: 'Instagram', 
        href: 'https://instagram.com/marbailey_/', 
        label: 'Instagram Profile',
        icon: 'instagram'
    },
    { 
        name: 'GitHub', 
        href: 'https://github.com/mar1154', 
        label: 'GitHub Profile',
        icon: 'github'
    },
    { 
        name: 'LinkedIn', 
        href: 'https://linkedin.com/in/marion-bailey', 
        label: 'LinkedIn Profile',
        icon: 'linkedin'
    },
    {
        name: 'Upwork',
        href: 'https://www.upwork.com/freelancers/~01d4c7f3e4b6f4e5c0',
        label: 'Upwork Profile',
        icon: 'upwork'
    }
];

// Skills
export const SKILLS = [
    'React',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'Git',
    'UI/UX',
];

// Projects Data
export const PROJECTS = [
    {
        id: 1,
        title: 'AI-Konsulta',
        image: '/images/projects/ai-konsulta-mockup-1.jpg',
        description: 'Lorem Ipsum dolor amet',
        tags: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma'],
        link: '#',
        github: '#',
    },
    {
        id: 2,
        title: 'Whimsy Game Cafe',
        image: '/images/projects/about-japan-mockup-1.jpg',
        description: 'Lorem Ipsum dolor amet',
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        link: '#',
        github: '#',
    },
    {
        id: 3,
        title: 'About Japan',
        image: '/images/projects/about-japan-mockup-1.jpg',
        description: 'Lorem Ipsum dolor amet',
        tags: ['HTML & CSS', 'JavaScript',],
        link: '#',
        github: '#',
    },
];

// Services Data
export const SERVICES = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Building responsive, high-performance websites and web applications tailored to your needs.',
        icon: '💻',
    },
    {
        id: 2,
        title: 'UI/UX Design',
        description: 'Creating intuitive and engaging user interfaces that provide exceptional user experiences.',
        icon: '🎨',
    },
    {
        id: 3,
        title: 'API Development',
        description: 'Developing robust and scalable backend services and RESTful APIs.',
        icon: '⚙️',
    },
    {
        id: 4,
        title: 'Consulting',
        description: 'Providing expert advice on technology stack, architecture, and best practices.',
        icon: '💡',
    },
];
