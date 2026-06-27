import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "blogs.json");

// Read blogs
function getBlogs() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    return [];
  }

  try {
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content || "[]");
  } catch {
    return [];
  }
}

// Save blogs
function saveBlogs(data: any) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET all blogs
export async function GET() {
  return Response.json(getBlogs());
}

// Create blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      slug,
      category,
      excerpt,
      content,
      image,
      author,
    } = body;

    if (!title || !slug) {
      return Response.json(
        { error: "Title and slug are required." },
        { status: 400 }
      );
    }

    const blogs = getBlogs();

    const newBlog = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      slug,
      category,
      excerpt,
      content,
      image,
      author,
      createdAt: new Date().toISOString(),
    };

    blogs.unshift(newBlog);

    saveBlogs(blogs);

    return Response.json(newBlog, { status: 201 });
  } catch {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete blog
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const id = searchParams.get("id");

    const blogs = getBlogs();

    const updated = blogs.filter((b: any) => b.id !== id);

    saveBlogs(updated);

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Update blog
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();

    const blogs = getBlogs();

    const index = blogs.findIndex((b: any) => b.id === body.id);

    if (index === -1) {
      return Response.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    blogs[index] = {
      ...blogs[index],
      ...body,
    };

    saveBlogs(blogs);

    return Response.json(blogs[index]);
  } catch {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}