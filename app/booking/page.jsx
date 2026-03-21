"use client"

import Container from '@/components/ui/Container'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { hotelSchema } from '@/lib/validations/hotelSchema'

export default function Bookings() {

const {
  register,
  handleSubmit,
  formState:{erros},
  reset
} = useForm({
  resolver :zodResolver(hotelSchema)
})

const onSubmit = (data) => {
  console.log(data)
  reset()
}
  return (
    <section className='min-h-screen bg-[#F9F9F9] py-24'>
    <Container>
    <div className='bg-white p-10 rounded-2xl shadow-lg'>
      <h1 className='text-3xl font-bold mb-8 text-[#1A1A1A]'>
       Hotel Booking
      </h1>  
      <p className='text-gray-500 mb-8'>
       Reserve your stay with our travel experts  
      </p>
     <form
     onSubmit={handleSubmit(onSubmit)}
     className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-4'>
          Stay Details
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
         <div>
          <label className='block text-sm font-medium mb-2'>
            Check-in Date
          </label>
          <input 
          type="date" 
          {...register("checkin")}
          className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#C49A3A]'
          />

         </div>
          
          <div>
          <label className='block text-sm font-medium mb-2'>
            Check-out Date
          </label>
          <input 
          type="date" 
          {...register("checkout")}
          className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#C49A3A]'
          />

         </div>
         <div>
          <label className='block text-sm font-medium mb-2'>
           Guests
          </label>
          <select
          {...register("guests")}
          className='w-full border border-gray-300 rounded-lg p-3'>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>

         </div>
        <div>
          <label className='block text-sm font-medium mb-2'>
           Room Type
          </label>
          <select
           {...register("room")}
          className='w-full border border-gray-300 rounded-lg p-3'>
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Suite</option>
          </select>
        </div>
        
        </div>
      
      </div>
        
        <div>
        <h2 className='text-xl font-semibold mb-4'>
        Guest Information
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
           
         <input 
         type="text"
         {...register("firstName")}
         placeholder='First Name'
         className='border border-gray-300 rounded-lg p-3'
          />  
        
         {erros.firstName && (
         
         <p className='text-red-500 text-sm'>
          {erros.firstName.message}
         </p>

         )}


        <input 
         type="text"
        {...register("lastName")}
         placeholder='Last Name'
         className='border border-gray-300 rounded-lg p-3'
          />
         {erros.firstName && (
         
         <p className='text-red-500 text-sm'>
          {erros.lastName.message}
         </p>

         )}
        <input 
         type="email"
         {...register("email")}
         placeholder='Email Address'
         className='border border-gray-300 rounded-lg p-3'
        />
         {erros.firstName && (
         
         <p className='text-red-500 text-sm'>
          {erros.email.message}
         </p>

         )}
        <input 
         type="tel"
         {...register("phone")}
         placeholder='Phone Number'
         className='border border-gray-300 rounded-lg p-3'
        />      
        {erros.firstName && (
         
         <p className='text-red-500 text-sm'>
          {erros.phone.message}
         </p>

         )}
        </div>
       </div>

       <div>
        <h2 className='text-xl font-semibold mb-4'>
         Special Requests
        </h2>
        <textarea
        {...register("requests")}
         placeholder='Any special requirements' 
         className="w-full border border-gray-300 rounded-lg p-4 h-32"
         ></textarea>
       </div>
       <button
       className='w-full bg-[#C49A3A] text-white py-4 rounded-xl font-semibold hover:bg-[#b68a2f] transition'
       >
       Confirm Booking
       </button>
     </form>
     
    </div>
    </Container>
    </section>
  )
}
