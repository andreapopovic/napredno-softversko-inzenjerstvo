import client from "@/lib/next-crud__client";
import { Databases, ID, Query } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

//Create Blog
async function createBlog(data: { title: string; content: string }) {
  try {
    const response = await database.createDocument(
      process.env.NEXT_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_APPWRITE_BLOGS_ID as string, // Collection ID
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.error("Error while publish blog", error);
    throw new Error("Failed while publish blog.");
  }
}

//Get Blogs
async function getBlog() {
  try {
    const response = await database.listDocuments(
      process.env.NEXT_APPWRITE_DATABASE_ID as string, // Database ID
      process.env.NEXT_APPWRITE_BLOGS_ID as string, // Collection ID
      [Query.orderDesc("$createdAt")]
    );
    return response.documents;
  } catch (error) {
    console.error("Error while getting blogs", error);
    throw new Error("Failed while getting blogs.");
  }
}

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();
    const data = { title, content };
    await createBlog(data);
    return NextResponse.json({ message: "Blog successfully created!" });
  } catch (error) {
    return NextResponse.json({ error: `Error:${error}` });
  }
}

export async function GET() {
  try {
    const blogs = await getBlog();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: `Error:${error}` });
  }
}
