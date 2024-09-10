import React from 'react'
import Feature from '@molecules/Feature';

type FeatureType = { url: string; label: string; };

interface Props  {
  features:FeatureType[]
}

const Features = ({features}: Props) => {
  return (
    <div className='grid laptop:grid-cols-4 gap-4 justify-around tablet:grid-cols-2 mx-8 grid-cols-1 mt-20' >
         {features.map((feature, index) => (
           <Feature
             index={index} url={feature.url} label={feature.label} />
        ))}
    </div>
  )
}

export default Features