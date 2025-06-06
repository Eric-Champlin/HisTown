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
          setInView(entry.isIntersecting);
        },
        {
          threshold: options.threshold || 0,
          triggerOnce: options.triggerOnce || false,
        }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return { ref, inView };
};

export default useInView;