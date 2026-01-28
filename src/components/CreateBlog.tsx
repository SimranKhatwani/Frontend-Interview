import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CreateBlog = () => {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: ["FINANCE"],
    description: "",
    coverImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    content: "",
  });

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setFormData({
        title: "",
        category: ["FINANCE"],
        description: "",
        coverImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        content: "",
      });
      setShowForm(false);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.content) {
      mutation.mutate({
        ...formData,
        date: new Date().toISOString(),
      });
    }
  };

  return (
    <div className="mb-8">
      {!showForm ? (
        <Button onClick={() => setShowForm(true)} className="bg-blue-600 hover:bg-blue-700">
          + Add New Blog
        </Button>
      ) : (
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Blog title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Short description"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Full blog content"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {mutation.isPending ? "Creating..." : "Create Blog"}
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowForm(false)}
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CreateBlog;
