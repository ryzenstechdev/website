export interface Episode {
  id: number
  season: number
  title: string
  videoUrl: string
  thumbnail: string
  description: string
  fillerRating: number
  nextEpisode: number | null
  prevEpisode: number | null
}

export interface Season {
  id: number
  name: string
  nickname: string
  episodeCount: number
}

interface EpisodeData {
  title: string
  description: string
  fillerRating: number
  videoUrl: string
}

interface SeasonEpisodes {
  [key: number]: {
    [key: number]: EpisodeData
  }
}

export const seasons: Season[] = [
  { 
    id: 1, 
    name: "Stagione 1", 
    nickname: "Arco del Sostituto Shinigami",
    episodeCount: 3
  },
  { 
    id: 2, 
    name: "Stagione 2", 
    nickname: "In arrivo...",
    episodeCount: 0
  },
  { 
    id: 3, 
    name: "Stagione 3", 
    nickname: "In arrivo...",
    episodeCount: 0
  },
  { 
    id: 4, 
    name: "Stagione 4", 
    nickname: "In arrivo...",
    episodeCount: 0
  },
  { 
    id: 5, 
    name: "Stagione 5", 
    nickname: "In arrivo...",
    episodeCount: 0
  },
]

// Episode data for each season
const seasonEpisodes: SeasonEpisodes = {
  1: {
    1: {
      title: "SOSTITUTO SHINIGAMI",
      description: "Il primo episodio introduttivo di BLEACH Core, viene introdotto il protagonista Ichigo Kurosaki, che si imbatte in Rukia Kuchiki, una Shinigami mandata dalla Soul Society per sorvegliare la città di Karakura.",
      fillerRating: 0, // episodio essenziale
      videoUrl: "https://short.icu/IVYjPzoB9"
    },
    2: {
      title: "A CACCIA DI HOLLOW",
      description: "Il secondo episodio introduttivo di BLEACH Core, dove Kurosaki Ichigo inizia il suo lavoro da Sostituto Shinigami insieme a Kuchiki Rukia. Nel frattempo, un Hollow particolarmente potente minaccia la città di Karakura.",
      fillerRating: 1, // maggiormente canon
      videoUrl: "https://short.icu/eG5dnlkQl" // Add video URL when available
    },
    3: {
      title: "IL POTERE NASCOSTO",
      description: "Il terzo episodio introduttivo di BLEACH Core, dove vengono introdotti i poteri di Yatsura Sado, un 15enne che frequenta la stessa scuola di Kurosaki Ichigo.",
      fillerRating: 0, // maggiormente canon
      videoUrl: "https://short.icu/hrJZP0Ta-"
    }
  },
  2: {
    // Add Season 2 episodes here
  },
  3: {
    // Add Season 3 episodes here
  },
  4: {
    // Add Season 4 episodes here
  },
  5: {
    // Add Season 5 episodes here
  }
}

export const getEpisodeData = (season: string, episode: string): Episode => {
  const seasonNumber = parseInt(season.replace('s', ''))
  const episodeId = parseInt(episode)
  const currentSeason = seasons.find(s => s.id === seasonNumber)
  const totalEpisodesInSeason = currentSeason?.episodeCount || 0
  
  const seasonData = seasonEpisodes[seasonNumber]
  const episodeData = seasonData?.[episodeId]
  
  return {
    id: episodeId,
    season: seasonNumber,
    title: `Episodio ${episodeId}: ${episodeData?.title || 'TITOLO NON DISPONIBILE'}`,
    videoUrl: episodeData?.videoUrl || '',
    thumbnail: `/thumbnails/${seasonNumber}/ep${episodeId}.jpg`,
    description: episodeData?.description || "Descrizione non disponibile",
    fillerRating: episodeData?.fillerRating || 0,
    nextEpisode: episodeId < totalEpisodesInSeason ? episodeId + 1 : null,
    prevEpisode: episodeId > 1 ? episodeId - 1 : null,
  }
}

export const generateStaticParams = () => {
  const paths: { season: string; episode: string }[] = []
  
  seasons.forEach((season) => {
    if (season.episodeCount > 0) {
      for (let episode = 1; episode <= season.episodeCount; episode++) {
        paths.push({
          season: `s${season.id}`,
          episode: episode.toString()
        })
      }
    }
  })
  
  return paths
} 
