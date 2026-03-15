'use client';
import Link from "next/link"
import Container from "../ui/Container"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
  <nav className={`w-full z-50 ${isHome ? " absolute top-0 left-0 text-white" : " bg-(--primary) text-white"}`}>
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