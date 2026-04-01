import { trainings } from "@/lib/data/training"
import Container from "@/components/ui/Container"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function TrainingDetails({ params }) {

  const { slug } = await params

  const item = trainings.find(t => t.slug === slug)

  if (!item) return notFound()

  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>

        <div className="relative h-96 rounded-2xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mt-10">
          {item.title}
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl">
          {item.description}
        </p>

      </Container>
    </section>
  )
}