"use client"

import Container from '@/components/ui/Container'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { hotelSchema } from '@/lib/validations/hotelSchema'
import FormField from '@/components/form/FormField'

export default function Bookings() {

const {
  register,
  handleSubmit,
  formState:{errors},
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
         {errors.checkin && (
          <p className="text-red-500 text-sm">
          {errors.checkin.message}
          </p>
          )}    
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
        <FormField
        label="Guests"
        name="guests"
        register={register}
        error={errors.guests}
        as='select'
        
        options={[
          "1 Guest",
          "2 Guests",
          "3 Guests",
          "4 Guests"
        ]}
        
        />

         </div>
        <div>
        <FormField
        label="Room Type"
        name="room"
        register={register}
        error={errors.room}
        as='select'
        
        options={[
          "Standard Room",
          "Deluxe Room",
          "Suite"
          
        ]}
        
        />
        </div>
        
        </div>
      
      </div>
        
        <div>
        <h2 className='text-xl font-semibold mb-4'>
        Guest Information
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
           
        <FormField
        label="First Name"
        name="first name"
        register={register}
        error={errors.firstName}
        placeholder="First Name"
        
        />
         <FormField
        label="Last Name"
        name="last name"
        register={register}
        error={errors.lastName}
        placeholder="Last Name"
        
        />
     
        <FormField
        label="Email"
        type='email'
        name="email"
        register={register}
        error={errors.email}
        placeholder="Email Address"
        
        />

         <FormField
        label="Phone Number"
        type='tel'
        name="phone"
        register={register}
        error={errors.firstName}
        placeholder="First Name"
        
        />
        </div>
       </div>

       <div>
        <h2 className='text-xl font-semibold mb-4'>
         Special Requests
        </h2>
         <FormField
        label="Special Requests"
        name="requests"
        register={register}
        error={errors.requests}
        as='textarea'
        placeholder="Any Special requirements"
               
        />
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
