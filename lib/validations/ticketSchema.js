import { z } from "zod";

export const ticketSchema = z.object({
  departure: z.string().min(2, "Departure city required"),
  destination: z.string().min(2, "Destination required"),

  returnTrip: z.boolean().optional(),
  returnDate: z.coerce.date().optional(),
  travelDate: z.coerce.date({
    required_error: "Travel date required",
  }),

  passengers: z.coerce.number().min(1, "Select passengers"),

  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),

  email: z.string().email("Valid email required"),

  phone: z.string().min(8, "Phone required"),

  specialRequests: z.string().max(500).optional(),
})
.refine((data) => {
  if (data.returnTrip && !data.returnDate) return false;
  return true;
}, {
  message: "Return date required",
  path: ["returnDate"],
})
.refine((data) => data.departure !== data.destination, {
  message: "Departure and destination cannot be the same",
  path: ["destination"],
})
.refine((data) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return data.travelDate >= today;
}, {
  message: "Travel date cannot be in the past",
  path: ["travelDate"],
})

