import Image from "next/image"
import Link from "next/link"

export default function TrainingCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500">

      <div className="relative h-64">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <p className="text-xs uppercase text-gray-400 tracking-wider">
          {item.category}
        </p>

        <h3 className="text-xl font-semibold mt-2">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm mt-3">
          {item.description}
        </p>

        <Link href={`/training/${item.slug}`}>
          <button className="mt-5 text-sm border px-4 py-2 hover:bg-black hover:text-white transition">
            Explore
          </button>
        </Link>
      </div>

    </div>
  )
}