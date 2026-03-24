import Link from "next/link"

export default function Booking(){

return(

<div className="max-w-6xl mx-auto py-20 px-6">

<h1 className="text-3xl font-bold text-center mb-12">

Choose Booking Type

</h1>

<div className="grid md:grid-cols-3 gap-10">

<Link href="/booking/hotel">

<div className="border p-10 rounded-xl hover:shadow-lg transition cursor-pointer text-center">

<div className="text-4xl mb-4">

🏨

</div>

<h2 className="text-xl font-semibold mb-2">

Hotel Booking

</h2>

<p className="text-gray-500">

Reserve accommodation easily

</p>

</div>

</Link>

<Link href="/booking/ticket">

<div className="border p-10 rounded-xl hover:shadow-lg transition cursor-pointer text-center">

<div className="text-4xl mb-4">

✈

</div>

<h2 className="text-xl font-semibold mb-2">

Ticket Booking

</h2>

<p className="text-gray-500">

Book flights and transport

</p>

</div>

</Link>

<Link href="/booking/tour">

<div className="border p-10 rounded-xl hover:shadow-lg transition cursor-pointer text-center">

<div className="text-4xl mb-4">

🗺

</div>

<h2 className="text-xl font-semibold mb-2">

Tour Packages

</h2>

<p className="text-gray-500">

Explore organized tours

</p>

</div>

</Link>

</div>

</div>

)

}