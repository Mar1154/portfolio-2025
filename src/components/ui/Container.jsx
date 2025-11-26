const Container = ({ children, className = '' }) => {
    return (
        <div className={`w-full px-4 sm:px-6 lg:px-24 ${className}`}>
        {children}
        </div>
    );
};

export default Container;
