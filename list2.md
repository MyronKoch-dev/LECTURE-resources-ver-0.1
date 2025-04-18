# **AI Development Resource Master List (Unified Edition – April 18 2025)**

> *Living document originally compiled for Harvard, MIT, and Oxford programs—now merged into a single, deduplicated reference.*  
> *Contributions via pull‑request are welcome.*

---

## 📑 Table of Contents
1. 🏛️ Historical Foundations & Core Concepts  
2. 🚀 Frontier Models (2025‑Q2)  
3. 🛠️ Ecosystem & Tooling  
4. 🧑‍🔬 Research & Thought Leadership  
5. 🌐 Applied Case Studies  
6. ⚖️ Ethics, Safety & Policy  
7. 🎓 Student Opportunities  
8. 📜 Appendices & Further Reading  

---

## 1 | 🏛️ Historical Foundations & Core Concepts
### 1.1 Interactive Timelines & Visualizers
- **AI Timeline:** <https://ai-timeline.org/>  
- **LLM 3‑D Walkthrough:** <https://bbycroft.net/llm>  
- **Transformer Explainer:** <https://poloclub.github.io/transformer-explainer/>  
- **Prompt‑Chaining Primer:** <https://www.agentrecipes.com/prompt-chaining>

### 1.2 Training Pipeline (Pre‑train → Fine‑tune → RLHF)
| Stage | Classic definition | Typical recipe | 2025 upgrade |
|---|---|---|---|
| **Pre‑training** | Train on *massive* unlabeled corpora to learn general language + world knowledge. | Trillions of tokens, next‑token prediction over web + code; dense or MoE. | Data curriculum (RefinedWeb, Synthoid), inference‑aware training (OpenAI o‑series). |
| **Fine‑tuning** | Adapt the base model to a specific domain/task with smaller labeled data. | LoRA / QLoRA on medical Q&A, code, policy docs. | Multi‑head PEFT; Sparse LoRA for large MoE shards. |
| **RLHF** | Collect human preference pairs → reward model → RL (usually PPO) to align outputs. | 5–10 k preference pairs, Proximal Policy Optimization. | **RLAIF** (AI feedback), **DPO/ORPO** skip RL loop; cheaper, faster. |

> **Note — “RLHF” now often means RLAIF or DPO/ORPO:** reward signals can come from strong critic models instead of humans, or the model can be aligned directly on preference pairs without a PPO loop.
 

### 1.3 Retrieval‑Augmented Generation (RAG) Variants  
| Variant | Core idea | When it shines |
|---|---|---|
| **Plain RAG** | Vector similarity search over text chunks | General chatbots & Q&A |
| **Graph RAG** | Build a knowledge graph, traverse edges, then retrieve passages | Multi‑hop reasoning, codebases |
| **Tabular / SQL RAG** | Treat rows & columns as chunks; combine SQL and embeddings | Finance, analytics, CSV‑heavy corpora |
| **Hybrid RAG** | Combine lexical BM25 with dense vectors; hybrid scoring | Legal, medical—domains with exact terms |
| **Hierarchical RAG** | Retrieve coarse sections first, then sub‑chunks | Long PDFs, textbooks, RFCs |
| **Context‑Compression RAG** | Retrieve → summarize/compress → feed to model | Token‑efficient answers on small‑ctx LLMs |
| **Agentic / Tool‑RAG** | Retrieval step wrapped inside an agent that can also call tools | Dynamic workflows e.g., “lookup → calculate” |
| **Multimodal RAG** | Index images/audio/video embeddings alongside text | Diagrams, lecture slides, podcasts |

<details>
<summary>🛠️ How each RAG variant works ▸</summary>

