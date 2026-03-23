export function bookingClientTemplate(data){

return `

<h2>New Booking Request</h2>

<p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>

<p><strong>Email:</strong> ${data.email}</p>

<p><strong>Phone:</strong> ${data.phone}</p>

<p><strong>Check-in:</strong> ${data.checkin}</p>

<p><strong>Check-out:</strong> ${data.checkout}</p>

<p><strong>Guests:</strong> ${data.guests}</p>

<p><strong>Room:</strong> ${data.room}</p>

<p><strong>Requests:</strong> ${data.requests || "None"}</p>

`
}

export function bookingCustomerTemplate(data){

return `

<h2>Booking received</h2>

<p>Hello ${data.firstName},</p>

<p>Your booking request was received.</p>

<p>Our travel team will contact you soon.</p>

<p>Thank you for choosing us.</p>

`
}