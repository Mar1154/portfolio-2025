import { useState, useEffect } from 'react';
import { AnimatePresence, motion as Motion } from 'motion/react';

const LoadingScreen = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Check if this is the first visit
        const hasVisited = sessionStorage.getItem('hasVisitedSite');
        const isFirstVisit = !hasVisited;

        let progressInterval;
        const minLoadTime = isFirstVisit ? 3500 : 800; // Longer on first visit
        const startTime = Date.now();
        let resourcesLoaded = false;

        // Count total images
        const images = document.querySelectorAll('img');
        const totalImages = images.length || 1;
        let imagesLoadedCount = 0;

        // Track image loading
        const imagePromises = Array.from(images).map((img) => {
        return new Promise((resolve) => {
            if (img.complete) {
            imagesLoadedCount++;
            resolve();
            } else {
            img.addEventListener('load', () => {
                imagesLoadedCount++;
                resolve();
            });
            img.addEventListener('error', () => {
                imagesLoadedCount++;
                resolve();
            });
            }
        });
        });

        // Document ready promise
        const documentReady = new Promise((resolve) => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('load', resolve);
        }
        });

        // Wait for minimum time on first visit
        const minTimePromise = new Promise(resolve => setTimeout(resolve, minLoadTime));

        // Animate progress smoothly
        progressInterval = setInterval(() => {
        setProgress((prev) => {
            const elapsedTime = Date.now() - startTime;
            const timeBasedProgress = (elapsedTime / minLoadTime) * 100;
            
            // Calculate resource loading progress
            const imageProgress = (imagesLoadedCount / totalImages) * 50;
            const docProgress = document.readyState === 'complete' ? 50 : 0;
            const resourceProgress = imageProgress + docProgress;

            if (isFirstVisit) {
            // On first visit: smooth, time-based progression
            // Can't exceed time-based progress until minimum time is reached
            const targetProgress = resourcesLoaded && elapsedTime >= minLoadTime 
                ? 100 
                : Math.min(timeBasedProgress, 95);
            
            return Math.min(prev + 0.8, targetProgress);
            } else {
            // On reload: faster, resource-based progression
            const targetProgress = resourcesLoaded 
                ? 100 
                : Math.min(timeBasedProgress, resourceProgress + 50);
            
            return Math.min(prev + 3, targetProgress);
            }
        });
        }, 30);

        // Wait for all resources and minimum time
        Promise.all([
        ...imagePromises,
        documentReady,
        minTimePromise
        ]).then(() => {
        resourcesLoaded = true;
        
        // Push to 100%
        const completeInterval = setInterval(() => {
            setProgress((prev) => {
            if (prev >= 100) {
                clearInterval(completeInterval);
                sessionStorage.setItem('hasVisitedSite', 'true');
                setTimeout(() => {
                setIsComplete(true);
                setTimeout(() => {
                    onLoadComplete?.();
                }, 1000);
                }, 200);
                return 100;
            }
            return prev + 3;
            });
        }, 30);
        });

        return () => {
        clearInterval(progressInterval);
        };
    }, [onLoadComplete]);

    return (
        <AnimatePresence>
        {!isComplete && (
            <Motion.div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >

                {/* Fluid rising animation */}
                <Motion.div
                    className="absolute bottom-0 left-0 right-0 bg-[#222222]"
                    initial={{ height: '0%' }}
                    animate={{ 
                    height: `${progress}%`,
                    }}
                    transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{
                    willChange: 'height'
                    }}
                >
                    {/* Wavy top edge */}
                    <Motion.div
                    className="absolute top-0 left-0 right-0 h-32"
                    style={{
                        background: 'linear-gradient(to bottom, #222222, transparent)',
                        filter: 'blur(20px)',
                    }}
                    animate={{
                        y: [-10, 10, -10],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    />
                </Motion.div>

                {/* Percentage Counter */}
                <Motion.div
                    className="relative z-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >   

                    <Motion.p
                        className="text-sm md:text-base mb-6 md:mb-10 tracking-widest uppercase transition-colors duration-300"
                        style={{
                            color: progress > 50 ? '#ffffff' : '#666666'
                        }}
                        >
                        Loading Experience
                    </Motion.p>

                    <Motion.h1
                    className="font-['Boldonse'] text-8xl md:text-9xl lg:text-[12rem] transition-colors duration-300"
                    style={{
                        color: progress > 50 ? '#ffffff' : '#222222'
                    }}
                    >
                    {Math.floor(progress)}%
                    </Motion.h1>
                    
                </Motion.div>
                

                {/* Drain effect when complete */}
                {progress === 100 && (
                    <Motion.div
                    className="absolute inset-0 bg-[#222222]"
                    initial={{ y: 0 }}
                    animate={{ y: '-100%' }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.76, 0, 0.24, 1]
                    }}
                    />
                )}
            </Motion.div>
        )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
