import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    once = true,
  } = options;
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial scroll animation class if not present
    if (
      !element.classList.contains("scroll-animation") &&
      !element.classList.contains("scroll-animation-left") &&
      !element.classList.contains("scroll-animation-right") &&
      !element.classList.contains("scroll-animation-scale")
    ) {
      element.classList.add("scroll-animation");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all children with scroll-animation classes and animate them
            const animatedElements = entry.target.querySelectorAll(
              ".scroll-animation, .scroll-animation-left, .scroll-animation-right, .scroll-animation-scale",
            );

            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-in");
              }, index * 100); // Stagger the animations
            });

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            const animatedElements = entry.target.querySelectorAll(
              ".scroll-animation, .scroll-animation-left, .scroll-animation-right, .scroll-animation-scale",
            );
            animatedElements.forEach((el) => {
              el.classList.remove("animate-in");
            });
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
  }, [threshold, rootMargin, once]);

  return elementRef;
}
