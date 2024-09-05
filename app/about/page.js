import Image from "next/image";
import Button from "../components/Button";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="pt-5">
      
      <p className="m-auto text-xl font-bold text-center">
        Hello, I'm Riazul Islam, a web design and development professional.
        <br />
        With lots of experience, I have gained extensive expertise in handling client projects and possess strong leadership and communication skills.
        <br />
        I am passionate about learning new programming technologies and have a deep love for the field.
        <br /> While I enjoy working with emerging technologies, web development remains my top priority.
      </p>
      <Button />
      <div className="pb-4"></div>
    </div>
  );
}
