import Image from "next/image";
import IeeeLogo from "../../public/images/ieee.png";
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-gradient-events bg-opacity-11 to-blue-900 bg-opacity-40  p-2 text-blue-500 shadow transition hover:bg-blue-500 hover:text-white  sm:p-3 lg:p-4"
            href="#Home"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 dark:text-teal-300 lg:justify-start">
              <Image src={IeeeLogo} height={70} width={70} alt="Ieee Logo " />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left font-manrope ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12 font-manrope">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-manrope"
                href="/about"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-manrope"
                href="/disclamer"
              >
                Disclamer
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-manrope"
                href="/domains"
              >
                Our Team
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-manrope"
                href="/"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-manrope"
                href="/"
              >
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right font-manrope">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
