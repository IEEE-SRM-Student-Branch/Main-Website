import React from 'react';
import Image from 'next/image';



const Footer = () => {
 return(
  <footer className="bg-black">
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
      <a
        className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
        href="#MainContent"
      >
        <span className="sr-only">Back to top</span>
                 
      <div>
        <svg         
          className="h-5 w-5"
          viewBox="0 0 20 20"          
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>  
      </a>
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">        
          <Image
            src={`/ieee.png`}
            alt="logo"
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            width={300}
            height={300}
          />
        

        </div>

        <p
          className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="app\about\page.tsx">
            About Us
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="app\domains\page.tsx">
            Our Team
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Code of Conduct
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="app\contactUs\page.tsx">
             Contact Us
          </a>
        </li>
        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
             Privacy Policy
          </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
  </footer>)
  }
export default Footer;