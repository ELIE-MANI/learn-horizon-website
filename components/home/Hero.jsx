import Image from "next/image"
import Container from "../ui/Container"
import Button from "../ui/Button"
import Link from "next/link"

export default function Hero() {
  
  return (
    <div className='h-screen relative'>
      <Image
        src="/image/hero3.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="priority"
        className="opacity-70 object-cover"
      />
      <div className="absolute inset-0 flex items-center pt-24 bg-linear-to-r from-black/70 via-black/40 to-transparent  ">
        <Container>
          <div className="max-w-2xl">
          <h1 className="text-4xl mt-20 md:text-6xl font-bold text-white leading-tight">
          Discover Rwanda <span className="text-(--accent)">in</span> Its Purest Form
          </h1>
          <p className="text-white/70 text-lg md:text-2xl max-w-xl mt-6 leading-relaxed">
          Luxury safaris and unforgettable travel experiences.
          </p>
          </div>
          <div className="mt-10 flex gap-6">
            <Link href="/destinations">
            <Button>
            Explore Now
            </Button>
            </Link>
            <Link href="/booking">
          <Button className="bg-(--accent) hover:bg-white hover:text-black transition-colors">
            Book Now
          </Button>
          </Link>
          </div>
        </Container>
      </div>

    </div>
  )
}
