import { Card, CardContent } from "@/components/ui/card";

const categoryColors: Record<string, { bg: string; text: string }> = {
  FINANCE: { bg: "bg-blue-50", text: "text-blue-600" },
  TECH: { bg: "bg-purple-50", text: "text-purple-600" },
  CAREER: { bg: "bg-green-50", text: "text-green-600" },
  EDUCATION: { bg: "bg-orange-50", text: "text-orange-600" },
  REGULATIONS: { bg: "bg-red-50", text: "text-red-600" },
  SKILLS: { bg: "bg-indigo-50", text: "text-indigo-600" },
  TECHNOLOGY: { bg: "bg-pink-50", text: "text-pink-600" },
  DEVELOPMENT: { bg: "bg-cyan-50", text: "text-cyan-600" },
};

const BlogCard = ({
  blog,
  onSelect,
  isActive,
}: {
  blog: any;
  onSelect: (id: number) => void;
  isActive: boolean;
}) => {
  const colors = categoryColors[blog.category?.[0]] || categoryColors.FINANCE;

  return (
    <Card
      onClick={() => onSelect(Number(blog.id))}
      className={`cursor-pointer transition-all duration-200 ${
        isActive
          ? "border-l-4 border-blue-600 bg-blue-50 shadow-md"
          : "border-l-4 border-transparent hover:bg-gray-50"
      }`}
    >
      <CardContent className="p-4 space-y-2">
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
            📌 {blog.category?.[0]}
          </span>
          <span className="text-xs text-gray-400">{blog.date ? new Date(blog.date).toLocaleDateString() : ""}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-gray-900 line-clamp-2">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
