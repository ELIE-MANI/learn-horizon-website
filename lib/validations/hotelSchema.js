import {email, z} from "zod";

export const hotelSchema = z.object({
checkin: z.string().min(1,"Check-in-required"),

checkout: z.string().min(1,"Check-out required"),

guests: z.string(),

room: z.string(),

firstName: z
.string()
.min(2, "First name required"),

lastName: z
.string()
.min(2, "Last name required"),

email: z
.string()
.email("Invalid email"),

phone: z
.string()
.min(10, "Last name required"),

requests : z.string().optional() 

})