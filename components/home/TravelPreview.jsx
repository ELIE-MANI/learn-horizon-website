import Container from "../ui/Container"
import ServiceCard from "./ServiceCard"
import { Hotel } from "lucide-react"
import { Plane } from "lucide-react"
import { Car } from "lucide-react"
import { Compass } from "lucide-react"
import { Ticket } from "lucide-react"


export default function TravelPreview() {
    const services = [
        {
          title:"Luxury Accommodations",
          description:"Curated selection of premium lodges and boutique hotels across Rwanda",
          features:[
           "5-Star Lodges",
           "Eco Resorts",
           "Tented Camps"
         ],
          icon:<Hotel size={28}/>  
        },
        {
        title:"Flight Booking",
        description:"Seamless international and domestic flight arrangements",
        features:[
        "Best Routes",
        "Flexible Options",
        "24/7 Support"
        ],
        icon:<Plane size={28} />
        },

        {
        title:"Private Transport",
        description:"Comfortable 4x4 vehicles with experienced drivers",
        features:[
        "Safari Vehicles",
        "Airport Transfers",
        "City Tours"
        ],
        icon:<Car size={28} />
        },

        {
        title:"Expert Guides",
        description:"Professional guides with deep wildlife and culture knowledge",
        features:[
        "Licensed Guides",
        "Multilingual",
        "Local Experts"
        ],
        icon:<Compass size={28} />
        }   
    ]
  return (
    <section className="py-24 bg-[#E6D3A3]">
     <Container>
    {/*HEADER*/}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="uppercase text-sm tracking-widest border px-4 py-2 bg-white text-gray-700">
       Travel Services
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mt-10 text-[#1A1A1A]">
        Complete Travel Solutions
      </h2>
      <p className="mt-10 text-gray-700">
        From arrival to departure we handle every detail
        of your journey with precision and care. 
      </p>
    </div>
    {/*GRID*/}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service,index) => (
        <ServiceCard
        key={index}
        service={service}
        />
      ))}  

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-12">
     <ServiceCard
     service={{
        title:"Hotel Booking Service",

        description:"Access exclusive rates at Rwanda's finest accommodations.",

        features:["Best Prices","Premium Locations"],

        icon:<Hotel size={28} />,

        buttonText:"Book Hotel",

        link:"/booking"
     }
    
    }
     
     />
     <ServiceCard
        service={{
        title:"Ticketing & Reservations",

        description:"Full service ticketing and permits handled for you.",

        features:["Permits","Reservations"],

        icon:<Ticket size={28} />,
        
        buttonText:"Book Ticket",
         
        link:"/booking",
        
        dark:true
        }}
        />
    </div>
    
    
    </Container>   

    </section>
  )
}
