import React, { useEffect, useState } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { Skeleton } from './Skeleton';
import { cn } from './utils';

export const LazyImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  rootMargin = '200px',
  ...props
}) => {
  const { ref, hasIntersected } = useIntersection({ rootMargin, triggerOnce: true });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden rounded-md bg-gray-100', className)}
      style={{ width, height }}
    >
      {(!hasIntersected || !isLoaded) && (
        <Skeleton variant="image" className="absolute inset-0 h-full w-full rounded-none" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 px-4 text-center text-sm text-gray-500">
          Image unavailable
        </div>
      ) : (
        <img
          src={hasIntersected ? src : undefined}
          alt={alt}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};
