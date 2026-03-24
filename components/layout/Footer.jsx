import Link from "next/link"

export default function Footer(){

return(

<footer className="bg-black my-auto  text-gray-300 ">

<div className="max-w-6xl mx-auto px-6 p-7 grid md:grid-cols-4 gap-10">

<div>

<h3 className="text-white font-bold mb-4">

Learn Horizon

</h3>

<p className="text-sm">

Creating unforgettable travel experiences.

</p>

</div>

<div>

<h4 className="text-white font-semibold mb-4">

Quick Links

</h4>

<div className="space-y-2 text-sm">

<Link href="/">Home</Link>

<br/>

<Link href="/tours">Tours</Link>

<br/>

<Link href="/contact">Contact</Link>

</div>

</div>

<div>

<h4 className="text-white font-semibold mb-4">

Contact

</h4>

<p className="text-sm">

Horizonlearn57@gmail.com

</p>

<p className="text-sm">

+250 782 118 909

</p>

</div>

<div>

<h4 className="text-white font-semibold mb-4">

Follow Us

</h4>

<p className="text-sm">

Facebook

</p>

<p className="text-sm">

Instagram

</p>

</div>

</div>

<div className="text-center text-sm mt-10 text-gray-500">

© 2026 Travel Agency. All rights reserved.

</div>

</footer>

)

}