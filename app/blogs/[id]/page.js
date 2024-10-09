"use client"; // Declare this as a client component
import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import blogsData from '../../../data/db.json'; // Ensure this path is correct
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogDetails() {
  const { id } = useParams(); // Get the ID directly from URL parameters
  const [blog, setBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    if (id) {
      const foundBlog = blogsData.blogs.find((b) => b.id === parseInt(id));
      if (foundBlog) {
        console.log('Found Blog:', foundBlog); // Log the found blog details
        setBlog(foundBlog);
      }
    }
    // Get the 5 most recent blogs
    const sortedBlogs = blogsData.blogs.sort((a, b) => b.id - a.id);
    setRecentBlogs(sortedBlogs.slice(0, 5));
  }, [id]);

  if (!id) {
    return <div>Loading...</div>; // Show loading if `id` is not available yet
  }

  if (!blog) {
    return <div className="text-center text-gray-400">Blog not found</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 dark:bg-gray-900 flex">
      {/* Main blog details section */}
      <div className="flex-1 max-w-3xl mr-8">
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <img 
          src={`../images/${blog.image}`} // Prepend 'images/' to the image path
          alt={blog.title}
          className="object-cover rounded-lg mb-5"
        />
        <p className="text-gray-400 mb-6">{blog.description}</p>
      </div>

      {/* Sidebar with search box and recent blogs */}
      <div className="w-1/3 bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Search</h2>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-600 rounded-lg bg-gray-700 text-white"
        />

        <h2 className="text-2xl font-bold mb-4 text-gray-200">Recent Blogs</h2>
        <ul>
          {recentBlogs
            .filter(recentBlog => recentBlog.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((recentBlog) => (
              <li key={recentBlog.id} className="mb-3 flex items-center">
                <img
                  src={`../images/${recentBlog.image}`} // Prepend 'images/' to the image path for recent blogs
                  alt={recentBlog.title}
                  className="w-16 h-16 object-cover rounded-lg mr-3" // Adjust size as needed
                />
                <Link href={`/blogs/${recentBlog.id}`} className="text-blue-500 hover:underline">
                  {recentBlog.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
