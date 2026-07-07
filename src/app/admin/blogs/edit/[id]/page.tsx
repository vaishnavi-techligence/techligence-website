"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditBlogPage() {
  const params = useParams();
  const id = params?.id as string;

  const [title, setTitle] = useState("");
  const [tldr, setTldr] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const [isFetching, setIsFetching] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch("/api/blogs");
        const blogs = await res.json();
        const blog = blogs.find((b: any) => b.id === id);
        
        if (blog) {
          setTitle(blog.title || "");
          setTldr(blog.excerpt || "");
          setContent(blog.content || "");
          setImageUrl(blog.image || "");
        } else {
          alert("Blog not found.");
          router.push("/admin/blogs");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchBlog();
  }, [id, router]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      if (data.url) {
        setImageUrl(data.url);
      }
    } catch (err) {
      alert("Failed to upload image. Please try again or use a URL.");
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handlePublish = async () => {
    if (!title.trim()) {
      alert("Please enter a blog title.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/blogs", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          title,
          slug: title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ''),
          category: "General",
          excerpt: tldr,
          content,
          image: imageUrl,
          author: "Admin",
        }),
      });

      if (response.ok) {
        alert("Blog updated successfully!");
        router.push("/admin/blogs");
      } else {
        alert("Failed to update blog.");
      }
    } catch (error) {
      alert("An error occurred while updating.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isFetching) {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="robot-cockpit-dark min-h-screen bg-[#050816] text-white p-6 md:p-12 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-white transition-colors mb-4 flex items-center gap-2 text-sm uppercase tracking-wider font-semibold"
          >
            ← Back
          </button>
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-sm">
            Edit Story
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Update your blog content and insights.
          </p>
        </div>

        <div className="space-y-6 bg-slate-900/30 p-8 md:p-10 rounded-2xl shadow-2xl border border-white/5 relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Title</label>
            <input
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-600 text-lg font-medium"
              placeholder="e.g., The Future of AI in Robotics"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Banner Image URL or Upload</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                className="flex-1 p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-600"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <label className="cursor-pointer flex items-center justify-center px-6 py-4 rounded-xl bg-black/40 border border-white/10 hover:border-cyan-500 transition-all text-sm font-semibold text-cyan-500 whitespace-nowrap group">
                <svg className={`w-5 h-5 mr-2 ${isUploadingImage ? 'animate-bounce' : 'group-hover:-translate-y-1 transition-transform'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                {isUploadingImage ? "Uploading..." : "Upload File"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={isUploadingImage}
                />
              </label>
            </div>
            {imageUrl && (
              <div className="mt-4 rounded-xl overflow-hidden h-48 relative border border-white/10">
                <img src={imageUrl} alt="Banner Preview" className="object-cover w-full h-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">TL;DR (Excerpt)</label>
            <textarea
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-600 resize-none"
              rows={2}
              placeholder="A brief summary for the blog cards..."
              value={tldr}
              onChange={(e) => setTldr(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Content</label>
            <textarea
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-600 resize-none font-sans text-base leading-relaxed"
              rows={20}
              placeholder="The core content of your article..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="pt-6">
            <button
              onClick={handlePublish}
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {isSubmitting ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
