import Image from 'next/image';
import React from 'react'
import Text from '../atoms/Text';
interface Props{
  index: number;
  url: string;
  label: string
}

const Feature = ({index, url,label}: Props) => {
  return (
    <div className='flex flex-col gap-3 mobile mt-3 items-center' key={index}>
      <div className="flex items-center justify-center rounded-full">
      <Image src={url} alt="feature-icon" className="w-[60px] h-[60px] rounded-full object-cover bg-yellow-500"/>
   </div>
  <h3 className='font-[20px] text-black  '>{label}</h3>
    </div>
  )
};

export default Feature;

//  <div className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono" style="height: 500px; width: 500px; font-size: 170px;">404</div>
