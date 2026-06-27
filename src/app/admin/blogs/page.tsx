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
  const deleteBlog = async (id: string) => {
  const confirmDelete = confirm("Delete this blog?");

  if (!confirmDelete) return;

  const response = await fetch(`/api/blogs?id=${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    alert("Blog deleted successfully!");
  } else {
    alert("Failed to delete blog.");
  }
};
  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">
            Blog Management
          </h1>

          <Link
            href="/admin/blogs/new"
            className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-bold"
          >
            + Create Blog
          </Link>
        </div>
        <div className="space-y-4">
  {blogs.length === 0 ? (
    <div className="border border-white/10 rounded-xl p-10 text-center">
      No blogs available.
    </div>
  ) : (
    blogs.map((blog) => (
      <div
        key={blog.id}
        className="border border-white/10 rounded-xl p-6 flex justify-between items-center"
      >
        <div>
          <h2 className="text-2xl font-bold">{blog.title}</h2>

          <p className="text-gray-400 mt-2">
            {blog.excerpt}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>

<button
  onClick={() => deleteBlog(blog.id)}
  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
>
  Delete
</button>
      </div>
    ))
  )}
</div>

      </div>
    </main>
  );
}