import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../api/blogs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, ThumbsUp, MessageCircle } from "lucide-react";

const categoryColors: Record<string, string> = {
  FINANCE: "bg-blue-100 text-blue-700",
  TECH: "bg-purple-100 text-purple-700",
  CAREER: "bg-green-100 text-green-700",
  EDUCATION: "bg-orange-100 text-orange-700",
  REGULATIONS: "bg-red-100 text-red-700",
  SKILLS: "bg-indigo-100 text-indigo-700",
  TECHNOLOGY: "bg-pink-100 text-pink-700",
  DEVELOPMENT: "bg-cyan-100 text-cyan-700",
};

const BlogDetails = ({ id }: { id: number | null }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id as number),
    enabled: !!id,
  });

  // Empty state
  if (!id) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-400 text-center">
          <span className="text-4xl mb-4 block">📖</span>
          Select a blog to view details
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-400 animate-pulse">Loading blog...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
        <div className="text-center">
          <p className="text-red-500 font-semibold mb-2">Error loading blog</p>
          <p className="text-sm text-gray-500">{error?.message || "Blog not found"}</p>
        </div>
      </div>
    );
  }

  const categoryColor =
    categoryColors[data.category?.[0]] || categoryColors.FINANCE;

  return (
    <div className="space-y-6">
      {/* Cover Image */}
      <div className="relative rounded-lg overflow-hidden bg-gray-200 h-80">
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/800x400?text=No+Image";
          }}
        />
      </div>

      {/* Article Content */}
      <Card>
        <CardContent className="p-8">
          {/* Metadata Row */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${categoryColor}`}
            >
              {data.category?.[0]}
            </span>
            <span className="text-sm text-gray-500">
              <strong>5</strong> mins read
            </span>
            <span className="text-sm text-gray-500">
              <strong>
                {data.date ? new Date(data.date).toLocaleDateString() : ""}
              </strong>
            </span>
            <div className="ml-auto">
              <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm flex items-center gap-2">
                <Share2 size={16} />
                Share
              </Button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {data.description}
          </p>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200"></div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {data.content?.split("\n\n").map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-gray-700 leading-relaxed mb-6 text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
            <div>
              <p className="font-semibold text-gray-900">Written by Arjun Mehta</p>
              <p className="text-sm text-gray-500">Senior Financial Analyst</p>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition" title="Like">
                <ThumbsUp size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition" title="Comment">
                <MessageCircle size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogDetails;
