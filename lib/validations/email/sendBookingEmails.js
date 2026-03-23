import { resend } from "./resend"

import {

bookingClientTemplate,
bookingCustomerTemplate

} from "./templates"

export async function sendClientBookingEmail(data){

return resend.emails.send({

from:'Bookings <onboarding@resend.dev>',

to:'Horizonlearn57@gmail.com',

subject:'New Hotel Booking',

html: bookingClientTemplate(data)

})

}

export async function sendCustomerConfirmationEmail(data){

return resend.emails.send({

from:'Learn Horizon Travel <onboarding@resend.dev>',

to: data.email,

subject:'Booking Request Received',

html: bookingCustomerTemplate(data)

})

}