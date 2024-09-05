import Image from "next/image";
import thumb from "@/public/images/devriazul.svg";

export default function Home() {
  return (
    <div className="container m-auto">
      <Image src={thumb} className="m-auto rounded-lg" alt="profile" width={300} height={300} />
      <h1 className="m-auto text-3xl font-bold text-center my-5">Riazul Islam</h1>
      <p className="m-autotext-xl font-bold text-center">A passionate Senior Web Developer based In International Market Place</p>
      <div className="text-center my-5 pb-5"><a href="https://api.whatsapp.com/send?phone=8801722754100" className="btn btn-xl bg-indigo-500 p-2 rounded-lg text-md font-bold" target="_blank" >Contact</a></div>
    </div>
  );
}
