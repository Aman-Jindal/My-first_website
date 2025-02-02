// app/blog/[slug]/page.js
import { notFound } from "next/navigation"

// Dummy function to fetch post data based on slug
// Replace with your data-fetching logic (e.g., from Markdown files or an API).

function getPostData(slug) {
    const posts = {
        "hello-world": {
            title: "Hello World",
            content: "Welcome to my first blog post. This is an introduction to my blog where I share my experiences and insights.",
        },
        "nextjs-tutorial": {
            title: "Getting Started with Next.js",
            content: "In this tutorial, I'll show you how to build a web application using Next.js step by step.",
        },
    };
    return posts[slug] || null;
}

export default function Post({ params }) {
    const { slug } = params;
    const post = getPostData(slug);

    if (!post) return notFound();

    return (
        <div>
            <h1 className="text-3x1 font-bold mb-4">{post.title}</h1>
            <article className="prose">
                <p>{post.content}</p>
            </article>
        </div>
    );
}
