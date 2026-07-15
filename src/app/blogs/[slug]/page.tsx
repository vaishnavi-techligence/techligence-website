import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const DATA_FILE = path.join(process.cwd(), "data", "blogs.json");

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let blogs = [];
  try {
    blogs = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (e) {
    console.error("Error reading blogs data", e);
  }

  const blog = blogs.find((b: any) => b.slug === slug);

  if (!blog) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#050816] flex items-center justify-center font-sans">
          <div className="text-center p-12 bg-slate-900/30 rounded-3xl border border-white/10 max-w-lg w-full mx-4">
            <h1 className="text-4xl font-bold text-white mb-4">Blog not found</h1>
            <p className="text-gray-400 mb-8">The article you are looking for does not exist or has been removed.</p>
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-200 bg-cyan-600 border border-transparent rounded-xl hover:bg-cyan-500"
            >
              Return to Blogs
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] font-sans selection:bg-cyan-500 selection:text-white pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <div className="mb-10">
            <Link
              href="/blogs"
              className="inline-flex items-center text-sm font-semibold text-cyan-600 hover:text-cyan-700 group mb-8 transition-colors"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all articles
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-cyan-950/40 text-cyan-400 text-sm font-bold rounded-full border border-cyan-500/20 uppercase tracking-wider">
                {blog.category || 'Techligence Blog'}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              {blog.title}
            </h1>

            <div className="flex items-center p-4 rounded-2xl bg-slate-900/30 border border-white/10 mb-10 w-fit">
              <div className="w-12 h-12 bg-cyan-900/50 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg mr-4 border border-cyan-500/30">
                {(blog.author || 'T')[0].toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{blog.author || 'Techligence Team'}</p>
                <p className="text-sm text-gray-400">
                  Published on {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          {blog.image && (
            <div className="w-full aspect-[21/9] md:aspect-[16/7] bg-slate-900/50 rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-sm relative group">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          )}

          <div className="prose prose-lg prose-invert prose-cyan max-w-none text-gray-300">
            {blog.excerpt && (
              <div className="p-8 bg-slate-900/20 rounded-3xl border border-white/10 shadow-sm mb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
                <h2 className="text-xl font-bold text-white mt-0 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Key Takeaways
                </h2>
                <p className="text-xl leading-relaxed text-gray-400 font-medium m-0">
                  {blog.excerpt}
                </p>
              </div>
            )}

            <div 
              className="text-lg leading-relaxed space-y-6 text-gray-300"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Share this article</h3>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-slate-900/50 hover:bg-cyan-900/30 hover:text-cyan-400 text-gray-400 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-slate-900/50 hover:bg-blue-900/30 hover:text-blue-400 text-gray-400 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}