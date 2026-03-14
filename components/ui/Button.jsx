import React from 'react'

export default function Button({ children,className }) {
  return (
    <button
      className={`bg-(--primary) text-white py-3 px-6 rounded cursor-pointer hover:bg-(--accent) transition-colors duration-300'
      ${className}`} 
    >
      {children}
    </button>
  )
}
