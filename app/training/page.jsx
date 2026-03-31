"use client"

import Container from "@/components/ui/Container"
import TrainingCard from "@/components/training/TrainingCard"
import { trainings } from "@/lib/data/training"

export default function TrainingPage() {
  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Education & Heritage
          </h1>

          <p className="mt-4 text-gray-600">
            Discover Rwanda’s museums, cultural heritage, and memorial sites.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {trainings.map(item => (
            <TrainingCard key={item.id} item={item} />
          ))}
        </div>

      </Container>
    </section>
  )
}