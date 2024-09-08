import Image from "next/image";
import about from "@/public/images/about.png";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl my-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
          About
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Hello, I am Riazul Islam, a web design and development professional. With lots of experience, I have gained extensive expertise in handling client projects and possess strong leadership and communication skills. I am passionate about learning new programming technologies and have a deep love for the field. While I enjoy working with emerging technologies, web development remains my top priority.
          </p>
          <Link href="" className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  <svg class="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                    <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                    WhatsApp
                  </Link> 
                  <Link href="https://api.whatsapp.com/send?phone=8801722754100" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                      Contact
                      <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image className="w-full rounded-lg" src={about} alt="mockup" width={500} height={500} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Work Experience and Education </h1>
          <p className="text-lg text-gray-600">Combination of Skills and Experiences</p>
        </div>

        
        <section className="mb-12 ">
          <h2 className="text-2xl font-bold text-white mb-4">Work Experiences</h2>

          
          <div className="dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-white">Sr. Web-Developer</h3>
            <p className="text-gray-300 text-lg">BHE UNI.</p>
            <p className="text-gray-400">2022 - Present</p>
            <p className="text-gray-300 mt-2">
              I have a proven track record of leading and managing cross-functional IT and marketing teams. I excel in designing and developing robust web applications using React, Vue.js, PHP, and Laravel.
            </p>
          </div>

         
          <div className="dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-white">Web-Developer</h3>
            <p className="text-gray-300">Saic Group</p>
            <p className="text-gray-400">2020 - 2022</p>
            <p className="text-gray-300 mt-2">
              My web design and development services encompass HTML, CSS, Bootstrap, Sass, and WordPress.
            </p>
          </div>
        </section>

        <section className="mb-12 ">
          <h2 className="text-2xl font-bold text-white mb-4">Educational Qualification</h2>
          <div className="dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-white">MSc in Computer Science and Engineering</h3>
            <p className="text-gray-300">Jahangirnagar University</p>
            <p className="text-gray-400">2020 - 2022</p>
          </div>

          <div className="dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-white">BSc in Computer Science and Engineering</h3>
            <p className="text-gray-300">Fareast International University</p>
            <p className="text-gray-400">2016 - 2020</p>
          </div>
        </section>


        <section className="mb-12 ">
          <h2 className="text-2xl font-bold text-white mb-4">Software Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-900">
            {[
              { label: 'Next JS', value: 75 },
              { label: 'Github', value: 90 },
              { label: 'PHP', value: 85 },
              { label: 'Laravel', value: 75 },
              { label: 'MySQL', value: 95 },
              { label: 'WordPress', value: 80 },
              { label: 'Bootstrap', value: 90 },
              { label: 'Tailwind', value: 70 },
            ].map((skill, index) => (
              <div key={index} className=" dark:bg-gray-800 shadow-md rounded-lg p-4">
                <h4 className="text-white text-lg font-semibold">{skill.label}</h4>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div className={`dark:bg-blue-400 h-4 rounded-full`} style={{ width: `${skill.value}%` }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{skill.value}%</p>
              </div>
            ))}
          </div>
        </section>
       
        <section className="mb-12 ">
          <h2 className="text-2xl font-bold text-white mb-4">Personal Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-900">
            {[
              { label: 'Time Management', value: 90 },
              { label: 'Efficiency', value: 70 },
              { label: 'Integrity', value: 80 },
              { label: 'Communication', value: 88 },
              { label: 'Productivity', value: 93 },
            ].map((skill, index) => (
              <div key={index} className=" dark:bg-gray-800 shadow-md rounded-lg p-4">
                <h4 className="text-white text-lg font-semibold">{skill.label}</h4>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div className={`dark:bg-blue-400 h-4 rounded-full`} style={{ width: `${skill.value}%` }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{skill.value}%</p>
              </div>
            ))}
          </div>
        </section>

        
        
      </div>
    </section>
  );
}
