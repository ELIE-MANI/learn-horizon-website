

export default function ServiceCard({service}) {
const {title,description,features,icon,dark} = service
  return (
    <div className={
        `p-8 border rounded-xl transition duration-300
        ${dark ? "bg-[#1A1A1A] text-white border-none" :
            "bg-white hover:shadow-lg"
         }
        `
    }>
     {/* ICON */}
     <div className={`
        w-12 h-12 flex items-center justify-center border mb-6
        ${dark ? "border-gray-700" : "border-gray-300"}
        `}>
        {icon}
    </div>  
      {/*TITLE*/}
        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>
        {/*DESCRIPTION*/}
        <p className={`
        text-sm mb-4 leading-relaxed
        ${dark ? "text-gray-300" : "text-gray-500"}
        `}>
         {description}
        </p>
        {/*FEATURE*/}
        <ul className="text-sm space-y-1">
            {features.map((item,index) => (
             <li key={index}
             className={`${dark ? "text-gray-300" : "text-gray-600"}`}
             >
              • {item}
             </li>
            ))}

        </ul>

    </div>
  )
}
