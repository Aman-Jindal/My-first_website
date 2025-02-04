// src/components/MobileLayout.js
"use client" // uses client-side state

import { useState } from "react";
import Link from "next/link";

export default function MobileLayout({ children }) {
    // State to control sidebar visibility
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header with logo and hamburger button */}
            <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
                <div className="font-bold text-xl whitespace-nowrap">
                    Aman Jindal
                </div>
                <button
                    onClick={() => setNavOpen(!navOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {navOpen ? "Close" : "Menu"}
                </button>
            </header>

            {/* Main container: sidebar (navigation) and main content */}
            <div className="flex flex-1 transition-all duration-300">
                {/* Sidebar navigation - only shown on mobile when toggled */}
                <aside
                    className={`bg-gray-800 text-white p-4 trasiion-all duration-300
                        fixed insert-y-0 left-0 w-64 transform
                        ${navOpen ? "translate-x-0" :  "-translate-x-full"}
                        md:hidden z-20`}
                >
                    <nav>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="block hover:text-gray-300" onClick={() => setNavOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="block hover:text-gray-300" onClick={() => setNavOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="block hover:text-gray-300" onClick={() => setNavOpen(false)}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="block hover:text-gray-300" onClick={() => setNavOpen(false)}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block hover:text-gray-300" onClick={() => setNavOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main content area */}
                <main
                    className={`
                        flex-1 p-4 transition-all duration-300
                        ${navOpen ? "ml-64" : "ml-0"}
                        `}
                >
                    {children}
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center p-4">
                 © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </footer>           
        </div>
    );
}