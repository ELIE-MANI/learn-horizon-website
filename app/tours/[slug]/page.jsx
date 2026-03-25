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
            loading="eager"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid md:grid-cols-1 gap-10">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold">{tour.title}</h1>
             <div>
                  {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              {tour.description}
            </p>
             </div>
            <div className="mt-4 text-gray-600 space-y-2">
              <p>⏱ {tour.duration}</p>
              <p>👥 {tour.people}</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg">Highlights</h3>
            
              <ul className="mt-3 space-y-2 text-gray-600">
                {tour.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
          
            </div>
          </div>
           </div>
         {/* ITINERARY */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Itinerary</h2>

          <div className="space-y-6">
            {tour.itinerary?.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                
                <h3 className="font-semibold text-lg">
                  {item.day}: {item.title}
                </h3>

                <p className="text-gray-600 mt-2 whitespace-pre-line">
                  {item.content}
                </p>

              </div>
            ))}
          </div>
            {/*PRICING*/}
            </div >
            <div className="bg-white p-6 mt-5 rounded-2xl shadow-md">

      <p className="text-gray-500 text-sm">Pricing</p>

      <div className="mt-4 space-y-3">

        <p className="text-lg font-semibold">
          Mid-Range:
          <span className="text-[#1F6F5C] ml-2">
            {tour.pricing?.midRange}
          </span>
        </p>

        <p className="text-lg font-semibold">
          Budget:
          <span className="text-[#1F6F5C] ml-2">
            {tour.pricing?.budget}
          </span>
        </p>

        <p className="text-lg font-semibold">
          Luxury:
          <span className="text-[#1F6F5C] ml-2">
            {tour.pricing?.luxury}
          </span>
        </p>

      </div>

      <p className="text-sm text-gray-400 mt-3">per person</p>

    </div>
            <Link href={`/booking/tour?tour=${tour.title}`}>
              <button className="mt-6 w-full bg-[#C49A3A] text-white py-3 rounded-lg font-semibold hover:bg-[#b68a2f] transition">
                Book This Tour
              </button>
            </Link>
      </Container>
    </section>
  )
}