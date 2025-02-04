// app/layout.js
import "./globals.css"; // Make sure Tailwind CSS is imported
import ResponsiveLayout from "../components/ResponsiveLayout";


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
        <ResponsiveLayout>{children}</ResponsiveLayout>
      </body>
    </html>
  );
}

