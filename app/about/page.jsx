"use client"

import Container from "@/components/ui/Container"
import { motion } from "framer-motion"

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
          >
            Discover Rwanda Through Meaningful Journeys
          </motion.h1>

          <p className="mt-6 text-gray-600 text-lg">
            We design immersive travel experiences that connect you with Rwanda’s nature, culture, and people.
          </p>
        </div>

        {/* INTRO */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold">Learn Horizon Travel</span>, we are passionate about showcasing
            the beauty of Rwanda the “Land of a Thousand Hills.” From mountain gorillas in Volcanoes National Park
            to the serene shores of Lake Kivu, we create unforgettable journeys for travelers seeking authenticity,
            adventure, and comfort.
          </p>
        </div>

        {/* MISSION + VISION */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To provide exceptional travel experiences that combine adventure, comfort, and cultural immersion,
              while promoting responsible tourism and supporting local communities.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-10 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To become a leading travel company in East Africa, known for delivering authentic, sustainable,
              and memorable safari experiences.
            </p>
          </motion.div>

        </div>

        {/* SERVICES */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center">
            What We Offer
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Gorilla Trekking Safaris",
                desc: "Experience the rare mountain gorillas in Volcanoes National Park."
              },
              {
                title: "Wildlife & Nature Tours",
                desc: "Explore Akagera National Park and Nyungwe Forest."
              },
              {
                title: "Cultural Experiences",
                desc: "Engage with Rwanda’s traditions, history, and local communities."
              },
              {
                title: "Customized Tours",
                desc: "Personalized itineraries tailored to your preferences."
              },
              {
                title: "Hotel Reservations",
                desc: "Carefully selected accommodations from mid-range to luxury."
              },
              {
                title: "Transport Services",
                desc: "Comfortable and reliable travel across Rwanda."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold">
            Why Choose Us
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {[
              "Experienced and knowledgeable local guides",
              "Strong commitment to sustainability",
              "High-quality customer service",
              "Tailor-made travel experiences",
              "Personalized itineraries tailored to you",
              "Safe and reliable operations"
            ].map((item, i) => (
              <div
                key={i}
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
            Let’s Plan Your Journey
          </h3>

          <p className="text-gray-500 mt-4">
            Discover Rwanda in a way that’s meaningful, comfortable, and unforgettable.
          </p>

          <button className="mt-6 bg-[#C49A3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b68a2f] transition">
            Explore Tours
          </button>
        </div>

      </Container>
    </section>
  )
}