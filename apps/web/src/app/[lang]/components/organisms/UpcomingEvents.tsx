import React from 'react'
import EventCard from '@molecules/UpcomingEventCard';
import { title } from 'process';
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMzUwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM1MCI+CiAgPHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSIzNTAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yNDB4MzUwPC90ZXh0PiAgIAo8L3N2Zz4="

const UpcomingEvents = () => {
  const events = [
    {
      imageUrl: placeholderImage,
      title: "Videography",
      location: "1 Stanford RD, Kolwezi, DRC 24 May 23",
      price: "CDF 400",
    },
    {
      imageUrl: placeholderImage,
      title: "YOUTH IN LEADERSHIP",
      location: "1 Stanford RD, Kolwezi, DRC 24 May 23",
         price: "CDF 400",

    },
    {
      imageUrl: placeholderImage,
      title: "ROLE OF AI IN MINING",
      location: "23 Becker RD, Kolwezi, DRC 4 JUNE 23",
      price: "CDF 400",
    },
      {
      imageUrl: placeholderImage,
      title: "TIPS FOR BIDDING",
      location: "23 Becker RD, Kolwezi, DRC 4 JUNE 23",
      price: "CDF 400",
    },
  ]
  return (

    <div
      className='flex flex-wrap justify-around flex-col gap-10 mt-20 phone-xs:mx-auto phone-xs:justify-around
      phone-xs:flex-col phone-xs:items-center tablet:flex tablet:flex-col tablet:px-4'>
      
      <p className='font-inter  text-black sm:text-[16px] text-[24px] text-[500] flex-1 text-center'>
        Upcoming Events
      </p>

      <div className='grid laptop:grid-cols-2 gap-4 justify-around grid-cols-1'>
        {events.map((event, index) => (
          <EventCard
          imageUrl={event.imageUrl}
          title={event.title}
          location={event.location}
          price={event.price}
          key={index} />
        ))}
      </div>    
    </div>
  )
}

export default UpcomingEvents
