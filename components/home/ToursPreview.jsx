import React from 'react'
import PackageCard from './PackageCard'
import Container from '../ui/Container'

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
       <div className='mt-16'>     
      <PackageCard 
      title="Gorilla Encouter"
      image="/image/trekk.jpg"
      duration="5 days/ 4 nights"
      people="2-6 people"
       price="$2500"
      highlights={[
        "Gorilla trekking",
       "Luxury accommodation",
       "Cultural village visit",
       "Professional guide"
      ]}
      />
      </div>
      </Container>
    </div>
  )
}
