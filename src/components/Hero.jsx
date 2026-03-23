import { personal } from '../data/about'

// Drop your photo in /public/ and set this to the filename, e.g. 'profile.jpg'
const PROFILE_PHOTO = 'profile.JPG'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-lavender/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-48 h-48 bg-sky/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-12 md:gap-16">

        {/* Text content */}
        <div className="flex-1">
          <p className="text-sm tracking-widest uppercase text-lavender-dark mb-6 font-medium">
            Hello, I'm
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-medium text-navy leading-tight mb-4">
            N<span className="text-lavender">.</span>S<span className="text-lavender">.</span>Akshara
          </h1>

          <h2 className="text-xl md:text-2xl text-navy/60 font-light mb-6">
            {personal.role}
          </h2>

          <p className="text-navy/70 max-w-xl text-lg leading-relaxed mb-10">
            {personal.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-navy text-background rounded-full text-sm font-medium hover:bg-navy/80 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-navy/30 text-navy rounded-full text-sm font-medium hover:border-lavender hover:text-lavender transition-colors"
            >
              Get in Touch
            </a>
            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-lavender/50 text-lavender-dark rounded-full text-sm font-medium hover:bg-lavender/10 transition-colors"
              >
                Resume ↗
              </a>
            )}
          </div>

          {/* Social links */}
          <div className="flex gap-5 mt-12">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy/40 hover:text-navy transition-colors text-sm"
              >
                GitHub
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy/40 hover:text-navy transition-colors text-sm"
              >
                LinkedIn
              </a>
            )}
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="text-navy/40 hover:text-navy transition-colors text-sm"
              >
                Email
              </a>
            )}
          </div>
        </div>

        {/* Profile photo */}
        {PROFILE_PHOTO && (
          <div className="shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-lavender/30 shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}${PROFILE_PHOTO}`}
                alt="Akshara"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
