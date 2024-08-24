import React from 'react'
import Container from '../atoms/Container';
import Text from '@atoms/Text';

interface SliderCardProps {
  key?: number;
  title: string;
  subtitle: string
  url: string
  
}
const SliderCard = ({key, title, subtitle, url}: SliderCardProps) => {
  return (
    <div>
      <div className="p-2" key={key}>
        <img className="w-full rounded-lg object-cover" src={url} alt="movie" />
        <Container position={'relative'} left='left-4' bottom="bottom-20" gap='10px'>
          <Text text ={subtitle}  />
          <h2 className="font-inter font-bold text-[18px] relative top-3">{title}</h2>
        </Container>  
      </div>
    
    </div>
  )
}

export default SliderCard