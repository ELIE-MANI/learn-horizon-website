"use client";
import { useRouter } from "next/navigation"


export default function ServiceCard({service}) {

const router = useRouter();  
  
const {title,description,features,icon,dark,buttonText,link} = service;

const handleClick = () => {
    if (link) {
        router.push(link)
    }
}

  return (
    <div className={
        `group h-full flex flex-col p-8 rounded-2xl hover:-translate-y-1 transition duration-300 
        ${dark ? "bg-[#1A1A1A] text-white shadow-xl" :
            "bg-white border border-gray-300 hover:shadow-xl hover:border-[#C49A3A] "
         }
        `
    }>
     {/* ICON */}
    <div  className={`
        w-16 h-16 flex items-center justify-center rounded-2xl mb-6 transition duration-300
        ${dark 
        ? "bg-[#2A2A2A]"
        : "bg-[#F8F8F8] group-hover:bg-[#1F6F5C]"
        }
        `}>
    <div className={`
transition duration-300

${dark 
? "text-[#F8F8F8] "
: "text-[#1A1A1A] group-hover:text-white"
}
`}>

        {icon}

    </div>

    </div> 
      {/*TITLE*/}
        <h3 className={`text-xl font-semibold mb-3 
            ${dark ?"text-white" : " text-[#1A1A1A]"}
           `}>
          {title}
        </h3>
        {/*DESCRIPTION*/}
        <p className={`
        text-sm mb-6 leading-relaxed
        ${dark ? "text-gray-300" : "text-gray-500"}
        `}>
         {description}
        </p>
        {/*FEATURE*/}
        <ul className="text-sm space-y-2 mt-auto">
            {features.map((item,index) => (
             <li key={index}
             className={`${dark ? "text-gray-300" : "text-gray-600"}`}
             >
              • {item}
             </li>
            ))}

        </ul>
     {buttonText && (

        <button 
        
        onClick={handleClick}
        className={`
        mt-6 w-1/2 py-3 px-6 text-sm uppercase font-semibold rounded-xl 
        transition duration-300 transform hover:scale-105

        ${dark
        ? "bg-[#C49A3A] text-white hover:bg-[#b68a2f]"
        : "border border-[#C49A3A] text-[#C49A3A] hover:bg-[#C49A3A] hover:text-white"
        }
        `}>
        {buttonText}

        </button>

        )}
      <div className="mt-6"></div>
    </div>
  )
}
