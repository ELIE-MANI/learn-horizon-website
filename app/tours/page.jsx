"use client"

import { useState } from "react"
import Container from "@/components/ui/Container"
import PackageCard from "@/components/home/PackageCard"
import { tours } from "@/lib/data/tour"

export default function ToursPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredTours =
    activeFilter === "All"
      ? tours
      : tours.filter((tour) => tour.category === activeFilter)

  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Our Tours
          </h1>
          <p className="mt-4 text-gray-600">
            Explore our curated collection of Rwanda’s travel experiences.
          </p>
        </div>

        {/* FILTER */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {["All", "Wildlife", "Adventure", "Cultural"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 border rounded-full text-sm transition ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* COUNT + SORT */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Showing {filteredTours.length} experiences
          </p>
        </div>
         <p className="mt-6 text-center text-xs uppercase tracking-widest text-gray-400">
            Handcrafted journeys across Rwanda
          </p>
        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredTours.map((pkg) => (
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