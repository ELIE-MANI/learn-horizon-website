

export default function FormField({
    label,
    type="text",
    name,
    register,
    error,
    placeholder,
    as="input",
    options
}) {

const Component = as 

  return (
    <div className="space-y-2">
    {label && (
     <label className="block text-sm font-medium">
        {label}
        </label>

    )}
      <Component
      type={type}

    {...register(name)}

    placeholder={placeholder}

    className={`
    w-full border rounded-lg p-3
    focus:outline-none focus:border-[#C49A3A]

    ${error ? "border-red-500" : "border-gray-300"}
      `}
      >
    {options && options.map((option,index)=>(

    <option key={index}>

    {option}

    </option>

    ))}
     </Component>
     {error && (

    <p className="text-red-500 text-sm">

    {error.message}

    </p>
     )}
     
    </div>
  )
}
