import { about } from '../data/about'

export default function BeyondWork() {
  return (
    <section id="beyond" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">Beyond Work</p>
      <h2 className="section-heading mb-4">
        The human behind the code<span className="accent-dot" />
      </h2>
      <p className="text-navy/50 max-w-xl mb-12 leading-relaxed">
        Data science is about people. Here's a bit about who I am outside of projects and coursework.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {about.beyondWork.map((item) => (
          <div
            key={item.label}
            className="bg-white/60 border border-lavender/20 rounded-2xl p-6 hover:border-lavender/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h3 className="font-medium text-navy mb-2">{item.label}</h3>
            <p className="text-sm text-navy/60 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Cultural banner */}
      <div className="mt-10 rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle Japanese-inspired horizontal stripe pattern */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stripes" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="#C4B5F4" strokeWidth="0.5" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stripes)" />
          </svg>
        </div>
        <div className="relative bg-gradient-to-r from-lavender/10 to-sky/10 border border-lavender/20 p-8 text-center">
          <p className="font-display text-xl text-navy mb-2">
            "The world is wide enough for all of us."
          </p>
          <p className="text-navy/40 text-sm">
            Growing up across three cultures taught me to listen first, understand deeply, and build with empathy.
          </p>
        </div>
      </div>
    </section>
  )
}
