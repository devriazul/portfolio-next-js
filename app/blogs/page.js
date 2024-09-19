import React from "react";
import Link from "next/link";
import Blogs from "../components/Blogs";

export const metadata = {
  title: 'Devriazul || Blogs',
  description: 'Learn more about Devriazul and my journey in web development.',
};
export default function Blog() {
  return (
   <Blogs />
  );
}