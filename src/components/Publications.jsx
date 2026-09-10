import { publications } from '../data/publications'
import { linkClass } from './RichText'

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 max-w-3xl mx-auto">
      <p className="section-subheading">Publications</p>
      <h2 className="section-heading mb-12">
        Published work<span className="accent-dot" />
      </h2>

      <ol className="divide-y divide-navy/5">
        {publications.map(paper => (
          <li key={paper.id} className="py-5 first:pt-0 last:pb-0">
            <h3 className="font-medium text-navy leading-snug">
              <a href={paper.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {paper.title}
              </a>
            </h3>

            {/* Muted, not accent-coloured: none of this line is clickable.
                The venue already carries the year, so no separate year column. */}
            <p className="mt-1.5 text-sm text-navy/50">
              {paper.venue}
              {paper.source && <span> · {paper.source}</span>}
              {paper.note && <span className="text-lavender-deeper"> · {paper.note}</span>}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
