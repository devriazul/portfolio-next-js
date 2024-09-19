import React from "react";
import Link from "next/link";

import Projects from "../components/Projects";

export const metadata = {
  title: 'Devriazul || Projects',
  description: 'Learn more about Devriazul and my journey in web development.',
};
export default function Project() {
  return (
   <Projects />
  );
}
