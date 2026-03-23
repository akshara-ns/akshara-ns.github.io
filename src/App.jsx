import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import BeyondWork from './components/BeyondWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { sectionConfig } from './theme'

// Map section IDs to components
const sectionComponents = {
  hero:     <Hero />,
  about:    <About />,
  skills:   <Skills />,
  timeline: <Timeline />,
  projects: <Projects />,
  beyond:   <BeyondWork />,
  contact:  <Contact />,
}

export default function App() {
  const enabledSections = sectionConfig.filter(s => s.enabled)

  return (
    <div className="relative overflow-x-hidden bg-background min-h-screen">
      <Navbar />
      <main>
        {enabledSections.map(({ id }) => (
          <div key={id}>
            {sectionComponents[id]}
            {id !== 'contact' && (
              <div className="max-w-5xl mx-auto px-6">
                <div className="border-t border-lavender/10" />
              </div>
            )}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  )
}
