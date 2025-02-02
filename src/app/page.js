// app/page.js
import Link from "next/link";

export default function Home() {
    return (
        <div className="text-center">
            <h1 className="text-4x1 font-bold mb-4"> Welcome to My Personal Website</h1>
            <p className="mb-6">
                Hi, I&apos;m Aman Jindal, a passionate software engineer. Explore my portfolio, read my blog, or get in touch.
            </p>
            <div className="space-x-4">
                <Link
                    href="/projects"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Projects
                </Link>
                <Link
                    href="/blog"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Blog
                </Link>
            </div>
        </div>
    );
}
