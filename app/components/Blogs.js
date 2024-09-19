"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchBlogs } from '../services/api'; // Ensure this import path is correct

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false); // New state to track if data has been fetched

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
        setHasFetched(true); // Data has been fetched successfully
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setError('Failed to load blogs. Please try again later.');
        setHasFetched(true); // Data fetching attempt completed
      }
    };

    loadBlogs();
  }, []);

  const imageUrlPrefix = 'https://api.devriazul.com/storage/';

  if (error) return <div className="text-center text-red-500">{error}</div>;

  // Show message only if no blogs are available and data has been fetched
  if (hasFetched && blogs.length === 0) {
    return <div className="text-center text-gray-400">No blogs available</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Blogs</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="dark:bg-gray-800 shadow-md rounded-lg p-5 transform transition-transform hover:scale-105"
          >
            <img
              src={blog.image ? `${imageUrlPrefix}${blog.image}` : '/default-image.jpg'} // Handle missing images
              alt={blog.title || 'Blog Image'}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-200 pt-3">{blog.title || 'Untitled'}</h2>
            <p className="text-gray-400 mt-3">{blog.description || 'No description available'}</p>
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
}
