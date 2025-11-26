const Card = ({ children, className = '', hover = false }) => {
  const hoverStyles = hover ? '' : '';
  
  return (
    <div className={`items-center transition-all duration-200 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
