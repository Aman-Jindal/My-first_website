// app/layout.js
import "./globals.css"; // Make sure Tailwind CSS is imported
import MobileNav from "./components/MobileNav";


export const metadata = {
  title: "My Portfolio",
  description: "Personal website and portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
      <body className="min-h-screen flex flex-col">
        {/* Header / Navigation */}
        <header className="bg-gray-800 text-white p-4">
          <MobileNav />
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

