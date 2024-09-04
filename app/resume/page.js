import Image from "next/image";

export default function Resume() {
  return (
    <div className="h-screen w-screen bg-slate-800">
      
      <h1 className="m-auto text-3xl font-bold text-center t-5 pt-5">Senior Software Developer</h1>
      <p className="m-autotext-xl font-bold text-center">at BHE UNI</p>
      <div className="text-center my-5 pt-5"><a href="https://api.whatsapp.com/send?phone=8801722754100" className="btn btn-xl bg-green-800 p-3 rounded-lg text-xl font-bold" target="_blank" >Contact</a></div>
    </div>
  );
}
