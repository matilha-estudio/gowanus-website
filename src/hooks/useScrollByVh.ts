import { useCallback } from "react";

export const useScrollByVh = () => {
    const scrollByVh = useCallback(() => {
        const vh = window.innerHeight;
        window.scrollBy({
            top: vh,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return scrollByVh;
};