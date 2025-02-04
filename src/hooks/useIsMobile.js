// src/hooks/useIsMobile.js
import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint = 768) {
    // State to store whether the device is mobile or not
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Create a media query based on the specified breakpoint
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

        // Set the initial value
        setIsMobile(mediaQuery.matches);

        // Define a handler to update the state when the query result changes
        const handler = (event) => setIsMobile(event.matches);

        // Add the listener for media query changes
        mediaQuery.addEventListener("change", handler);

        // Clean up the event listener on component unmount
        return () => mediaQuery.removeEventListener("change", handler);
    }, [breakpoint]);

    return isMobile;
}