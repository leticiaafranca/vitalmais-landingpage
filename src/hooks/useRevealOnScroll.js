import React from 'react';

export default function useRevealOnScroll() {
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.mc-reveal'));
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const onLoadElements = elements.filter((element) => element.classList.contains('mc-reveal--onload'));
    const onScrollElements = elements.filter((element) => !element.classList.contains('mc-reveal--onload'));

    if (onLoadElements.length > 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          onLoadElements.forEach((element) => element.classList.add('is-visible'));
        });
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    onScrollElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
