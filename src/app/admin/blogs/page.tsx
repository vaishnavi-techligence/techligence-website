"use client";

import Link from "next/link";

export default function BlogsPage() {
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

        <div className="border border-white/10 rounded-xl p-10 text-center">
          No blogs available.
        </div>

      </div>
    </main>
  );
}