import getPost from "@/lib/getPost";
import React from "react";

export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPost(id);

    return {
        title: "Devriazul Posts || " + post.title,
        description: post.body,
    };
}

export default async function PostPage({ params }) {
    const { id } = params;
    const post = await getPost(id);

    return (
        <div className="m-auto text-center py-5">
            <h1 className="text-xl font-bold py-3">{post.title}</h1>
            <p className="text-lg text-blue-200">{post.body}</p>
        </div>
    );
}
