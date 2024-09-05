import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Blog Description 1",
      image: "https://www.devriazul.com/img/devriazul-profile1.svg",
    },
    {
      id: 2,
      title: "Blog Title 2",
      description: "Blog Description 2",
      image: "https://www.devriazul.com/img/devriazul-profile1.svg",
    },
    {
      id: 3,
      title: "Blog Title 3",
      description: "Blog Description 3",
      image: "https://www.devriazul.com/img/devriazul-profile1.svg",
    },
  ]
  return (
    <div className="pb-5">
      <h1 className="m-auto text-3xl font-bold text-center py-5">This is a Blog Page</h1>
      
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="m-auto">
            <Image src={blog.image} className="m-auto rounded-lg" alt="profile" width={300} height={300} />

            <h2 className="m-auto text-3xl font-bold text-center my-5">
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </h2>

            <p className="m-autotext-xl font-bold text-center">{blog.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
