// ─────────────────────────────────────────────
//  PROJECTS DATA
//  Add, remove, or edit projects here.
//  Types: 'research' | 'academic' | 'independent'
//
//  subtitle supports inline [label](url) links
//  advisor  → { name, url } shown under the subtitle
// ─────────────────────────────────────────────

import { links } from './about'

export const projects = [
  {
    id: 6,
    title: 'Personalized Wearable Assistive Navigation',
    subtitle: `Honors Thesis · [Mobile Multimedia Communications Laboratory](${links.mmcLab}) · [Shibaura Institute of Technology](${links.sit})`,
    advisor: { name: 'Prof. Eiji Kamioka', url: links.kamioka },
    description: 'Designed and prototyped an edge-device wearable navigation system for visually impaired pedestrians using real-time video, YOLOv5 object detection, depth estimation, and personalized step-based audio guidance. Deployed on Jetson Nano and validated in controlled trials, then presented at WSSE 2024, where the work received the Best Paper Award.',
    type: 'research',
    tags: ['YOLOv5', 'Depth Estimation', 'Jetson Nano', 'Assistive Tech', 'Edge Deployment'],
    github: null,
    demo: null,
    year: 2024,
  },
  {
    id: 5,
    title: 'Explainable LLM-Guided Navigation',
    subtitle: `[Control & Learning Group](${links.controlLearning}) · [Carnegie Mellon University](${links.cmu})`,
    advisor: { name: 'Prof. Yorie Nakahira', url: links.nakahira },
    description: 'Built an LLM-guided MiniGrid controller for spatial reasoning and action planning, combining iterative replanning, orientation-aware action conversion, and 50 sampled MPC rollouts per decision. Step-level logging made each choice inspectable rather than opaque, and the controller cleared wall-obstacle navigation in 48 steps at a reward of 0.867 on its first attempt.',
    type: 'research',
    tags: ['LLM Planning', 'MiniGrid', 'MPC', 'Replanning', 'Spatial Reasoning', 'Interpretability'],
    github: null,
    demo: null,
    year: 2025,
  },
  {
    id: 7,
    title: 'Structure-Aware Cache Eviction for LLM Serving',
    subtitle: `[Carnegie Mellon University](${links.cmu})`,
    description: "Implemented structure-aware eviction policies, including weighted LFU and size-aware LRU, inside SGLang's RadixAttention prefix cache, and contributed the work upstream. Benchmarked against LRU across 2,048 order-matched requests at equal throughput and eviction counts, cutting mean time-to-first-token by 26% and p99 latency by 39.6%.",
    type: 'academic',
    tags: ['SGLang', 'RadixAttention', 'KV Cache', 'LLM Serving', 'Latency Benchmarking'],
    github: 'https://github.com/tejas-goyal/sglang-llmsys',
    demo: null,
    year: 2026,
  },
  {
    id: 8,
    title: 'AutoAnalyst: Multi-Agent Data Quality Debugger',
    subtitle: `[Carnegie Mellon University](${links.cmu})`,
    description: 'Built a multi-agent MCP system that diagnoses ten classes of data defects and emits executable fixes behind a two-phase human-in-the-loop gate, so nothing is rewritten without review. Reached full detection recall across seven injected defect classes, and the generated fixes recovered 91% of downstream model degradation.',
    type: 'academic',
    tags: ['Multi-Agent Systems', 'MCP', 'Data Quality', 'Human-in-the-Loop', 'Automated Repair'],
    github: 'https://github.com/rajakiru/dataanalyst-agent',
    demo: null,
    year: 2026,
  },
  {
    id: 9,
    title: 'nocaps: Multi-Camera Sports Broadcast',
    subtitle: `[Carnegie Mellon University](${links.cmu})`,
    description: 'Built a mobile broadcast system that turns commodity smartphones into a synchronized multi-camera rig: operators join a match by code, choose a camera position, and stream over WebRTC through a Node.js and Socket.IO signaling relay for viewers to watch live. Paired it with a billiards event-detection pipeline in OpenCV that tracks balls across frames and cuts highlight clips around each pocketing event.',
    type: 'academic',
    tags: ['React Native', 'WebRTC', 'Socket.IO', 'Node.js', 'OpenCV', 'Real-Time Streaming'],
    github: 'https://github.com/rajakiru/nocaps',
    demo: null,
    year: 2026,
  },
  {
    id: 1,
    title: 'Mosaic Mind: Decision-Support AI Agent',
    subtitle: `TartanHacks 2026 · [Carnegie Mellon University](${links.cmu})`,
    description: 'Built a decision-support agent that generates a branching plan graph, backtracks across decision paths, and uses MCP web retrieval to produce structured research cards with linked evidence. Shipped a React and Node.js stack on Fly.io behind an evaluation harness covering 1,000 sample cases, and the project was recognized by a Dedalus associate at the event.',
    type: 'independent',
    tags: ['AI Agents', 'MCP', 'Plan Graphs', 'Grounded Retrieval', 'Evaluation Harness', 'Fly.io'],
    github: 'https://github.com/rajakiru/mosaic',
    demo: null,
    year: 2026,
  },
  {
    id: 2,
    title: 'Physics-informed Generative Modeling',
    subtitle: `[Carnegie Mellon University](${links.cmu})`,
    description: 'Built a next-frame prediction model for PhysicsGen ball-bounce dynamics using 50k+ paired Pymunk simulations in PyTorch. Benchmarked several baselines against a coordinate-conditioned cGAN, which improved localization, with ablations cutting prediction error by about 13% relative to the PhysicsGen baselines.',
    type: 'academic',
    tags: ['PyTorch', 'cGAN', 'Pymunk', 'Simulation', 'Benchmarking'],
    github: 'https://github.com/dhritikrishnan/BallMotion-PhysicsGen',
    demo: null,
    year: 2025,
  },
  {
    id: 3,
    title: 'Foreground-Background Video Separation',
    subtitle: `[Carnegie Mellon University](${links.cmu})`,
    description: 'Built an end-to-end pipeline for separating foreground people from background video using HOG features, a linear SVM classifier, and COCO mask supervision. Achieved about 80% patch-level accuracy and rendered background-removed video outputs from frame-level inference.',
    type: 'academic',
    tags: ['OpenCV', 'HOG Features', 'Linear SVM', 'COCO Masks', 'Video Pipeline'],
    github: 'https://github.com/akshara-ns/Background-Cancellation-in-Videos',
    demo: null,
    year: 2025,
  },
  {
    id: 4,
    title: 'Multimodal Souvenir Recommendation System',
    subtitle: `[Shibaura Institute of Technology](${links.sit})`,
    description: 'Built a multimodal retrieval and recommendation pipeline combining text, image captioning, and Transformers-based RAG to surface relevant souvenirs from a catalog. Used embedding-based similarity search and grounded explanations to improve recommendation transparency.',
    type: 'independent',
    tags: ['RAG', 'Embeddings', 'Image Captioning', 'Similarity Search', 'Grounded Explanations'],
    github: null,
    demo: null,
    year: 2023,
  },
]
