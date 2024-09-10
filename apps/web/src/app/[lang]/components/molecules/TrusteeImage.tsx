import React from 'react';
import Image from 'next/image';

interface TrusteeImageProps {
  src: any; // Use string type for image URL
  alt: string;
  width: number;
  height: number;
}

const TrusteeImage: React.FC<TrusteeImageProps> = ({ src, alt, width, height }) => {
  return (
    <div className="filter grayscale">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default TrusteeImage;
