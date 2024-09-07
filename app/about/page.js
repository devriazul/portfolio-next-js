import Image from "next/image";
import about from "@/public/images/about.png";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2>About</h2>
          <h1 className="max-w-2xl my-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">Riazul Islam</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Hello, I am Riazul Islam, a web design and development professional. With lots of experience, I have gained extensive expertise in handling client projects and possess strong leadership and communication skills. I am passionate about learning new programming technologies and have a deep love for the field. While I enjoy working with emerging technologies, web development remains my top priority.
          </p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image className="w-full rounded-lg" src={about} alt="mockup" width={500} height={500} />
          {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Education and Work Experience</h1>
          <p className="text-lg text-gray-600">Combination of Skill & Experience</p>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-900">MSc in Computer Science</h3>
            <p className="text-gray-700">Jahangirnagar University</p>
            <p className="text-gray-500">2020 - 2022</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>

          {/* Experience 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Sr. Web Developer</h3>
            <p className="text-gray-700">BHE UNI - UK</p>
            <p className="text-gray-500">2022 - Present</p>
            <p className="text-gray-700 mt-2">
              I have a proven track record of leading and managing cross-functional IT and marketing teams. I excel in designing and developing robust web applications using React, Vue.js, PHP, and Laravel...
            </p>
          </div>

          {/* Experience 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">Web Developer</h3>
            <p className="text-gray-700">Saic Group - BD</p>
            <p className="text-gray-500">2020 - 2022</p>
            <p className="text-gray-700 mt-2">
              My web design and development services encompass HTML, CSS, Bootstrap, Sass, and WordPress...
            </p>
          </div>
        </section>

        {/* Personal Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Personal Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-900">
            {[
              { label: 'Time Management', value: 90 },
              { label: 'Efficiency', value: 70 },
              { label: 'Integrity', value: 80 },
              { label: 'Communication', value: 88 },
              { label: 'Productivity', value: 93 },
            ].map((skill, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h4 className="text-lg font-semibold">{skill.label}</h4>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div className={`bg-blue-500 h-4 rounded-full`} style={{ width: `${skill.value}%` }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{skill.value}%</p>
              </div>
            ))}
          </div>
        </section>

        {/* Software Skills */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Software Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-900">
            {[
              { label: 'PHP', value: 85 },
              { label: 'Laravel', value: 75 },
              { label: 'MySQL', value: 95 },
              { label: 'WordPress', value: 80 },
            ].map((skill, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h4 className="text-lg font-semibold">{skill.label}</h4>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div className={`bg-blue-500 h-4 rounded-full`} style={{ width: `${skill.value}%` }}></div>
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
