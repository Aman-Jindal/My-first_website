// app/layout.js
import "./globals.css"; // Make sure Tailwind CSS is imported
import Link from "next/link";

export const metadata = {
  title: "My Portfolio",
  description: "Personal website and portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header / Navigation */}
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <div className="font-bold text-xl">Aman Jindal</div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © {new Date().getFullYear()} Aman Jindal. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

