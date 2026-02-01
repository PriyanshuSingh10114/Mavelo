import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blogData from "../../../Blog.json";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null); // For modal view
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter posts
  const filteredPosts = blogData.filter((post) => {
    const matchesSearch = post.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(blogData.map((post) => post.category))];
  const recentPosts = blogData.slice(0, 3);
  const tags = ["Airport", "Business", "Travel", "Luxury", "Lifestyle", "Automobile", "Car"];

  return (
    <>
      {/* --- Hero Banner --- */}
      <div
        className="relative flex justify-center items-center h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('/Image/blog-slide-03.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

        <div className="relative z-10 text-center px-6">
          <motion.h6
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[8px] text-[#f5b754] mb-3 text-sm md:text-base"
          >
            — Insights & Updates
          </motion.h6>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-bricolage text-white drop-shadow-lg"
          >
            <span className="text-[#f5b754]">Blog</span> & News
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed"
          >
            Discover <span className="text-[#f5b754] font-semibold">Mavelo's</span> world —  
            trends, stories, and inspiration from luxury rides and elegant journeys.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10"
          >
            <button
              onClick={() =>
                document.getElementById("blog-list")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#f5b754] hover:bg-white text-black font-bricolage px-10 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              Explore Articles&nbsp;
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </motion.div>
        </div>
      </div>

      {/* --- Blog Listing Section --- */}
      <div
        id="blog-list"
        className="bg-[#111] text-white min-h-screen sm:px-6 md:px-8 lg:px-[12%] py-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* --- Main Posts --- */}
          <div className="lg:col-span-3 space-y-10">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative bg-[#1b1b1b] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(245,183,84,0.2)] transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[#f5b754] text-sm uppercase tracking-wide">
                    {post.category} • {post.date}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3">{post.name}</h2>
                  <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                    {post.description || "A deep insight into the art of luxury driving..."}
                  </p>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="mt-6 inline-flex items-center bg-[#f5b754] text-black px-6 py-2 rounded-full text-sm hover:bg-white transition-all duration-300 hover:-translate-y-1"
                  >
                    Read More&nbsp;
                    <i className="ri-arrow-right-up-line text-lg"></i>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Sidebar --- */}
          <div className="space-y-10 sticky top-20 h-fit">
            {/* Search */}
            <div className="bg-[#1b1b1b] p-6 rounded-2xl">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-[#111] text-white rounded-xl outline-none focus:border-[#f5b754] border border-transparent transition"
              />
            </div>

            {/* Recent Posts */}
            <div className="bg-[#1b1b1b] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-5">Recent Posts</h3>
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center mb-5">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="w-14 h-14 object-cover rounded-lg mr-3"
                  />
                  <p className="text-sm text-gray-300">{post.name}</p>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="bg-[#1b1b1b] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-5">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? null : category
                      )
                    }
                    className={`cursor-pointer transition-all ${
                      selectedCategory === category
                        ? "text-[#f5b754]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    ▸ {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-[#1b1b1b] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-5">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#222] px-3 py-1.5 rounded-full text-sm hover:bg-[#f5b754] hover:text-black cursor-pointer transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Modal for Read More --- */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a1a1a] max-w-3xl w-full rounded-3xl p-10 relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-[#f5b754] transition text-xl"
              >
                <i className="ri-close-line"></i>
              </button>

              <img
                src={selectedPost.image}
                alt={selectedPost.name}
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h2 className="text-3xl font-bold mb-3">{selectedPost.name}</h2>
              <p className="text-sm text-gray-400 mb-2">
                {selectedPost.category} • {selectedPost.date}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {selectedPost.content ||
                  "This is a sample blog content. You can add long-form text for each article in your Blog.json under the 'content' key. The modal supports scrolling and rich text."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Blog;


