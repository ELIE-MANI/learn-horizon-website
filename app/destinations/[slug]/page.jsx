import { destinations } from "@/lib/data/destinations";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function DestinationDetails({ params }) {
  const { slug } = await params;

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) return notFound();

  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>
        {/* HERO IMAGE */}
        <div className="relative w-full h-100 rounded-2xl overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold">{destination.title}</h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {destination.description}
            </p>

            {/* OPTIONAL EXPERIENCES */}
            {destination.highlights && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Experiences</h3>

                <ul className="mt-3 space-y-2 text-gray-600">
                  {destination.highlights.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT (CTA CARD) */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">Plan Your Visit</h3>

            <p className="text-gray-500 mt-3 text-sm">
              Explore curated tours and travel experiences in this destination.
            </p>

            <Link href="/tours">
              <button className="mt-6 w-full bg-[#C49A3A] text-white py-3 rounded-lg font-semibold hover:bg-[#b68a2f] transition">
                View Tours
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
