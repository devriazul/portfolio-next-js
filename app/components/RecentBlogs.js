"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// Import the JSON data
import blogsData from "../../data/db.json"; // Adjust this path based on your project structure

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the JSON file
    const loadBlogs = () => {
      try {
        // Assuming blogsData is structured with a key 'blogs'
        const data = blogsData.blogs || []; // Fallback to empty array if 'blogs' is undefined
        
        // Sort blogs in descending order by ID (or any other relevant property)
        const sortedBlogs = data.sort((a, b) => b.id - a.id);
        
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Failed to load blogs:", error);
      }
    };

    loadBlogs();
  }, []);

  const imageUrlPrefix = "../images/"; // Update to your image path if needed

  return (
    <div className="p-8 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Recent Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.slice(0, 4).map((blog) => (
          <div
            key={blog.id}
            className="dark:bg-gray-800 shadow-md rounded-lg p-5 transform transition-transform hover:scale-105"
          >
            <img
              src={`${imageUrlPrefix}${blog.image}`}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-200 pt-3">
              {blog.title}
            </h2>
            <p className="text-gray-400 mt-3">
              {/* Safety check for blog.description */}
              {blog.description && blog.description.length > 80
                ? `${blog.description.slice(0, 80)}...`
                : blog.description || "description not available."}
            </p>
            <Link
              href={`/blogs/${blog.id}`}
              className="text-blue-500 font-bold mt-4 inline-block hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
