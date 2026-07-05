import React, { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';

const SmoothScrollProvider = ({ children }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return null; // Wait for client hydration to check media query
  }

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis 
      root 
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothTouch: false, // Ensure native momentum scrolling on mobile
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
