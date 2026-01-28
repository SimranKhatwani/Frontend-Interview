import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetails from "../components/BlogDetails";
import CreateBlog from "../components/CreateBlog"; 

const Home = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="p-6">
      <CreateBlog />

      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* LEFT */}
        <div className="col-span-4">
         <BlogList
  onSelect={setSelectedId}
  selectedId={selectedId}
/>
        </div>

        {/* RIGHT */}
        <div className="col-span-8">
          <BlogDetails id={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
