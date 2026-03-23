import { timeline } from '../data/timeline'

const typeStyles = {
  education: { color: 'bg-lavender', label: 'Education' },
  work:       { color: 'bg-sky',      label: 'Work'      },
  research:   { color: 'bg-lavender-dark/60', label: 'Research' },
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">Experience</p>
      <h2 className="section-heading mb-12">
        My journey<span className="accent-dot" />
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-lavender/30 -translate-x-1/2" />

        <div className="space-y-10">
          {timeline.map((entry, i) => {
            const style = typeStyles[entry.type] || typeStyles.work
            const isRight = i % 2 === 0

            return (
              <div
                key={entry.id}
                className={`relative flex flex-col md:flex-row gap-6 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Dot on the line */}
                <div className="absolute left-3 md:left-1/2 top-4 w-3 h-3 -translate-x-1/2 rounded-full bg-background border-2 border-lavender z-10" />

                {/* Spacer for opposite side (desktop) */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 flex-1 ${isRight ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/60 border border-lavender/20 rounded-2xl p-6 hover:border-lavender/40 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${style.color}/20 text-navy/60`}>
                        {style.label}
                      </span>
                      <span className="text-xs text-navy/40">{entry.period}</span>
                    </div>
                    <h3 className="font-medium text-navy mb-1">{entry.title}</h3>
                    <p className="text-sm text-lavender-dark mb-3">
                      {entry.organization} · {entry.location}
                    </p>
                    <p className="text-sm text-navy/60 leading-relaxed">{entry.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
