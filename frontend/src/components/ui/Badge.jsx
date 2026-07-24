import React from 'react';
import { cn } from './utils';

export const Badge = ({
  variant = 'default',
  size = 'sm',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-1 rounded-sm font-semibold transition-colors duration-150';

  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'border border-gray-200 bg-white text-success',
    error: 'border border-gray-200 bg-white text-error',
    warning: 'border border-gray-200 bg-white text-warning',
    info: 'border border-gray-200 bg-gray-50 text-gray-900',
    'min-order': 'border border-gray-200 bg-white text-gray-900 shadow-sm',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs leading-none',
    md: 'px-3 py-1.5 text-sm leading-none',
  };

  const componentClasses = cn(
    baseStyles,
    variants[variant] || variants.default,
    sizes[size] || sizes.sm,
    className,
  );

  return (
    <span className={componentClasses} {...props}>
      {variant === 'min-order' && (
        <svg className="size-3.5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )}
      {children}
    </span>
  );
};
