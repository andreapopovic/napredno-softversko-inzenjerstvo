"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PublishPage() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [error, setError] = useState(""); // Error state

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      setError("All fields are required.");
      return;
    }
    setError("");
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Something went wrong while creating new blog.");
    }
    router.push("/");
  };

  return (
    <div>
      <h1 className="font-bold text-l mb-5">Share Your Ideas - Add new blog</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border rounded-md px-4 py-1"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          placeholder="Content"
          className="py-1 px-4 border rounded-md resize-none"
        ></textarea>
        <button
          className="border border-blue-700 bg-white text-blue-700 rounded-md mt-5"
          type="submit"
        >
          Publish
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}
