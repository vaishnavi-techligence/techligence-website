"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const deleteBlog = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this blog? This action cannot be undone.");

    if (!confirmDelete) return;

    const response = await fetch(`/api/blogs?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
      // Optional: Add a nice toast notification here instead of alert
    } else {
      alert("Failed to delete blog.");
    }
  };

  return (
    <div className="robot-cockpit-dark min-h-screen bg-[#050816] text-white p-6 md:p-12 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-sm mb-2">
              Blog Management
            </h1>
            <p className="text-gray-400 text-lg">Manage your published stories and insights.</p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-600 border border-transparent rounded-xl hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
          >
            <span className="mr-2 text-xl leading-none">+</span> Create New Blog
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="border border-white/5 bg-slate-900/30 backdrop-blur-sm rounded-2xl p-16 text-center shadow-xl">
            <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No blogs published yet</h3>
            <p className="text-gray-400 max-w-sm mx-auto mb-8">Get started by creating your first blog post to share updates with your visitors.</p>
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              Write a blog post <span className="ml-2">→</span>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all duration-300 hover:shadow-2xl hover:border-white/10 relative overflow-hidden"
              >
                {/* Glow accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex gap-6 items-start w-full md:w-auto">
                  {blog.image ? (
                    <div className="hidden md:block w-32 h-24 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-black/40">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                    </div>
                  ) : (
                    <div className="hidden md:flex w-32 h-24 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-black/40 items-center justify-center">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wider">No Image</span>
                    </div>
                  )}
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full uppercase tracking-wider">
                        {blog.category || 'General'}
                      </span>
                      <p className="text-xs text-gray-500 font-medium">
                        {new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-1">{blog.title}</h2>
                    <p className="text-gray-400 line-clamp-2 max-w-2xl text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                  <Link
                    href={`/admin/blogs/edit/${blog.id}`}
                    className="flex-1 md:flex-none px-6 py-2.5 bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-200 border border-blue-500/20 hover:border-blue-500 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="flex-1 md:flex-none px-6 py-2.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl font-semibold transition-all duration-200 border border-red-500/20 hover:border-red-500 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}