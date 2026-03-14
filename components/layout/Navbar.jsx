import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-full border-b">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
    <h1 className="text-2xl font-bold">Learn Horizon</h1>

    <div className="flex gap-8 text-sm font-medium">
      <Link href="/">Home</Link>
      <Link href="/destinations">Destinations</Link>
      <Link href="/tours">Tours</Link>
      <Link href="/booking">Booking</Link>
      <Link href="/training">Training</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </div>
</nav>
    )
}