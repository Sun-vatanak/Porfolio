import { useEffect, useRef, useCallback } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    once = true,
    delay = 0,
  } = options;
  const elementRef = useRef<HTMLElement>(null);

  const addAnimationClass = useCallback(
    (element: Element) => {
      if (delay > 0) {
        setTimeout(() => {
          element.classList.add("animate-in");
        }, delay);
      } else {
        element.classList.add("animate-in");
      }
    },
    [delay],
  );

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
            addAnimationClass(entry.target);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("animate-in");
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
  }, [threshold, rootMargin, once, addAnimationClass]);

  return elementRef;
}
