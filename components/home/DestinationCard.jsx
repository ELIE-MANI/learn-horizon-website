import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ title, image, description,slug }) {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-700">
      {/* IMAGE */}
      <div className="relative w-full h-105">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* CONTENT */}
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-xs uppercase tracking-widest text-gray-300">
            Destination
          </p>

          <h3 className="text-2xl font-bold mt-1">{title}</h3>

          <p className="text-sm mt-2 text-gray-200 opacity-0 group-hover:opacity-100 transition duration-500">
            {description}
          </p>
        
        <Link href={`/destinations/${slug}`}>
          <button className="mt-4 text-sm border border-white px-4 py-2 uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
            Explore
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
