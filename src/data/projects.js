// ─────────────────────────────────────────────
//  PROJECTS DATA
//  Add, remove, or edit projects here.
//  Types: 'personal' | 'course' | 'research'
// ─────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: 'Mosaic Mind: Decision-making AI Agent (TartanHacks 2026)',
    description: 'Built a decision-support AI agent with branching decision trees, backtracking, and multi-path recommendation synthesis. Implemented a system to generate fact-verified research cards with linked supporting resources in the decision tree, periodic insight summaries, and action plans; built an evaluation harness over 1,000 sample cases and deployed on Fly.io.',
    type: 'personal',
    tags: ['AI Agents', 'LangChain', 'Decision Trees', 'Fly.io', 'Evaluation'],
    github: null,
    demo: null,
    year: 2026,
  },
  {
    id: 2,
    title: 'Physics-informed Generative Modeling (CMU)',
    description: 'Built next-frame prediction model for PhysicsGen ball-bounce dynamics using 50k+ paired Pymunk simulations in PyTorch. Benchmarked PhysicsGen baselines and performed ablations; coordinate-conditioned cGAN improved localization vs. baseline, reducing X error from 6.84 px to 5.92 px and Y error from 12.90 px to 11.20 px, with 0.48 px roundness error.',
    type: 'course',
    tags: ['PyTorch', 'Generative Models', 'Physics Simulation', 'cGAN', 'Pymunk'],
    github: null,
    demo: null,
    year: 2025,
  },
  {
    id: 3,
    title: 'Background Cancellation System (CMU)',
    description: 'Designed a HOG and linear SVM patch classifier for foreground/background separation using COCO masks; ~80% accuracy. Built an end-to-end processing pipeline for frame extraction, foreground inference, and background-removed video rendering.',
    type: 'course',
    tags: ['Python', 'OpenCV', 'HOG', 'SVM', 'COCO'],
    github: null,
    demo: null,
    year: 2025,
  },
  {
    id: 4,
    title: 'Souvenir Recommendation System (SIT)',
    description: 'Built a multimodal preference-to-retrieval pipeline with text and image captioning, and a Transformers-based RAG recommender with embedding-based top-k similarity search over a souvenir catalog, generating grounded explanations.',
    type: 'personal',
    tags: ['RAG', 'Transformers', 'Multimodal', 'Embeddings', 'Python'],
    github: null,
    demo: null,
    year: 2023,
  },
  {
    id: 5,
    title: 'Explainable LLM-Guided Navigation with Orientation-Aware Planning (MiniGrid)',
    description: 'Built an LLM-guided MiniGrid controller for 2D gridworld spatial reasoning, agent orientation, and action generation. Implemented reiterative replanning using prior failure points; combined LLM decisions with 50 sampled MPC rollouts, orientation-aware action conversion, and step-level logging. Learning & Control Group, Carnegie Mellon University.',
    type: 'research',
    tags: ['LLM', 'MiniGrid', 'MPC', 'PyTorch', 'Spatial Reasoning'],
    github: null,
    demo: null,
    year: 2025,
  },
  {
    id: 6,
    title: 'Personalized Wearable Assistive Navigation for Visually Impaired Pedestrians',
    description: 'Designed and prototyped an edge-device wearable assistive navigation system using real-time video input, image processing, YOLOv5 object detection, depth estimation for hazard localization, and personalized step-based audio guidance. Deployed the prototype on Jetson Nano; published and presented at WSSE 2024, receiving the Best Paper Award. Mobile Multimedia Communications Laboratory, Shibaura Institute of Technology.',
    type: 'research',
    tags: ['YOLOv5', 'Jetson Nano', 'Computer Vision', 'Assistive Tech', 'Edge Deployment'],
    github: null,
    demo: null,
    year: 2024,
  },
]
