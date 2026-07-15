"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050816] font-sans selection:bg-cyan-500 selection:text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Discover the latest trends, technologies, and stories from our experts. Stay ahead of the curve with our in-depth articles.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-600"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-white/10">
              <div className="w-16 h-16 bg-cyan-950/40 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">No blogs found</h2>
              <p className="text-gray-400">Check back later for new stories and updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group flex flex-col bg-[#050816] rounded-3xl overflow-hidden border border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <Link href={`/blogs/${blog.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-slate-900/50">
                    {blog.image ? (
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
                        <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-black/60 backdrop-blur-sm text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full border border-cyan-500/20">
                        {blog.category || 'General'}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex items-center text-sm text-gray-400 mb-4 font-medium">
                      <time dateTime={blog.createdAt}>
                        {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{blog.author || 'Techligence Team'}</span>
                    </div>

                    <Link href={`/blogs/${blog.slug}`} className="block mb-4">
                      <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                    </Link>

                    <p className="text-gray-400 line-clamp-3 mb-6 flex-1">
                      {blog.excerpt}
                    </p>

                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center font-semibold text-cyan-400 hover:text-cyan-300 group/link mt-auto"
                    >
                      Read Full Article
                      <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}