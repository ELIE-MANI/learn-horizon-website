"use client"

import Container from '@/components/ui/Container'
import { useForm } from 'react-hook-form'
import z from 'zod'

export default function Bookings() {
const [formData, setFormData] = useState({
  checkin:"",
  checkout:"",
  guests:"",
  room:"",
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  requests:""
})

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}
const handleSubmit = (e) => {

e.preventDefault()
console.log('form data')
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
     onSubmit={handleSubmit}
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
          name='checkin'
          onChange={handleChange}
          className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#C49A3A]'
          />

         </div>
          
          <div>
          <label className='block text-sm font-medium mb-2'>
            Check-out Date
          </label>
          <input 
          type="date" 
          name='checkout'
          onChange={handleChange}
          className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#C49A3A]'
          />

         </div>
         <div>
          <label className='block text-sm font-medium mb-2'>
           Guests
          </label>
          <select
          name='guests'
          onChange={handleChange}
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
          name='room'
          onChange={handleChange}
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
         name='firstName'
         onChange={handleChange}
         placeholder='First Name'
         className='border border-gray-300 rounded-lg p-3'
          />  

        <input 
         type="text"
         name='lastName'
         onChange={handleChange}
         placeholder='Last Name'
         className='border border-gray-300 rounded-lg p-3'
          />

        <input 
         type="email"
         name='email'
         onChange={handleChange}
         placeholder='Email Address'
         className='border border-gray-300 rounded-lg p-3'
        />

        <input 
         type="tel"
         name='phone'
         onChange={handleChange}
         placeholder='Phone Number'
         className='border border-gray-300 rounded-lg p-3'
        />      
        </div>
       </div>

       <div>
        <h2 className='text-xl font-semibold mb-4'>
         Special Requests
        </h2>
        <textarea
        name='requests'
        onChange={handleChange}
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
