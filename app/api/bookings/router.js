import { hotelSchema } from "@/lib/validations/hotelSchema"

import {

sendClientBookingEmail,
sendCustomerConfirmationEmail

} from "@/lib/email/sendBookingEmails"

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

}catch(error){4
 console.error(error)   

return Response.json({

error:"Booking failed"

},{status:500})

}

}