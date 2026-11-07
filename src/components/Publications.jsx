import { personal } from '../data/about'
import { publications } from '../data/publications'
import { linkClass } from './RichText'

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="section-heading mb-12">
        Publications<span className="accent-dot" />
      </h2>

      <ol className="divide-y divide-navy/5">
        {publications.map(paper => (
          <li key={paper.id} className="py-5 first:pt-0 last:pb-0">
            <h3 className="font-medium text-navy leading-snug">
              <a href={paper.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {paper.title}
              </a>
            </h3>

            {/* Published author order, with my name picked out. */}
            {paper.authors && (
              <p className="mt-1.5 text-sm text-navy/60 leading-relaxed">
                {paper.authors.map((author, i) => (
                  <span key={author}>
                    {i > 0 && ', '}
                    {author === personal.name
                      ? <span className="font-semibold text-navy">{author}</span>
                      : author}
                  </span>
                ))}
              </p>
            )}

            {/* Muted, not accent-coloured: none of this line is clickable.
                The venue already carries the year, so no separate year column. */}
            <p className="mt-1.5 text-sm text-navy/50">
              {paper.venue}
              {paper.source && <span> · {paper.source}</span>}
              {paper.note && (
                <span className={paper.highlight ? 'text-lavender-deeper' : undefined}>
                  {' · '}{paper.note}
                </span>
              )}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
