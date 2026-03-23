// ─────────────────────────────────────────────
//  THEME CONFIGURATION
//  Edit this file to change colors, fonts, and
//  section layout without touching components.
// ─────────────────────────────────────────────

export const theme = {
  colors: {
    background: '#F8F7F4',
    text: '#1B2B4B',
    accent: '#C4B5F4',       // lavender
    accentSecondary: '#A8D4E6', // light blue
    accentLight: '#EDE9FE',
    muted: '#1B2B4B80',
  },
  fonts: {
    body: "'Inter', system-ui, sans-serif",
    display: "'Playfair Display', Georgia, serif",
  },
}

// ─────────────────────────────────────────────
//  SECTION ORDER & VISIBILITY
//  Reorder items to change page layout.
//  Set `enabled: false` to hide a section.
// ─────────────────────────────────────────────

export const sectionConfig = [
  { id: 'hero',       enabled: true },
  { id: 'about',      enabled: true },
  { id: 'skills',     enabled: true },
  { id: 'timeline',   enabled: true },
  { id: 'projects',   enabled: true },
  { id: 'beyond',     enabled: false },
  { id: 'contact',    enabled: true },
]
