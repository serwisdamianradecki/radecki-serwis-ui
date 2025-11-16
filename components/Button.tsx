import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 btn-hover';
  
  const variants = {
    primary: 'bg-primary text-button-text hover:bg-primary-600 active:bg-primary-700 focus:ring-primary shadow-md',
    secondary: 'bg-accent text-text-main hover:bg-accent-dark hover:text-button-text active:bg-accent-dark/90 focus:ring-accent shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-button-text active:bg-primary-700 focus:ring-primary shadow-sm',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
