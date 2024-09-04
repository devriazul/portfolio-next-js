import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen w-screen bg-slate-800">
      <Image src="https://www.devriazul.com/img/devriazul-profile1.svg" className="m-auto rounded-xl py-5" alt="profile" width={300} height={300} />
      <h1 className="m-auto text-3xl font-bold text-center my-5">Riazul Islam</h1>
      <p className="m-autotext-xl font-bold text-center">Hello, I'm Md Riazul Islam, a web design and development professional. <br /> With lots of experience, I have gained extensive expertise in handling client projects and possess strong leadership and communication skills. <br /> I am passionate about learning new programming technologies and have a deep love for the field. <br></br> While I enjoy working with emerging technologies, web development remains my top priority.</p>
      <div className="text-center my-5"><a href="https://api.whatsapp.com/send?phone=8801722754100" className="btn btn-xl bg-green-800 p-3 rounded-lg text-xl font-bold" target="_blank" >Contact</a></div>
    </div>
  );
}
