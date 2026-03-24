import AboutPreview from "@/components/home/AboutPreview";
import CTA from "@/components/home/CTA";
import DestinationsPreview from "@/components/home/DestinationsPreview";
import Hero from "@/components/home/Hero";
import ToursPreview from "@/components/home/ToursPreview";
import TravelPreview from "@/components/home/TravelPreview";




export default function Home(){

return(

<main>
<Hero />
<AboutPreview />
<DestinationsPreview />
<ToursPreview />
<TravelPreview />
<CTA/>
   
</main>

)

}