* **Plain RAG (base‑line)** – Embed → similarity search → stuff context. General‑purpose and fast.  
* **Graph RAG** – Build a knowledge graph (nodes = entities / code symbols), follow edges, then fetch passages. Excels at multi‑hop reasoning and large codebases.  
* **Tabular / SQL RAG** – Treat rows & columns as chunks; combine SQL filters with vector search. Perfect for finance, analytics, and on‑chain data.  
* **Hybrid RAG** – Run lexical BM25 **plus** dense‑vector search, then rank/merge. Retains exact‑term recall—great for legal or medical corpora.  
* **Hierarchical RAG** – Retrieve coarse sections (chapters, headings) first, then drill into sub‑chunks. Keeps context coherent for huge PDFs or RFCs.  
* **Context‑Compression RAG** – Retrieve → summarize/compress → feed to the model. Saves tokens and latency on small‑context LLMs.  
* **Agentic / Tool‑RAG** – Retrieval step is wrapped inside an agent that can also invoke tools (e.g., calculators, APIs) and iterate. Enables dynamic workflows.  
* **Multimodal RAG** – Index image/audio/video embeddings alongside text so the same query can pull diagrams, screenshots, or podcasts as evidence.

</details>

---

## 2 | 🚀 Frontier Models (2025‑Q2)

