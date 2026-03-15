import Image from "next/image"
import Container from "../ui/Container"
import Button from "../ui/Button"

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
          <h1 className="text-4xl mt-20 md:text-6xl font-bold text-white leading-tight">
          Discover Rwanda in Its Purest Form
          </h1>
          <p className="text-lg md:text-2xl max-w-xl mt-6">
          Luxury safaris and unforgettable travel experiences.
          </p>
          <div className="mt-10 flex gap-6">
            <Button className={"bg-[--accent] text-white hover:bg-[--primary-hover] transition-colors"}>
            Explore Now
            </Button>
          <Button>
            Book Now
          </Button>
          </div>
        </Container>
      </div>

    </div>
  )
}
