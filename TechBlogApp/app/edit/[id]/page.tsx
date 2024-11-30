"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";

export default function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params); // Razrešavamo Promise za params
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [error, setError] = useState(""); // Error state
  const router = useRouter();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${resolvedParams.id}`);
        if (!response.ok) {
          throw new Error("Failed while loading this blog.");
        }
        const data = await response.json();

        setFormData({ title: data.blog.title, content: data.blog.content });
      } catch (error) {
        setError(`Failed while loading this blog: ${error}`);
      }
    };
    getBlog();
  }, [resolvedParams.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation logic
    if (!formData.title || !formData.content) {
      setError("All fields are required.");
      return;
    }
    setError("");
    const response = await fetch(`/api/blogs/${resolvedParams.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Something went wrong while editing this blog.");
    }
    router.push("/");
  };

  return (
    <div>
      <h1 className="font-bold text-l mb-5">Edit blog</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border rounded-md px-4 py-1"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          rows={4}
          placeholder="Content"
          className="py-1 px-4 border rounded-md resize-none"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        <button className="border border-blue-700 bg-white text-blue-700 rounded-md mt-5">
          Edit
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}
