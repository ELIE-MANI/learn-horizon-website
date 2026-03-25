import { tours } from "@/lib/data/tour"
import Container from "@/components/ui/Container"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import Gallery from "@/components/tour/Gallery"

export default async function TourDetails({ params }) {

  const { slug } = await params;

  const tour = tours.find(t => t.slug === slug);

  if (!tour) return notFound()

  return (
    <section className="bg-[#F9F9F9] py-28">
      <Container>

        {/* IMAGE */}
        <div className="relative h-125 w-full rounded-2xl overflow-hidden">
          <Gallery images={tour.gallery || [tour.image]} />
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid md:grid-cols-1 gap-10 ">

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
              <h3 className="font-semibold text-2xl">Highlights</h3>
            
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
          <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Itinerary</h2>

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
              {/* WHY CHOOSE THIS TOUR */}
      <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
        Why Choose This Tour
      </h2>

    <div className="grid md:grid-cols-2 gap-6">

    {tour.whyChoose?.map((item, index) => (
      <div
        key={index}
        className="bg-white p-5 rounded-xl shadow flex items-start gap-3"
      >
        <span className="text-[#1F6F5C] text-xl">✔</span>

        <p className="text-gray-700">
          {item}
        </p>
      </div>
    ))}

        </div>
      </div>
        </div >
            {/*PRICING*/}
          <div className="bg-white mt-16 p-8 rounded-3xl shadow-xl border border-gray-100">

      <p className="text-xs uppercase tracking-widest text-gray-400">
        Starting From
      </p>

      <p className="text-4xl font-bold text-[#1F6F5C] mt-2">
        {tour.price}
      </p>

      <p className="text-sm text-gray-400 mt-1">
        per person
      </p>

      <div className="mt-6 space-y-3 text-sm font-semibold text-gray-600">

        <p>✔ Mid-range: {tour.pricing?.midRange}</p>
        <p>✔ Budget: {tour.pricing?.budget}</p>
        <p>✔ Luxury: {tour.pricing?.luxury}</p>

      </div>

      <Link href={`/booking/tour?tour=${tour.title}`}>
        <button className="mt-8 w-full bg-[#C49A3A] text-white py-4 rounded-xl font-semibold hover:bg-[#b68a2f] transition duration-500 shadow-md">
          Book This Tour
        </button>
      </Link>

</div>
      </Container>
    </section>
  )
}