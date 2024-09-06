import Image from "next/image";

export default function Resume() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Resume</h1>
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
