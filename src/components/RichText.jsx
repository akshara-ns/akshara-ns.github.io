// ─────────────────────────────────────────────
//  RICH TEXT
//  Renders inline [label](https://url) links inside
//  plain strings from src/data/*, so content files
//  stay readable and free of JSX.
// ─────────────────────────────────────────────

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g

export const linkClass =
  'text-lavender-deeper underline decoration-lavender/50 underline-offset-2 ' +
  'hover:decoration-lavender-deeper transition-colors'

export default function RichText({ text }) {
  if (!text) return null

  // New regex per call — a shared /g regex carries lastIndex between renders.
  const pattern = new RegExp(LINK_PATTERN.source, 'g')
  const parts = []
  let cursor = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index))
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {match[1]}
      </a>
    )
    cursor = match.index + match[0].length
  }

  if (cursor < text.length) parts.push(text.slice(cursor))
  return parts
}
