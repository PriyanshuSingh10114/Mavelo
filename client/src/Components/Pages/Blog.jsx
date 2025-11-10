import React, { useState } from 'react';
import blogData from '../../../Blog.json';

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogData.filter((post) => {
    return post.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const categories = [...new Set(blogData.map((post) => post.category))];
  const tags = ["Airport", "Business", "Travel", "Luxury", "Lifestyle", "Automobile", "Car"];
  const recentPosts = blogData.slice(0, 3);

  return (
    <>
      {/* Banner Section */}
      <div className="banner-section blog-banner-section relative flex justify-center items-center">
        <div className="banner-section-content text-center z-10">
          <h1 className="text-5xl font-semibold font-bricolage text-[#f5b574]">
            <span className="text-white font-bricolage">Blog</span> & News
          </h1>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-zinc-900 text-white min-h-screen sm:px-6 md:px-8 lg:px-[12%] xl:px-[12%] py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Blog Post Section */}
          <div className="lg:col-span-3">
            {filteredPosts.map((post) => (
              <div key={post.id} className="mb-10 bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <img src={post.image} alt={post.name} className="w-full h-72 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-400">{post.category} • {post.date}</p>
                  <h2 className="text-2xl font-bold mt-2">{post.name}</h2>
                  <p className="text-sm text-gray-400 mt-2">by {post.author}</p>
                  <button className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Section */}
          <div className="space-y-10 sticky top-0 h-fit">
            
            {/* Search */}
            <div className="bg-zinc-800 p-4 rounded-xl">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 rounded bg-zinc-700 text-white focus:outline-none"
              />
            </div>

            {/* Recent Posts */}
            <div className="bg-zinc-800 p-4 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center mb-4">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="w-14 h-14 object-cover rounded mr-3"
                  />
                  <p className="text-sm">{post.name}</p>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="bg-zinc-800 p-4 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="text-sm space-y-2">
                {categories.map((category, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 hover:text-white cursor-pointer"
                  >
                    &rsaquo; {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-zinc-800 p-4 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-500 hover:text-black cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;

