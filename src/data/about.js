// ─────────────────────────────────────────────
//  PERSONAL INFO & ABOUT DATA
//  Update with your real information.
//
//  Text fields marked "rich" support inline links
//  written as [label](https://url) — see RichText.jsx
// ─────────────────────────────────────────────

export const personal = {
  name: 'Akshara Nadayanur Sathis Kanna',
  tagline: 'Building human-centered Agentic AI.',
  email: 'ns.akshara533@gmail.com',
  github: 'https://github.com/akshara-ns',
  linkedin: 'https://www.linkedin.com/in/akshara-nadayanur-sathis-kanna',
  resumeUrl: '/akshara.pdf', // lives in /public
}

// Shared link targets, so a URL is only written once.
export const links = {
  cmu: 'https://www.ece.cmu.edu/',
  sit: 'https://www.shibaura-it.ac.jp/en/',
  controlLearning: 'https://www.cmu.edu/ece/learning-control/',
  mmcLab: 'http://www.kamioka.ice.shibaura-it.ac.jp/index-e.html',
  jva: 'https://www.japanventureacademy.com/',
  nakahira: 'https://users.ece.cmu.edu/~ynakahir/',
  bhikshaRaj: 'https://www.cs.cmu.edu/~bhiksha/',
  idl: 'https://deeplearning.cs.cmu.edu/',
  maartenSap: 'https://maartensap.com/',
  kamioka: 'http://www.kamioka.ice.shibaura-it.ac.jp/profile-e.html',
}

export const about = {
  // rich text: [label](url) becomes a link
  bio: [
    `Master's student in Electrical and Computer Engineering at [Carnegie Mellon University](${links.cmu}), working on machine learning, agentic AI, and human-AI interaction: LLM agents that plan, replan, and explain their steps, and the evaluation infrastructure that tests whether they hold up. Previously Computer Engineering at [Shibaura Institute of Technology](${links.sit}), Tokyo.`,

    `At [Prof. Eiji Kamioka](${links.kamioka})'s [Mobile Multimedia Communications Laboratory](${links.mmcLab}) I built wearable navigation for visually impaired pedestrians: YOLO object detection and monocular depth estimation on a Jetson Nano, converted into audio guidance calibrated to each user's stride, not a population average. Growing up in Japan, surrounded by infrastructure built to be usable by everyone, set that priority. A system that performs well on average is no use to the person it fails.`,

    `Now: orientation-aware LLM planning at [Prof. Yorie Nakahira](${links.nakahira})'s [Control & Learning Group](${links.controlLearning}), and LLM evaluation built on contamination audits, red-teaming, and controlled experiments. I TA [Introduction to Deep Learning (11-785)](${links.idl}) for [Prof. Bhiksha Raj](${links.bhikshaRaj}), previously the Data Science Seminar (11-631) for [Prof. Maarten Sap](${links.maartenSap}). What interests me: the distance between an agent that demos well and one people can depend on.`,
  ],
  beyondWork: [
    {
      emoji: '🌏',
      label: 'Third Culture',
      description: 'Indian roots, raised in Japan, living in the US. Fluent in three worlds; Japanese (JLPT N1).',
    },
    {
      emoji: '📚',
      label: "What I'm Reading",
      description: 'Currently: [Book title]. I gravitate toward books that sit at the edge of technology and society.',
    },
    {
      emoji: '🎵',
      label: 'Hobbies',
      description: 'Add your hobbies here: music, sports, cooking, travel, etc.',
    },
    {
      emoji: '🤝',
      label: 'Teaching & Mentoring',
      description: 'TA for Introduction to Deep Learning (11-785) at CMU. I mentor project groups, run office hours, and help students debug training loops, CNNs, Transformers, and ResNets in PyTorch.',
    },
    {
      emoji: '💡',
      label: 'Human-Centered Values',
      description: 'Tech should serve people. I care about trustworthy AI, ethics, and building systems like assistive navigation for visually impaired users.',
    },
  ],
}
