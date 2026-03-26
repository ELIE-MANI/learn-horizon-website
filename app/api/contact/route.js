import { sendClientBookingEmail } from "@/lib/email/sendBookingEmails"

export async function POST(req) {
  try {
    const body = await req.json()

    await sendClientBookingEmail({
      firstName: body.name,
      lastName: "",
      email: body.email,
      phone: "",
      checkin: "",
      checkout: "",
      guests: "",
      room: body.subject,
      requests: body.message
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ success: false, error: "Failed to send" }), { status: 500 })
  }
}