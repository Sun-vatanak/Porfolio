import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.2,
    rootMargin = "0px 0px -100px 0px",
    once = true,
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add a simple fallback for immediate visibility
    const fallbackTimer = setTimeout(() => {
      const allAnimatedElements = element.querySelectorAll(
        ".scroll-animation, .scroll-animation-left, .scroll-animation-right, .scroll-animation-scale, .scroll-animation-rotate, .scroll-animation-bounce",
      );
      allAnimatedElements.forEach((el) => {
        el.classList.add("animate-in");
      });
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            "Element intersecting:",
            entry.isIntersecting,
            entry.target,
          );

          if (entry.isIntersecting) {
            clearTimeout(fallbackTimer);

            // Find and animate all elements with animation classes
            const animatedElements = entry.target.querySelectorAll(
              ".scroll-animation, .scroll-animation-left, .scroll-animation-right, .scroll-animation-scale, .scroll-animation-rotate, .scroll-animation-bounce",
            );

            console.log("Found animated elements:", animatedElements.length);

            // Animate each element with elegant stagger
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-in");
                console.log("Added animate-in to:", el);
              }, index * 200); // Slower stagger for more elegant reveal
            });

            // Animate the container itself if it has animation classes
            const containerClasses = [
              "scroll-animation",
              "scroll-animation-left",
              "scroll-animation-right",
              "scroll-animation-scale",
              "scroll-animation-rotate",
              "scroll-animation-bounce",
            ];
            const hasAnimationClass = containerClasses.some((cls) =>
              entry.target.classList.contains(cls),
            );

            if (hasAnimationClass) {
              entry.target.classList.add("animate-in");
              console.log("Added animate-in to container:", entry.target);
            }

            if (once) {
              observer.unobserve(entry.target);
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
      clearTimeout(fallbackTimer);
    };
  }, [threshold, rootMargin, once]);

  return elementRef;
}
