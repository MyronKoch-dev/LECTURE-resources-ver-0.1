# **AI Development Resource Master List (Unified Edition – April 2025)**

> *This master list is a living document—originally compiled for Harvard, MIT, and Oxford programs and now merged into a single, deduplicated reference (updated **April 17 2025**). Use it as a roadmap to cutting‑edge tools, frameworks, thought leaders, and emerging trends in AI and adjacent fields. Contributions via pull request are welcome.*

---
## 📑 Table of Contents
1. 🧭 Core Platform
2. 🔍 AI Search Engines
3. 🧑‍🔬 Must‑Follow AI Thought Leaders
4. 🏛️ History, Architecture & Visualizations of LLMs
5. 🧠 Model Training & Model Sizes
6. 🔗 RAG vs Graph RAG vs Tab RAG
7. 🚀 Modern AI Models & Key Differences
8. 📢 Recent "Shock Week" Breakthroughs
9. 💻 AI‑Infused Coding Tools & IDEs
10. 🎮 AI Playgrounds & Sandbox Portals
11. 🧰 Open‑Source AI Utilities
12. 🎨 Creative AI Toolkit (Visual • Audio/Video)
13. 🤖 What Are Agents?  
    13.1 Agentic Frameworks Overview  
    13.2 Frameworks Deep‑Dive (Flowise → SmolAgents)
14. 🌟 Commercial Platform Feature Sets  
    14.1 ChatGPT Pro + Desktop  
    14.2 Claude Desktop (Mar 2025)  
    14.3 Perplexity AI Model Strategy
15. 🛰️ DeepSeek R1 – Mechanics & Integrations
16. 📚 Foundational Resources
17. ✅ Implementation Checklist
18. 🌌 Emerging Frontiers & 2024 Breakouts
19. 📜 Message to Future AI Leaders
20. 📖 Mandatory Reading & Manifestos
21. 🌍 Conferences, Hackathons & Fellowships
22. 🧪 Advanced Technical Challenges
23. ➕ Additional Enterprise Resources

---
## 1 | 🧭 Core Platform
| Platform | Link | Purpose |
|---|---|---|
| **Andromeda Protocol Testnet** | <https://app.testnet.andromedaprotocol.io/> | Decentralized sandbox for AI × blockchain experiments |

---
## 2 | 🔍 AI Search Engines
*(All of these operate as agentic systems under the hood.)*
| Engine | Differentiation | Link |
|---|---|---|
| **Perplexity** | Academic‑grade citations, real‑time web, conversational memory | <https://perplexity.ai> |
| **Scira** | Open‑source Perplexity‑style search using only open‑weight models | <https://scira.ai/about> |
| **You.com** | Customizable multi‑agent ecosystem | <https://you.com> |
| **Phind** | Developer‑centric search & code troubleshooting | <https://phind.com> |
| **Komo** | Mind‑map visual search UI | <https://komo.ai> |
| **Gemini Search** | Google multimodal reasoning & enormous context | <https://gemini.google> |
| **Copilot (Bing)** | Deep integration with Microsoft ecosystem | <https://copilot.microsoft.com> |

---
## 3 | 🧑‍🔬 Original Must‑Follow AI Thought Leaders
Follow on **X/Twitter** with notifications; grow your network by mining quality replies.
*(Consolidated list; duplicates removed, uniques kept)*
| Account | Focus / Role | Why Follow |
|---|---|---|
| **Jim Fan (@DrJimFan)** | NVIDIA autonomous systems researcher | Robotics × neuroscience insights |
| **Teknium (@Teknium1)** | Transformer scaling & ethics | Frontier NLP commentary |
| **Robert Scoble (@scobleizer)** | Tech futurist | Long‑horizon trend spotting |
| **Logan Kilpatrick (@OfficialLoganK)** | Google Gemini / DevRel | Insider productization threads |
| **Gary Marcus (@garymarcus)** | AI critic, hybrid‑model advocate | Hype‑balanced viewpoints |
| **Shaw (@shawmakesmagic)** | ElizaOS & decentralized agents | Alt‑funding + open‑agent ecosystem |
| **Yann LeCun (@ylecun)** | Meta Chief AI Scientist | CNN & energy‑based model thought pieces |
| **Andrew Ng (@AndrewYNg)** | AI educator, Coursera | Democratising AI education |
| **Ian Goodfellow (@goodfellow_ian)** | GAN inventor | Generative model pioneer |
| **Sam Altman (@sama)** | CEO OpenAI | Macro ethics + roadmap |
| **John Carmack (@ID_AA_Carmack)** | VR × AI tinkerer | GPU‑level pragmatism |
| **Fei‑Fei Li (@drfeifei)** | Computer‑vision pioneer | Human‑centered AI leadership |
| **Meredith Whittaker (@mwhit)** | AI Now, Signal president | Policy & transparency |
| **Ilya Sutskever (@ilyasut)** | OpenAI co‑founder | Transformer architecture deep dives |
| **Lex Fridman (@lexfridman)** | Researcher & podcaster | Long‑form expert interviews |
| **François Chollet (@francois_chollet)** | Keras creator | Theory‑meets‑practice threads |
| **Swyx (@swyx)** | AI engineer & writer | Dev‑productivity & AI infra |
| **Teng Yan (@0xPrismatic)** | Chainofthought.xyz creator | Decentralized‑AI perspectives |

