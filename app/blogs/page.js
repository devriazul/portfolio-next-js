"use client"; // Client component declaration
import blogsData from '../../data/db.json'; // Adjust the path if necessary
import Link from 'next/link';

export default function Blogs() {
  const blogs = blogsData.blogs;

  if (!blogs || blogs.length === 0) {
    return <div className="text-center text-gray-400">No blogs available</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Blogs</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="dark:bg-gray-800 shadow-md rounded-lg p-5">
            <img 
              src={`images/${blog.image}`} // Prepend 'images/' to the image path
              alt={blog.title}
              className="object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-200 pt-3">{blog.title}</h2>
            <p className="text-gray-400 mt-3">{blog.description && blog.description.length > 80
                ? `${blog.description.slice(0, 80)}...`
                : blog.description || "description not available."}</p>
            <Link href={`/blogs/${blog.id}`} className="text-blue-500 font-bold mt-4 inline-block hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
