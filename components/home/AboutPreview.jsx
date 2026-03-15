import Container from "../ui/Container";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <div className="py-24 bg-white">
    <Container>
      <div className="grid md:grid-cols-2 gap-16 items-center">
      <div >
        <Image
          src="/image/about.jpg"
          alt="About Image"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 ">
     <p className="text-(--accent) font-semibold tracking-widest uppercase text-sm">
      THE RWANDA STORY
     </p>
      <h2 className="text-4xl font-bold text-(--dark) mt-3">
        A Land of Resilience and Beauty</h2>
        <p className="mt-6 text-gray-600 leading-relaxed">
        Rwanda is known as the land of a thousand hills, offering breathtaking landscapes, unique wildlife experiences, and a rich cultural heritage. Learn Horizon connects travelers and learners to authentic experiences that combine tourism, education, and community development.
        </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
      From national parks to cultural museums, we create journeys that inspire discovery and knowledge.
      </p>
      <div className="flex gap-10 mt-10">

   <div>

<h3 className="text-3xl font-bold text-(--primary)">

10+

</h3>

<p className="text-gray-500 text-sm">

Destinations

</p>

   </div>

   <div>

   <h3 className="text-3xl font-bold text-(--primary)">

    5+

  </h3>

  <p className="text-gray-500 text-sm">

  Training Programs

  </p>

  </div>

  <div>

  <h3 className="text-3xl font-bold text-(--primary)">

  100+

  </h3>

  <p className="text-gray-500 text-sm">

   Happy Clients

  </p>

  </div>

  </div>
      </div>
     </div>
    </Container>
    </div>
  )
}
