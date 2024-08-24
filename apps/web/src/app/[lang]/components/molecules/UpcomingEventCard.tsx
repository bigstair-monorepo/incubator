import React from 'react';

interface Props {
  imageUrl: string;
  title: string;
  location: string;
  price: string;
  key: number;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - 3) + '...';
};

const EventCard = ({ imageUrl, title, location, price  }: Props) => {
  const truncatedTitle = truncateText(title, 200); // Adjust the maximum length as needed

  return (

  <div  className="flex flex-col shadow pb-9 mx-8 mt-4">
    <img
      alt=""
      src={imageUrl}
      className="h-56 w-full rounded-t-[6px] object-cover"/>

    <div className="mt-2 px-5 flex flex-col gap-3 flex-wrap justify-center items-center  pb-2 ">
      
      <p className="font-inter text-black font-[500] text-[19px]">{title}</p>

      <p className="font-extralight text-[19px] text-[#5C5C5C] ">{location}</p>
            
      <p className="text-black font-[400] text-[19px]">{price}</p>

  <a
    className="relative top-[34px] inline-block rounded-[9.56px] 
    border-[1.91px] p border-primary bg-primary
    px-[11.47px] py-[11.47px] text-sm w-full text-center font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
    href="#"
  >
    Buy Ticket
  </a>
    </div>
  </div>
  );
};

export default EventCard;
