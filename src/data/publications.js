// ─────────────────────────────────────────────
//  PUBLICATIONS DATA
//  Newest first. `venue` is shown under the title.
//  `authors` is in published order; the entry
//  matching personal.name is shown in bold.
// ─────────────────────────────────────────────

import { personal } from './about'

const me = personal.name

export const publications = [
  {
    id: 4,
    title: 'Collective Regimes in Multi-Agent LLMs under Reasoning Effort and Communication Topology',
    authors: ['Machiko Hirota', me, 'Ujwal Kumar', 'Phan Xuan Tan'],
    venue: 'Preprint, September 2026',
    url: 'https://arxiv.org/abs/2609.35885',
    source: 'arXiv',
  },
  {
    id: 1,
    title: 'Gender Bias in LLM Hiring Decisions: Evidence from a Japanese Context and Evaluation of Mitigation Strategies',
    authors: ['Serena A. Hoffstedde', 'Machiko Hirota', me, 'Rihito Kotani', 'Ujwal Kumar', 'Gabriele Trovato', 'Phan Xuan Tan'],
    venue: 'ECML PKDD 2026',
    url: 'https://arxiv.org/abs/2606.18649',
    source: 'arXiv',
  },
  {
    id: 2,
    title: 'Voice-Guided Puddle Avoidance Walking Support System for Visually Impaired Pedestrians',
    authors: [me, 'Eiji Kamioka', 'Manami Kanamaru', 'Phan Xuan Tan'],
    venue: 'WSSE 2024',
    url: 'https://dl.acm.org/doi/10.1145/3698062.3698097',
    source: 'ACM',
    note: 'Best Paper Award',
    highlight: true,
  },
  {
    id: 3,
    title: 'A Fast Self-supervised Dual Correlation Window based Stereo Matching',
    authors: ['Yuchen Liu', 'Phan Xuan Tan', 'Eiji Kamioka', me, 'Ridhi Mahajan', 'Ujwal Kumar'],
    venue: "BDIOT '23",
    url: 'https://dl.acm.org/doi/10.1145/3617695.3617726',
    source: 'ACM',
  },
]
