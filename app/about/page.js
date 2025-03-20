import Image from "next/image";
import about from "@/public/images/main.svg";
import Link from "next/link";

export const metadata = {
  title: 'Devriazul || About',
  description: 'About Devriazul and my journey in web development.',
};
export default function About() {
  return (
      <section className="bg-white dark:bg-gray-900" metadata={metadata}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl my-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
          About
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Hello, I am Riazul Islam, a web design and development professional. With lots of experience, I have gained extensive expertise in handling client projects and possess strong leadership and communication skills. I am passionate about learning new programming technologies and have a deep love for the field. While I enjoy working with emerging technologies, web development remains my top priority.
          </p>
          <section className="flex flex-col items-start space-y-4 mt-8">
              <div className="flex space-x-4">
                  <Link 
                  href="https://api.whatsapp.com/send?phone=8801722754100" 
                  className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                      <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                  </svg>
                  WhatsApp
                  </Link> 

                  <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                  Contact
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  </Link>
              </div>
          </section>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image className="w-full rounded-lg" src={about} alt="mockup" width={500} height={500} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 space-y-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Professional Journey</h1>
          <p className="text-lg text-gray-400">Experience, Education & Expertise</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-8 w-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Work Experience</h2>
            </div>

            <div className="relative pl-4 space-y-6">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500/20"></div>
              
              <div className="relative dark:bg-gray-800/50 backdrop-blur-sm shadow-xl rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-blue-500/5">
                <div className="absolute -left-2.5 top-6 h-5 w-5 rounded-full border-2 border-blue-500 bg-gray-900"></div>
                <h3 className="text-xl font-semibold text-white mb-1">Sr. Web-Developer</h3>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span className="text-blue-400">BHE UNI.</span>
                  <span className="mx-2">•</span>
                  <span>2022 - Present</span>
                </div>
                <p className="text-gray-300">
                  I have a proven track record of leading and managing cross-functional IT and marketing teams. I excel in designing and developing robust web applications using React, Vue.js, PHP, and Laravel.
                </p>
              </div>

              <div className="relative dark:bg-gray-800/50 backdrop-blur-sm shadow-xl rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-blue-500/5">
                <div className="absolute -left-2.5 top-6 h-5 w-5 rounded-full border-2 border-blue-500 bg-gray-900"></div>
                <h3 className="text-xl font-semibold text-white mb-1">Web-Developer</h3>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span className="text-blue-400">Saic Group</span>
                  <span className="mx-2">•</span>
                  <span>2020 - 2022</span>
                </div>
                <p className="text-gray-300">
                  My web design and development services encompass HTML, CSS, Bootstrap, Sass, and WordPress.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-8 w-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="relative pl-4 space-y-6">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-500/20"></div>

              <div className="relative dark:bg-gray-800/50 backdrop-blur-sm shadow-xl rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-purple-500/5">
                <div className="absolute -left-2.5 top-6 h-5 w-5 rounded-full border-2 border-purple-500 bg-gray-900"></div>
                <h3 className="text-xl font-semibold text-white mb-1">MSc in Computer Science and Engineering</h3>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-purple-400">Jahangirnagar University</span>
                  <span className="mx-2">•</span>
                  <span>2020 - 2022</span>
                </div>
              </div>

              <div className="relative dark:bg-gray-800/50 backdrop-blur-sm shadow-xl rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-purple-500/5">
                <div className="absolute -left-2.5 top-6 h-5 w-5 rounded-full border-2 border-purple-500 bg-gray-900"></div>
                <h3 className="text-xl font-semibold text-white mb-1">BSc in Computer Science and Engineering</h3>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-purple-400">Fareast International University</span>
                  <span className="mx-2">•</span>
                  <span>2016 - 2020</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-8 w-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Software Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <div key={index} className="dark:bg-gray-800/50 backdrop-blur-sm shadow-xl rounded-xl p-4 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-green-500/5">
                  <h4 className="text-white text-lg font-semibold mb-2">{skill.label}</h4>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.value}%</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-8 w-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Personal Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Time Management', value: 90 },
                { label: 'Efficiency', value: 70 },
                { label: 'Integrity', value: 80 },
                { label: 'Communication', value: 88 },
                { label: 'Productivity', value: 93 }
              ].map((skill, index) => (
                <div key={index} className="dark:bg-gray-800/50 backdrop-blur-sm shadow-xl rounded-xl p-4 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-yellow-500/5">
                  <h4 className="text-white text-lg font-semibold mb-2">{skill.label}</h4>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.value}%</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
    
  );
}
