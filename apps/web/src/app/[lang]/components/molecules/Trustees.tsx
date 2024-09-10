import React from 'react'
import Text from '@atoms/Text'
import Image from 'next/image';
import Trustee from 'public/arm.png'
import Trustee2 from 'public/ashanti.png'
import Trustee3 from 'public/amani.png'
import Trustee4 from 'public/coat.png'
import Trustee5 from 'public/purcee.png'
import TrusteeImage from './TrusteeImage';

const Trustees = () => {
   
  return (

    <div
      className='flex gap-4 justify-center h-2 mx-2 my-4 phone-xs:flex-col phone-xs:my-20 phone-sm:flex-col phone-sm:my-8 phone-md:flex-col phone-md:my-20'>
      <div
        className='flex gap-4 justify-center h-2 mx-2  phone-xs:my-6'>
        <p className='font-inter text-[#939393] sm:text-[15px]  text-[600] flex-1 text-center'>
          Trusted by:
        </p>
      </div>
    <div
      className='flex justify-between gap-7'>
      <TrusteeImage src={Trustee4} alt='trustees' width={30} height={50} />
      <TrusteeImage src={Trustee2} alt='trustees' width={66} height={80} />
      <TrusteeImage src={Trustee3} alt='trustees' width={80} height={80} />
      <TrusteeImage src={Trustee} alt='trustees' width={70} height={80} />
      <TrusteeImage src={Trustee5} alt='trustees' width={70} height={80} />
    </div>
  </div>
  )
}

export default Trustees