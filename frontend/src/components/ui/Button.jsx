import React from 'react';
import { cn } from './utils';

export const Button = React.forwardRef(({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  children,
  type = 'button',
  fullWidth = false,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white disabled:pointer-events-none';

  const variants = {
    primary: 'bg-brand-black text-white hover:bg-gray-800 active:bg-gray-900',
    secondary: 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 active:bg-gray-100',
    outline: 'border border-gray-300 bg-transparent text-gray-900 hover:border-brand-black hover:bg-gray-50 active:bg-gray-100',
    ghost: 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100',
    danger: 'bg-error text-white hover:bg-red-700 active:bg-red-800',
  };

  const sizes = {
    sm: 'min-h-8 px-3 text-xs',
    md: 'min-h-10 px-4 text-sm',
    lg: 'min-h-12 px-6 text-base',
  };

  const isDisabled = disabled || loading;
  const disabledStyles = 'cursor-not-allowed opacity-50';

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        fullWidth && 'w-full',
        isDisabled && disabledStyles,
        className,
      )}
      {...props}
    >
      {loading && (
        <svg
          className="size-4 animate-spin text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      <span className={cn(loading && 'opacity-80')}>{children}</span>
    </button>
  );
});

Button.displayName = 'Button';
