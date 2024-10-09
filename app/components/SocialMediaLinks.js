import { 
    FacebookIcon, 
    TwitterIcon, 
    InstagramIcon, 
    LinkedInIcon, 
    GithubIcon, 
    YouTubeIcon 
  } from '@heroicons/react/24/outline'; // Ensure this path is correct
  
  const SocialMediaLinks = () => {
    return (
      <div className="flex space-x-2">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <FacebookIcon className="h-5 w-5" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <TwitterIcon className="h-5 w-5" />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <YouTubeIcon className="h-5 w-5" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaLinks;
  