import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.svg';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Devriazul Portfolio || Home',
  description: 'Personal portfolio website of Devriazul',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
          <div className="max-w-screen-xl mx-auto py-8 px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <a href="/" className="flex items-center mb-4">
                <Image
                  src="https://devriazul.com/img/devriazul.svg"
                  alt="DevRiazul Logo"
                  className="mr-3 h-8 sm:h-10"
                  width={150}
                  height={150}
                />
                {/* <span className="text-2xl font-semibold">DevRiazul</span> */}
              </a>
              <p className="mb-6 text-gray-500 dark:text-gray-400">
              A showcase of my work and projects, designed to highlight my skills in web development and offer insights into my creative process.
              </p>
              <ul className="flex flex-wrap justify-center gap-4 mb-6">
                <li>
                  <Link href="/" className="text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-white">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 <a href="#" className="hover:underline">DevRiazul™</a>. All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
