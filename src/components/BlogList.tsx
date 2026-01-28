import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/blogs";
import BlogCard from "./BlogCard";

const BlogList = ({
  onSelect,
  selectedId,
}: {
  onSelect: (id: number) => void;
  selectedId: number | null;
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    retry: 3,
    retryDelay: 1000,
  });

  useEffect(() => {
    if (data?.length && selectedId === null) {
      onSelect(Number(data[0].id));
    }
  }, [data, selectedId, onSelect]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600 font-semibold">Error loading blogs</p>
        <p className="text-sm text-red-500 mt-1">{error?.message}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-700">No blogs available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onSelect={onSelect}
          isActive={Number(blog.id) === selectedId}
        />
      ))}
    </div>
  );
};

export default BlogList;
