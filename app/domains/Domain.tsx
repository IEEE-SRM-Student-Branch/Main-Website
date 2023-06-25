import { member } from "@/types/member";
import { AiFillGithub, AiFillLinkedin, AiOutlineLink } from "react-icons/ai";

interface DomainProps {
  slogan: string;
  domainTitle: string;
  about: string;
  data: member[];
}

export default function Domain({
  slogan,
  domainTitle,
  about,
  data,
}: DomainProps) {
  return (
    <div className="bg-blackGradient2 py-20 sm:py-32">
      <div className="h-[5rem]"></div>

      <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 md:flex-row lg:px-8">
        <div className="w-full md:sticky md:top-10 md:w-[28rem]">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-500">
            {slogan}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-green-500 to-green-200 inline-block text-transparent bg-clip-text sm:text-4xl">
            {domainTitle}
          </p>
          <p className="mt-6 mb-2 text-base leading-7 text-gray-400">{about}</p>
        </div>
        <div className="mt-5 w-full min-w-0 flex-1 md:mt-0">
          <dl className="grid grid-cols-1 gap-y-10 gap-x-8 md:max-w-xl lg:max-w-none lg:gap-y-16">
            {data.map((spon, key) => (
              <div
                className="relative rounded-lg bg-gray-50 p-10 flex justify-between items-center space-x-3"
                key={spon._id}
              >
                <div>
                  <a
                    href={spon.gitUrl}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <div className="flex items-center justify-center  object-contain">
                      <img
                        src={spon.image}
                        alt={spon.name}
                        width={200}
                        height={200}
                        className=" object-contain rounded-xl"
                      />
                    </div>
                  </a>
                </div>

                <div className=" items-center justify-center w-full">
                  <dt className=" mt-4 text-lg font-semibold leading-7 text-gray-900 flex justify-center items-center">
                    <span>{spon.name}</span>
                  </dt>
                  <h3 className="text-gray-500  flex justify-center items-center">
                    <span>{spon.designation}</span>
                  </h3>
                  <div className="mt-3 border border-gray-600 rounded-lg p-3 flex justify-between text-base leading-7 text-gray-600 ">
                    <a href={spon.gitUrl}>
                      <AiFillGithub className="h-7 w-7 hover:scale-105 hover:text-black transition duration-500 ease-in-out" />
                    </a>
                    <a href={spon.linkedInUrl}>
                      <AiFillLinkedin className="h-7 w-7  hover:scale-105 hover:text-black transition duration-500 ease-in-out" />
                    </a>
                    <a href={spon.portfolioUrl}>
                      <AiOutlineLink className="h-7 w-7  hover:scale-105 hover:text-black transition duration-500 ease-in-out" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
