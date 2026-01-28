import BlogList from "./components/BlogList"
import BlogDetails from "./components/BlogDetails"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 w-full px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">CA Monk Blog</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT: Blog List */}
            <div className="lg:col-span-1 min-h-screen">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <BlogList onSelect={setSelectedId} selectedId={selectedId} />
            </div>

            {/* RIGHT: Blog Details */}
            <div className="lg:col-span-2">
              <BlogDetails id={selectedId} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
