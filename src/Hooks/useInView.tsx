
import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

const useInView = <T extends HTMLElement>(options: UseInViewOptions = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
          const isIntersecting = entry.isIntersecting;
          setInView(isIntersecting);

          // If triggerOnce is true and element is intersecting,
          // disconnect the observer
          if (options.triggerOnce && isIntersecting) {
            observer.disconnect();
          }
        },
        {
          threshold: options.threshold || 0,
        }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return { ref, inView };
};

export default useInView;