import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">Skills</p>
      <h2 className="section-heading mb-12">
        What I work with<span className="accent-dot" />
      </h2>

      <div className="divide-y divide-navy/5">
        {skills.map((group) => (
          <div key={group.category} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12">
            <span className="text-xs font-medium tracking-widest uppercase text-lavender-dark shrink-0 w-36">
              {group.category}
            </span>
            <p className="text-navy/70 text-sm leading-relaxed">
              {group.items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
