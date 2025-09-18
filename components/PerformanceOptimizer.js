import { useEffect } from 'react';

export const usePerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize animations for better performance
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Disable heavy animations for users who prefer reduced motion
      document.documentElement.style.setProperty('--animation-duration', '0.01s');
    }

    // Preload critical resources
    const preloadFonts = () => {
      const fonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900',
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@100;200;300;400;500;600;700;800;900',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800'
      ];

      fonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = font;
        document.head.appendChild(link);
      });
    };

    // Defer non-critical resource loading
    const deferNonCritical = () => {
      setTimeout(() => {
        preloadFonts();
      }, 100);
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Batch scroll updates to improve performance
        ticking = false;
      };

      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    deferNonCritical();
    const cleanupScroll = optimizeScroll();

    return () => {
      cleanupScroll?.();
    };
  }, []);
};

// Image optimization component
export const OptimizedImage = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

// Intersection Observer hook for better performance
export const useIntersectionObserver = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold, rootMargin });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);
};