'use client'
import React from "react";
import Carousel, { ArrowProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Text from '../atoms/Text';
import Container from '../atoms/Container';
import SliderCard from '../molecules/SliderCard';
import { subtle } from 'crypto';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

interface SliderImageUrl {
  url: string;
  title: string;
  subtitle: string;
}

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMzUwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM1MCI+CiAgPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSIzNTAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yNDB4MzUwPC90ZXh0PiAgIAo8L3N2Zz4="


const sliderImageUrl: SliderImageUrl[] = [
  {
    url: placeholderImage,
    title: 'Solar Panels',
    subtitle: 'lorem ipsum generated texted'
  },  {
    url: placeholderImage,
    title: 'Solar Panels',
    subtitle: 'lorem ipsum generated texted'
  },  {
    url: placeholderImage,
    title: 'Solar Panels',
    subtitle: 'lorem ipsum generated texted'
  },  {
    url: placeholderImage,
    title: 'Solar Panels',
    subtitle: 'lorem ipsum generated texted'
  },
];


const Slider: React.FC = () => {
  return (
    <div className="parent">
      <Carousel
        className='p-1 mx-8'
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="flex justify-center mt-4"
        customLeftArrow={<CustomLeftArrow/>}
        customRightArrow={<CustomRightArrow/>}

      >
        {sliderImageUrl.map((item, index) => (
          <SliderCard key={index} url={item.url} title={item.title} subtitle={item.subtitle} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;


  const CustomLeftArrow = ({ onClick }: ArrowProps) => {
  return (
      <div onClick={onClick} className="absolute arrow-btn left-0 text-center py-3 cursor-pointer rounded-full">
        <IoIosArrowDropleftCircle className="h-6 w-6 text-black float-right" />
      </div>
  );
};

const CustomRightArrow = ({ onClick }: ArrowProps) => {
  return (
    <div onClick={onClick} className="absolute arrow-btn right-0 text-center py-3 cursor-pointer rounded-full">
      <IoIosArrowDroprightCircle className="h-6 w-6 text-black float-right" />
    </div>
  );
};