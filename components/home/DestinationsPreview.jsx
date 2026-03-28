"use client"

import React from "react"
import DestinationCard from "./DestinationCard"
import Container from "../ui/Container"
import Link from "next/link"

const destinations = [
  {
    id: 1,
    title: "Volcanoes National Park",
    image: "/image/volcano.jpg",
    description: "Home to endangered mountain gorillas",
    featured: true
  },
  {
    id: 2,
    title: "Akagera National Park",
    image: "/image/akagera.jpg",
    description: "Big five safari experience"
  },
  {
    id: 3,
    title: "Nyungwe Forest National Park",
    image: "/image/nyungwe.jpg",
    description: "Ancient rainforest canopy walks"
  },
  {
    id: 4,
    title: "Lake Kivu",
    image: "/image/lake.jpg",
    description: "Relaxing lakeside retreats"
  },
  {
    id: 5,
    title: "Kibeho",
    image: "/image/kibeho.jpg",
    description: "Spiritual pilgrimage site"
  }
]

export default function DestinationsPreview() {
  return (
    <section className="bg-[#E6D3A3] py-24">
      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-block bg-white uppercase text-xs px-4 py-2 border font-semibold text-gray-700 tracking-wider">
            Iconic Destinations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Where Adventure Awaits
          </h2>

          <p className="text-gray-600 mt-6">
            Discover Rwanda's most iconic locations, each offering unique wildlife encounters 
            and unforgettable experiences.
          </p>
        </div>

        {/* FEATURED + GRID */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* FEATURED (BIG) */}
          <div className="md:col-span-2">
            <DestinationCard
              title={destinations[0].title}
              image={destinations[0].image}
              description={destinations[0].description}
            />
          </div>

          {/* OTHER DESTINATIONS */}
          {destinations.slice(1, 5).map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              image={destination.image}
              description={destination.description}
            />
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/destinations">
            <button className="bg-white uppercase border px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">
              View All Destinations
            </button>
          </Link>
        </div>

      </Container>
    </section>
  )
}