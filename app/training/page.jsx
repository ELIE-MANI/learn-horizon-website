"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import TrainingCard from "@/components/training/TrainingCard";
import { trainings } from "@/lib/data/training";
import { motion } from "framer-motion";
export default function TrainingPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // FILTER LOGIC
  const filteredData =
    activeFilter === "All"
      ? trainings
      : trainings.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-[#F9F9F9] py-24">
      <Container>
        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Education & Heritage
          </h1>

          <p className="mt-4 text-gray-600">
            Discover Rwanda’s museums, cultural heritage, and memorial sites.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {["All", "Museum", "Memorial"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border transition ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filteredData.map((item) => (
            <TrainingCard key={item.id} item={item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
