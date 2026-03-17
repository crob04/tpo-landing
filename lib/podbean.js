// Podbean API utilities
// TODO: Add Podbean API key to .env.local once available
// NEXT_PUBLIC_PODBEAN_RSS_URL=<rss_feed_url>

export async function getPodcastEpisodes() {
  try {
    const rssUrl = process.env.NEXT_PUBLIC_PODBEAN_RSS_URL;
    
    if (!rssUrl) {
      console.warn('Podbean RSS URL not configured. Using mock data.');
      return null;
    }

    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) throw new Error(`Failed to fetch Podbean feed: ${response.status}`);
    
    const data = await response.text();
    return parseEpisodes(data);
  } catch (error) {
    console.error('Podbean API error:', error);
    return null;
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
