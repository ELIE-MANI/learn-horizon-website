export const tours = [
   {
    id: 1,
    slug: "gorilla-encounter",
    title: "Gorilla Encounter",
    duration: "3 Days / 2 Nights",
    people: "4-6 People",
    price: "$2,100",
    image: "/image/trekk.jpg",
    gallery: [
    "/image/trekk.jpg",
    "/image/akagera2.jpg",
    "/image/nyungwe.jpg"
  ],

    highlights: [
      "Gorilla trekking",
      "Cultural village experience",
      "Visit Dian Fossey Campus",
      "Golden monkey or volcano hiking"
    ],

    description: `
    Located in northern Rwanda, Musanze is the gateway to the world-famous Volcanoes National
     Park—home to the rare and endangered mountain gorillas.
   This region is part of the Virunga Mountain Range, shared by Rwanda, Uganda,
   and Democratic Republic of the Congo—making it one of the only places in the world where you can
   see mountain gorillas in their natural habitat.
   Musanze is also home to the inspiring Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund,
   built in honor of Dian Fossey—a global icon in gorilla conservation. This center adds
   a unique blend of education, conservation, and tourism to your experience.
    `,

itinerary: [
  {
    day: "Day 1",
    title: "Transfer to Musanze & Cultural Experience",
    content: `
    Drive from Kigali to Musanze (2.5 hours).
    Visit Dian Fossey / Ellen Campus.
    Enjoy cultural village experience with dance & storytelling.
    Overnight in Musanze.
    `
  },
  {
    day: "Day 2",
    title: "Gorilla Trekking Experience",
    content: `
  Early briefing at the park.
  Trek to see mountain gorillas.
  Spend one hour observing them.
  Optional visit to twin lakes.
    `
  },
  {
    day: "Day 3",
    title: "Golden Monkey or Volcano Hiking",
    content: `
  Choose between golden monkey trekking or volcano hiking.
  Return to Kigali after activity.
   `
  }
],

whyChoose: [
  "Once-in-a-lifetime gorilla trekking experience",
  "Strong conservation story (Dian Fossey legacy)",
  "Perfect mix of adventure, culture, and nature",
  "Comfortable and carefully selected accommodations",
  "Strong conservation and sustainability focus",
  "Easy combination with Nyungwe or Kigali tours"
],

    pricing: {
      midRange: "$2,100 - $2,500",
      budget: "$2,600 - $3,900",
      luxury: "$4,500 - $5,500+"
    }
  },
 {
  id: 2,
  slug: "rwanda-wildlife-safaris",
  title: "Rwanda Wildlife Safaris",
  duration: "4 Days / 3 Nights",
  people: "4-6 People",
  price: "$2,100",
  image: "/image/akagera2.jpg",

  gallery: [
    "/image/akagera2.jpg",
    "/image/trekk.jpg",
    "/image/nyungwe.jpg"
  ],

  description: `
  Experience Rwanda’s only Big Five safari in Akagera National Park.
  This tour combines thrilling game drives, scenic landscapes, and relaxing boat safaris.
  Perfect for travelers who want a classic African wildlife experience in a compact itinerary.
  `,

  highlights: [
    "Big Five Game Drive",
    "Boat Safari on Lake Ihema",
    "Scenic savannah landscapes",
    "Experienced safari guides"
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Transfer to Akagera National Park",
      content: `
      Depart Kigali for Akagera National Park.
      Afternoon game drive with chances to spot wildlife.
      Overnight inside the park.
      `
    },
    {
      day: "Day 2",
      title: "Full Day Safari & Boat Cruise",
      content: `
      Morning game drive to spot lions, elephants, and giraffes.
      Afternoon boat safari on Lake Ihema.
      Relax at the lodge.
      `
    },
    {
      day: "Day 3",
      title: "Game Drive & Relaxation",
      content: `
      Sunrise game drive.
      Optional relaxation at lodge or nature walk.
      `
    },
    {
      day: "Day 4",
      title: "Return to Kigali",
      content: `
      Morning breakfast and return to Kigali.
      `
    }
  ],

  pricing: {
    midRange: "$2,000 – $2,500",
    budget: "$1,800 – $2,200",
    luxury: "$3,500+"
  },

  whyChoose: [
    "Only Big Five safari experience in Rwanda",
    "Short distance from Kigali",
    "Perfect balance of adventure and relaxation",
    "Ideal for first-time safari travelers"
  ]
},
  {
    id:3,
    slug: "kigali-nyungwe-adventure",
    title:"Kigali & Nyungwe Adventure",
    duration:"4 Days / 3 Nights",
    people:"4-6 People",
    price:"$4,500",
    image:"/image/nyungwe.jpg",
    highlights:[
      "Kigali City Tour ",
      "Canopy Walk & Zipline",
      "Chimpanzee Trekking",
      "Expert Guide"
    ]
  },
  {
    id:4,
    slug: "rwanda-religious-cultural-tour",
    title:"Rwanda Religious & Cultural Tour ",
    duration:"5 Days / 4 Nights",
    people:"4-6 People",
    price:"$1500",
    image:"/image/kibeho.jpg",
    highlights:[
      "Kigali city historical & memorial visits ",
      "Pilgrimage to Our Lady of Kibeho Shrine",
      "Visit to Nyanza Royal Palace ",
      "Catholic heritage sites in Southern Province"
    ]
  },
   {
    id:5,
    slug: "rwanda-discovery-tour",
    title:" Rwanda Discovery Tour ",
    duration:"10 Days / 9 Nights",
    people:"4-6 People",
    price:"$5000",
    image:"/image/nyungwe.jpg",
    highlights:[
      "Kigali City Tour ",
      "Gorilla Trekking Experience",
      "Golden Monkey / Nature Experience ",
      "Lake Kivu Experience",
      "Nyungwe Forest Adventure"
    ]
  }
]
