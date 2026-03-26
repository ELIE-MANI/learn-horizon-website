"use client"

import Container from "@/components/ui/Container"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-5xl font-bold text-[#1A1A1A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Unforgettable African Journeys
          </motion.h1>

          <p className="mt-6 text-gray-600 text-lg">
            We specialize in curated luxury travel experiences across Rwanda — 
            blending adventure, culture, and nature into journeys that stay with you forever.
          </p>
        </div>

        {/* STORY */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Born from a deep love for Rwanda’s breathtaking landscapes and rich culture,
              our mission is to connect travelers with authentic African experiences.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From the misty mountains of Volcanoes National Park to the vibrant streets of Kigali,
              we design journeys that go beyond travel — they become lifelong memories.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-10 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To deliver world-class travel experiences while promoting sustainable tourism
              and supporting local communities.
            </p>
          </motion.div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">
            Why Travel With Us
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {[
              "Expert local guides with deep knowledge",
              "Luxury accommodations & curated experiences",
              "Personalized itineraries tailored to you",
              "Trusted and reliable service",
              "Sustainable and responsible tourism",
              "Seamless end-to-end travel planning"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <p className="text-gray-600">{item}</p>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center bg-white p-12 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold">
            Ready to Experience Rwanda?
          </h3>

          <p className="text-gray-500 mt-4">
            Let us craft a journey tailored just for you.
          </p>
         <Link href="/tours">
          <button className="mt-6 bg-[#C49A3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b68a2f] transition">
            Start Your Journey
          </button>
          </Link>
        </div>

      </Container>
    </section>
  )
}