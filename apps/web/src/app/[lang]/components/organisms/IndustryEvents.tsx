import React from 'react'
import EventCard from '@molecules/EventCard';
import { title } from 'process';
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMzUwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM1MCI+CiAgPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSIzNTAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yNDB4MzUwPC90ZXh0PiAgIAo8L3N2Zz4="

const IndustryEvents = () => {
  const events = [
    {
      imageUrl: placeholderImage,
      title: "LEADERSHIP IN MINING WORKSHOP",
      location: "KOLWEZI, DRC",
      date: "January 31, 2023",
    },
    {
      imageUrl: placeholderImage,
      title: "PRESIDENTIAL GALA DINNER",
      location: "KOLWEZI, DRC",
      date: "December 11, 2022",
    },
    {
      imageUrl: placeholderImage,
      title: "ELECTRICAL EXHIBITION",
      location: "KOLWEZI, DRC",
      date: "December 1, 2022",
    },
  ]
  return (

    <div className='grid laptop:grid-cols-3 gap-4 justify-around tablet:grid-cols-1 mx-8 grid-cols-1 mt-20'>

      {
        events.map((event, index) => (

          <EventCard
            imageUrl={event.imageUrl}
            title={event.title}
            location={event.location}
            date={event.date}
            key={index} />
        ))
      }
     
      </div>
  )
}

export default IndustryEvents
