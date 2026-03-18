// Buzzsprout API integration
// Docs: https://www.buzzsprout.com/api

const API_KEY = 'F5e42a248a2c52a77564117e4b3275f7'
const SHOW_ID = '1995877'

export async function getBuzzsproutEpisodes() {
  try {
    const response = await fetch(
      `https://www.buzzsprout.com/api/${SHOW_ID}/episodes.json`,
      {
        headers: {
          'Authorization': `Token token="${API_KEY}"`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      console.error(`Buzzsprout API error: ${response.status}`)
      return null
    }

    const episodes = await response.json()

    // Transform Buzzsprout format to our format
    return episodes
      .filter(ep => ep.published_at) // Only include published episodes
      .slice(0, 6)
      .map((ep, idx) => {
        // Construct episode URL from Buzzsprout
        const episodeUrl = ep.episode_url || `https://www.buzzsprout.com/1995877/${ep.id}`
        
        return {
          title: ep.title || 'Untitled Episode',
          description: (ep.summary || ep.description || '').substring(0, 200),
          pubDate: new Date(ep.published_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          link: episodeUrl,
          audioUrl: ep.audio_url,
        }
      })
  } catch (error) {
    console.error('Buzzsprout API error:', error)
    return null
  }
}
