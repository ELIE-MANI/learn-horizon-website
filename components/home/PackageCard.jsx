import React from 'react'
import Image from 'next/image'
export default function PackageCard({title,image,duration,people}) {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow'>
     <div className='relative'>
      <Image src={image} alt={title} width={500} height={500}
      className='w-full h-56 object-cover'
      />
      <div className='absolute top-3 left-3 bg-(--dark) tracking-wider font-medium text-white text-xs px-3 py-1'>
      PREMIUM
     </div>
     </div>
     <div className='p-6'>
        <h3 className='text-2xl font-bold mt-2'>
            {title}
        </h3>
     <p className="text-gray-500 text-sm mt-3">
    ⏱ {duration}
    </p>

    <p className="text-gray-500 text-sm">
    👥 {people}
    </p>
     </div>

    </div>
  )
}
