import { personal } from '../data/about'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">Contact</p>
      <h2 className="section-heading mb-4">
        Let's connect<span className="accent-dot" />
      </h2>
      <p className="text-navy/50 max-w-xl mb-12 leading-relaxed">
        Open to research collaborations, project ideas, and conversations about ML and human-centered AI —
        I'd love to hear from you.
      </p>

      <div className="grid sm:grid-cols-3 gap-5">
        {personal.email && (
          <a
            href={`mailto:${personal.email}`}
            className="group flex flex-col gap-3 bg-white/60 border border-lavender/20 rounded-2xl p-6 hover:border-lavender/50 hover:-translate-y-0.5 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center text-lavender-dark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-navy/40 uppercase tracking-widest mb-1">Email</p>
              <p className="text-sm text-navy group-hover:text-lavender-dark transition-colors">{personal.email}</p>
            </div>
          </a>
        )}

        {personal.github && (
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 bg-white/60 border border-lavender/20 rounded-2xl p-6 hover:border-lavender/50 hover:-translate-y-0.5 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center text-lavender-dark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-navy/40 uppercase tracking-widest mb-1">GitHub</p>
              <p className="text-sm text-navy group-hover:text-lavender-dark transition-colors">
                {personal.github.replace('https://github.com/', '@')}
              </p>
            </div>
          </a>
        )}

        {personal.linkedin && (
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 bg-white/60 border border-lavender/20 rounded-2xl p-6 hover:border-lavender/50 hover:-translate-y-0.5 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center text-lavender-dark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-navy/40 uppercase tracking-widest mb-1">LinkedIn</p>
              <p className="text-sm text-navy group-hover:text-lavender-dark transition-colors">
                {personal.linkedin.replace('https://linkedin.com/in/', 'in/')}
              </p>
            </div>
          </a>
        )}
      </div>
    </section>
  )
}
