import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

const blogs = [
    {
      id: 1,
      title: "All about WordPress",
      description: "In-depth details and insights about Blog post 1.",
      image: "https://devriazul.com/uploads/blogs/blog1706373778.jpg",
      content: "WordPress is a popular content management system (CMS) that powers millions of websites worldwide. Originally launched in 2003 as a blogging platform, WordPress has evolved into a versatile tool for creating various types of websites, including blogs, business websites, e-commerce stores, portfolios, and more. It is known for its user-friendly interface, extensive customization options, and vast library of plugins and themes. WordPress is built on PHP and uses a MySQL database, making it compatible with most web hosting services. Its flexibility, scalability, and active community support have contributed to its widespread adoption by individuals, businesses, and organizations around the globe.",
      category: "WordPress",
    },
    {
      id: 2,
      title: "Introduce Laravel",
      description: "In-depth details and insights about Blog post 2.",
      image: "https://devriazul.com/uploads/blogs/blog1706373970.png",
      content: "Laravel is a powerful PHP framework designed for building web applications following the model-view-controller (MVC) architectural pattern. It offers a robust set of tools and features aimed at making development tasks easier and more efficient. Laravel emphasizes simplicity, elegance, and readability in code, allowing developers to focus on creating high-quality applications rather than getting bogged down in repetitive tasks. With features like built-in authentication, routing, caching, and database migrations, Laravel enables developers to rapidly prototype and deploy web applications while maintaining scalability and maintainability. Additionally, Laravel has a vibrant ecosystem with extensive documentation, community support, and a rich selection of packages through Composer, making it a top choice for PHP developers worldwide.",
      category: "Laravel",
    },
    {
      id: 3,
      title: "MySQL Indexing",
      description: "In-depth details and insights about Blog post 3.",
      image: "https://devriazul.com/uploads/blogs/blog1706374059.jpg",
      content: "Description: Indexing in MySQL is a technique used to optimize database performance by allowing quicker retrieval of data from tables. An index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure. MySQL supports various types of indexes, including B-tree indexes, hash indexes, and full-text indexes. Understanding how to properly design and utilize indexes based on the query patterns and data characteristics is crucial for optimizing database performance in MySQL.",
      category: "MySQL",
    },
    {
      id: 4,
      title: "Laravel Tinker",
      description: "In-depth details and insights about Blog post 4.",
      image: "https://devriazul.com/uploads/blogs/blog1714556137.png",
      content: "Laravel Tinker Laravel Tinker allows you to interact with a database without creating the routes. Laravel tinker is used with a php artisan to create the objects or modify the data. The php artisan is a command-line interface that is available with a Laravel. Tinker is a command tool that works with a php artisan. A tinker plays around the database means that it allows you to create the objects, insert the data, etc.",
      category: "Laravel Tools",
    },
  ];

export const metadata = {
  title: "Devriazul Portfolio || Blog Details",
  description: "Devriazul Blog Details",
};

export default function BlogPage({ params }) {
  const id = parseInt(params.id);
  const blog = blogs.find((blog) => blog.id === id);

  // If the blog does not exist, return 404
  if (!blog) {
    notFound();
  }

  // Simulate blog categories and recent posts
  const categories = ["WordPress", "Laravel", "MySQL", "Laravel Tools"];
  const recentPosts = blogs.slice(0, 6);

  return (
    <div className="pb-5 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="lg:col-span-2 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
          <Image
            src={blog.image}
            className="rounded-lg mb-6"
            alt={blog.title}
            width={800}
            height={500}
          />
          <p className="text-lg text-gray-200 mb-4"><span className="font-bold">Blog Category:</span> {blog.category}</p>
          <p className="text-gray-100 leading-7">{blog.content}</p>
        </div>

        {/* Sidebar */}
        <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {/* Blog Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 ">Categories</h3>
            <hr className="border-gray-500 mb-4" />
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:underline">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blogs */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 ">Recent Blogs</h3>
            <hr className="border-gray-500 mb-4" />
            <ul className="space-y-4">
              {recentPosts.map((recent) => (
                <li key={recent.id} className="flex items-start space-x-4">
                  <Image
                    src={recent.image}
                    alt={recent.title}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      <a href={`/blogs/${recent.id}`} className="text-blue-200 hover:underline">
                        {recent.title}
                      </a>
                    </h4>
                    <p className="text-sm text-gray-200">{recent.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
