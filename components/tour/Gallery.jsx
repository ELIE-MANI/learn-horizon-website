"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { useState } from "react"
import Image from "next/image"

export default function Gallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

 return (
  <div className="w-full">

    {/* MAIN SLIDER */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Thumbs]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      thumbs={{ swiper: thumbsSwiper }}
      className="rounded-3xl overflow-hidden"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-125">

            <Image
              src={img}
              alt="tour image"
              fill
              loading="eager"
              className="object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* LUXURY TEXT */}
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm uppercase tracking-widest">
                Explore Rwanda
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Unforgettable Experience
              </h2>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* THUMBNAILS */}
    <Swiper
      onSwiper={setThumbsSwiper}
      slidesPerView={4}
      spaceBetween={12}
      className="mt-6"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-24 cursor-pointer rounded-xl overflow-hidden border border-gray-200 hover:border-[#C49A3A] transition">
            <Image
              src={img}
              alt="thumbnail"
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
)
}