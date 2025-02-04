// src/components/MobileLayout.js
"use client" // uses client-side state

import Link from "next/link";

export default function DesktopLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header with logo and hamburger button */}
            <header className="bg-gray-800 p-4 flex items-center">
                <div className="font-bold text-xl text-white whitespace-nowrap">
                    Aman Jindal
                </div>
                {/* Navigation aligned right using ml-auto */}
                <ul className="ml-auto flex space-x-4">
                    <li>
                        <Link href="/" className="text-white hover:text-gray-300" onClick={() => setNavOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-300" onClick={() => setNavOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-white hover:text-gray-300" onClick={() => setNavOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-white hover:text-gray-300" onClick={() => setNavOpen(false)}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-gray-300" onClick={() => setNavOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </header>

            {/* Main content area */}
            <main className="flex-1 p-4">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center p-4">
                 © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </footer>           
        </div>
    );
}