import React from 'react'
import Feature from './Feature';

type FeatureType = { url: string; label: string; };

interface Props  {
  features:FeatureType[]
}
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMzUwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM1MCI+CiAgPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSIzNTAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yNDB4MzUwPC90ZXh0PiAgIAo8L3N2Zz4="



const Features = ({features}: Props) => {
  return (
    <div className='justify-between flex mx-8' >
         {features.map((feature, index) => (
           <Feature
             index={index} url={feature.url} label={feature.label} />
        ))}
    </div>
  )
}

export default Features