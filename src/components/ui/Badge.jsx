const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