---
## 4 | 🏛️ History, Architecture & Visualizations of LLMs
- **AI Timeline:** <https://ai-timeline.org/>
- **LLM 3‑D Walkthrough:** <https://bbycroft.net/llm>
- **Transformer Explainer:** <https://poloclub.github.io/transformer-explainer/>
- **Prompt Chaining Primer:** <https://www.agentrecipes.com/prompt-chaining>

---
## 5 | 🧠 Understanding Model Training & Sizes
**Pre‑train → Fine‑tune → RLHF** pipeline; parameter count signals capacity.  
*Quantization* (e.g., 4‑bit) trades accuracy for local performance.

---
## 6 | 🔗 Retrieval‑Augmented Generation Variants
| Feature | RAG | **Graph RAG** | **Tab RAG** |
|---|---|---|---|
| Data Structure | Unstructured docs | Entity graph | Tabular/SQL data |
| Retrieval | Vector search | Graph traversal + vectors | SQL + vectors |
| Best For | Chatbots, Q&A | Complex reasoning | Numeric/financial queries |

---
## 7 | 🚀 Modern AI Models & Key Differences (2025‑Q2)
### OpenAI
- **GPT‑4o ("Omni") (depricated)** – multimodal, RLHF, 128k ctxt.
- **GPT‑4o‑1 (Mini)** – latency‑optimized.
- **GPT‑4.5 “Orion”** – lower hallucination.
- **GPT‑o3** – fast at reasoning, beats nearly all benchmarks achieved by other models.
- **o3‑mini / o3‑mini‑high & o1 Pro** – cost‑efficient reasoning SKUs.

### Anthropic
- **Claude Opus, Sonnet, Haiku** – constitutional safety stack.
- **Claude 3.7 Sonnet** – STEM / code specialist.

### Google
- **Gemini 1.5 Pro** – 1M ctxt (MoE).
- **Gemini 2.0 Flash** – 2× speed.

### Meta
- **Llama‑3 family** – open‑weights 8B‑70B; on‑device & server variants.

### Mistral
- **Codestral / Mathstral / Mixtral 8×22B** – open‑source, efficient.

### DeepSeek
- **DeepSeek v3 Chat** – GPT‑4o‑tier performance at 10% cost.

### Alibaba
- **Qwen 2.5 1M** – 1M ctxt; **Qwen 2.5‑VL** – device control.

---
## 8 | 📢 "Shock Week" Market Disruptions (Mar → Apr 2025)
1. **DeepSeek R1** launches → 10× cheaper than ChatGPT, tech stocks wobble.
2. DeepSeek PR blitz on super‑low production costs & robotics training.
3. **DeepSeek v3** + **AGI BOT** demo (human‑like movement, real‑time planning).
4. **Alibaba** counters with **Qwen 2.5 1M** and **Qwen 2.5‑VL** (PC/phone control).
5. Fun fact: Alibaba & DeepSeek HQs are 20 min apart. 🤔

---
## 9 | 💻 AI‑Infused Coding Tools & IDEs
### IDEs & Editors
Cursor • VS Code (+Continue) • RepoPrompt • Windsurf • Cline • Google IDX • Vercel V0

### One‑Shot Full‑Stack Agents
Replit • bolt.new • Lovable.dev • Llamacoder (Together AI)

