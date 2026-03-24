import React from 'react'
import PackageCard from './PackageCard'
import Container from '../ui/Container'

const packages = [
  {
    id:1,
    title:"Gorilla Encounter",
    duration:"5 Days / 4 Nights",
    people:"4-6 People",
    price:"$2,500",
    image:"/image/trekk.jpg",
    highlights:[
      "Gorilla trekking",
      "Luxury Accomodation",
      "Cultural Experience",
      "Volcano  Hiking"
    ]

  },
  {
    id:2,
    title:"Rwanda wildlife safaris",
    duration:"4 Days / 3 Nights",
    people:"4-6 People",
    price:"$2,100",
    image:"/image/akagera2.jpg",
    highlights:[
      "Big Five Game Driver",
      "Boat Safari",
      " Chimpanzee trek",
      "Bisoke Hiking"
    ]
  },
  {
    id:3,
    title:"Kigali & Nyungwe Adventure",
    duration:"4 Days / 3 Nights",
    people:"4-6 People",
    price:"$4,500",
    image:"/image/nyungwe.jpg",
    highlights:[
      "Kigali City Tour ",
      "Canopy Walk & Zipline",
      "Chimpanzee Trekking",
      "Expert Guide"
    ]
  }
]


export default function ToursPreview() {
  return (
    <section className='relative py-24 bg-[#F5F5F5] '>
        
        <Container>
           <div>
        <p className='absolute top-10 left-1/2 transform -translate-x-1/2 bg-white uppercase text-sm text-center w-48 px-4 py-2 border font-semibold text-gray-700'>
          Tour Packages
        </p>
        <h2 className='text-4xl md:text-5xl font-bold text-center mt-6'>
        Unforgettable Rwanda Tours
        </h2>
        <p className='mb-10 text-center text-gray-600 font-bold mt-8 max-w-2xl mx-auto'>
          Carefully designed itineraries that showcase the best of Rwanda's wildlife, culture,
           and landscapes
        </p>
        </div>

       <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>     
       {packages.map((pkg) => (
        <PackageCard 
        
        key={pkg.id}
        pkg={pkg}
        />
       ))}
      </div>
      <div className='mt-20 text-center border rounded-lg py-16 bg-white'>
        <h3 className='text-2xl font-semibold'>
          Need a Custom Package
        </h3>
        <p className='text-gray-500 mt-3 max-w-xl mx-auto'>
         Let our travel experts design a personalized itinerary tailored to your preferences and schedule
        </p>
        <button className='mt-8 border px-8 py-3 text-sm bg-black text-white hover:cursor-pointer hover:bg-white hover:text-black transition duration-700'>
        CONTACT US
        </button>
      </div>
      </Container>
    </section>
  )
}
