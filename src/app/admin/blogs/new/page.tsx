"use client";

import { useState } from "react";

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [tldr, setTldr] = useState("");
  const [abstract, setAbstract] = useState("");
  const [body, setBody] = useState("");
  const [conclusion, setConclusion] = useState("");

const handlePublish = async () => {
  if (!title.trim()) {
    alert("Please enter a blog title.");
    return;
  }

  const response = await fetch("/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      category: "General",
      excerpt: tldr,
      content: `${abstract}\n\n${body}\n\n${conclusion}`,
      image: "",
      author: "Admin",
    }),
  });

  if (response.ok) {
    alert("Blog published successfully!");

    setTitle("");
    setTldr("");
    setAbstract("");
    setBody("");
    setConclusion("");
  } else {
    alert("Failed to publish blog.");
  }
};

  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Create Blog
        </h1>

        <div className="space-y-6">

          <input
            className="w-full p-4 rounded-lg bg-[#101826] border border-gray-700"
            placeholder="Blog Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            className="w-full p-4 rounded-lg bg-[#101826] border border-gray-700"
            rows={3}
            placeholder="TL;DR"
            value={tldr}
            onChange={(e)=>setTldr(e.target.value)}
          />

          <textarea
            className="w-full p-4 rounded-lg bg-[#101826] border border-gray-700"
            rows={5}
            placeholder="Abstract"
            value={abstract}
            onChange={(e)=>setAbstract(e.target.value)}
          />

          <textarea
            className="w-full p-4 rounded-lg bg-[#101826] border border-gray-700"
            rows={15}
            placeholder="Body"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
          />

          <textarea
            className="w-full p-4 rounded-lg bg-[#101826] border border-gray-700"
            rows={5}
            placeholder="Conclusion"
            value={conclusion}
            onChange={(e)=>setConclusion(e.target.value)}
          />

          <button
            onClick={handlePublish}
            className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-bold"
          >
            Publish Blog
          </button>

        </div>

      </div>
    </main>
  );
}