### AI CLI
Warp • **Aider** (<https://aider.chat>)

---
## 10 | 🎮 AI Playgrounds & Sandbox Portals
*(OpenAI, Gemini AI Studio, Claude Console, Mistral Console, Hugging Face Spaces, Cohere, AI21 Jurassic, Together AI, Vercel AI SDK Playground, Mozilla Llama Files, Perplexity Labs)*

---
## 11 | 🧰 Open‑Source AI Utilities
Ollama • LM Studio • AnythingLLM • Jan • ComfyUI • DeepSeek • Qwen … *(full details in appendix)*

---
## 12 | 🎨 Creative AI Toolkit
**Visual:** MidJourney • Krea • Ideogram • DALL·E 3 • Runway ML  
**Audio/Video:** Suno • Udio • Descript • Adobe Firefly/Premiere Pro

---
## 13 | 🤖 Agents & Frameworks
### Definition
Autonomous systems with **autonomy, reactivity, pro‑activity, social ability**.

### 13.1 Frameworks Overview (market share)
Eliza (AI16z) • Microsoft AutoGen • Virtuals Protocol • Zerebro • Centience • chat.dev • LangGraph • CrewAI • Hugging Face Agents 2.0 • Swarm • SmolAgents

### 13.2 Frameworks Deep‑Dive (Ease → Power)
Flowise → LangFlow → n8n → Make → LangGraph → CrewAI → HF Agents 2.0 → Swarm → SmolAgents

---
## 14 | 🌟 Commercial Platform Feature Sets
### 14.1 ChatGPT Pro + Desktop
Unlimited GPT‑4o, o‑series models, voice mode, companion window (⌥/Alt + Space), file/image uploads, app integrations (VS Code, Xcode, Warp, etc.).

### 14.2 Claude Desktop (Mar 2025)
Artifacts, 200k+ ctxt, Brave Search, local MCP servers, Projects workspaces.

### 14.3 Perplexity AI
Conv‑search with live citations; hybrid internal + external models.

---
## 15 | 🛰️ DeepSeek R1 – Mechanics & Use‑Cases
Hybrid MoE+Transformer, dynamic context pruning, RLHF+, edge‑first design.  
**Integrations:** AV, drones, smart cities, healthcare, SaaS, fintech, metaverse, agri‑tech, defense, media, legal, energy, ed‑tech, consumer IoT.

---
## 16 | 📚 Foundational Resources
ArXiv • Hugging Face • Papers with Code • arXiv‑Sanity

---
## 17 | ✅ Implementation Checklist
- [ ] Follow all X accounts & enable bells
- [ ] Bookmark coding tool section
- [ ] Try 1 creative tool / week
- [ ] Benchmark 3 search engines
- [ ] Dive into Emerging Frontiers list

---
## 18 | 🌌 Emerging Frontiers & 2024 Lightning Breakouts
AI Safety / Alignment • Neuromorphic (Loihi 2, Akida) • Open‑Source Moats (Mixtral 8×22B, Llama‑3‑400B) • AI × Bio (AlphaFold 3, Arc Institute)  
**Breakouts:** Lume • Synthesia • Imbue

---
## 19 | 📜 Message to Future AI Leaders
> *"Leak the alpha. Iterate fast. Reinvent backprop."*  – Your future peers  
**Hard Truths:** Real edge = building tools • Ethics ≠ bureaucracy • Robotics GPT‑4 moment ≈ 18 months.

---
## 20 | 📖 Mandatory Reading & Manifestos
**Books:** *The Coming Wave*, *A Thousand Brains*, *Human Compatible*  
**Threads:** Sam Altman – *Moore’s Law for Everything* • Yann LeCun – *Energy‑Based Models*

---
## 21 | 🌍 Conferences, Hackathons & Fellowships
NeurIPS • CVPR • AI Engineer Summit • MIT EmTech • AI Frontiers • ETHDenver • DEFCON AI Village • MIT Media Lab, Stanford HAI, CMU AI programs

---
## 22 | 🧪 Advanced Technical Challenges
Groq LPU benchmarks • Adversarial Claude prompts • Beat AlphaFold 3 with OpenFold • Spoof GPT‑5 via Llama‑3‑400B • Optimize NVIDIA Blackwell inference

---
## 23 | ➕ Additional Enterprise Resources
Azure AI Studio • Apple Intelligence (iOS 18/macOS Sequoia) • Google Scholar

---
*Happy innovating!  
Pull requests welcome → **#ai‑dev‑master‑list***

