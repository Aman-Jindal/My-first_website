// src/components/ResponsiveLayout.js
"use client"; // This component uses the useIsMobile hook, which requires client-side rendering

import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import useIsMobile from "../hooks/useIsMobile";

export default function ResponsiveLayout({ children }) {
    const isMobile = useIsMobile(768); // using 768px as the breakpoint

    if (typeof window !== "undefined" && isMobile === undefined) {
        return null;
    }

    return isMobile ? (
        <MobileLayout>{children}</MobileLayout>
    ) : (
        <DesktopLayout>{children}</DesktopLayout>
    );
}