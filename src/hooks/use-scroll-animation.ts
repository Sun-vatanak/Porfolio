import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -100px 0px",
    once = true,
    delay = 0,
  } = options;
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a delay before starting animations
            setTimeout(() => {
              // Find all children with scroll-animation classes and animate them
              const animatedElements = entry.target.querySelectorAll(
                ".scroll-animation, .scroll-animation-left, .scroll-animation-right, .scroll-animation-scale",
              );

              animatedElements.forEach((el, index) => {
                setTimeout(() => {
                  el.classList.add("animate-in");
                  el.classList.add("visible");
                }, index * 150); // Longer stagger for better effect
              });

              // Also animate the container if it has animation classes
              if (
                entry.target.classList.contains("scroll-animation") ||
                entry.target.classList.contains("scroll-animation-left") ||
                entry.target.classList.contains("scroll-animation-right") ||
                entry.target.classList.contains("scroll-animation-scale")
              ) {
                entry.target.classList.add("animate-in");
                entry.target.classList.add("visible");
              }
            }, delay);

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            const animatedElements = entry.target.querySelectorAll(
              ".scroll-animation, .scroll-animation-left, .scroll-animation-right, .scroll-animation-scale",
            );
            animatedElements.forEach((el) => {
              el.classList.remove("animate-in");
              el.classList.remove("visible");
            });

            if (
              entry.target.classList.contains("scroll-animation") ||
              entry.target.classList.contains("scroll-animation-left") ||
              entry.target.classList.contains("scroll-animation-right") ||
              entry.target.classList.contains("scroll-animation-scale")
            ) {
              entry.target.classList.remove("animate-in");
              entry.target.classList.remove("visible");
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay]);

  return elementRef;
}
