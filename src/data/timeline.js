// ─────────────────────────────────────────────
//  TIMELINE DATA
//  Education and experience entries.
//  Types: 'education' | 'work' | 'research'
//
//  organizationUrl → organization name becomes a link
//  advisors        → [{ name, url }] rendered as "Advised by"
//  instructors     → [{ name, url }] for TA roles
// ─────────────────────────────────────────────

import { links } from './about'

// One chronological rail, newest first. `start` ('YYYY-MM') is the sort key, so
// order comes from the data and array position here does not matter.
// `education` entries render as larger milestone nodes; everything else is a role.
export const timeline = [
  {
    id: 11,
    start: '2026-05', // sort key, newest first
    type: 'work',
    title: 'AI Engineer Intern · LLM Evaluation & Benchmarking',
    organization: 'Kanini Software Solutions',
    organizationUrl: 'https://kanini.com/',
    location: 'Nashville, TN',
    period: 'May 2026 – Aug 2026',
    bullets: [
      'Owned an evaluation and benchmarking program end to end for an LLM agent orchestration platform.',
      'Built containerized evaluation harnesses and task suites spanning Terminal-Bench, SWE-Bench, ContextBench, and DeepSWE agent tasks, comparing candidates through blinded LLM-judge panels, token-matched trials, and controlled A/B experiments.',
      'Benchmarked curated context packs against auto-generated baselines, reaching higher retrieval recall from a substantially smaller context, and ran prompt-injection red-teaming to test robustness.',
    ],
  },
  {
    id: 3,
    start: '2025-11', // sort key, newest first
    type: 'work',
    title: 'Teaching Assistant · Introduction to Deep Learning',
    subtitle: 'Course 11-785',
    instructors: [{ name: 'Prof. Bhiksha Raj', url: links.bhikshaRaj }],
    organization: 'Carnegie Mellon University',
    organizationUrl: links.cmu,
    location: 'Pittsburgh, PA',
    period: 'Nov 2025 – Present',
    bullets: [
      'Debugged assignments covering training loops, CNNs, sequence models, Transformers, and ResNets in PyTorch.',
      'Improved assignment robustness through edge-case testing, failure analysis, and solution validation.',
      'Mentored project groups and guided students on debugging strategies during office hours.',
    ],
  },
  {
    id: 6,
    start: '2025-08', // sort key, newest first
    type: 'work',
    title: 'Teaching Assistant · Data Science Seminar',
    subtitle: 'Course 11-631',
    instructors: [{ name: 'Prof. Maarten Sap', url: links.maartenSap }],
    organization: 'Carnegie Mellon University',
    organizationUrl: links.cmu,
    location: 'Pittsburgh, PA',
    period: 'Aug 2025 – Dec 2025',
    bullets: [
      'Facilitated a research-oriented seminar focused on modern data science methods and emerging AI topics.',
      'Reviewed student research deliverables and provided feedback on rigor, clarity, and reproducibility.',
      'Guided students in strengthening research framing, technical communication, and presentation quality.',
    ],
  },
  {
    id: 1,
    start: '2025-01', // sort key, newest first
    type: 'education',
    title: 'M.S. in Electrical and Computer Engineering',
    organization: 'Carnegie Mellon University',
    organizationUrl: links.cmu,
    location: 'Pittsburgh, PA',
    period: 'Jan 2025 – Expected Dec 2026',
    subtitle: 'GPA: 3.9/4.0',
    bullets: [
      'Focus areas: Machine Learning, Agentic AI, Human-AI Interaction.',
      'Spring 2025: Introduction to Machine Learning (18-661), Estimation, Detection, and Learning (18-752), Human-AI Interaction (05-618).',
      'Fall 2025: Introduction to Deep Learning (11-785), Trustworthy AI (24-784), Entrepreneurial Engineering Project (18-655).',
      'Spring 2026: LLM Systems (11-868), AI Agents for Engineering (24-880), Sports Technology (18-738).',
      'Fall 2026 (in progress): Building Reliable Distributed Systems (18-749), Designing and Deploying AI/ML Systems (24-679), GenAI for Biomedicine (11-781).',
    ],
  },
  {
    id: 4,
    start: '2024-09', // sort key, newest first
    type: 'work',
    title: 'Startup Venture Fellow · BFine',
    organization: 'Japan Venture Academy',
    organizationUrl: links.jva,
    location: 'Tokyo, Japan',
    period: 'Sep 2024 – Dec 2024',
    bullets: [
      'Led an interdisciplinary team building an AI-assisted clinic recommender for foreigners in Japan.',
      'Conducted user discovery, implemented a prototype matching and ranking pipeline, and designed end-to-end UX in Figma.',
      'Designed the API architecture behind retrieval, ranking, and explanation, then pitched the prototype at the Google Tokyo JVA Expo.',
    ],
  },
  {
    id: 7,
    start: '2024-02', // sort key, newest first
    type: 'work',
    title: 'Teaching Assistant · SIT IoT-Robotics Workshop',
    organization: 'Shibaura Institute of Technology',
    organizationUrl: links.sit,
    location: 'Tokyo, Japan',
    period: 'Feb 2024 – Mar 2024',
    bullets: [
      'Assisted in hosting an international IoT-Robotics workshop at SIT for students from Phenikaa University, FPT University, and HUST (Vietnam), MingChi University of Technology (Taiwan), and UTHM (Malaysia).',
      'Provided technical support and facilitated cross-cultural collaboration across a diverse international cohort.',
    ],
  },
  {
    id: 5,
    start: '2023-08', // sort key, newest first
    type: 'work',
    title: 'Teaching Assistant · International IoT-Robotics Workshop',
    organization: 'Hanoi University of Science and Technology',
    organizationUrl: 'https://en.hust.edu.vn/',
    location: 'Hanoi, Vietnam',
    period: 'Aug 2023 – Sep 2023',
    bullets: [
      'Helped organize an international collaborative workshop between Shibaura Institute of Technology, Hanoi University of Science and Technology, and Phenikaa University.',
      'Provided technical and communication support to students on IoT content creation and embedded systems project development.',
    ],
  },
  {
    id: 8,
    start: '2021-10', // sort key, newest first
    type: 'work',
    title: 'Teaching Assistant · Calculus',
    organization: 'Shibaura Institute of Technology',
    organizationUrl: links.sit,
    location: 'Tokyo, Japan',
    period: 'Oct 2021 – Jan 2022',
    bullets: [
      'Provided tutoring on core calculus topics including continuity, derivatives, and integration.',
      'Helped students apply concepts to problem-solving like optimization and curve sketching, and supported mastery of advanced integration techniques.',
    ],
  },
  {
    id: 10,
    start: '2021-09', // sort key, newest first
    type: 'work',
    title: 'Research Communication Mentor · MMC Lab',
    organization: 'Shibaura Institute of Technology',
    organizationUrl: links.sit,
    advisors: [
      { name: 'Prof. Eiji Kamioka', url: links.kamioka },
      { name: 'Prof. Phan Xuan Tan', url: links.phanXuanTan },
    ],
    location: 'Tokyo, Japan',
    period: 'Sep 2021 – Aug 2024',
    bullets: [
      'Mentored ~12 senior undergrads per year in a research lab, supporting literature search and paper comprehension across multiple research topics.',
      'Reviewed conference slides and talks to improve technical storytelling and logical flow.',
      'Collaborated with students and advisors to iterate research narratives, strengthening writing clarity and presentation readiness for academic settings.',
    ],
  },
  {
    id: 9,
    start: '2021-09', // sort key, newest first
    type: 'work',
    title: 'Students Association · SNS Team',
    organization: 'Shibaura Institute of Technology',
    organizationUrl: links.sit,
    location: 'Tokyo, Japan',
    period: 'Sep 2021 – Aug 2024',
    bullets: [
      'Supported exchange students and promoted interaction between Japanese and International students by planning and organizing events as part of the Global Learning Commons, the International division of SIT.',
      'Managed promotion of events and created engaging content across social media platforms as part of the SNS team.',
    ],
  },
  {
    id: 2,
    start: '2020-10', // sort key, newest first
    type: 'education',
    title: 'B.E. in Computer Engineering',
    organization: 'Shibaura Institute of Technology',
    organizationUrl: links.sit,
    location: 'Tokyo, Japan',
    period: 'Oct 2020 – Sep 2024',
    subtitle: 'GPA: 3.9/4.0',
    bullets: [
      'Presidential Award of Excellence, 2024.',
      'Honors thesis: wearable assistive navigation for visually impaired pedestrians, awarded Best Paper at WSSE 2024.',
    ],
  },
]
