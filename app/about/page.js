import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="h-screen w-screen bg-slate-800 pt-5">
      
      <p className="m-auto text-xl font-bold text-center">
        Hello, I'm Md Riazul Islam, a web design and development professional.
        <br />
        With lots of experience, I have gained extensive expertise in handling client projects and possess strong leadership and communication skills.
        <br />
        I am passionate about learning new programming technologies and have a deep love for the field.
        <br /> While I enjoy working with emerging technologies, web development remains my top priority.
      </p>
      <div className="text-center my-5 pt-5">
        <a href="https://api.whatsapp.com/send?phone=8801722754100" className="btn btn-xl bg-green-800 p-3 rounded-lg text-xl font-bold" target="_blank">Contact</a>
      </div>
    </div>
  );
}
