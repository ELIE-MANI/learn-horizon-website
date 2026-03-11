import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex justify-between px-10 py-6 border-b"> 
           <h1 className="text-2xl font-bold">Learn Horizon</h1> 
           <div className=" text-sm font-medium">
           <Link href="/">Home</Link>
           <Link href="/destinations">Destinations</Link>
           <Link href="/tours">Tours</Link>
           <Link href="/training">Training</Link>
           <Link href="/about">About</Link>
           <Link href="/contact">Contact</Link> 
           </div>
        </nav>
    )
}