| Vendor | Model | Ctx Window | Reasoning? | Architecture | Highlights | MT‑Bench¹ | MMLU² |
|---|---|---|---|---|---|---|---|
| **OpenAI** | **[o3](https://platform.openai.com/docs/models/o3)** | 128 k | ✅ | Dense Transf. | Best‑in‑class reasoning & vision | 9.2 | 87.5 |
| | **[o4‑mini](https://platform.openai.com/docs/models/o4-mini)** | 128 k | ✅ | Dense Transf. | Faster & cheaper than o3 | 8.8 | 82.0 |
| | **[o4‑mini‑high](https://platform.openai.com/docs/models/o4-mini-high)** | 128 k | ✅ | Dense Transf. | Higher limits, same latency | 9.0 | 84.0 |
| | **[GPT‑4o](https://openai.com/index/gpt-4o)** | 128 k | ✅ | Multimodal Dense | Replaces GPT‑4 in ChatGPT (Apr 2025) | 9.4 | 86.8 |
| | **[GPT‑4.1](https://platform.openai.com/docs/models/gpt-4o-preview)** | 128 k | ✅ | Dense Transf. | Latest preview now in Cursor/API | 9.5 | 87.0 |
| | **[GPT‑4.5 “Orion”](https://openai.com/research/orion-preview)** | 256 k | ✅ | Dense Transf. | Research preview (Mar 2025) | 9.6 | 88.2 |
| **Anthropic** | **[Claude 3.7 Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet)** | 200 k | ✅ | Hybrid (MoE + Dense) | STEM/code specialist | 8.7 | 83.5 |
| **Google** | **[Gemini 2.5 Flash](https://deepmind.google/technologies/gemini/)** | 1 M | ✅* | MoE | “Thinking budgets” cut cost > 6× | 8.3 | 77.9 |
| | **[Gemini 1.5 Pro](https://deepmind.google/technologies/gemini/)** | 1 M | ✅ | MoE | Long‑context pioneer | 8.9 | 86.0 |
| | **[Gemma 3 (1–27 B) QAT](https://huggingface.co/collections/google/gemma3-qat-65c125d9fc09e4d62f7d54c7)** | 128 k | ✅ | Dense (QAT) | 4‑bit GGUF; ≈99 % bfloat16 acc | 7.8 | 72.5 |
| **DeepSeek** | **[DeepSeek V3 Chat](https://huggingface.co/DeepSeekAI/deepseek-llm-67b-chat)** | 128 k | ✅ | Dense Transf. | +50 % reasoning vs V2 | 8.4 | 80.5 |
| **Meta** | **[Llama‑3 70B](https://huggingface.co/meta-llama/Meta-Llama-3-70B)** | 8‑128 k | ✅ | Dense Transf. | Open‑weights, commercially usable | 7.9 | 73.0 |
| | **[Maverick 140B](https://ai.facebook.com/blog/meta-maverick-140b/)** | 128 k | ✅ | Sparse MoE | High‑capacity open checkpoint | 8.2 | 78.5 |
| | **[Scout 48B](https://ai.facebook.com/blog/meta-scout-48b/)** | 64 k | ✅ | Dense Transf. | Lightweight, instruction‑tuned | 7.6 | 72.4 |
| **Mistral** | **[Mixtral 8×22B](https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1)** | 64 k | ✅ | Sparse MoE | SoTA open model | 8.1 | 78.0 |
| **Alibaba** | **[Qwen 2.5‑1M](https://huggingface.co/Qwen/Qwen2-1M)** | 1 M | ✅ | MoE | First OSS model with 1 M tokens | 8.4 | 79.5 |

<sub>¹ MT‑Bench (10 = max) compiled from vendor or community MT‑Bench dashboards, Apr 2025.  
² MMLU (0‑100). Scores vary ±0.3 depending on evaluation harness.</sub>

### 2.1 🧩 Model Architecture Cheat‑Sheet

| Architecture | Core idea | Popular 2025 examples | Strengths | Trade‑offs |
|---|---|---|---|---|
| **Dense Transformer** | Every token attends to every other via full attention; parameters fully active each step. | GPT‑4o, Llama‑3 70B, DeepSeek V3, Gemma 3 QAT | Strong generalization; mature tooling. | Expensive compute; quadratic memory. |
| **Sparse Mixture‑of‑Experts (MoE)** | Router sends each token to a small subset of expert Multilayer Perceptrons (MLPs) → only ~10‑25 % parameters active. | Mixtral 8×22B, OpenAI o‑series, Qwen 2.5‑1M | Higher parameter count at lower FLOPs; easy scaling. | Router complexity; load‑balancing issues. |
| **Hybrid Dense + MoE (Hierarchical)** | Alternate dense layers with MoE blocks or blend both paths. | Claude 3.7 Sonnet, Gemini 1.5 Pro | Combines dense robustness with MoE efficiency. | Implementation complexity; tuning router‑dense balance. |
| **State‑Space Models (SSM)** | Replace attention with linear state‑space kernels (convolutional recursion). | Mamba 2.8B, S4‑X, RWKV‑5 | O(T) memory, handles >4 M tokens. | Still experimental; fewer inference libraries. |
| **Retrieval‑Augmented Autoregressive (Retro‑style)** | Decoder consults external vector DB or memory for nearest passages mid‑generation. | DeepMind RETRO, Alibaba Giraffe | Built‑in factual recall and smaller base model. | Requires datastore infra; retrieval latency. |
| **Structured Expert (GQA / MQA)** | Multi‑query or grouped‑query attention reduces KV size; acts like lightweight “expert routing.” | Llama‑3, Mistral‑7B | Faster inference, smaller KV cache. | Slight accuracy trade‑off on small models. |
| **Diffusion Transformer (DiT)** | Use diffusion denoising steps with transformer backbone for images. | Stable Diffusion 3 DiT, DeepFloyd IF | High‑quality image generation. | Not suited for language tasks. |

 > *Cheat‑sheet takeaway:* most frontier LLMs are now **Sparse MoE or Hybrid**, balancing capacity with compute. Dense transformers dominate sub‑30 B param models, while SSMs and Retro‑style hybrids target ultra‑long context and factual recall.
> *QAT = quantization‑aware training; trims VRAM ≈3× while keeping ~99 % accuracy at 4‑bit.*
 
 > *Snapshot 2024‑25:* about two‑thirds of frontier releases use sparse MoE or hybrid blocks, while dense transformers still dominate mid‑size open‑source models.
 

 <details>
 <summary>🔍 Mixture‑of‑Experts (MoE) — How expert MLPs work ▸</summary>
 
 **Expert MLPs = specialist subnetworks**
 
 * **MLP = Multilayer Perceptron** (2‑3 fully‑connected layers).  
 * In classic transformers, every token passes through the *same* MLP block.  
 * In an **MoE layer** you have *many* MLPs (the “experts”). A *router* decides which small subset of experts (usually 1‑2) process each token.
 
 ```
 Token → Router → Expert 3 & Expert 7 → Combine → Next layer
 ```
 
 ### Why bother?
 
 | Benefit | What it means |
 |---|---|
 | **Efficient scaling** | Billions of parameters, but each forward pass touches only ~10‑20 % of them. |
 | **Specialization** | Experts learn sub‑skills (math vs. dialog, etc.). |
 | **Modularity** | You can add experts without retraining the whole model. |
 
 ### Example setups
 
 | Model | Expert config | Notes |
 |---|---|---|
 | Mixtral 8×22B | 8 experts, 2 active/token | Open‑weights; community favourite. |
 | OpenAI o‑series (o3/o4‑mini) | *Undisclosed* MoE layers | Used to hit high reasoning at lower cost. |
 | Gemini 1.5 Pro | Hierarchical MoE | Long‑context, 1 M tokens. |
 
 
 </details>
 
 ---

## 3 | 🛠️ Ecosystem & Tooling

### 3.1 Core Platform for Experiments
| Platform | Link | Purpose |
|---|---|---|
| **Andromeda Protocol Testnet** | https://app.testnet.andromedaprotocol.io/ | Decentralized sandbox for AI×Blockchain experiments |

### 3.2 AI Search Engines (Research / Thinking Modes)

| Engine | Modes / Flagship Feature | Model Backend | Free Tier | DR* | Notes |
|---|---|---|---|:---:|---|
| **[ChatGPT](https://chat.openai.com)** | Multi‑step autonomous research agent | GPT‑4o / o3 | Plus & Enterprise | ✔ | First mainstream deep‑research release (Feb 2025) |
| **[Google Gemini](https://gemini.google.com)** | In‑depth reports & podcast‑style summaries | Gemini 2.5 Pro | **Free** on web + EDU | ✔ | Added “Research” button (Apr 2025) |
| **[Perplexity](https://www.perplexity.ai)** | Research mode: multi‑query + citations | o4‑mini‑high | Free (rate‑limited), Pro faster | ✔ | Public rollout (Mar 2025) |
| **[DeepSeek](https://deepseek.com)** | Thinking mode with chain‑of‑thought answers | DeepSeek‑V3 | Free (open‑source) | ✔ | First “thinking” mode (Oct 2024) |
| **[Bing Copilot](https://copilot.microsoft.com)** | Deep Search: reasoning + source triangulation | GPT‑4o | Free | ✔ | Hybrid lexical + vector retrieval |
| **[You.com](https://you.com)** | Research mode scans 200+ sources, cluster view | GPT‑4o & Claude | Free & Pro | ✔ | Strong on academic PDFs |
| **[Phind](https://phind.com)** | Dev‑centric “Explain Code” + snippet search | Mixtral fine‑tune | Free & Pro | ❌ | Code reasoning focus |
| **[Komo AI](https://komo.ai)** | Mind‑map visual search, citation graph | OSS Llama‑3 | Free | ❌ | Brainstorm UI |

> *DR = Deep Research / Thinking mode (multi‑step autonomous research).*

> **Tip:** For class projects, Perplexity Research or DeepSeek Thinking give free no‑sign‑up access; Gemini Deep Research is free via the Gemini web UI as of Apr 2025.

### 3.3 AI‑Infused Coding Tools & IDEs

| Category | Tool | What it does | Link |
|---|---|---|---|
| IDE | Cursor | Context‑aware IDE built around LLM pair‑programming | https://www.cursor.sh |
| IDE | VS Code | Extensible open‑source editor with vast AI plug‑in ecosystem | https://code.visualstudio.com/ |
| IDE | JetBrains AI Assistant | Adds the “Junie” agent + context menus across IntelliJ family | https://www.jetbrains.com/ai/ |
| IDE | Google IDX | Cloud IDE that auto‑completes full functions & handles deploys | https://idx.dev |
| IDE | Windsurf Editor | Local agent‑powered IDE (acquired Codeium for autocomplete) | https://windsurf.com |
| IDE Ext | Repo Prompt | VS Code extension: wraps entire repo into a single LLM prompt | https://marketplace.visualstudio.com/items?itemName=taowen.repo-to-prompt |
| One‑Shot Agent | Vercel V0 | Generates production‑ready React/Next UI from a prompt | https://v0.dev |
| One‑Shot Agent | Replit | Browser IDE with “Replit AI” full‑stack agent scaffold | https://replit.com |
| One‑Shot Agent | bolt.new | Creates SaaS back‑ends + dashboards in one command | https://bolt.new |
| One‑Shot Agent | Lovable.dev | Drag‑and‑drop AI internal‑tool generator | https://lovable.dev |
| One‑Shot Agent | Llamacoder | Local full‑stack agent built on Together AI models | https://llamacoder.together.ai/ |
| Plug‑in | Continue | OSS multi‑model copilot for VS Code & JetBrains | https://www.continue.dev |
| Plug‑in | Cline | Autonomous coding agent plug‑in w/ Model Context Protocol | https://cline.bot |
| Plug‑in | AI Commit | Generates git commit messages from staged diffs | https://marketplace.visualstudio.com/items?itemName=Sitoi.ai-commit |
| Plug‑in | CodeViz | Interactive call‑graph & architecture explorer | https://marketplace.visualstudio.com/items?itemName=codeviz.codeviz |
| Plug‑in | Tabby Autocomplete | Self‑hosted, open‑source autocomplete server | https://github.com/TabbyML/tabby |
| CLI | Warp | Modern terminal with natural‑language command search | https://warp.dev |
| CLI | Aider | AI-powered command-line assistant | https://aider.chat |
| CLI | Claude Code | Code generation and debugging assistant | https://github.com/anthropics/claude-code |
| CLI | OpenAI Codex CLI | Command-line interface for OpenAI Codex | https://github.com/openai/codex |

### 3.4 Open‑Source Utilities & Creative Suite

| Category | Tool | What it does | Link |
|---|---|---|---|
| Desktop Chat | MSTY | Offline desktop chat app for local/OSS models with branching and RAG | https://msty.app |
| Desktop Chat | Chorus | Chat with multiple LLMs and auto‑cross‑check answers | https://chorus.sh |
| Utility | Ollama | Local model runner/manager (macOS, Linux) | https://ollama.com |
| Utility | LM Studio | GUI playground for downloading, running, and prompting local LLMs | https://lmstudio.ai |
| Utility | AnythingLLM | Self‑hosted RAG stack with plug‑and‑play embeddings | https://useanything.com |
| Visual | MidJourney | High‑quality image generation via Discord | https://www.midjourney.com |
| Visual | Krea | Real‑time generative image & reference search | https://www.krea.ai |
| Visual | Ideogram | Text‑centric image generation (typography aware) | https://ideogram.ai |
| Visual | DALL·E 3 | OpenAI text‑to‑image model (web/API) | https://openai.com/dall-e-3 |
| Visual | Runway ML | AI video & image creation suite | https://runwayml.com |
| Visual | ComfyUI | Node‑based Stable Diffusion workflow GUI | https://github.com/comfyanonymous/ComfyUI |
| Audio/Video | Suno | Generate full songs from text prompts | https://suno.com |
| Audio/Video | Udio | Text‑to‑music generation platform | https://www.udio.com |
| Audio/Video | Descript | AI‑assisted audio & video editing | https://www.descript.com |
| Audio/Video | Adobe Firefly | Generative image and text effects in Creative Cloud | https://firefly.adobe.com |
| Audio/Video | Adobe Premiere Pro | Video editor with AI background removal & speech clean‑up | https://www.adobe.com/products/premiere.html |

---

## 4 | 🧑‍🔬 Research & Thought Leadership
Follow on **X/Twitter** with notifications; mine quality replies for other high-signal accounts.

| Account | Focus / Role | Why Follow |
|---|---|---|
| **[Andrej Karpathy (@karpathy)](https://x.com/karpathy)** | Founder Tiny Corp; ex‑OpenAI/Tesla, AI educator & code explainer | Deep‑dive threads & code walk‑throughs |
| **[Demis Hassabis (@demishassabis)](https://x.com/demishassabis)** | Co‑founder & CEO, Google DeepMind; neuroscientist‑turned‑AI pioneer | Cutting‑edge research drops |
| **[Geoffrey Hinton (@geoffreyhinton)](https://x.com/geoffreyhinton)** | “Godfather of deep learning”; now focuses on AI‑risk research | Brain‑inspired models & safety |
| **[Yoshua Bengio (@yoshuabengio)](https://x.com/yoshuabengio)** | Mila founder; GFlowNet & alignment pioneer | Cutting‑edge alignment papers |
| **[Yannic Kilcher (@ykilcher)](https://x.com/ykilcher)** | YouTuber who decodes new papers into plain English | Weekly paper explainers |
| **[Jeff Dean (@JeffDean)](https://x.com/JeffDean)** | Google DeepMind Chief Scientist; ex‑Google Research SVP | Model‑scaling insights |
| **[Emily Bender (@emilymbender)](https://x.com/emilymbender)** | UW linguist; co‑author “Stochastic Parrots”; data‑ethics critic | Ethics & dataset discourse |
| **[Jeremy Howard (@jeremyphoward)](https://x.com/jeremyphoward)** | fast.ai co‑founder; practical ML educator | Hands‑on notebooks & courses |
| **[Stella Biderman (@stellabiderman)](https://x.com/stellabiderman)** | EleutherAI researcher; open‑weights advocate (Pythia, GPT‑NeoX) | Open‑model scaling laws |
| **[Emad Mostaque (@EMostaque)](https://x.com/EMostaque)** | Stability AI founder; champion of open generative media | Model release announcements |
| **[Jim Fan (@DrJimFan)](https://x.com/DrJimFan)** | Sr. Research Scientist, NVIDIA; leads embodied‑agent group (GR00T) | Robotics insights |
| **[Teknium (@Teknium1)](https://x.com/Teknium1)** | Co‑founder / research lead at Nous Research; open‑weights evaluator | Frontier‑model benchmarking |
| **[Robert Scoble (@scobleizer)](https://x.com/scobleizer)** | Silicon‑Valley tech scout; curates large lists of AI startups & demos | Long‑horizon spotting |
| **[Logan Kilpatrick (@OfficialLoganK)](https://x.com/OfficialLoganK)** | DevRel Lead for Google AI Studio & Gemini API | Productization threads |
| **[Gary Marcus (@garymarcus)](https://x.com/garymarcus)** | NYU cognitive scientist & AI skeptic; policy commentator | Hype‑balanced takes |
| **[Shaw (@shawmakesmagic)](https://x.com/shawmakesmagic)** | Creator of ElizaOS agent framework; agentic tooling for Web3 | Decentralized‑agent ecosystem |
| **[Yann LeCun (@ylecun)](https://x.com/ylecun)** | Meta Chief AI Scientist; Turing Award winner, conv‑net pioneer | EBMs + open research |
| **[Andrew Ng (@AndrewYNg)](https://x.com/AndrewYNg)** | Founder DeepLearning.AI / Landing AI; MOOC & enterprise AI guru | Democratizing AI |
| **[Ian Goodfellow (@goodfellow_ian)](https://x.com/goodfellow_ian)** | Director of ML, Apple SPG; inventor of GANs | Generative pioneer |
| **[Sam Altman (@sama)](https://x.com/sama)** | Co‑founder & CEO, OpenAI; investor & policy advocate | Macro ethics + product |
| **[John Carmack (@ID_AA_Carmack)](https://x.com/ID_AA_Carmack)** | Legendary game dev; independent AGI researcher focused on efficiency | GPU‑level pragmatism |
| **[Fei‑Fei Li (@drfeifei)](https://x.com/drfeifei)** | Stanford HAI Co‑Director; vision & human‑centered AI | Human‑centered research |
| **[Meredith Whittaker (@mwhit)](https://x.com/mwhit)** | President of Signal; co‑founder AI Now Institute | Transparency & governance |
| **[Ilya Sutskever (@ilyasut)](https://x.com/ilyasut)** | Co‑founder & Chief Scientist, OpenAI; superalignment research | Transformer deep dives |
| **[Lex Fridman (@lexfridman)](https://x.com/lexfridman)** | Research scientist & long‑form podcaster interviewing AI leaders | Long‑form interviews |
| **[François Chollet (@francois_chollet)](https://x.com/francois_chollet)** | Google Brain researcher; creator of Keras; writes on intelligence | Theory‑meets‑practice |
| **[Swyx (@swyx)](https://x.com/swyx)** | Co‑founder Smol AI; dev‑infra & agent‑engineering evangelist | Practical infra insights |
| **[Teng Yan (@0xPrismatic)](https://x.com/0xPrismatic)** | Author of Chain‑of‑Thought.xyz; bridges AI & crypto ecosystems | AI‑crypto convergence |
| **[Shreya Rajpal (@shreyar)](https://x.com/shreyar)** | Research Partner, a16z; founder Guardrails AI; MoE evangelist | Safe prompting & MoE |
| **[Dario Amodei (@darioamodei)](https://x.com/darioamodei)** | Co‑founder & CEO, Anthropic; safety & scaling benchmarks | Frontier‑safety leadership |
| **[Margaret Mitchell (@mmitchell_ai)](https://x.com/mmitchell_ai)** | Chief Ethics Scientist, Hugging Face; fairness & bias researcher | Model accountability |
| **[Ethan Caballero (@ethan_caballero)](https://x.com/ethan_caballero)** | Independent MoE & sparsity researcher; open experiments | Constant code drops |
| **[Paul Kedrosky (@pkedrosky)](https://x.com/pkedrosky)** | VC at SK Ventures; macro‑economics of AI adoption | Market signal threads |
| **[Anthony Kaszynski (@akaszynski)](https://x.com/akaszynski)** | Creator PyTorchVideo tutorials; ML educator | Hands‑on tutorials |

---

## 5 | 🌐 Applied Case Studies
1. **GitHub Copilot Agent Mode** – <https://github.blog/news-insights/product-news/github-copilot-agent-mode-activated/>  
   Turns GitHub issues into pull‑requests that include code, unit tests, and a passing CI pipeline.  
   • Uses OpenAI o3 (optionally Claude 3.7) + repository embeddings.  
   • Early adopters (Shopify, HashiCorp) report 27 % faster PR merge times.

2. **Perplexity Pages** – <https://www.perplexity.ai/pages>  
   Research Mode fires off dozens of web/API queries, auto‑clusters sources, and drafts a cited wiki‑style report in ~60 s.  
   • Free tier available; Pro users get GPT‑4o for synthesis.  
   • Popular with grad students for lit‑review scaffolding.

3. **Runway Gen‑3** – <https://runwayml.com/gen3>  
   Diffusion‑Transformer text‑to‑video model; generates 4‑second clips up to 4 K.  
   • Employed by Wieden+Kennedy for Nike’s April 2025 Air Max ad.  
   • Supports “sample‑reference” frames for style transfer.

4. **Hippocratic AI Nurse Triage** – <https://www.hippocratic.ai/>  
   Mixtral 8×22B fine‑tune that handles symptom triage at 14 U.S. hospitals.  
   • Passed NCLEX at 85 % and meets HIPAA compliance.  
   • Average call time cut by 23 % in pilot studies.

5. **Google Project Astra** – <https://blog.google/technology/ai/google-project-astra/>  
   Live multimodal agent running Gemini 2.5 Flash; answers camera queries in real‑time.  
   • Demo shows location inference (“What city am I in?”) and code‑reading on a whiteboard.  
   • Underpins upcoming “Gemini Live View” feature.

6. **Google Meet “Take notes with Gemini”** – <https://workspace.google.com/blog/product-announcements/gemini-for-google-meet-take-notes>  
   Gemini 1.5 Pro listens, timestamps highlights, and writes an auto‑formatted Google Doc with action items.  
   • Handles meetings up to ~300 k tokens live; archives in Drive.  
   • Can answer post‑meeting queries: “Who owns the Q3 marketing OKR?”

7. **DeepSeek R1 Robotics Stack** – <https://deepseek.com/blog/r1-robotics>  
   Warehouse robot powered by DeepSeek V3 MoE on‑device; 600 picks/hour at <100 ms latency.  
   • Uses vision foundation model + RL‑fine‑tune.  
   • Runs on NVIDIA Jetson AGX Orin; no cloud required.

8. **Covariant Brain Robotic Picking** – <https://www.covariant.ai/blog/covariant-brain>  
   Vision transformer + compact LLM that handles SKU variation in JD.com and Ocado warehouses.  
   • Achieves 98 % pick accuracy on previously unseen items.  
   • Self‑improves via federated learning across 50+ robot arms.

---

## 6 | ⚖️ Ethics, Safety & Policy
- **OpenAI Preparedness Team** – Catastrophic risk benchmarks.  
- **Anthropic RSP** – Responsible scaling policy v2 (Mar 2025).  
- **EU AI Act** passed 13 Mar 2025; tiered compliance for foundation models.  
- **NIST AI RMF 2.0** draft (Feb 2025) introduces continuous assurance.

### 📅 Policy Countdown

| Regulation / Policy | Enforcement or Key Milestone | Affects |
|---|---|---|
| EU AI Act Codes of Practice | **May 2 2025** – draft codes become binding | All frontier‑model providers serving EU |
| Anthropic Responsible Scaling Policy v2 | **Mar 31 2025** – threshold checks activated | Claude family deployments |
| NIST AI RMF 2.0 (Draft) | **Jul 2025** – public comment closes | US federal procurement |
| UK AI Safety Institute Evaluations | **Q3 2025** – initial model eval suite published | Models > 10¹⁴ params |

---

## 7 | 🎓 Student Opportunities
- **Implementation Checklist**  
  - [ ] Follow all X accounts & enable 🔔  
  - [ ] Benchmark three search engines  
  - [ ] Try one creative tool per week  
  - [ ] Replicate Graph RAG tutorial in LangChain  
- **Events & Fellowships**  
  NeurIPS • CVPR • AI Engineer Summit • MIT EmTech • ETHDenver • DEFCON AI Village • Stanford HAI Fellowships

---

## 8 | 📜 Appendices & Further Reading
### Mandatory Reading
* **Books:** *The Coming Wave*, *A Thousand Brains*, *Human Compatible*  
* **Manifestos & Threads:**  
  - Sam Altman – *Moore’s Law for Everything*  
  - Yann LeCun – *Energy‑Based Models*

### Advanced Challenges
Groq LPU benchmarks • Adversarial Claude prompts • Beat AlphaFold 3 with OpenFold • Spoof GPT‑5 via Llama‑3‑400B • Optimize NVIDIA Blackwell inference

---

*Happy innovating! Pull requests welcome → **#ai‑dev‑master‑list***