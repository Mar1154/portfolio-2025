// Site Configuration
export const SITE_CONFIG = {
    name: 'Marion Bailey',
    title: 'Marion Bailey - Portfolio',
    description: 'Lorem Ipsum',
    url: 'https://yourportfolio.com',
    author: 'Marion Bailey',
    email: 'noiramyeliab@gmail.com',
    // heroImage: '/images/my-3d-setup-with-me-gemini-2.png',
    heroImage: '/portfolio-2025/images/3d-setup-2.png',
    hero3dModel: '/portfolio-2025/models/3d-pc-setup.glb',
};

// 3D Model Configuration
export const HERO_3D_CONFIG = {
    // Responsive configurations for different screen sizes
    responsive: {
        // Mobile (< 768px)
        mobile: {
            model: {
                scale: [0.05, 0.05, 0.05],
                position: [-0.35, 0.22, 1],
                rotation: [0.00, 3.14, 0.00],
            },
            resumeView: {
                model: {
                    scale: [0.10, 0.10, 0.10],
                    position: [-0.07, 0.43, 1.85],
                    rotation: [0.00, 3.14, 0.00],
                },
                camera: {
                    position: [-0.79, 1.97, 3.32],
                },
            },
            camera: {
                position: [-1, 1.5, 3.5],
                fov: 50,
                near: 0.1,
                far: 1000,
                lookAt: [0, 3, 0],
            },
        },
        // Tablet (768px - 1024px)
        tablet: {
            model: {
                scale: [0.06, 0.06, 0.06],
                position: [0.3, -0.2, 1.1],
                rotation: [0.00, 3.14, 0.00],
            },
            resumeView: {
                model: {
                    scale: [0.12, 0.12, 0.12],
                    position: [0.7, -0.4, 1.6],
                    rotation: [0.00, 3.14, 0.00],
                },
                camera: {
                    position: [-0.06, 2, 3.7],
                },
            },
            camera: {
                position: [-1.2, 1.8, 3.6],
                fov: 47,
                near: 0.1,
                far: 1000,
                lookAt: [0, 3.5, 0],
            },
        },
        // Desktop (1024px - 1440px)
        desktop: {
            model: {
                scale: [0.07, 0.07, 0.07],
                position: [0.45, -0.1, 1.15],
                rotation: [0.00, 3.14, 0.00],
            },
            resumeView: {
                model: {
                    scale: [0.14, 0.14, 0.14],
                    position: [0.85, -0.35, 1.65],
                    rotation: [0.00, 3.14, 0.00],
                },
                camera: {
                    position: [-0.065, 2.1, 3.75],
                },
            },
            camera: {
                position: [-1.3, 1.9, 3.65],
                fov: 46,
                near: 0.1,
                far: 1000,
                lookAt: [0, 3.7, 0],
            },
        },
        // Large Desktop (>= 1440px) - Your current settings
        largeDesktop: {
            model: {
                scale: [0.08, 0.08, 0.08],
                position: [0.55, -0.02, 1.21],
                rotation: [0.00, 3.14, 0.00],
            },
            resumeView: {
                model: {
                    scale: [0.16, 0.16, 0.16],
                    position: [1.01, -0.32, 1.73],
                    rotation: [0.00, 3.14, 0.00],
                },
                camera: {
                    position: [-0.07, 2.21, 3.83],
                },
            },
            camera: {
                position: [-1.36, 2, 3.70],
                fov: 45,
                near: 0.1,
                far: 1000,
                lookAt: [0, 4, 0],
            },
        },
    },

    // Default/Fallback - Uses large desktop settings
    model: {
        path: '/portfolio-2025/models/3d-pc-setup.glb',
        scale: [0.08, 0.08, 0.08],
        position: [0.55, -0.02, 1.21],
        rotation: [0.00, 3.14, 0.00],
    },
    
    // Resume View Positions (when resume modal is open)
    resumeView: {
        model: {
            scale: [0.16, 0.16, 0.16],
            position: [1.01, -0.32, 1.73],
            rotation: [0.00, 3.14, 0.00],
        },
        camera: {
            position: [-0.07, 2.21, 3.83],
        },
    },

    videoView: {
        model: {
            scale: [0.16, 0.16, 0.16],
            position: [0.55, -0.02, 1.21],
            rotation: [0.00, 3.14, 0.00],
        },
        camera: {
            position: [-1.36, 2, 3.70],
        },
    },
    
    // Transition Settings
    transition: {
        duration: 1.2, // Duration in seconds
        easing: 'easeInOut', // 'linear', 'easeIn', 'easeOut', 'easeInOut'
    },
    
    // Camera
    camera: {
        position: [-1.36, 2, 3.70], // Initial camera position
        fov: 45, 
        near: 0.1, 
        far: 1000, 
        lookAt: [0, 4, 0],
    },
    
    // Lighting
    lighting: {
        ambient: {
            intensity: 0.5,
            color: '#ffffff',
        },
        directional: [
            {
                position: [10, 10, 5],
                intensity: 1,
                color: '#ffffff',
                castShadow: true,
            },
            {
                position: [-10, -10, -5],
                intensity: 0.3,
                color: '#ffffff',
                castShadow: false,
            },
        ],
        point: [
            {
                position: [0, 5, 0],
                intensity: 0.5,
                color: '#ffffff',
            },
        ],
    },
    
    // Environment Settings
    environment: {
        preset: 'studio', // 'studio', 'sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'city', 'park', 'lobby'
        background: false, 
    },
    
    // Controls Settings
    controls: {
        enableZoom: false,
        enablePan: false,
        enableRotate: true,
        autoRotate: false,
        autoRotateSpeed: 0.5,
        minPolarAngle: Math.PI / 3, // Minimum vertical angle
        maxPolarAngle: Math.PI / 2, // Maximum vertical angle
        minAzimuthAngle: -Infinity, // Minimum horizontal angle
        maxAzimuthAngle: Infinity, // Maximum horizontal angle
        dampingFactor: 0.05, // Smoothness of controls
        enableDamping: true,
    },
    
    // Animation Settings
    animation: {
        enabled: true,
        type: 'rotate', // 'sway', 'rotate', 'bounce', 'none'
        speed: 0.2,
        intensity: 0.1,
    },
    
    // Grid Helper 
    grid: {
        enabled: true, 
        size: 10, 
        divisions: 10, 
        color1: '#888888', 
        color2: '#444444', 
        position: [0, 0, 0], 
    },
    
    // Dev Mode 
    devMode: {
        enabled: true, 
        showTransformControls: true, 
        transformMode: 'translate', 
        showStats: false, 
        showCameraHelper: false, 
    },
};

// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

// Resume
export const RESUME_DOWNLOAD = "/portfolio-2025/Marion_Bailey_Resume.pdf";
export const RESUME_IMAGE = "/portfolio-2025/images/Bailey_Marion_Resume.jpg";


// Images
export const HERO_IMAGE = "public/images/my-3d-setup-with-me-gemini-2.png";

// Models
export const HERO_3D_MODEL = "public/models/3d-pc-setup.glb";

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
        image: '/portfolio-2025/images/projects/ai-konsulta-mockup-1.png',
        description: 'Developed AI-Konsulta for One-Rad Medical Clinic, located in Quezon City. This AI-powered clinic management system uses GPT-4o to streamline patient assessments and automate routine workflows. It helps clinic staff manage daily operations more efficiently and improves both staff productivity and patient experience.',
        tags: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma'],
        link: 'https://www.aikonsulta.com/',
        github: '#',
    },
    {
        id: 2,
        title: 'Whimsy Game Cafe',
        image: '/portfolio-2025/images/projects/whimsy-game-cafe-mockup-1.png',
        description: 'Created a responsive web application for Whimsy Game Cafe, located in Ortigas. The platform includes admin tools for table reservations, event management, and internal workflows. It enhances the cafe’s online presence while helping staff manage day-to-day operations more effectively.',
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        link: '#',
        github: '#',
    },
    {
        id: 3,
        title: 'About Japan',
        image: '/portfolio-2025/images/projects/about-japan-mockup-1.png',
        description: 'Created a simple informational website about Japan using HTML, CSS, and JavaScript as practice in front-end fundamentals.',
        tags: ['HTML & CSS', 'JavaScript',],
        link: 'https://oninsss.github.io/BigBoyz-AWD-FEUTECH-TW24/',
        github: '#',
    },
];

// Services Data
export const SERVICES = [
    {
        id: 1,
        title: 'UI/UX Design',
        description: 'Crafting intuitive and visually stunning user interfaces with a focus on user experience, accessibility, and modern design principles.',
    },
    {
        id: 2,
        title: 'Web Development',
        description: 'Building responsive, performant web applications using modern frameworks and technologies like React, Next.js, and Tailwind CSS.',
    },
];
