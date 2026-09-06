import { about, personal } from '../data/about'
import RichText from './RichText'

// Drop your photo in /public/ and set this to the filename, e.g. 'profile.jpg'
const PROFILE_PHOTO = 'profile.JPG'

const socialLinks = [
  { label: 'GitHub', href: personal.github },
  { label: 'LinkedIn', href: personal.linkedin },
  { label: 'Email', href: personal.email && `mailto:${personal.email}` },
]

export default function Hero() {
  return (
    <section id="hero" className="px-6 pt-32 pb-24 max-w-5xl mx-auto">
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-lavender/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-48 h-48 bg-sky/20 rounded-full blur-3xl pointer-events-none" />

      {/* The photo floats right so the opening lines sit beside it and the rest of
          the bio flows underneath, using the full width. flow-root contains the float. */}
      <div className="relative z-10 flow-root">
        {PROFILE_PHOTO && (
          <div className="mb-10 flex justify-center md:mb-6 md:ml-12 md:block md:float-right">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-lavender/30 shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}${PROFILE_PHOTO}`}
                alt="Akshara"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        <p className="text-sm tracking-widest uppercase text-lavender-dark mb-6 font-medium">
          Hello, I'm
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-medium text-navy leading-tight mb-4">
          N<span className="text-lavender">.</span>S<span className="text-lavender">.</span>Akshara
        </h1>

        <h2 className="text-xl md:text-2xl text-navy/70 font-light leading-snug">
          {personal.tagline}
        </h2>

        <div className="mt-10 space-y-5">
          {about.bio.map((paragraph, i) => (
            <p key={i} className="text-navy/75 leading-relaxed">
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
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

        <div className="mt-8 flex gap-5">
          {socialLinks.filter(link => link.href).map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-navy/40 hover:text-navy transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
