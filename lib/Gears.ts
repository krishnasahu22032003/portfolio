export interface GearEntry {
  category: string
  spec: string
  name: string
  description: string
  url: string
}

export const gears: GearEntry[] = [
  {
    category: "Phone",
    spec: "Nothing",
    name: "Nothing Phone 2a",
    description: "Daily driver with a clean, distraction-free Nothing OS and a display that holds up well for reading and quick work on the go.",
    url: "https://www.amazon.in/Nothing-Phone-Black-256GB-Storage/dp/B0CX74JKLL",
  },
  {
    category: "Laptop",
    spec: "Lenovo",
    name: "Lenovo IdeaPad Slim 3 (i7 H-series, 32GB RAM)",
    description: "Main development machine, handling local builds, containers, and multiple editors without breaking a sweat thanks to the 32GB RAM headroom.",
    url: "https://www.amazon.in/laptop-32gb-ram-1tb-ssd-i7/s?k=laptop+32gb+ram+1tb+ssd+i7",
  },
  {
    category: "Mouse",
    spec: "Dell",
    name: "Dell MS116 Wired Mouse",
    description: "A reliable, no-frills mouse that stays out of the way for long stretches of coding and browsing.",
    url: "https://www.amazon.in/Dell-MS116-1000DPI-Wired-Optical/dp/B01HJI0FS2",
  },
  {
    category: "Keyboard",
    spec: "Aula",
    name: "Aula F75",
    description: "A compact 75% mechanical keyboard that balances a tighter desk footprint with satisfying, tactile typing feedback.",
    url: "https://www.amazon.in/AULA-F75-Mechanical-Swappable-Pre-lubed/dp/B0CYZHC69C",
  },
  {
    category: "Monitor",
    spec: "BenQ",
    name: "BenQ GW2790QT",
    description: "A 27-inch 2K QHD IPS monitor with a dedicated coding mode, 99% sRGB coverage, USB-C 65W PD, and height adjustment for long sessions.",
    url: "https://www.amazon.in/BenQ-GW2790QT-Monitor-Height-Brightness-Intelligence/dp/B0BZ4Q9NLC",
  },
]