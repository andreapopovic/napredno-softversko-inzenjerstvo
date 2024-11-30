"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Blog = {
  $id: string;
  title: string;
  content: string;
};
export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      setisLoading(true);
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed while getting blogs.");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setisLoading(false);
      }
    };
    getBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      setBlogs((blogs) => blogs.filter((blog) => blog.$id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading blogs...</p>
      ) : (
        blogs?.map((blog, index) => (
          <div className="p-2 rounded-md border-b flex-col" key={index}>
            <div className="font-semibold mb-4">{blog.title}</div>
            <div className="mb-4 ">{blog.content}</div>
            <div className="flex gap-4 justify-end ">
              <Link
                href={`/edit/${blog.$id}`}
                className="bg-slate-200 p-2 px-4 rounded-md tracking-widest text-sm"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(blog.$id)}
                className="bg-red-600 text-white p-2 px-4 rounded-md tracking-widest text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
