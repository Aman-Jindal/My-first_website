// app/blog/page.js

import Link from "next/link";

const posts = [
    {
        slug: "hello-world",
        title: "hello-world",
        excerpt: "An introduction to my blog.",
    },
    {
        slug: "nextjs-tutorial",
        title: "Getting Started with Next.js",
        excerpt: "A beginner's guide to Next.js.",
    },
];

export default function Blog() {
    return (
        <div>
            <h1 className="text-3x1 font-bold mb-4">Blog</h1>
            {posts.map((post, index) => (
                <div key={index} className="mb-6 border-b pb-4">
                    <h2 className="text-2x1 font-semibold">
                        <Link href={`/blog/${post.slug}`} className="hover:text-blue-500">
                            {post.title}
                        </Link>
                    </h2>
                    <p>{post.excerpt}</p>
                </div>
            ))}
        </div>
    );
}
