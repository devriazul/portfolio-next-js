"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchBlogById, fetchBlogs } from '../services/api';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false); // Track if fetching is completed

  useEffect(() => {
    const loadBlogDetails = async () => {
      try {
        // Fetch blog details
        const blogData = await fetchBlogById(id);
        setBlog(blogData);

        // Fetch recent blogs
        const allBlogs = await fetchBlogs();
        // Filter out the current blog from recent blogs
        const recentBlogsData = allBlogs.filter((b) => b.id !== id);
        setRecentBlogs(recentBlogsData);

        setHasFetched(true); // Mark fetching as complete
      } catch (error) {
        console.error('Failed to fetch blog details:', error);
        setError('Failed to load blog details. Please try again later.');
        setHasFetched(true); // Mark fetching as complete even on error
      }
    };

    if (id) {
      loadBlogDetails();
    }
  }, [id]);

  // Display error message if there was an issue fetching data
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  // Display a message if no blog is found and fetching is complete
  if (hasFetched && !blog) return <div className="text-center py-4">Blog not found</div>;

  const imageUrlPrefix = 'https://api.devriazul.com/storage/';

  return (
    <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Blog Content */}
      <div className="lg:col-span-2">
        {blog && (
          <>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <img
              src={`${imageUrlPrefix}${blog.image}`}
              alt={blog.title}
              className="w-full h-auto mb-4 rounded-lg shadow-md"
            />
            <p className="text-lg leading-relaxed">{blog.content}</p>
          </>
        )}
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        {/* Categories */}
        <div className="mb-8 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Categories</h3>
          <hr className="border-gray-500 mb-4" />
          <ul className="space-y-2">
            {blog && blog.slug && (
              <li>
                <a href={`/blogs/category/${blog.slug}`} className="text-blue-500 hover:underline">
                  {blog.slug}
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Recent Blogs */}
        <div className="dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Recent Blogs</h3>
          <hr className="border-gray-500 mb-4" />
          <ul className="space-y-4">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((recent) => (
                <li key={recent.id} className="flex items-start space-x-4">
                  <img
                    src={`${imageUrlPrefix}${recent.image}`}
                    alt={recent.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      <a href={`/blogs/${recent.id}`} className="text-blue-500 hover:underline">
                        {recent.title}
                      </a>
                    </h4>
                    <p className="text-sm text-gray-500">{recent.content.substring(0, 100)}...</p>
                  </div>
                </li>
              ))
            ) : (
              <div>No recent blogs available</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
