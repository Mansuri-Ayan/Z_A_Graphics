import React from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { Skeleton } from './Skeleton';
import { cn } from './utils';

export const LazyVideo = ({
  src,
  poster,
  className = '',
  controls = true,
  autoPlay = false,
  muted = true,
  loop = false,
  rootMargin = '240px',
  ...props
}) => {
  const { ref, hasIntersected } = useIntersection({ rootMargin, triggerOnce: true });

  return (
    <div ref={ref} className={cn('relative overflow-hidden rounded-md bg-gray-100', className)}>
      {!hasIntersected && (
        <>
          {poster ? (
            <img
              src={poster}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          ) : (
            <Skeleton variant="image" className="h-full w-full rounded-none" />
          )}
          <div className="absolute inset-0 bg-gray-900/10" aria-hidden="true" />
        </>
      )}

      {hasIntersected && (
        <video
          className="h-full w-full object-cover"
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          poster={poster}
          preload="metadata"
          {...props}
        >
          <source src={src} />
        </video>
      )}
    </div>
  );
};
