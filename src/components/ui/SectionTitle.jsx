const SectionTitle = ({ children, subtitle, className = '' }) => {
    return (
        <div className={`${className}`}>
        <h2 className="font-['Boldonse'] mb-4">
            {children}
        </h2>
        {subtitle && (
            <p className="text-lg max-w-2xl mx-auto">
            {subtitle}
            </p>
        )}
        </div>
    );
};

export default SectionTitle;
