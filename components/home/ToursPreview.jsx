import React from 'react'
import PackageCard from './PackageCard'

export default function ToursPreview() {
  return (
    <div>
      <PackageCard 
      title="Gorilla Encouter"
      image="/image/trekk.jpg"
      duration="5 days/ 4 nights"
      people="2-6 people"
       price="$2500"
      highlights={[
        "Gorilla trekking",
       "Luxury accommodation",
       "Cultural village visit",
       "Professional guide"
      ]}
      />
    </div>
  )
}
