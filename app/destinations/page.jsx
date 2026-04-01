"use client"

import Container from "@/components/ui/Container"
import DestinationCard from "@/components/home/DestinationCard"
import { destinations } from "@/lib/data/destinations"
import Link from "next/link"

export default function DestinationsPage() {
  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Explore Rwanda
          </h1>

          <p className="mt-4 text-gray-600">
            Discover Rwanda’s most breathtaking destinations — from mountain gorillas 
            to serene lakes and rich cultural heritage.
          </p>
        </div>

        {/* DESTINATIONS GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              image={destination.image}
              description={destination.description}
              slug={destination.slug} // IMPORTANT
            />
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold">
            Not Sure Where to Go?
          </h3>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Let our travel experts help you choose the perfect destination based on your interests.
          </p>
         <Link href={"/contact"}>
          <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition">
            Contact Us
          </button>
            </Link>
        </div>

      </Container>
    </section>
  )
}