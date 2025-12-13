const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    className = '', 
    href,
    onClick,
    type = 'button',
    ...props 
}) => {
    const baseStyles = 'cursor-pointer font-medium inline-block text-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
        primary: 'border-2 md:border-3 border-[#333333] bg-[#333333] text-white hover:brightness-150',
        secondary: 'border-2 md:border-3 border-[#333333] text-[#333333]',
        ghost: 'text-[#333333] hover:text-[#333333] hover:bg-gray-100',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs sm:text-sm ',
        md: 'px-4 py-2 text-sm sm:text-base',
        lg: 'px-5 py-2.5 text-xs sm:text-base md:px-6 md:py-3 md:text-base lg:px-8 lg:text-lg xl:text-xl',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
        <a href={href} className={classes} {...props}>
            {children}
        </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
