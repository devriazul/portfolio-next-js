import react from "react";
import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Posts() {
    const posts = await getAllPosts();
    return (
        <div>
            <h1 className="m-auto text-3xl font-bold text-center py-5">All Posts</h1>
            <ul className="m-auto text-3xl font-bold text-center py-5">
                {posts.map((post => 
                    <li className="m-auto text-xl font-bold text-center py-5" key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}