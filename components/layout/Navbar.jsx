"use client";

import Link from "next/link";
import Container from "../ui/Container";
import { usePathname } from "next/navigation";
import { useState} from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === null;

 
  const links = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Tours", href: "/tours" },
    { name: "Booking", href: "/booking" },
    { name: "Training", href: "/training" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 ${
        isHome
          ? "absolute top-0 left-0 text-white"
          : "bg-[#1A1A1A] text-white shadow-md"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-5">
          <h1 className="text-2xl font-bold tracking-wide">
            Learn Horizon
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="relative group">
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C49A3A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-125" : "max-h-0"
        }`}
      >
        <div className="bg-[#1A1A1A] flex flex-col items-center gap-6 py-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C49A3A] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}