import React from "react";
import Image from "next/image";
import event from "../../../public/images/event1.png";

export default function Events() {
  const data = [
    {
      date: "April 2022",
      title: "Project Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel.",
      image: event,
    },
    {
      date: "May 2022",
      title: "Platform Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: event,
    },
    {
      date: "June 2022",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: null,
    },
    {
      date: "August 2022",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: event,
    },
    {
      date: "September 2022",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam sem et tortor consequat id.",
      image: event,
    },
    {
      date: "Now",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar.",
    },
  ];
  return (
    <>
      <div className="px-5 py-2 bg-primarybg">
        <h1 className="text-4xl pt-4 pb-8 text-blue-200 text-center font-manrope font-bold ">
          Our Events
        </h1>
        <div className="relative max-w-xl mx-auto my-12 py-2 lg:max-w-3xl before:absolute before:top-0 before:w-1 before:h-full before:left-2 before:bg-[#334576] lg:before:left-1/2">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 mb-8 lg:mb-12 lg:flex even:flex-row-reverse"
            >
              <div className="absolute top-0 left-0 w-5 h-5 bg-[#030214] border-4 border-[#334576bf] rounded-full lg:left-1/2 lg:-translate-x-2"></div>
              <p
                className={`text-lg lg:text-2xl font-manrope font-medium tracking-wide text-blue-200 uppercase lg:w-1/2 lg:pr-12 lg:mt-10 mb-4 ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}
              >
                {item.date}
              </p>
              {item.image && (
                <div
                  className={`lg:w-1/2 lg:-mt-2 border-t-[1px] border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-blue-900 lg:shadow- lg:shadow-blue-800 xl:shadow-lg xl:shadow-blue-800 shadow-blue-800 rounded-lg bg-gradient-events bg-opacity-11 to-blue-900 bg-opacity-40 shadow-md backdrop-blur-2xl pl-3 pt-3 pb-4 pr-3 mr-3 lg:pt-4 ${
                    index % 2 === 0
                      ? "lg:text-left lg:pl-4 lg:pr-4 lg:ml-8 lg:mr-6"
                      : "lg:text-left lg:pr-4 lg:mr-16 lg:pl-4"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      className="rounded-lg object-cover flex flex-col"
                      src={item.image}
                      alt={item.title}
                      width={384}
                      height={162}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="mt-6 pt-2 text-xl font-semibold text-white lg:mt-0 hover:underline font-manrope ">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="mt-2 leading-7 text-blue-200 text-justify font-manrope">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
              {!item.image && (
                <div
                  className={`lg:w-1/2 lg:-mt-2 border-t-[1px] border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-blue-900 lg:shadow- lg:shadow-blue-800 xl:shadow-lg xl:shadow-blue-800 shadow-blue-800 rounded-lg bg-gradient-events bg-opacity-11 to-blue-900 bg-opacity-40 shadow-md backdrop-blur-2xl pl-3 pt-3 pb-4 pr-3 mr-3 lg:pt-4 ${
                    index % 2 === 0
                      ? "lg:text-left lg:pl-4 lg:pr-4 lg:ml-8 lg:mr-6"
                      : "lg:text-left lg:pr-4 lg:mr-16 lg:pl-4"
                  }`}
                >
                  <h4 className="mt-2 text-xl font-semibold text-white lg:mt-0 font-manrope">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="mt-2 leading-7 text-blue-200 text-justify font-manrope">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
