import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home({ episodes }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>The Prosthetics and Orthotics Podcast</title>
        <meta name="description" content="A deep dive into 3D printing and additive manufacturing for prosthetics and orthotics with Brent and Joris" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950 via-slate-950 to-transparent">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            TPO
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#episodes" className="hover:text-blue-400 transition">Episodes</a>
            <a href="#listen" className="hover:text-blue-400 transition">Listen</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20 pointer-events-none" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Logo/Icon */}
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-2xl">
              <div className="text-4xl">🎙️</div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300">
              The Future
            </span>
            <br />
            <span className="text-slate-100">of Prosthetics</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              & Orthotics
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Brent and Joris explore the revolution reshaping prosthetics and orthotics through 3D printing, AI, additive manufacturing, and digital innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#episodes" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:-translate-y-1">
              Listen Now
            </a>
            <a href="https://podbean.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-slate-600 rounded-lg font-bold text-lg hover:border-blue-400 hover:text-blue-400 transition">
              Subscribe
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 border-t border-slate-800">
            <div>
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-slate-400 text-sm">Episodes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">2</div>
              <div className="text-slate-400 text-sm">Expert Hosts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">Deep Dive</div>
              <div className="text-slate-400 text-sm">Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Hosts */}
      <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center tracking-tighter">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Hosts</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Host 1 */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 border border-slate-700/50 hover:border-blue-500/50 transition">
                <div className="text-6xl mb-4">👨&apos;</div>
                <h3 className="text-2xl font-bold mb-2">Brent</h3>
                <p className="text-slate-300 mb-4">
                  Passionate about 3D printing and additive manufacturing in prosthetics. Brent brings technical expertise and hands-on experience from the cutting edge of digital prosthetic design.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-blue-300">3D Printing</span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-purple-300">CAD</span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-blue-300">Innovation</span>
                </div>
              </div>
            </div>

            {/* Host 2 */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 border border-slate-700/50 hover:border-purple-500/50 transition">
                <div className="text-6xl mb-4">👨</div>
                <h3 className="text-2xl font-bold mb-2">Joris</h3>
                <p className="text-slate-300 mb-4">
                  Deep dive enthusiast exploring the digitization of orthotics and prosthetics. Joris connects the dots between emerging tech, manufacturing, and real-world patient impact.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-purple-300">Manufacturing</span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-blue-300">Automation</span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-purple-300">Digitization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              The prosthetic and orthotic field is experiencing a revolution. 3D scanning, CAD software, machine learning, automation, and additive manufacturing are collectively reshaping the industry right now. We&apos;re here to explore this revolution as it happens.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section id="episodes" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black mb-4 text-center tracking-tighter">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Episodes</span>
          </h2>
          <p className="text-center text-slate-400 mb-16">Deep dives into the future of prosthetics and orthotics</p>

          {episodes && episodes.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {episodes.map((episode, idx) => (
                <div key={idx} className="group rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 overflow-hidden hover:border-blue-500/50 hover:from-slate-800/50 hover:to-slate-900/50 transition">
                  <div className="p-6">
                    <div className="text-4xl mb-4">🎧</div>
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-blue-300 transition">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                      {episode.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{episode.pubDate}</span>
                      <a href={episode.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        Listen →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400">Episodes loading...</p>
            </div>
          )}

          <div className="text-center mt-12">
            <a href="https://tpopodcast.podbean.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border-2 border-slate-600 rounded-lg font-bold hover:border-blue-400 hover:text-blue-400 transition">
              View All Episodes
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="listen" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-950 to-purple-900/20 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
            Subscribe to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Stay Updated</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Never miss an episode. Subscribe on your favorite podcast platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold">
              Apple Podcasts
            </a>
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold">
              Spotify
            </a>
            <a href="https://www.google.com/podcasts" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold">
              Google Podcasts
            </a>
            <a href="https://podbean.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold">
              Podbean
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">TPO</div>
              <p className="text-sm text-slate-400">Exploring the future of prosthetics and orthotics.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#episodes" className="hover:text-blue-400">Episodes</a></li>
                <li><a href="#listen" className="hover:text-blue-400">Subscribe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-slate-400">Have a question or guest idea? Reach out!</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 The Prosthetics and Orthotics Podcast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export async function getStaticProps() {
  // TODO: Import getPodcastEpisodes when Podbean API key is available
  // const liveEpisodes = await getPodcastEpisodes();
  // const episodes = liveEpisodes || defaultEpisodes;
  
  const episodes = [
    {
      title: "Why Global Thinking Matters in Orthotics and Prosthetics with Hugh Sheridan",
      description: "Exploring international perspectives on prosthetic and orthotic innovation",
      pubDate: "Mar 10, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "From Jungle Clinics To Print Farms, Material Extrusion Is Changing Patient Care",
      description: "How additive manufacturing is revolutionizing patient care delivery across the globe",
      pubDate: "Mar 3, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "The Next Era of Software for Prosthetics and Orthotics with Zoltan Karpati",
      description: "Discussing scan-to-fit, AI landmarking, and XR training in modern prosthetics",
      pubDate: "Feb 24, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "The Hidden Power of Good Notes: How Documentation Protects Your Practice",
      description: "Why proper documentation is crucial for patient outcomes and practice management",
      pubDate: "Feb 17, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "3D Printing Materials: The Next Generation",
      description: "Deep dive into cutting-edge materials revolutionizing additive manufacturing",
      pubDate: "Feb 10, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "AI Landmarking in Prosthetic Design",
      description: "How machine learning is automating and improving prosthetic socket design",
      pubDate: "Feb 3, 2026",
      link: "https://tpopodcast.podbean.com",
    },
  ]

  return {
    props: {
      episodes,
    },
    revalidate: 3600, // Revalidate every hour
  }
}
