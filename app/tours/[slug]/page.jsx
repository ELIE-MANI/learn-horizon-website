import { tours } from "@/lib/data/tour"
import Container from "@/components/ui/Container"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function TourDetails({ params }) {

  const { slug } = await params;

  const tour = tours.find(t => t.slug === slug);

  if (!tour) return notFound()

  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>

        {/* IMAGE */}
        <div className="relative h-100 w-full rounded-2xl overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold">{tour.title}</h1>

            <div className="mt-4 text-gray-600 space-y-2">
              <p>⏱ {tour.duration}</p>
              <p>👥 {tour.people}</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg">Highlights</h3>
              {/* ===== ITINERARY ===== */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6">
                Itinerary
              </h2>

              <div className="space-y-6">
                {tour.itinerary?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl shadow-sm border"
                  >
                    <p className="text-sm text-gray-400 font-semibold">
                      {item.day}
                    </p>

                    <h3 className="text-lg font-bold mt-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {item.description}
                    </p>

                    <p className="text-sm text-[#1F6F5C] mt-2 font-medium">
                      🍽 {item.meals}
                    </p>
                  </div>
                ))}
              </div>
            </div>

              <ul className="mt-3 space-y-2 text-gray-600">
                {tour.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
           
          {/* RIGHT */}
          <div className="bg-white p-6 rounded-2xl shadow-md">

            <p className="text-gray-500 text-sm">From</p>

            <p className="text-3xl font-bold text-[#1F6F5C]">
              {tour.price}
            </p>

            <p className="text-sm text-gray-400">per person</p>

            <Link href={`/booking/tour?tour=${tour.title}`}>
              <button className="mt-6 w-full bg-[#C49A3A] text-white py-3 rounded-lg font-semibold hover:bg-[#b68a2f] transition">
                Book This Tour
              </button>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  )
}