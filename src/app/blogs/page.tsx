"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <main className="min-h-screen bg-white p-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Latest Blogs
        </h1>

        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-xl p-6 mb-6"
            >
              <h2 className="text-3xl font-bold">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-3">
                {blog.excerpt}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>

<Link
  href={`/blogs/${blog.slug}`}
  className="inline-block mt-5 bg-cyan-500 text-white px-5 py-2 rounded"
>
  Read More
</Link>
            </div>
          ))
        )}

      </div>
    </main>
  );
}