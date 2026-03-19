import React from 'react'
import PackageCard from './PackageCard'
import Container from '../ui/Container'

const packages = [
  {
    id:1,
    title:"Gorilla Ecounter",
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
    <div className='relative py-24'>
         <div>
        <p className='absolute top-6 left-1/2 transform -translate-x-1/2 bg-white uppercase text-sm text-center w-48 px-4 py-2 border font-semibold text-gray-700'>
          Tour Packages
        </p>
        <h2 className='text-5xl font-bold text-center mt-6'>
        Unforgettable Rwanda Tours
        </h2>
        <p className='mb-10 text-center text-gray-600 font-bold mt-8 max-w-2xl mx-auto'>
          Carefully designed itineraries that showcase the best of Rwanda's wildlife, culture,
           and landscapes
        </p>
        </div>
        <Container>
       <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>     
       {packages.map((pkg) => (
        <PackageCard 
        
        key={pkg.id}
        title={pkg.title}
        image={pkg.image}
        duration={pkg.duration}
        people={pkg.people}
        price={pkg.price}
        highlights={pkg.highlights} 
        
        />
       ))}
      </div>
      </Container>
    </div>
  )
}
