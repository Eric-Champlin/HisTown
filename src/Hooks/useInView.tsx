
import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
    threshold?: number;
    triggerOnce?: boolean;
}

const useInView = <T extends HTMLElement>(options: UseInViewOptions = {}) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const currentElement = ref.current;
        if (!currentElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                setInView(isIntersecting);

                if (options.triggerOnce && isIntersecting) {
                    observer.disconnect();
                }
            },
            {
                threshold: options.threshold || 0,
            }
        );

        observer.observe(currentElement);

        return () => {
            observer.unobserve(currentElement);
        };
    }, [options.threshold, options.triggerOnce]);

    return { ref, inView };
};

export default useInView;