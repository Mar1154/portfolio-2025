import { motion as Motion } from 'motion/react';

const Card = ({ children, className = '', hover = false }) => {
  if (hover) {
    return (
      <Motion.div 
        className={`items-center ${className}`}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
        }}
      >
        {children}
      </Motion.div>
    );
  }
  
  return (
    <div className={`items-center transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
