import React from 'react'
import DestinationCard from './DestinationCard'
import Container from '../ui/Container';

const destinations =[
    {
        id: 1,
        title: "Volcanoes National Park",
        image:"/image/volcano.jpg",
        description:"Home to endangered mountain gorillas",
        featured:true   

    },

    {
        id: 2,
        title: "Akagera National Park",
        image:"/image/akagera.jpg",
        description:"Big five safari experience",
    
    },

    {
        id: 3,
        title: "Nyungwe Forest National Park",
        image:"/image/nyungwe.jpg",
        description:"Ancient rainforest canopy walks",

    },
    {
        id: 4,
        title: "Lake Kivu",
        image:"/image/lake.jpg",
        description:"Relaxing lakeside retreats",

    },
    {
        id: 5,
        title: "Kibeho",
        image:"/image/kibeho.jpg",
        description:"Spiritual pilgrimage site",
    }
];

export default function DestinationsPreview() {
  return (
    <div className='relative bg-[#E6D3A3] py-24'>
        <div>
        <p className='absolute top-6 left-1/2 transform -translate-x-1/2 bg-white uppercase text-sm text-center w-48 px-4 py-2 border font-semibold text-gray-700'>
          Iconic Destinations
        </p>
        <h2 className='text-5xl font-bold text-center mt-8'>
        Where Adventure Awaits
        </h2>
        <p className='mb-10 text-center text-gray-600 font-bold mt-8 max-w-2xl mx-auto'>
          Discover Rwanda's most iconic locations, each offering unique wildlife encounters 
          and unforgettable experiences
        </p>
        </div>
        <Container>
      <DestinationCard
      title="Volcanoes National Park"
      image="/image/volcano.jpg"
      description="Home to endangered mountain gorillas"
      />
      <div className='grid md:grid-cols-2 gap-10 mt-12 '>
     {destinations
     .slice(1,5)
     .map((destination) => (
      <DestinationCard
      key={destination.id}
        title={destination.title}
        image={destination.image}
        description={destination.description}
      />  
     ))}
      </div>
       <button className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white  uppercase border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-300'>
        View All Destination
      </button>
        </Container>
    </div>
  )
}
