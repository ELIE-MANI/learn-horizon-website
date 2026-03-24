import { hotelSchema } from "@/lib/validations/hotelSchema"

import { sendClientBookingEmail, sendCustomerConfirmationEmail } from "@/lib/email/sendBookingEmails"


export async function POST(req){

try{

const body = await req.json()

const validatedData = hotelSchema.parse(body)

await Promise.all ([
sendClientBookingEmail(validatedData),

 sendCustomerConfirmationEmail(validatedData)
])

return Response.json({

success:true

})

}catch(error){
 console.error("BOOKING API",error)   

return Response.json({
success:false,
error:"Booking failed"

},{status:500})

}

}