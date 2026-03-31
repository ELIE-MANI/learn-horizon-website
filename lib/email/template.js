export function bookingClientTemplate(data) {
  return `
    <h2>New Booking Request</h2>

    <p><strong>Booking Type:</strong> ${data.bookingType}</p>

    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>

    ${
      data.bookingType === "hotel"
        ? `
      <h3>Hotel Details</h3>
      <p><strong>Check-in:</strong> ${data.checkin}</p>
      <p><strong>Check-out:</strong> ${data.checkout}</p>
      <p><strong>Guests:</strong> ${data.guests}</p>
      <p><strong>Room:</strong> ${data.room}</p>
    `
        : ""
    }

    ${
      data.bookingType === "ticket"
        ? `
      <h3>Ticket Details</h3>
      <p><strong>From:</strong> ${data.departure}</p>
      <p><strong>To:</strong> ${data.destination}</p>
      <p><strong>Travel Date:</strong> ${data.travelDate}</p>
      <p><strong>Return Trip:</strong> ${data.returnTrip ? "Yes" : "No"}</p>
      <p><strong>Return Date:</strong> ${data.returnDate || "N/A"}</p>
      <p><strong>Passengers:</strong> ${data.passengers}</p>
    `
        : ""
    }

    ${
      data.bookingType === "tour"
        ? `
      <h3>Tour Details</h3>
      <p><strong>Tour:</strong> ${data.tourName}</p>
      <p><strong>Travel Date:</strong> ${data.travelDate}</p>
      <p><strong>People:</strong> ${data.people}</p>
    `
        : ""
    }

    <p><strong>Requests:</strong> ${data.requests || data.specialRequests || "None"}</p>
  `;
}

export function bookingCustomerTemplate(data) {
  return `
    <h2>Booking Confirmation</h2>

    <p>Hi ${data.firstName},</p>

    <p>Your booking has been received successfully.</p>

    <h3>Booking Summary</h3>

    <p><strong>Type:</strong> ${data.bookingType}</p>

    ${
      data.bookingType === "hotel"
        ? `
      <p><strong>Check-in:</strong> ${data.checkin}</p>
      <p><strong>Check-out:</strong> ${data.checkout}</p>
    `
        : ""
    }

    ${
      data.bookingType === "ticket"
        ? `
      <p><strong>From:</strong> ${data.departure}</p>
      <p><strong>To:</strong> ${data.destination}</p>
    `
        : ""
    }

    ${
      data.bookingType === "tour"
        ? `
      <p><strong>Tour:</strong> ${data.tourName}</p>
      <p><strong>Travel Date:</strong> ${data.travelDate}</p>
    `
        : ""
    }

    <p>We will contact you shortly to confirm your booking.</p>
  `;
}