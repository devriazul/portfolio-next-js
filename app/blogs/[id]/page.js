import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import BlogDetails from "@/app/components/BlogDetails";

export const metadata = {
  title: 'Devriazul || Blog Details',
  description: 'Learn more about Devriazul and my journey in web development.',
};
export default function BlogPage() {
  return <BlogDetails />;
}
