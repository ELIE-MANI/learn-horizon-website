"use client"

import Container from "@/components/ui/Container"
import PackageCard from "@/components/home/PackageCard"
import { tours } from "@/lib/data/tour"

export default function ToursPage() {
  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Explore Our Tours
          </h1>
          <p className="mt-4 text-gray-600">
            Discover Rwanda through carefully designed travel experiences.
          </p>
        </div>

        {/* PACKAGES */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold">
          Need a Custom Tour?
        </h3>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Let our travel experts design a personalized itinerary tailored to your preferences.
        </p>

        <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Contact Us
        </button>
      </div>
      </Container>
    </section>
  )
}