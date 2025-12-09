
import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * COMPONENTE REVEAL ON SCROLL / COMPONENTE REVEAL ON SCROLL
 * ---------------------------------------------------------
 * [ES] Un wrapper que anima sus elementos hijos cuando entran en el viewport.
 *      Usa la API IntersectionObserver.
 * 
 * [PT] Um wrapper que anima seus elementos filhos quando entram na viewport.
 *      Usa a API IntersectionObserver.
 * 
 * Props:
 * - delay: Tiempo en ms para esperar antes de animar.
 * - className: Clases CSS para el contenedor.
 */
const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection.
        // entry.isIntersecting is true when element is in view.
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      // Toggles 'reveal-visible' class which controls opacity and transform in CSS
      className={`reveal-element ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;