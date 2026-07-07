"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [tldr, setTldr] = useState("");
  const [abstract, setAbstract] = useState("");
  const [body, setBody] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const router = useRouter();

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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug: title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ''),
          category: "General",
          excerpt: tldr,
          content: `${abstract}\n\n${body}\n\n${conclusion}`,
          image: imageUrl,
          author: "Admin",
        }),
      });

      if (response.ok) {
        alert("Blog published successfully!");
        router.push("/admin/blogs");
      } else {
        alert("Failed to publish blog.");
      }
    } catch (error) {
      alert("An error occurred while publishing.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Craft a New Story
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Share the latest insights, updates, and solutions with your audience.
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
            <label className="text-sm font-semibold text-gray-300 ml-1">Abstract</label>
            <textarea
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-600 resize-none"
              rows={4}
              placeholder="Introduction to the topic..."
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Main Body</label>
            <textarea
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-600 resize-none"
              rows={12}
              placeholder="The core content of your article..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Conclusion</label>
            <textarea
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-600 resize-none"
              rows={4}
              placeholder="Final thoughts..."
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
            />
          </div>

          <div className="pt-6">
            <button
              onClick={handlePublish}
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Publishing..." : "Publish Blog Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}