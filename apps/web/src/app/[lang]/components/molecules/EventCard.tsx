import Image from 'next/image';
import React from 'react';

interface Props {
  imageUrl: string;
  title: string;
  location: string;
  date: string;
  key: number;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - 3) + '...';
};

const EventCard = ({ imageUrl, title, location, date }: Props) => {
  const truncatedTitle = truncateText(title, 200); // Adjust the maximum length as needed

  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <Image
        alt=""
        src={imageUrl}
        className="object-cover w-[642px]" />

      <div className="flex flex-col items-center">
        <p className="mt-4 font-inter font-[600] text-[24px] text-black" title={title}>
          {truncatedTitle}
        </p>

        <h3 className="mt-4 text-lg text-[24px] font-[400] text-black">{location}</h3>

        <p className="mt-2 max-w-sm text-gray-700">{date}</p>
      </div>
    </div>
  );
};

export default EventCard;
