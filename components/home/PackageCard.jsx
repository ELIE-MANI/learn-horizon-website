import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function PackageCard({pkg}) {
  
  const {title,image,duration,people,highlights,price}=pkg
  return (      
    <div className='group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-700'>
     <div className='relative overflow-hidden'>
      <Image src={image} alt={title} width={500} height={500}
      className='w-full h-56 object-cover group-hover:scale-110 transition duration-700'
      />
      {/* GRADIENT OVERLAY */}

     <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent'></div>
       {/* PREMIUM BADGE */}
      <div className='absolute top-4 left-4 bg-(--dark) font-semibold text-white text-xs px-3 py-1 tracking-wider'>
      PREMIUM
     </div>
     </div>
     {/* CONTENT */}

     <div className='p-7'>
        <h3 className='text-2xl font-bold mt-2 text-[#1A1A1A]'>
            {title}
        </h3>
        {/* META INFO */}
       
       <div className='flex flex-col gap-4 mt-4 text-sm text-gray-500'>
      <p>
         ⏱ {duration}
      </p>

      <p>
        👥 {people}
      </p>
      </div>
      {/* HIGHLIGHTS */}

    <div className='mt-6'>
      <p className='text-xs uppercase text-gray-400 tracking-wider'>
        Highlights
        </p>  

     <ul className='mt-3 text-sm text-gray-600 space-y-2'>
        {highlights.map((item, index) => (
            <li key={index}>
          • {item}   
            </li>
        ))}

     </ul>
    </div>
    {/* PRICE */}

      <div className='border-t mt-8 pt-6 flex flex-col gap-2'>
        <p className='text-xs text-gray-400 uppercase'>
          From  
        </p>
        
        <p className='text-3xl font-bold text-[#1F6F5C]'>
        {price}
        </p> 

        <p className='text-xs text-gray-400'>
            per person
        </p>

      </div>
      {/* BUTTON */}
       <Link href={`/tours/${pkg.slug}`}>
      <button className='mt-7 font-semibold w-full border py-3 text-sm cursor-pointer hover:bg-black hover:text-white transition'>
        VIEW JOURNEY →
      </button>
     </Link>
     </div>
      
    </div>
  )
}
