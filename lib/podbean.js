// Podbean API utilities
// Note: Podbean requires show_id, which we'll extract or use directly

export async function getPodcastEpisodes(showId) {
  try {
    // Using Podbean's public RSS/API endpoint
    // Replace with actual show ID for The Prosthetics and Orthotics Podcast
    const response = await fetch(
      `https://mypodcast.podbean.com/feed.xml`, // Will need actual feed URL
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) throw new Error('Failed to fetch episodes');
    
    const data = await response.text();
    // Parse XML and return episodes
    return parseEpisodes(data);
  } catch (error) {
    console.error('Podbean API error:', error);
    return [];
  }
}

function parseEpisodes(xml) {
  // Simple XML parser for RSS feed
  const episodes = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    const title = extractTag(item, 'title');
    const description = extractTag(item, 'description');
    const pubDate = extractTag(item, 'pubDate');
    const enclosure = item.match(/enclosure url="([^"]+)"/);
    const link = extractTag(item, 'link');
    
    episodes.push({
      title,
      description,
      pubDate: new Date(pubDate).toLocaleDateString(),
      audioUrl: enclosure ? enclosure[1] : null,
      link
    });
  }
  
  return episodes.slice(0, 6); // Return latest 6 episodes
}

function extractTag(xml, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([^<]+)</${tag}>`);
  const match = xml.match(regex);
  return match ? match[1].replace(/&[a-z]+;/g, (entity) => {
    const entities = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'" };
    return entities[entity] || entity;
  }) : '';
}
