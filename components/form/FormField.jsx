export default function FormField({
  label,
  type = "text",
  name,
  register,
  error,
  placeholder,
  as = "input",
  options,
  readOnly = false,
}) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium">{label}</label>}

{/* ✅ SELECT */}
{as === "select" ? (
  <select
    {...register(name)}
    className={`
      w-full border rounded-lg p-3
      focus:outline-none focus:border-[#C49A3A]
      ${error ? "border-red-500" : "border-gray-300"}
    `}
  >
    <option value="">Select...</option>

    {options?.map((option, index) => {
      const value = typeof option === "object" ? option.value : option;
      const label = typeof option === "object" ? option.label : option;

      return (
        <option key={`${value}-${index}`} value={value}>
          {label}
        </option>
      );
    })}
  </select>
) : as === "textarea" ? (
        /* ✅ TEXTAREA */
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className={`
            w-full border rounded-lg p-3
            focus:outline-none focus:border-[#C49A3A]
            ${error ? "border-red-500" : "border-gray-300"}
          `}
        />
      ) : (
        /* ✅ INPUT */
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`
            ${type === "checkbox" ? "w-auto" : "w-full"}
            border rounded-lg p-3
            focus:outline-none focus:border-[#C49A3A]
            ${error ? "border-red-500" : "border-gray-300"}
            ${readOnly ? "bg-gray-100 cursor-not-allowed" : ""}
          `}
        />
      )}

      {/* ✅ ERROR */}
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
