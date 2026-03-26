"use client"

import Container from '@/components/ui/Container'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { hotelSchema } from '@/lib/validations/hotelSchema'
import FormField from '@/components/form/FormField'
import { useState } from 'react'
import { submitBooking } from '@/lib/api/bookings'


export default function Bookings() {
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);

const {
  register,
  handleSubmit,
  formState:{errors},
  reset
} = useForm({
  resolver :zodResolver(hotelSchema)
})

const onSubmit = async (data) => {
  
  if(isSubmitting) return
  
   setIsSubmitting(true)
   setSubmitStatus(null)

  
   try{
    const result = await submitBooking(data)
    if (result.success) {
      setSubmitStatus("success")
    reset() 
    }else {
      setSubmitStatus("error")
    }
   } catch(error){
    console.error(error)
    setSubmitStatus("error")
   }finally {
    setIsSubmitting(false)
   }
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
           {errors.checkout && (
          <p className="text-red-500 text-sm">
          {errors.checkout.message}
          </p>
          )} 

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
        name="firstName"
        register={register}
        error={errors.firstName}
        placeholder="First Name"
        
        />
         <FormField
        label="Last Name"
        name="lastName"
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
        error={errors.phone}
        placeholder="Phone Number"
        
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
       <button type='submit'
       disabled={isSubmitting}
       className={`w-full bg-[#C49A3A] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#b68a2f] transition
        ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
        `}
       >
       {isSubmitting ? (

        <span className="flex gap-2 items-center">

        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"/>

        Processing booking...

        </span>

        ):(

        "Book Now"

        )}
       </button>
     </form>
     {submitStatus === "success" &&(
      <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">

      <p className="text-green-800 font-semibold">

      ✓ Booking request sent successfully

      </p>

      <p className="text-green-600 text-sm mt-1">

      Our travel team will contact you within 24 hours.

      </p>

      </div>
     )}

     {submitStatus === "error" &&(
      <div className="mt-6 p-5 bg-red-50 border border-red-200 rounded-xl">

      <p className="text-red-800 font-semibold">

      Booking failed

      </p>

      <p className="text-red-600 text-sm">

      Please try again or contact support.

      </p>

      </div>
     )}
    </div>
    </Container>
    </section>
  )
}
