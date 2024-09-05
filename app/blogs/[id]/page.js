import { notFound } from "next/navigation";
import React from "react";

export default function BlogPage({ params }) {
    const id = params.id;
    if (id > 3) {
        notFound()
    }
    return (
        <div className="h-screen w-screen bg-slate-800">
            <h1 className="m-auto text-3xl font-bold text-center pt-5">This is a Blog ID is { id }</h1>

        </div>
    );
}