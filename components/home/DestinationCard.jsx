import React from 'react'
import Image from 'next/image'
const Destinations =[
    {
        name: "Volcanoes National Park",
        image:"/image/volcano.jpg",
        description:"Home to endangered mountain gorillas",
        featured:true   

    },

    {
        name: "Akagera National Park",
        image:"/image/akagera.jpg",
        description:"Big five safari experience",
    
    },

    {
        name: "Nyungwe Forest National Park",
        image:"/image/nyungwe.jpg",
        description:"Ancient rainforest canopy walks",

    },
    {
        name: "Lake Kivu",
        image:"/image/lake.jpg",
        description:"Relaxing lakeside retreats",

    },
    {
        name: "Kibeho",
        image:"/image/kibeho.jpg",
        description:"Spiritual pilgrimage site",
    }
];


export default function DestinationCard({title,image,description}) {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-sm'>
      <Image src={image} alt={title} width={500} height={500} 
      className='w-full h-96 object-cover'
      />
      <div className='p-8'>
        <p className='text-xs uppercase tracking-widest text-gray-400'>
          Featured Destination  
        </p>
        <h3 className='text-2xl font-bold mt-2'>
          {title}
        </h3>
      <p
      className='text-gray-600 text-sm mt-3'
      >
        {description}
      </p>
      <button className='mt-6 uppercase border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-300'>
        Explore Destination
      </button>
       </div>
    </div>
  )
}
