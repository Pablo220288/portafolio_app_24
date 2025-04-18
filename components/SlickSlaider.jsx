"use client";

//Import Image
import Image from "next/image";

//Import React Slick
import Slider from "react-slick";

//Import React Awesome Reveal
import { Fade } from "react-awesome-reveal";
import { dataTestimonial } from "@/data/data";

const SlickSlaider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    useCss: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          infinite: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonial = dataTestimonial();

  return (
    <div className="w-full max-w-[1400px] mx-auto px-8">
      <Fade direction="up" triggerOnce cascade damping={1e-1} delay={400}>
        <Slider {...settings}>
          {testimonial.map((item, index) => (
            <div key={index} className="comment-section bg-muted">
              <div className="comment-box">
                <Image src="/apos.svg" alt="apos" width={40} height={40} />
                <span className="text-base leading-6">{item.comment}</span>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="min-w-12 text-[1.1rem] rounded-full flex items-center justify-center w-12 h-12 text-black dark:text-white bg-gray-300 dark:bg-gray-700">
                  {item.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[0.8rem]">{item.name}</span>
                  <span>{item.profession}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
    </div>
  );
};

export default SlickSlaider;
