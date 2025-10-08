// hooks/useScrollReveal.js (versão simplificada)
import { useEffect, useRef } from 'react';

const useScrollReveal = (config = {}) => {
  const elementRef = useRef(null);
  const scrollRevealInitialized = useRef(false);

  useEffect(() => {
    // Verifica se estamos no cliente
    if (typeof window === 'undefined') return;

    const initializeScrollReveal = async () => {
      if (!scrollRevealInitialized.current && elementRef.current) {
        try {
          const ScrollReveal = (await import('scrollreveal')).default;
          
          const sr = ScrollReveal();
          const defaultConfig = {
            duration: 1500,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: false,
            interval: 0,
            ...config
          };

          sr.reveal(elementRef.current, defaultConfig);
          scrollRevealInitialized.current = true;
        } catch (error) {
          console.warn('ScrollReveal não pôde ser carregado:', error);
        }
      }
    };

    initializeScrollReveal();

    // Cleanup function
    return () => {
      scrollRevealInitialized.current = false;
    };
  }, [config]);

  return elementRef;
};

export default useScrollReveal;