import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const lenis = useLenis();
  const prevPathname = useRef(pathname);
  const prevKey = useRef(key);

  useEffect(() => {
    // Ignore if neither path nor hash/key changed
    if (prevKey.current === key) return;

    if (prevPathname.current !== pathname) {
      // Path changed (cross-page navigation)
      if (hash) {
        // Has an anchor link: wait for DOM to render the new page, then smoothly scroll
        setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(hash, { offset: -80 }); // offset for fixed navbar
          } else {
            const element = document.querySelector(hash);
            if (element) {
              // Get offset position
              const y = element.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        }, 150);
      } else {
        // Standard route change: instantly reset scroll to top
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }
      prevPathname.current = pathname;
    } else {
      // Path did not change, but location updated (e.g. same-page hash link)
      if (hash) {
        if (lenis) {
          lenis.scrollTo(hash, { offset: -80 });
        } else {
          const element = document.querySelector(hash);
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }
    }
    
    prevKey.current = key;
  }, [pathname, hash, key, lenis]);

  return null;
};

export default ScrollToTop;
