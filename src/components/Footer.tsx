const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-linear-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                ⚡
              </div>
              <span className="font-bold text-white">CA MONK</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering the next generation of financial leaders with tools, community, and knowledge.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">RESOURCES</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-bold text-white mb-4">PLATFORM</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Job Board</a></li>
              <li><a href="#" className="hover:text-white transition">Practice Tests</a></li>
              <li><a href="#" className="hover:text-white transition">Mentorship</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-white mb-4">CONNECT</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex items-center justify-between text-xs text-gray-500">
          <p>&copy; 2026 CA Monk. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
