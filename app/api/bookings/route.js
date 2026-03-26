import { hotelSchema } from "@/lib/validations/hotelSchema"
import { tourSchema } from "@/lib/validations/tourSchema"
import { ticketSchema } from "@/lib/validations/ticketSchema"

import { 
  sendClientBookingEmail, 
  sendCustomerConfirmationEmail 
} from "@/lib/email/sendBookingEmails"

export async function POST(req) {
  try {
    const body = await req.json()

    let validatedData;

    //  choose schema based on booking type
    if (body.bookingType === "tour") {
      validatedData = tourSchema.parse(body)
    } else if (body.bookingType === "ticket") {
      validatedData = ticketSchema.parse(body)
    } else {
      validatedData = hotelSchema.parse(body)
    }

    await Promise.all([
      sendClientBookingEmail(validatedData),
      sendCustomerConfirmationEmail(validatedData)
    ])

    return Response.json({ success: true })

  } catch (error) {
    console.error("BOOKING API", error)

    return Response.json({
      success: false,
      error: "Booking failed"
    }, { status: 500 })
  }
}