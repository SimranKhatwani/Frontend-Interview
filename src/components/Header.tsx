import { Book } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
            <Book size={20} />
          </div>
          <span className="font-bold text-lg text-gray-900">CA MONK</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Tools</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Practice</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Events</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Job Board</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Points</a>
        </nav>

        {/* Profile Button */}
        <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm">
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
