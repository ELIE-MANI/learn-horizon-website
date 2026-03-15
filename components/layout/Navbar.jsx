import Link from "next/link"
import Container from "../ui/Container"

export default function Navbar() {
    return (
  <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
  <Container>
  <div className="flex justify-between items-center py-6 text-white">
    <h1 className="text-2xl font-bold">Learn Horizon</h1>

    <div className="flex gap-8 text-sm font-medium">
      <Link className="hover:text-(--accent) transition-colors" href="/">
      Home</Link>
      <Link className="hover:text-(--accent) transition-colors" href="/destinations">
      Destinations</Link>
      <Link className="hover:text-(--accent) transition-colors" href="/tours">
      Tours</Link>
      <Link className="hover:text-(--accent) transition-colors" href="/booking">
      Booking</Link>
      <Link className="hover:text-(--accent) transition-colors" href="/training">
      Training</Link>
      <Link className="hover:text-(--accent) transition-colors" href="/about">
      About</Link>
      <Link className="hover:text-(--accent) transition-colors" href="/contact">
      Contact</Link>
    </div>
  </div>
  </Container>
</nav>
    )
}