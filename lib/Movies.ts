export interface MovieEntry {
  title: string
  year: string
  genre: string
  description: string
}

export const movies: MovieEntry[] = [
  {
    title: "The Big Short",
    year: "2015",
    genre: "Drama",
    description: "A sharp, darkly funny account of the traders who saw the 2008 financial collapse coming before anyone else did.",
  },
  {
    title: "Too Big to Fail",
    year: "2011",
    genre: "Drama",
    description: "A tense retelling of the days Wall Street and Washington scrambled to keep the global financial system from collapsing.",
  },
  {
    title: "Mission: Impossible",
    year: "1996–2025",
    genre: "Action",
    description: "Ethan Hunt takes on impossible odds across a franchise built on practical stunts, tight plotting, and constant reinvention.",
  },
  {
    title: "Naruto",
    year: "2002",
    genre: "Anime",
    description: "A young ninja chasing recognition and strength slowly learns what it means to protect the people he cares about.",
  },
  {
    title: "Jujutsu Kaisen",
    year: "2020",
    genre: "Anime",
    description: "Sorcerers battle cursed spirits born from human negativity, in a series built on kinetic fights and sharp character writing.",
  },
  {
    title: "Death Note",
    year: "2006",
    genre: "Anime",
    description: "A brilliant student gains the power to kill with a name and a face, and slowly becomes the very thing he set out to stop.",
  },
  {
    title: "Chernobyl",
    year: "2019",
    genre: "Miniseries",
    description: "A meticulous, harrowing dramatization of the nuclear disaster and the cost of the lies told to contain it.",
  },
]