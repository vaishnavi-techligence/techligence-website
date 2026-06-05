import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.json");

// Helper function to read enquiries
function getEnquiries() {
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
  } catch (error) {
    console.error("Failed to read enquiries:", error);
    return [];
  }
}

// Helper function to write enquiries
function saveEnquiries(data: any) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  const enquiries = getEnquiries();
  return Response.json(enquiries);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const enquiries = getEnquiries();
    const newEnquiry = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      subject,
      message,
      status: "unread", // unread, read, resolved
      createdAt: new Date().toISOString()
    };

    enquiries.unshift(newEnquiry); // Add to the beginning
    saveEnquiries(enquiries);

    return Response.json(newEnquiry, { status: 201 });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;
    
    if (!id || !status) {
      return Response.json({ error: "Missing id or status" }, { status: 400 });
    }

    const enquiries = getEnquiries();
    const idx = enquiries.findIndex((e: any) => e.id === id);
    if (idx === -1) {
      return Response.json({ error: "Enquiry not found" }, { status: 404 });
    }

    enquiries[idx].status = status;
    saveEnquiries(enquiries);

    return Response.json(enquiries[idx]);
  } catch (error) {
    console.error("Error updating enquiry:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const id = searchParams.get("id");
    
    if (!id) {
      return Response.json({ error: "Missing id parameter" }, { status: 400 });
    }

    const enquiries = getEnquiries();
    const filtered = enquiries.filter((e: any) => e.id !== id);
    
    if (enquiries.length === filtered.length) {
      return Response.json({ error: "Enquiry not found" }, { status: 404 });
    }

    saveEnquiries(filtered);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
