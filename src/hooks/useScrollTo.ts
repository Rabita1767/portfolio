import { useCallback } from "react";

// Custom hook to scroll to an element by its ID
export const useScrollToElement = () => {
    const scrollToElementById = useCallback((element: HTMLElement) => {
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return scrollToElementById;
};
