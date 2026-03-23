import { Resend } from "resend";
import { hotelSchema } from "@/lib/validations/hotelSchema";
import { success } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST (req){
try {

 const body = await req.json();
 const validatedData = hotelSchema.parse(body) ; 
 const {

firstName,
lastName,
email,
phone,
checkin,
checkout,
guests,
room,
requests

} = validatedData

// Email to client
await resend.emails.send({
  from: 'Bookings <onboarding@resend.dev>',
  to:'Horizonlearn57@gmail.com',
  subject:'New Hotel Booking',
  html:`
  <h2>New Booking Request</h2>

    <p><strong>Name:</strong> ${firstName} ${lastName}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Phone:</strong> ${phone}</p>

    <p><strong>Check-in:</strong> ${checkin}</p>

    <p><strong>Check-out:</strong> ${checkout}</p>

    <p><strong>Guests:</strong> ${guests}</p>

    <p><strong>Room:</strong> ${room}</p>

    <p><strong>Requests:</strong> ${requests || "None"}</p>
    
 ` 
 
})
// Confirmation email to customer
await resend.emails.send({
from: 'Learn Horizon Travel <onboarding@resend.dev>', 
to: email,
subject:'Booking Request Received',

html: `

<h2>Booking received</h2>

<p>Hello ${firstName},</p>

<p>We received your booking request.</p>

<p>Our travel team will contact you soon.</p>

<p>Thank you for choosing us.</p>

`

})
return Response.json({
    success:true
})


} catch (error) {
	return Response.json({
     error:"Something went wrong"

    },{status:500});
}
}