import Link from "next/link"

export default function CTA(){

return(

<section className="py-24 bg-[#C49A3A] text-white">

<div className="max-w-5xl mx-auto text-center px-6">

<h2 className="text-4xl font-bold mb-6">

Ready for your next adventure?

</h2>

<p className="mb-10 opacity-90">

Book your dream tour today and explore amazing destinations.

</p>

<div className="flex gap-6 justify-center">

<Link
href="/booking"
className="bg-white text-[#C49A3A] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
>

Book a Tour

</Link>

<Link
href="/tours"
className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#C49A3A] transition"
>

View Tours

</Link>

</div>

</div>

</section>

)

}