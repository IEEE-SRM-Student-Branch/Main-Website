import { AiFillGithub, AiFillLinkedin, AiOutlineLink } from "react-icons/ai";

import { getCorp } from "@/sanity/utils/fetchData";

export default async function Domains() {
  const domains = await getCorp();
  return (
    <>
      <div className="bg-blackGradient2 py-20 sm:py-32">
        <div className="h-[5rem]"></div>

        <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 md:flex-row lg:px-8">
          <div className="w-full md:sticky md:top-10 md:w-[28rem]">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-500">
              Eat . Sleep . Code . Repeat
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-green-500 to-green-200 inline-block text-transparent bg-clip-text sm:text-4xl">
              Corporate Domain
            </p>
            <p className="mt-6 mb-2 text-base leading-7 text-gray-400">
              In this section, I talk about my experiences as a web development
              intern and volunteer. I share the cool projects I worked on, the
              skills I picked up, and the challenges I faced. Check it out to
              see how I grew as a developer through these awesome opportunities!
            </p>
          </div>
          <div className="mt-5 w-full min-w-0 flex-1 md:mt-0">
            <dl className="grid grid-cols-1 gap-y-10 gap-x-8 md:max-w-xl lg:max-w-none lg:gap-y-16">
              {domains.map((domain, key) => (
                <div
                  className="relative rounded-lg bg-gray-50 p-10"
                  key={domain._id}
                >
                  <a
                    href={domain.gitUrl}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <div className="flex h-28  w-28 items-center justify-center rounded-full">
                      <img
                        src={domain.image}
                        alt={domain.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                  </a>

                  <dt className=" mt-4 text-lg font-semibold leading-7 text-gray-900 flex justify-center items-center">
                    <span>{domain.name}</span>
                  </dt>
                  <h3 className="text-gray-500  flex justify-center items-center">
                    <span>{domain.designation}</span>
                  </h3>
                  <div className="mt-3 border border-gray-600 rounded-lg p-3 flex justify-between text-base leading-7 text-gray-600 ">
                    <a href={domain.gitUrl}>
                      <AiFillGithub className="h-7 w-7 hover:scale-105 hover:text-black transition duration-500 ease-in-out" />
                    </a>
                    <a href={domain.linkedInUrl}>
                      <AiFillLinkedin className="h-7 w-7  hover:scale-105 hover:text-black transition duration-500 ease-in-out" />
                    </a>
                    <a href={domain.portfolioUrl}>
                      <AiOutlineLink className="h-7 w-7  hover:scale-105 hover:text-black transition duration-500 ease-in-out" />
                    </a>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className=" h-screen mt-10">{/* other domains go here */}</div>
      </div>
    </>
  );
}
