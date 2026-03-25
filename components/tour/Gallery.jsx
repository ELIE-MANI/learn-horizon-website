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
        autoplay={{ delay: 3000 }}
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-2xl overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-100">
              <Image
                src={img}
                alt="tour image"
                fill
                loading="eager"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAILS */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        className="mt-4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-20 cursor-pointer rounded-lg overflow-hidden">
              <Image
                src={img}
                alt="thumbnail"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}