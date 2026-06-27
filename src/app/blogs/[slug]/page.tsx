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

  const blogs = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));

  const blog = blogs.find((b: any) => b.slug === slug);

  if (!blog) {
    return (
      <div className="p-20 text-center text-3xl">
        Blog not found
      </div>
    );
  }
return (
  <>
    <Navbar />

    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-16">

        <Link
          href="/blogs"
          className="text-cyan-600 font-semibold hover:underline"
        >
          ← Back to Blogs
        </Link>

        <p className="text-cyan-600 font-semibold uppercase tracking-widest mt-6">
          Techligence Blog
        </p>

        <h1 className="text-5xl font-bold mt-4">
          {blog.title}
        </h1>

        <p className="text-gray-500 mt-3">
          By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        <hr className="my-10" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            TL;DR
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            {blog.excerpt}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Article
          </h2>

          <div className="text-lg leading-9 whitespace-pre-line text-gray-800">
            {blog.content}
          </div>
        </section>

      </div>
    </main>

    <Footer />
  </>
);
}