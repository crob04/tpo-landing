import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Microphone, Play, Linkedin, Twitter, Mail, Volume2, ArrowRight } from 'lucide-react'

export default function Home({ episodes }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>TPO Podcast - Prosthetics & Orthotics Innovation</title>
        <meta name="description" content="Deep dive into 3D printing and additive manufacturing reshaping prosthetics and orthotics with Joris Peels and Brent Wright" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950 via-slate-950 to-transparent backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Microphone size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-100">TPO</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="text-slate-300 hover:text-blue-400 transition">Hosts</a>
            <a href="#episodes" className="text-slate-300 hover:text-blue-400 transition">Episodes</a>
            <a href="#subscribe" className="text-slate-300 hover:text-blue-400 transition">Subscribe</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Icon badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <Volume2 size={16} className="text-blue-400" />
              <span className="text-sm text-slate-300">New Episode Weekly</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter text-center leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-purple-500">
              The Revolution
            </span>
            <br />
            <span className="text-slate-100">in Prosthetics</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              &amp; Orthotics
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
            Exploring how 3D printing, AI, automation, and additive manufacturing are reshaping the future of prosthetic and orthotic care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#episodes" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-lg text-white hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Play size={20} />
              Listen Now
            </a>
            <a href="#subscribe" className="px-8 py-4 border-2 border-slate-600 rounded-lg font-bold text-lg text-slate-300 hover:border-blue-400 hover:text-blue-400 transition">
              Subscribe to All Platforms
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-slate-800">
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">50+</div>
              <div className="text-slate-400 text-sm mt-2">Deep Dive Episodes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">2</div>
              <div className="text-slate-400 text-sm mt-2">Expert Hosts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Weekly</div>
              <div className="text-slate-400 text-sm mt-2">New Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Hosts */}
      <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Hosts</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Industry experts pushing the boundaries of prosthetic and orthotic innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Host 1: Joris Peels */}
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-slate-800/20 border border-slate-700/50 hover:border-blue-500/50 transition p-8 backdrop-blur-sm">
              {/* Avatar */}
              <div className="mb-6 relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl font-black text-white shadow-xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition">
                  JP
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-green-500 border-2 border-slate-950 shadow-lg" />
              </div>

              {/* Info */}
              <h3 className="text-3xl font-black mb-2 text-slate-100">Joris Peels</h3>
              <p className="text-base text-blue-400 font-semibold mb-4">3D Printing & Additive Manufacturing Consultant</p>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Industry veteran with deep expertise in digital transformation of prosthetics and orthotics. Passionate about exploring cutting-edge manufacturing technologies and their real-world impact on patient care.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">3D Printing</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">Additive Manufacturing</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">Digital Innovation</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                <a href="https://linkedin.com/in/jorispeels" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/50 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/50 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Host 2: Brent Wright */}
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-slate-800/20 border border-slate-700/50 hover:border-purple-500/50 transition p-8 backdrop-blur-sm">
              {/* Avatar */}
              <div className="mb-6 relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-6xl font-black text-white shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition">
                  BW
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-green-500 border-2 border-slate-950 shadow-lg" />
              </div>

              {/* Info */}
              <h3 className="text-3xl font-black mb-2 text-slate-100">Brent Wright</h3>
              <p className="text-base text-purple-400 font-semibold mb-4">Certified Prosthetist-Orthotist & Innovator</p>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Pioneering clinician and founder leveraging 3D printing to create custom prostheses and orthoses. Dedicated to bridging the gap between cutting-edge technology and practical patient care applications.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs font-semibold text-purple-300">Prosthetics & Orthotics</span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs font-semibold text-purple-300">Clinical Innovation</span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs font-semibold text-purple-300">Patient Care</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                <a href="https://linkedin.com/in/brentwright3d" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/50 hover:bg-purple-500/20 text-slate-400 hover:text-purple-400 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/50 hover:bg-purple-500/20 text-slate-400 hover:text-purple-400 transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/50 p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-black mb-4 text-center text-slate-100">The Mission</h3>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
              The prosthetic and orthotic field is experiencing a revolution. 3D scanning, CAD software, machine learning, automation, and additive manufacturing are collectively reshaping the industry. We&apos;re here to explore this transformation as it happens—with industry experts, innovators, and practitioners at the forefront of change.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section id="episodes" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Episodes</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Deep dives into the future of prosthetics and orthotics
            </p>
          </div>

          {episodes && episodes.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {episodes.map((episode, idx) => (
                <div key={idx} className="group rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 overflow-hidden hover:border-blue-500/50 hover:from-slate-800/50 hover:to-slate-900/50 transition backdrop-blur-sm">
                  <div className="p-6">
                    {/* Play button icon */}
                    <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition">
                      <Play size={24} className="text-blue-400 fill-blue-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-blue-300 transition text-slate-100">
                      {episode.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                      {episode.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <span className="text-xs text-slate-500 font-medium">{episode.pubDate}</span>
                      <a href={episode.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1 transition">
                        Listen
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400">Loading episodes...</p>
            </div>
          )}

          <div className="text-center mt-12">
            <a href="https://podbean.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-600 rounded-lg font-bold hover:border-blue-400 hover:text-blue-400 transition">
              View All Episodes
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-slate-950 to-purple-900/10 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/50 p-12 backdrop-blur-sm">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-center tracking-tighter">
              Subscribe <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Now</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 text-center max-w-2xl mx-auto">
              Never miss an episode. Subscribe on your favorite podcast platform and get notified every time we release new content.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold text-slate-100 text-center border border-slate-700/50 hover:border-slate-600 flex items-center justify-center gap-2">
                <Microphone size={18} />
                Apple Podcasts
              </a>
              <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold text-slate-100 text-center border border-slate-700/50 hover:border-slate-600 flex items-center justify-center gap-2">
                <Volume2 size={18} />
                Spotify
              </a>
              <a href="https://www.google.com/podcasts" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold text-slate-100 text-center border border-slate-700/50 hover:border-slate-600 flex items-center justify-center gap-2">
                <Play size={18} />
                Google Podcasts
              </a>
              <a href="https://podbean.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold text-slate-100 text-center border border-slate-700/50 hover:border-slate-600 flex items-center justify-center gap-2">
                <Microphone size={18} />
                Podbean
              </a>
            </div>

            <div className="mt-10 p-6 rounded-lg bg-slate-900/50 border border-slate-700/50 text-center">
              <p className="text-slate-400 mb-3">Questions or suggestions?</p>
              <a href="mailto:hello@tpopodcast.com" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center justify-center gap-2 transition">
                <Mail size={18} />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <Microphone size={18} className="text-white" />
                </div>
                <span className="font-bold text-slate-100">TPO Podcast</span>
              </div>
              <p className="text-sm text-slate-400">Exploring the revolution in prosthetics and orthotics.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-100">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-blue-400 transition">Hosts</a></li>
                <li><a href="#episodes" className="hover:text-blue-400 transition">Episodes</a></li>
                <li><a href="#subscribe" className="hover:text-blue-400 transition">Subscribe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-100">Platforms</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Apple Podcasts</a></li>
                <li><a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Spotify</a></li>
                <li><a href="https://podbean.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Podbean</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-100">Connect</h4>
              <div className="flex gap-3">
                <a href="https://linkedin.com/in/jorispeels" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition">
                  <Twitter size={18} />
                </a>
              </div>
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
      description: "Exploring international perspectives and global best practices in prosthetic and orthotic innovation",
      pubDate: "Mar 10, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "From Jungle Clinics To Print Farms, Material Extrusion Is Changing Patient Care",
      description: "How additive manufacturing is democratizing prosthetics and orthotics worldwide, from remote clinics to advanced facilities",
      pubDate: "Mar 3, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "The Next Era of Software for Prosthetics and Orthotics with Zoltan Karpati",
      description: "Discussing scan-to-fit technology, AI landmarking, XR training, and the future of digital prosthetic design",
      pubDate: "Feb 24, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "The Hidden Power of Good Notes: How Documentation Protects Your Practice",
      description: "Why clinical documentation is crucial for patient outcomes, practice management, and building trust",
      pubDate: "Feb 17, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "3D Printing Materials: The Next Generation",
      description: "Deep dive into cutting-edge biomaterials and composites revolutionizing additive manufacturing in orthotics",
      pubDate: "Feb 10, 2026",
      link: "https://tpopodcast.podbean.com",
    },
    {
      title: "AI Landmarking in Prosthetic Design",
      description: "How machine learning is automating and improving prosthetic socket design for better fit and comfort",
      pubDate: "Feb 3, 2026",
      link: "https://tpopodcast.podbean.com",
    },
  ]

  return {
    props: {
      episodes,
    },
    revalidate: 3600,
  }
}
