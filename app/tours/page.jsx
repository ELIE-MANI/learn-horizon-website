"use client"

import Container from "@/components/ui/Container"
import PackageCard from "@/components/home/PackageCard"
import { tours } from "@/lib/data/tour"

export default function ToursPage() {
  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Our Tours
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Explore our curated collection of Rwanda’s most unforgettable travel experiences —
            from gorilla trekking to luxury safari adventures.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="px-5 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
            All Tours
          </button>
          <button className="px-5 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
            Wildlife
          </button>
          <button className="px-5 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
            Adventure
          </button>
          <button className="px-5 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
            Cultural
          </button>
        </div>

        {/* PACKAGES GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {tours.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* SUBTLE DIVIDER */}
        <div className="mt-24 border-t border-gray-200"></div>

        {/* CTA (MORE PREMIUM) */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[#1A1A1A]">
            Looking for something more personal?
          </h3>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Let our travel experts design a fully customized journey tailored to your preferences.
          </p>

          <button className="mt-8 border px-10 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition">
            Request Custom Tour
          </button>
        </div>

      </Container>
    </section>
  )
}