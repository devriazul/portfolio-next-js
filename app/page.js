'use client';
import Image from "next/image";
import thumb from "@/public/images/main2.svg";
import thumb1 from "@/public/company/1 (1).svg";
import thumb2 from "@/public/company/1 (2).svg";
import AnimatedSection from './components/AnimatedSection';
import thumb3 from "@/public/company/1 (3).svg";
import thumb4 from "@/public/company/1 (4).svg";
import thumb5 from "@/public/company/1 (5).svg";
import thumb6 from "@/public/company/1 (6).svg";
import thumb7 from "@/public/company/1 (7).svg";
import thumb8 from "@/public/company/1 (8).svg";
import thumb9 from "@/public/company/1 (9).svg";
import thumb10 from "@/public/images/services/s (1).svg";
import thumb11 from "@/public/images/services/s (2).svg";
import thumb12 from "@/public/images/services/s (3).svg";
import thumb13 from "@/public/images/services/s (4).svg";
import thumb14 from "@/public/images/services/s (5).svg";
import thumb15 from "@/public/images/services/s (6).svg";
import Link from "next/link";
import RecentProjects from './components/RecentProjects';
import RecentBlogs from "./components/RecentBlogs";
export default function Home() {
  return (
    <main>
      <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Hero section start  */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <AnimatedSection className="relative grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium text-blue-400 bg-blue-900/30 rounded-full">
                    Full Stack Developer
                  </span>
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent animate-gradient">Riazul Islam</h1>
                  <p className="max-w-2xl mb-6 text-lg text-gray-300 lg:mb-8 lg:text-xl">With a passion for crafting robust web solutions, I specialize in PHP, Laravel, and JavaScript frameworks and tools like Next.js. From designing interactive user experiences to building efficient backends, I bring a holistic approach to design and development. Let's collaborate and take your digital project to the next level.</p>
                  
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
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <Image src={thumb} className="m-auto rounded-lg" alt="profile image" />
                  {/* <Image src={thumb} className="m-auto rounded-lg" alt="profile image" /> */}
              </div>                
          </AnimatedSection>
    </section>
        {/* Hero section End  */}

        {/* Service section start  */}
        <AnimatedSection delay={0.2} className="p-8 mx-auto max-w-screen-xl sm:py-16 lg:px-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-xl">
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">What I Do?</h2>
                    <p className="text-lg text-gray-400">Bringing Your Digital Visions to Life with Modern Solutions</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl p-6">
                    <div className="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors duration-300">
                        <Image src={thumb10} alt="service image 1" className="w-6 h-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Custom Web Development</h3>
                    <p className="text-gray-400">From landing pages to full-stack applications, I build custom web solutions using PHP, Laravel, and modern JavaScript frameworks.</p>
                </div>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl p-6">
                    <div className="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors duration-300">
                        <Image src={thumb11} alt="service image 1" className="w-6 h-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">API Integration & Development</h3>
                    <p className="text-gray-400">I create and integrate APIs for smooth data exchange and enhanced app functionality, including RESTful and GraphQL APIs.</p>
                </div>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl p-6">
                    <div className="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors duration-300">
                        <Image src={thumb12} alt="service image 1" className="w-6 h-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">E-Commerce Solutions</h3>
                    <p className="text-gray-400">Develop scalable and secure e-commerce platforms with a focus on delivering smooth and engaging shopping experiences.</p>
                </div>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl p-6">
                    <div className="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors duration-300">
                        <Image src={thumb13} alt="service image 1" className="w-6 h-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">UI-Based Design</h3>
                    <p className="text-gray-400">Designing intuitive user interfaces that enhance user engagement and experience through simple, elegant solutions.</p>
                </div>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl p-6">
                    <div className="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors duration-300">
                        <Image src={thumb14} alt="service image 1" className="w-6 h-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Website Optimization & SEO</h3>
                    <p className="text-gray-400">Optimize your site for performance, SEO, and mobile responsiveness, ensuring fast load times and higher search engine rankings.</p>
                </div>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl p-6">
                    <div className="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors duration-300">
                        <Image src={thumb15} alt="service image 1" className="w-6 h-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Maintenance & Support</h3>
                    <p className="text-gray-400">Keep your site or application running smoothly with regular updates, bug fixes, and ongoing technical support.</p>
                </div>
            </div>
        </AnimatedSection>
        {/* Service section End  */}

        <AnimatedSection delay={0.4} className="mx-auto py-8 max-w-screen-xxl">
            <RecentProjects />
        </AnimatedSection>

        {/* Testimonial Section Start */}
        <AnimatedSection delay={0.6} className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Testimonials</h2>
        </div>
        <figure className="max-w-screen-md mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl">
            <svg className="h-12 mx-auto mb-6 text-blue-500/30" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg>
            <blockquote>
            <p className="text-xl font-medium text-gray-300 italic">The web application he developed with PHP and Laravel has elevated my portfolio website to new heights. It is seamless performance and intuitive design have garnered praise from clients and industry peers alike..</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center divide-x-2 divide-gray-700">
                <div className="pr-4 font-bold text-blue-400">Micheal Gough</div>
                <div className="pl-4 text-sm text-gray-400">Manager at Andritz</div>
            </div>
            </figcaption>
        </figure>
        </AnimatedSection>
        {/* Testimonial Section End */}

        {/* Blog Section Start */}

        <RecentBlogs />

      {/* Blog Section End */}

      {/* Worked Section Start */}
        <AnimatedSection delay={0.8} className="p-8 mx-auto max-w-screen-xl sm:py-16 lg:px-8">
            <h2 className="mb-12 text-4xl font-extrabold tracking-tight leading-none text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Worked Organizations</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                <Link href="#" className="group relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-gray-200/30 p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                        <Image src={thumb1} className="w-full h-auto transition-all duration-300 group-hover:opacity-90 group-hover:transform group-hover:scale-110" alt="organization logo" />
                    </div>
                </Link>
                <Link href="#" className="group relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-gray-200/30 p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                        <Image src={thumb8} className="w-full h-auto transition-all duration-300 group-hover:opacity-90 group-hover:transform group-hover:scale-110" alt="organization logo" />
                    </div>
                </Link>
                <Link href="#" className="group relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-gray-200/30 p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                        <Image src={thumb9} className="w-full h-auto transition-all duration-300 group-hover:opacity-90 group-hover:transform group-hover:scale-110" alt="organization logo" />
                    </div>
                </Link>
                <Link href="#" className="group relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-gray-200/30 p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                        <Image src={thumb7} className="w-full h-auto transition-all duration-300 group-hover:opacity-90 group-hover:transform group-hover:scale-110" alt="organization logo" />
                    </div>
                </Link>
                <Link href="#" className="group relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-gray-200/30 p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                        <Image src={thumb3} className="w-full h-auto transition-all duration-300 group-hover:opacity-90 group-hover:transform group-hover:scale-110" alt="organization logo" />
                    </div>
                </Link>
                <Link href="#" className="group relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-gray-200/30 p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                        <Image src={thumb6} className="w-full h-auto transition-all duration-300 group-hover:opacity-90 group-hover:transform group-hover:scale-110" alt="organization logo" />
                    </div>
                </Link>
            </div>
        </AnimatedSection>

      {/* Worked Section End  */}
    </main>
  );
}
