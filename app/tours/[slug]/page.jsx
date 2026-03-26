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
            <h1 className="text-5xl font-bold leading-tight">{tour.title}</h1>
             <div>
                  {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              {tour.description}
            </p>
             </div>
            <div className="mt-6 text-gray-600 space-y-2">
              <p>⏱ {tour.duration}</p>
              <p>👥 {tour.people}</p>
            </div>

            <div className="mt-16">
              <h3 className="font-semibold text-2xl">Highlights</h3>
            
              <ul className="mt-6 space-y-2 text-gray-600">
                {tour.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
          
            </div>
          </div>
           </div>
           <div className="my-16 border-t border-gray-200"></div>
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
          <div className="my-16 border-t border-gray-200"></div>
   {/* WHY CHOOSE THIS TOUR */}
     
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Why Choose This Experience
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {tour.whyChoose?.map((item, index) => (
       <div 
        key={index} 
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
        >
        <p className="text-gray-700 leading-relaxed">
          {item}
        </p>
      </div>
        ))}
      </div>
      </div>
        </div >
         <div className="my-16 border-t border-gray-200"></div>
       {/* PRICING CARD */}
   <div className="bg-white p-8 mt-16 rounded-2xl shadow-lg border border-gray-100">

    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
       Pricing
     </p>

     <div className="mt-6 space-y-4">

    <div className="flex justify-between items-center">
      <span className="text-gray-600">Mid-Range</span>
      <span className="font-semibold text-[#1F6F5C]">
        {tour.pricing?.midRange}
      </span>
    </div>

    <div className="flex justify-between items-center">
      <span className="text-gray-600">Budget</span>
      <span className="font-semibold text-[#1F6F5C]">
        {tour.pricing?.budget}
      </span>
    </div>

    <div className="flex justify-between items-center">
      <span className="text-gray-600">Luxury</span>
      <span className="font-semibold text-[#1F6F5C]">
        {tour.pricing?.luxury}
      </span>
    </div>

  </div>

    <Link href={`/booking/tour?tour=${tour.title}`}>
    <button className="mt-8 w-full bg-[#C49A3A] text-white py-3 rounded-xl font-semibold hover:bg-[#b68a2f] transition">
      Book This Tour
    </button>
    </Link>

    </div>
      </Container>
    </section>
  )
}