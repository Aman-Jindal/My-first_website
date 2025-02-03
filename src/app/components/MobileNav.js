// components/MobileNav.js
"use client"; // This file uses client-side interactivity
import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative container mx-auto flex justify-between p-4 flex-nowrap">
            {/* Logo */}
            <div className="font-bold text-xl text-white whitespace-nowrap p-4">Aman Jindal</div>

            {/* Hamburger button for mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white focus:outline-none"
            >
                {/* Simple text toggle; you can replace this with an icon */}
                {isOpen ? "Close" : "Menu"}
            </button>

            {/* Navigation links */}
            <ul
                className={`
                    ${isOpen ? "block" : "hidden"} 
                    absolute top-full left-0 w-full bg-gray-800 whitespace-nowrap
                    md:static md:flex md:flex-row md:space-x-4 md:items-center md:ml-auto
                    `}
            >
                <li>
                    <Link href="/" className="block p-4 hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="block p-4 hover:text-gray-300">About</Link>
                </li>
                <li>
                    <Link href="/blog" className="block p-4 hover:text-gray-300">Blog</Link>
                </li>
                <li>
                    <Link href="/projects" className="block p-4 hover:text-gray-300">Projects</Link>
                </li>
                <li>
                    <Link href="/contact" className="block p-4 hover:text-gray-300">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

