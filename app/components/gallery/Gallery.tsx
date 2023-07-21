import Image from "next/image";

const Gallery = () => {
  // Add gallery image source here for the carousel
  // Images are stored in public directory

  const imagesLeft = [
    { id: 1, src: "/image1.png", alt: "Image 1" },
    { id: 2, src: "/image2.png", alt: "Image 2" },
    { id: 3, src: "/image3.png", alt: "Image 3" },
    { id: 4, src: "/image4.png", alt: "Image 4" },
    { id: 5, src: "/image1.png", alt: "Image 5" },
    { id: 6, src: "/image2.png", alt: "Image 6" },
    { id: 7, src: "/image3.png", alt: "Image 7" },
    { id: 8, src: "/image4.png", alt: "Image 8" },
  ];
  const leftLength = imagesLeft.length;

  const imagesRight = [
    { id: 1, src: "/image1.png", alt: "Image 1" },
    { id: 2, src: "/image2.png", alt: "Image 2" },
    { id: 3, src: "/image3.png", alt: "Image 3" },
    { id: 4, src: "/image4.png", alt: "Image 4" },
    { id: 5, src: "/image1.png", alt: "Image 5" },
    { id: 6, src: "/image2.png", alt: "Image 6" },
    { id: 7, src: "/image3.png", alt: "Image 7" },
    { id: 8, src: "/image4.png", alt: "Image 8" },
  ];
  const rightLength = imagesRight.length;

  return (
    <div className="bg-primarybg text-white w-full h-[1000px] flex flex-row max-lg:flex-col">
      <div
        id="galleryHeader"
        className="flex flex-col align-middle my-5 lg:mx-24 mx-12 w-1/3 max-lg:w-4/5"
      >
        <h1 className="font-sans font-bold my-3 max-lg:my-5 text-4xl lg:text-5xl/[60px] sm:text-4xl text-blue-200">
          Our Gallery
        </h1>
        <p className="font-sans lg:text-lg my-5 font-base text-justify w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          elementum et ante ac fringilla. Pellentesque et felis metus. Cras
          facilisis ullamcorper magna et elementum. Vestibulum aliquet mi quam,
          non imperdiet erat laoreet sit amet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et
          felis metus. Cras facilisis ullamcorper magna et elementum. Vestibulum
          aliquet mi quam, non imperdiet erat laoreet sit amet. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/*Left Side Moving Carousel*/}

      <div
        id="carousel-container"
        className="relative grid place-items-center overflow-hidden before:top-0 after:bottom-0 max-lg:my-1"
      >
        <div
          id="carousel"
          className={`flex lg:flex-col max-lg:items-center lg:animate-infiniteScroll max-lg:animate-infiniteScrollMobile lg:h-[calc(360px * ${
            leftLength * 2
          })] max-lg:h-[300px] max-lg:w-[calc(360px * ${
            leftLength * 2
          })] max-ml:h-[200px] mx-5`}
          style={{ "--leftLength": leftLength }}
        >
          {imagesLeft.map((image) => (
            <div
              id="slide"
              className="flex justify-center lg:my-[20px] max-lg:mx-[20px] max-lg:w-[300px] max-lg:h-[300px] max-ml:w-[200px] max-ml:h-[200px]"
            >
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
                width={360}
                height={240}
                id="image"
                className="lg:h-auto lg:w-auto"
              />
            </div>
          ))}

          {imagesLeft.map((image) => (
            <div
              id="slide"
              className="flex justify-center lg:my-[20px] max-lg:mx-[20px] max-lg:w-[300px] max-lg:h-[300px] max-ml:w-[200px] max-ml:h-[200px]"
            >
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
                width={360}
                height={240}
                id="image"
                className="lg:h-auto lg:w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/*Right Side Moving Carousel*/}

      {/*<div id="carousel-container"*/}
      {/*     className="relative grid place-items-center overflow-hidden lg:before:top-0 lg:after:bottom-0">*/}
      {/*    <div id="carousel"*/}
      {/*         className={`flex lg:flex-col animate-infiniteScrollReverse max-lg:animate-infiniteScrollReverseMobile h-[calc(360px * ${rightLength * 2})] max-lg:w-[calc(360px * ${rightLength * 2})]`}*/}
      {/*         style={{'--rightLength': rightLength}}*/}
      {/*    >*/}
      {/*        {imagesRight.map((image) => (*/}
      {/*            <div id="slide" className="flex justify-center my-[20px] mx-10">*/}
      {/*                <Image*/}
      {/*                    key={image.id}*/}
      {/*                    src={image.src}*/}
      {/*                    alt={image.alt}*/}
      {/*                    width={360}*/}
      {/*                    height={240}*/}
      {/*                    id="image"*/}
      {/*                    className="h-auto w-auto"*/}
      {/*                />*/}
      {/*            </div>*/}
      {/*        ))}*/}

      {/*        {imagesRight.map((image) => (*/}
      {/*            <div id="slide" className="flex justify-center my-[20px] mx-10">*/}
      {/*                <Image*/}
      {/*                    key={image.id}*/}
      {/*                    src={image.src}*/}
      {/*                    alt={image.alt}*/}
      {/*                    width={360}*/}
      {/*                    height={240}*/}
      {/*                    id="image"*/}
      {/*                    className="h-auto w-auto"*/}
      {/*                />*/}
      {/*            </div>*/}
      {/*        ))}*/}
      {/*    </div>*/}
      {/*</div>*/}

      <div
        id="carousel-container"
        className="relative grid place-items-center overflow-hidden before:top-0 after:bottom-0 max-lg:my-10"
      >
        <div
          id="carousel"
          className={`flex lg:flex-col max-lg:items-center lg:animate-infiniteScrollReverse max-lg:animate-infiniteScrollReverseMobile lg:h-[calc(360px * ${
            rightLength * 2
          })] max-lg:h-[300px] max-lg:w-[calc(360px * ${
            rightLength * 2
          })] max-ml:h-[200px] mx-5`}
          style={{ "--rightLength": rightLength }}
        >
          {imagesRight.map((image) => (
            <div
              id="slide"
              className="flex justify-center lg:my-[20px] max-lg:mx-[20px] max-lg:w-[300px] max-lg:h-[300px] max-ml:w-[200px] max-ml:h-[200px]"
            >
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
                width={360}
                height={240}
                id="image"
                className="lg:h-auto lg:w-auto"
              />
            </div>
          ))}

          {imagesRight.map((image) => (
            <div
              id="slide"
              className="flex justify-center lg:my-[20px] max-lg:mx-[20px] max-lg:w-[300px] max-lg:h-[300px] max-ml:w-[200px] max-ml:h-[200px]"
            >
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
                width={360}
                height={240}
                id="image"
                className="lg:h-auto lg:w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
