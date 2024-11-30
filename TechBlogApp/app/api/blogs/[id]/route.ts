import client from "@/lib/next-crud__client";
import { Databases } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function getSpecificBlog(id: string) {
  try {
    const blog = await database.getDocument(
      process.env.NEXT_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_APPWRITE_BLOGS_ID as string, // Collection ID
      id
    );
    return blog;
  } catch (error) {
    console.error("Error while getting blog", error);
    throw new Error("Failed while getting blog.");
  }
}
async function deleteSpecificBlog(id: string) {
  try {
    const blog = await database.deleteDocument(
      process.env.NEXT_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_APPWRITE_BLOGS_ID as string, // Collection ID
      id
    );
    return blog;
  } catch (error) {
    console.error("Error while deleting blog", error);
    throw new Error("Failed while deleting blog.");
  }
}

async function updateSpecificBlog(
  id: string,
  data: { title: string; content: string }
) {
  try {
    const blog = await database.updateDocument(
      process.env.NEXT_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_APPWRITE_BLOGS_ID as string, // Collection ID
      id,
      data
    );
    return blog;
  } catch (error) {
    console.error("Error while editing blog", error);
    throw new Error("Failed while editing blog.");
  }
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const blog = await getSpecificBlog(id);
    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json({ error: `Error:${error}` });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    await deleteSpecificBlog(id);
    return NextResponse.json({ message: "Blog successfully deleted." });
  } catch (error) {
    return NextResponse.json({ error: `Error:${error}` });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const blog = await req.json();
    await updateSpecificBlog(id, blog);
    return NextResponse.json({ message: "Blog successfully updated." });
  } catch (error) {
    return NextResponse.json({ error: `Error:${error}` });
  }
}
