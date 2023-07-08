import Image from 'next/image';

const Gallery = () => {

    // Add gallery image source here for the carousel
    // Images are stored in public directory

    const imagesLeft = [
        {id: 1, src: '/image1.png', alt: 'Image 1'},
        {id: 2, src: '/image2.png', alt: 'Image 2'},
        {id: 3, src: '/image3.png', alt: 'Image 3'},
        {id: 4, src: '/image4.png', alt: 'Image 4'},
        {id: 5, src: '/image1.png', alt: 'Image 5'},
        {id: 6, src: '/image2.png', alt: 'Image 6'},
        {id: 7, src: '/image3.png', alt: 'Image 7'},
        {id: 8, src: '/image4.png', alt: 'Image 8'},
    ]
    const leftLength = imagesLeft.length;


    const imagesRight = [
        {id: 1, src: '/image1.png', alt: 'Image 1'},
        {id: 2, src: '/image2.png', alt: 'Image 2'},
        {id: 3, src: '/image3.png', alt: 'Image 3'},
        {id: 4, src: '/image4.png', alt: 'Image 4'},
        {id: 5, src: '/image1.png', alt: 'Image 5'},
        {id: 6, src: '/image2.png', alt: 'Image 6'},
        {id: 7, src: '/image3.png', alt: 'Image 7'},
        {id: 8, src: '/image4.png', alt: 'Image 8'},
    ]
    const rightLength = imagesRight.length;


    return (
        <div className = "bg-primarybg text-white w-full h-[900px] flex flex-row">
            <div id = "galleryHeader" className = "flex flex-col align-middle lg:mx-24 mx-12 w-1/3">
                <h1 className = "font-sans font-bold lg:text-6xl/[128px] sm:text-4xl/[96px]">
                    Our Gallery
                </h1>
                <p className = "font-sans lg:text-xl/[32px] sm:text-xs/[18px] font-base text-justify w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla.
                    Pellentesque et felis metus. Cras facilisis ullamcorper magna et elementum. Vestibulum aliquet mi
                    quam, non imperdiet erat laoreet sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla.
                    Pellentesque et felis metus. Cras facilisis ullamcorper magna et elementum. Vestibulum aliquet mi
                    quam, non imperdiet erat laoreet sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </p>
            </div>


            {/*Left Side Moving Carousel*/}

            <div id = "carousel-container" className = "relative grid place-items-center overflow-hidden before:top-0 after:bottom-0">
                <div id = "carousel" className = {`flex flex-col animate-infiniteScroll h-[calc(360px * ${leftLength*2})]`} style={{ '--leftLength': leftLength }}>
                    {imagesLeft.map((image) => (
                        <div id = "slide" className="flex justify-center my-[20px]">
                            <Image
                                key = {image.id}
                                src = {image.src}
                                alt = {image.alt}
                                width = {360}
                                height = {240}
                                id= "image"
                                className = "h-auto w-auto"
                            />
                        </div>
                    ))}

                    {imagesLeft.map((image) => (
                        <div id = "slide" className="flex justify-center my-[20px]">
                            <Image
                                key = {image.id}
                                src = {image.src}
                                alt = {image.alt}
                                width = {360}
                                height = {240}
                                id= "image"
                                className = "h-auto w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>


            {/*Right Side Moving Carousel*/}

            <div id = "carousel-container" className = "relative grid place-items-center overflow-hidden before:top-0 after:bottom-0">
                <div id = "carousel" className = {`flex flex-col animate-infiniteScrollReverse h-[calc(360px * ${rightLength*2})]`} style={{ '--rightLength': rightLength }}>
                    {imagesRight.map((image) => (
                        <div id = "slide" className="flex justify-center my-[20px] mx-10">
                            <Image
                                key = {image.id}
                                src = {image.src}
                                alt = {image.alt}
                                width = {360}
                                height = {240}
                                id= "image"
                                className = "h-auto w-auto"
                            />
                        </div>
                    ))}

                    {imagesRight.map((image) => (
                        <div id = "slide" className="flex justify-center my-[20px] mx-10">
                            <Image
                                key = {image.id}
                                src = {image.src}
                                alt = {image.alt}
                                width = {360}
                                height = {240}
                                id= "image"
                                className = "h-auto w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
