import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import ProjectDetails from './../../components/ProjectDetails';

export const metadata = {
  title: 'Devriazul || Project Details',
  description: 'Learn more about Devriazul and my journey in web development.',
};
export default function ProjectPage() {
  return <ProjectDetails />;
}
