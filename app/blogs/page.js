import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Devriazul Portfolio || Blogs",
  description: "Official Devriazul Portfolio Blog Section",
};

export default function Blogs() {
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

  return (
    <div className=" dark:bg-gray-900">
      <div className="pb-5 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-center py-6">Blog Posts</h1>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image
                src={blog.image}
                className="object-cover w-full h-48"
                alt={blog.title}
                width={400}
                height={250}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                  <Link href={`/blogs/${blog.id}`} className="hover:text-blue-200">
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-gray-500"><span className="font-semibold">Category:</span> {blog.category}</p>
                <Link href={`/blogs/${blog.id}`} className="block mt-4 text-blue-500 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
