// app/components/RecentBlogs.js

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from "../services/api";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    loadBlogs();
  }, []);

  const imageUrlPrefix = "https://api.devriazul.com/storage/";

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
              {blog.content.length > 80
                ? `${blog.content.slice(0, 80)}...`
                : blog.content}
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
