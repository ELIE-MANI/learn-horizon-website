import { z } from "zod";

export const tourSchema = z.object({
  tourName: z.string().min(2, "Tour name required"),

  travelDate: z.coerce.date({
    required_error: "Travel date required",
  }),

  people: z.coerce.number().min(1, "Select number of people"),

  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),

  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone required"),

  specialRequests: z.string().max(500).optional(),
})