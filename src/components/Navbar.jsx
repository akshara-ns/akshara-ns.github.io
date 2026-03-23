import { useState, useEffect } from 'react'
import { personal } from '../data/about'
import { sectionConfig } from '../theme'

const navLabels = {
  about: 'About',
  skills: 'Skills',
  timeline: 'Experience',
  projects: 'Projects',
  beyond: 'Beyond Work',
  contact: 'Contact',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = sectionConfig
    .filter(s => s.enabled && s.id !== 'hero' && navLabels[s.id])
    .map(s => ({ id: s.id, label: navLabels[s.id] }))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name logo */}
        <a
          href="#hero"
          className="font-display text-navy font-medium text-lg hover:text-lavender transition-colors"
        >
          Akshara<span className="text-lavender">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-navy/60 hover:text-navy transition-colors tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
          {personal.resumeUrl && (
            <li>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 border border-lavender text-navy rounded-full hover:bg-lavender/20 transition-colors"
              >
                Resume
              </a>
            </li>
          )}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-navy p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-navy transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-navy transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-navy transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-navy/70 hover:text-navy transition-colors text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
