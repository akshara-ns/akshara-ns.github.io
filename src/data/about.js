// ─────────────────────────────────────────────
//  PERSONAL INFO & ABOUT DATA
//  Update with your real information.
//
//  Text fields marked "rich" support inline links
//  written as [label](https://url) — see RichText.jsx
// ─────────────────────────────────────────────

export const personal = {
  name: 'Akshara Nadayanur Sathis Kanna',
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
  shibaAi: 'https://www.shiba-ai.jp/',
  kanini: 'https://kanini.com/',
  nakahira: 'https://users.ece.cmu.edu/~ynakahir/',
  bhikshaRaj: 'https://www.cs.cmu.edu/~bhiksha/',
  idl: 'https://deeplearning.cs.cmu.edu/',
  maartenSap: 'https://maartensap.com/',
  kamioka: 'http://www.kamioka.ice.shibaura-it.ac.jp/profile-e.html',
  phanXuanTan: 'https://sites.google.com/view/phanxuantan/home',
}

export const about = {
  // rich text: [label](url) becomes a link
  bio: [
    `Master's student in Electrical and Computer Engineering at [Carnegie Mellon University](${links.cmu}), graduating December 2026. My work focuses on evaluating the reliability and behavior of AI systems, particularly where existing safety measures and evaluation methods fail to reflect real-world performance: benchmarking LLM agents, red-teaming, and building the evaluation infrastructure that tells you whether a result means what it says. I'm an AI Safety Researcher at [Shiba AI](${links.shibaAi}), and this summer I led evaluation for a production LLM agent platform at [Kanini Software Solutions](${links.kanini}). Previously Computer Engineering at [Shibaura Institute of Technology](${links.sit}), Tokyo.`,

    `At the [Mobile Multimedia Communications Laboratory](${links.mmcLab}), advised by [Prof. Eiji Kamioka](${links.kamioka}) and [Prof. Phan Xuan Tan](${links.phanXuanTan}), I built wearable navigation for visually impaired pedestrians: YOLO object detection and monocular depth estimation on a Jetson Nano, converted into audio guidance calibrated to each user's stride, not a population average. Growing up in Japan, surrounded by infrastructure built to be usable by everyone, set that priority. A system that performs well on average is no use to the person it fails. These experiences taught me that evaluating systems is not simply about measuring whether they complete a task, but about questioning whether our measurements capture the behavior we actually care about.`,

    `At CMU, I've worked on orientation-aware LLM planning in [Prof. Yorie Nakahira](${links.nakahira})'s [Control & Learning Group](${links.controlLearning}). With [Shiba AI](${links.shibaAi}), I've studied how model behavior changes across conditions: gender bias in LLM hiring decisions (ECML PKDD 2026), and how reasoning effort and communication topology shape consensus in multi-agent LLMs (under review at ICLR 2027). I TA [Introduction to Deep Learning (11-785)](${links.idl}) for [Prof. Bhiksha Raj](${links.bhikshaRaj}).`,
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
