import Image from "next/image";
import thumb from "@/public/images/main2.svg";
import thumb1 from "@/public/company/1 (1).svg";
import thumb2 from "@/public/company/1 (2).svg";
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

export const metadata = {
    title: 'Devriazul || Home',
    description: 'Learn more about Devriazul and my journey in web development.',
  };
export default function Home() {
  return (
    <section class="bg-white dark:bg-gray-900">
        {/* Hero section start  */}
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl my-4 text-2xl font-extrabold tracking-tight leading-none md:text-xl xl:text-4xl dark:text-white">Riazul Islam</h1>
                  <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">With a passion for crafting robust web solutions, I specialize in PHP, Laravel, and JavaScript frameworks and tools like Next.js. From designing interactive user experiences to building efficient backends, I bring a holistic approach to design and development. Let's collaborate and take your digital project to the next level.</p>
                  
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
          </div>
        {/* Hero section End  */}

        

        {/* Service section start  */}
        <div class="p-5 mx-auto max-w-screen-xl sm:py-8 lg:px-6 bg-white rounded-lg border border-0 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="px-4 mx-auto max-w-screen-xl sm:py-3 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h2 class="mb-4 text-3xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">What I Do?</h2>
                    {/* <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Experience Developer & Software Enthusiast Creating Functional, User-Centric Applications</p> */}
                    <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Bringing Your Digital Visions to Life</a>
                </div>
            </div>
            <div class="p-5 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                   
                    <Image src={thumb10} alt="service image 1"></Image>
                </div>
                <h3 class="mb-2 text-lg font-bold dark:text-white">Custom Web Development</h3>
                <p class="text-gray-500 dark:text-gray-400">From landing pages to full-stack applications, I build custom web solutions using PHP, Laravel, and modern JavaScript frameworks.</p>
                </div>
                <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                   
                <Image src={thumb11} alt="service image 1"></Image>
                </div>
                <h3 class="mb-2 text-lg font-bold dark:text-white">API Integration & Development</h3>
                <p class="text-gray-500 dark:text-gray-400">I create and integrate APIs for smooth data exchange and enhanced app functionality, including RESTful and GraphQL APIs.</p>
                </div>
                <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  
                <Image src={thumb12} alt="service image 1"></Image>
                </div>
                <h3 class="mb-2 text-lg font-bold dark:text-white">E-Commerce Solutions</h3>
                <p class="text-gray-500 dark:text-gray-400">Develop scalable and secure e-commerce platforms with a focus on delivering smooth and engaging shopping experiences.</p>
                </div>
                <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  
                <Image src={thumb13} alt="service image 1"></Image>
                </div>
                <h3 class="mb-2 text-lg font-bold dark:text-white">UI-Based Design</h3>
                <p class="text-gray-500 dark:text-gray-400">Designing intuitive user interfaces that enhance user engagement and experience through simple, elegant solutions.</p>
                </div>
                <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  
                <Image src={thumb14} alt="service image 1"></Image>
                </div>
                <h3 class="mb-2 text-lg font-bold dark:text-white">Website Optimization & SEO</h3>
                <p class="text-gray-500 dark:text-gray-400">Optimize your site for performance, SEO, and mobile responsiveness, ensuring fast load times and higher search engine rankings.</p>
                </div>
                <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                   
                <Image src={thumb15} alt="service image 1"></Image>
                </div>
                <h3 class="mb-2 text-lg font-bold dark:text-white">Maintenance & Support</h3>
                <p class="text-gray-500 dark:text-gray-400">Keep your site or application running smoothly with regular updates, bug fixes, and ongoing technical support.</p>
                </div>
            </div>
        </div>
        {/* Service section End  */}

        <section class="mx-auto py-8 max-w-screen-xxl">
            <RecentProjects />
        </section>

        {/* Testimonial Section Start */}
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
        </div>
        <figure className="max-w-screen-md mx-auto">
            <svg className="h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg>
            <blockquote>
            <p className="text-md font-medium text-gray-900 dark:text-white">The web application he developed with PHP and Laravel has elevated my portfolio website to new heights. It is seamless performance and intuitive design have garnered praise from clients and industry peers alike..</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Manager at Andritz</div>
            </div>
            </figcaption>
        </figure>
        </div>
        {/* Testimonial Section End */}

        {/* Blog Section Start */}

        <RecentBlogs />

      {/* Blog Section End */}

      {/* Worked Section Start */}
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 class="mb-3 lg:mb-10 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-3xl">Worked Organizations</h2>
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb1} className="m-auto rounded-lg" alt="profile image" />                        
                </Link>
                <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb8} className="m-auto rounded-lg" alt="profile image" />                        
                </Link>
                {/* <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb2} className="m-auto rounded-lg" alt="profile image" />                        
                </Link> */}
                <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb9} className="m-auto rounded-lg" alt="profile image" />                        
                </Link>
                {/* <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb5} className="m-auto rounded-lg" alt="profile image" />                        
                </Link> */}
                
                <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb7} className="m-auto rounded-lg" alt="profile image" />                        
                </Link>
                <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb3} className="m-auto rounded-lg" alt="profile image" />                        
                </Link>
                {/* <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb4} className="m-auto rounded-lg" alt="profile image" />                        
                </Link> */}
                <Link href="#" class="flex justify-center items-center bg-white p-3 rounded-lg">
                    <Image src={thumb6} className="m-auto rounded-lg" alt="profile image" />                        
                </Link>
            </div>
        </div>

      {/* Worked Section End  */}

    </section>
    
  );
}
