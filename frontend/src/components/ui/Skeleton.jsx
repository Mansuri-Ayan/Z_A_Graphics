import React from 'react';
import { cn } from './utils';

export const Skeleton = ({
  variant = 'block',
  width,
  height,
  count = 1,
  className = '',
  ...props
}) => {
  const style = {
    width,
    height,
  };
  const baseClasses = 'animate-pulse rounded bg-gray-200';

  if (variant === 'text') {
    const items = Array.from({ length: count });
    return (
      <div className={`flex flex-col gap-2 w-full ${className}`} {...props}>
        {items.map((_, index) => {
          const isLast = index === items.length - 1 && count > 1;
          const lineClasses = cn(
            baseClasses,
            'h-3',
            isLast ? 'w-2/3' : 'w-full',
          );
          return (
            <div
              key={index}
              className={lineClasses}
              style={isLast ? { height } : style}
            />
          );
        })}
      </div>
    );
  }

  if (variant === 'avatar') {
    return (
      <div
        className={cn(baseClasses, 'size-10 shrink-0 rounded-full', className)}
        style={style}
        {...props}
      />
    );
  }

  if (variant === 'image') {
    return <div className={cn(baseClasses, 'h-48 w-full rounded-md', className)} style={style} {...props} />;
  }

  if (variant === 'card') {
    return (
      <div 
        className={cn('flex w-full flex-col gap-3 rounded-md border border-gray-100 bg-brand-white p-4 shadow-sm', className)}
        {...props}
      >
        <div className={cn(baseClasses, 'h-36 w-full rounded-md')} style={style} />
        <div className={cn(baseClasses, 'h-4 w-2/3')} />
        <div className={cn(baseClasses, 'h-3 w-full')} />
        <div className={cn(baseClasses, 'h-3 w-1/3')} />
      </div>
    );
  }

  return <div className={cn(baseClasses, 'h-4 w-full', className)} style={style} {...props} />;
};
