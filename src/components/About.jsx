import { about } from '../data/about'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">About</p>
      <h2 className="section-heading mb-10">
        A little about me<span className="accent-dot" />
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-5">
          {about.bio.map((paragraph, i) => (
            <p key={i} className="text-navy/75 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Decorative cultural motif card */}
        <div className="relative">
          {/* Geometric background pattern (Japanese-inspired grid + Indian dot motif) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#C4B5F4" strokeWidth="0.5" />
                </pattern>
                <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="1.5" fill="#A8D4E6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative bg-white/50 border border-lavender/20 rounded-2xl p-8 backdrop-blur-sm">
            <p className="font-display text-2xl text-navy mb-2">三つの世界。</p>
            <p className="text-navy/40 text-xs tracking-widest uppercase mb-6">Three worlds, one perspective</p>
            <div className="flex flex-wrap gap-3">
              {['🇮🇳 Indian roots', '🇯🇵 Raised in Japan', '🇺🇸 Studying in the US'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-lavender/15 text-navy text-sm rounded-full border border-lavender/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
