import Image from "next/image";
import { getStrapiMedia } from "../../utils/api-helpers";
import Container from '../atoms/Container';
import Text from '../atoms/Text';
import Carousel from './Carousel';
import { url } from 'inspector';
import Features from '@organisms/Features'
import IndustryEvents from './IndustryEvents'
import UpcomingEvents from './UpcomingEvents'
import AnotherBanner from '@molecules/AnotherBanner'
interface CommunicationProps {
  heading: string;
  subheading: string;
  images: string[]
}



const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMzUwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM1MCI+CiAgPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSIzNTAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yNDB4MzUwPC90ZXh0PiAgIAo8L3N2Zz4="




const Communication = ({ heading, subheading, images }: CommunicationProps) => {

  const features = [
  {
    url: placeholderImage,
    label: "SEARCH FOR A PRODUCT/SERVICE"

  },  {
    url: placeholderImage,
    label: "BROWSE QUALIFIED COMPANIES"

  },  {
    url: placeholderImage,
    label: "PLACE AN ORER"

  },  {
    url: placeholderImage,
    label: "REVIEW AND APPROVE"

  }
  ]
  
  return (

    <div className='flex my-5 justify-center mt-20 flex-col'>
      <p className='font-inter  text-black sm:text-[16px] text-[24px] text-[500] flex-1 text-center'>
        {heading}
      </p>
          
      <div className='flex phone-sm:mx-2 my-5 mx-40 justify-center'>
        <p className='font-inter  text-black sm:text-[16px]  text-[500] flex-1 text-justify'>
          {subheading}
         </p>
      </div>
       
      <Carousel />
      <Features features={features} />
      <IndustryEvents />
      <UpcomingEvents />
      <AnotherBanner/>
   
    </div>
  );
}

export default Communication;