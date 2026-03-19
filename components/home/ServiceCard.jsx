

export default function ServiceCard({service}) {
const {title,description,features,icon,dark} = service
  return (
    <div className={
        `group p-8  border border-gray-300 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition duration-300 
        ${dark ? "bg-[#1A1A1A] text-white border-none" :
            "bg-white hover:shadow-lg"
         }
        `
    }>
     {/* ICON */}
    <div className='w-14 h-14 flex items-center justify-center rounded-xl bg-[#F5F5F5] mb-6 group-hover:bg-[#1F6F5C] transition duration-300'>

    <div className="text-[#1A1A1A] group-hover:text-white transition duration-300">

        {icon}

    </div>

    </div> 
      {/*TITLE*/}
        <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
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
