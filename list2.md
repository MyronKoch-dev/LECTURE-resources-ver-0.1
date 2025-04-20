# **AI Development Resource Master List (Unified Edition – April 18 2025)**

> *Living document originally compiled for Harvard, MIT, and Oxford programs—now merged into a single, deduplicated reference.*  
> *Contributions via pull‑request are welcome.*

---

## 📑 Table of Contents
1. 🏛️ Historical Foundations & Core Concepts  
    - 1.1 Interactive Timelines & Visualizers
    - 1.2 Training Pipeline (Pre‑train → Fine‑tune → RLHF)
        - 1.2.1 Training Pipeline Definitions & Recipes
        - 1.2.2 Software Stack by Training Stage
2. 🚀 Frontier Models (2025‑Q2)  
    - 2.1 Model Architecture Cheat‑Sheet
    - 2.2 Model Modalities & Classes
3. 🛠️ Ecosystem & Tooling  
    - 3.1 Core Platform for Experiments  
    - 3.2 AI Search Engines (Research / Thinking Modes)  
    - 3.3 AI‑Infused Coding Tools & IDEs  
    - 3.4 Desktop Chat Clients & Local Runners  
    - 3.5 Open‑Source Utilities & Creative Suite  
    - 3.6 Agent Frameworks & Orchestrators  
    - 3.7 Web3 × AI — Protocols & Marketplaces
4. 🧑‍🔬 Research & Thought Leadership  
5. 🌐 Applied Case Studies  
6. ⚖️ Ethics, Safety & Policy  
7. 🎓 Student Opportunities  
8. 📜 Appendices & Further Reading  
    - Prompt Engineering 101  
    - Quantum Horizons  
    - Advanced Challenges

---

# 1 | 🏛️ Historical Foundations & Core Concepts
### 1.1 Interactive Timelines & Visualizers
- **AI Timeline:** <https://ai-timeline.org/>  
- **LLM 3‑D Walkthrough:** <https://bbycroft.net/llm>  
- **Transformer Explainer:** <https://poloclub.github.io/transformer-explainer/>  
- **Prompt‑Chaining Primer:** <https://www.agentrecipes.com/prompt-chaining>

**Milestones since 1956**

- **1956 — Dartmouth Summer Research Project** coins the term "artificial intelligence." (Source: Dartmouth College)  
- **1986 — Back‑propagation breakthrough** enables multi‑layer neural nets (Rumelhart, Hinton, Williams). (Nature 323)  
- **2012 — AlexNet** wins ImageNet, igniting the deep‑learning era. (NeurIPS 2012 paper)  
- **2017 — "Attention Is All You Need"** introduces the transformer architecture. (arXiv 1706.03762)  
- **2020 — GPT‑3** shows few‑shot learning with 175 B parameters. (arXiv 2005.14165)  
- **2022 — ChatGPT** popularises conversational LLMs, hitting 100 M users in two months. (Wikipedia)  
- **2024 — Gemini 2.5 Pro** reaches a 1‑million‑token context window. (Google DeepMind)  
- **2025 — GPT‑4o** becomes OpenAI's default multimodal model, replacing GPT‑4. (OpenAI release notes)

### 1.2 Training Pipeline (Pre‑train → Fine‑tune → RLHF)
<details>
<summary>⚙️ Training‑Pipeline table ▸</summary>

| Stage | Classic definition | Typical recipe | 2025 upgrade |
|---|---|---|---|
| **Pre‑training** | Train on *massive* unlabeled corpora to learn general language + world knowledge. | Trillions of tokens, next‑token prediction over web + code; dense or MoE. | Data curriculum (RefinedWeb, Synthoid), inference‑aware training (OpenAI o‑series). |
| **Fine‑tuning** | Adapt the base model to a specific domain/task with smaller labeled data. | LoRA / QLoRA on medical Q&A, code, policy docs. | Multi‑head PEFT; Sparse LoRA for large MoE shards. |
| **RLHF** | Collect human preference pairs → reward model → RL (usually PPO) to align outputs. | 5–10 k preference pairs, Proximal Policy Optimization. | **RLAIF** (AI feedback), **DPO/ORPO** skip RL loop; cheaper, faster. |

</details>

<details>
<summary>🛠️ Software Stack by Training Stage ▸</summary>

| Stage | Tool / Site | Why it matters | Link |
|---|---|---|---|
| **Data curation & streaming** | RefinedWeb toolkit | Large‑scale Common Crawl cleaning & dedup | https://huggingface.co/datasets/tiiuae/falcon-refinedweb |
|  | Dolma | Modular dataset builder used for C4 / FineWeb | https://github.com/allenai/DataDecide |
|  | Mosaic StreamingDataset | Shard‑on‑demand data loading | https://docs.mosaicml.com/projects/streaming/ |
| **Pre‑training frameworks** | DeepSpeed | ZeRO‑3 / ZeRO‑Infinity, 3D parallelism | https://github.com/microsoft/DeepSpeed |
|  | Megatron‑DeepSpeed | 100 B‑param GPT/T5 recipe | https://github.com/deepspeedai/Megatron-DeepSpeed |
|  | T5X | JAX/Flax high‑perf trainer | https://github.com/google-research/t5x |
|  | Ray Train | Cluster‑scale PyTorch/JAX jobs | https://docs.ray.io/en/latest/train/ |
| **Fine‑tuning / PEFT** | PEFT (LoRA/QLoRA) | Adapter training for any transformer | https://github.com/huggingface/peft |
|  | bitsandbytes | 4‑bit quantisation kernels | https://github.com/bitsandbytes-foundation/bitsandbytes |
|  | Axolotl | YAML‑driven SFT / QLoRA pipeline | https://github.com/OpenAccess-AI-Collective/axolotl |
| **RLHF / Alignment** | DeepSpeed‑Chat | Turn‑key SFT → RM → PPO pipeline | https://github.com/microsoft/DeepSpeed/tree/master/blogs/deepspeed-chat |
|  | trlX | Distributed PPO / DPO training | https://github.com/CarperAI/trlx |
|  | RL4LMs | Modular RL for language models | https://github.com/allenai/RL4LMs |
| **Evaluation harnesses** | lm‑eval‑harness | Standard MT‑Bench, MMLU, TruthfulQA | https://github.com/EleutherAI/lm-eval-harness |
|  | HELM | Holistic eval dashboard | https://crfm.stanford.edu/helm/latest/ |
| **Experiment tracking** | Weights & Biases (wandb) | Real‑time metrics, artifact versioning, sweep manager | https://wandb.ai |

</details>

<details>
<summary>🧪 Mini‑Labs table ▸</summary>

| Lab | GPU need | Guide |
|---|---|---|
| 4‑bit QLoRA fine‑tune TinyLLM‑7B | Free Colab T4 | <https://github.com/OpenAccess-AI-Collective/axolotl/wiki/Colab-Quickstart> |
| RLHF with trlX on 100 prompts | 1× A100 40 GB | <https://github.com/CarperAI/trlx/blob/main/examples/summarize/ppo_summary.py> |
| Evaluate with lm‑eval‑harness | CPU‑only | <https://github.com/EleutherAI/lm-eval-harness#quickstart> |

</details>

### 1.3 Retrieval‑Augmented Generation (RAG) Variants  
<details>
<summary>🔍 RAG‑Variants table ▸</summary>

| Variant | Core idea | When it shines |
|---|---|---|
| **Plain RAG** | Vector similarity search over text chunks | General chatbots & Q&A |
| **Graph RAG** | Build a knowledge graph, traverse edges, then retrieve passages | Multi‑hop reasoning, codebases |
| **Tabular / SQL RAG** | Treat rows & columns as chunks; combine SQL and embeddings | Finance, analytics, CSV‑heavy corpora |
| **Hybrid RAG** | Combine lexical BM25 with dense vectors; hybrid scoring | Legal, medical—domains with exact terms |
| **Hierarchical RAG** | Retrieve coarse sections first, then sub‑chunks | Long PDFs, textbooks, RFCs |
| **Context‑Compression RAG** | Retrieve → summarize/compress → feed to model | Token‑efficient answers on small‑ctx LLMs |
| **Agentic / Tool‑RAG** | Retrieval step wrapped inside an agent that can also call tools | Dynamic workflows e.g., "lookup → calculate" |
| **Multimodal RAG** | Index images/audio/video embeddings alongside text | Diagrams, lecture slides, podcasts |

</details>

<details>
<summary>🛠️ How each RAG variant works ▸</summary>

* **Plain RAG (base‑line)** – Embed → similarity search → stuff context. General‑purpose and fast.  
* **Graph RAG** – Build a knowledge graph (nodes = entities / code symbols), follow edges, then fetch passages. Excels at multi‑hop reasoning and large codebases.  
* **Tabular / SQL RAG** – Treat rows & columns as chunks; combine SQL filters with vector search. Perfect for finance, analytics, and on‑chain data.  
* **Hybrid RAG** – Run lexical BM25 **plus** dense‑vector search, then rank/merge. Retains exact‑term recall—great for legal or medical corpora.  
* **Hierarchical RAG** – Retrieve coarse sections (chapters, headings) first, then drill into sub‑chunks. Keeps context coherent for huge PDFs or RFCs.  
* **Context‑Compression RAG** – Retrieve → summarize/compress → feed to the model. Saves tokens and latency on small‑context LLMs.  
* **Agentic / Tool‑RAG** – Retrieval step is wrapped inside an agent that can also invoke tools (e.g., calculators, APIs) and iterate. Enables dynamic workflows.  
* **Multimodal RAG** – Index image/audio/video embeddings alongside text so the same query can pull diagrams, screenshots, or podcasts as evidence.

</details>

---

# 2 | 🚀 Frontier Models (2025‑Q2)
> **➡️ Expandables:** click any ▸ arrow to open the full table.

<details>
<summary>🔍 Frontier Models table ▸</summary>

Frontier models are the latest, most advanced AI systems from leading labs, setting the state of the art in reasoning, scale, and capabilities.

| Vendor | Model | Ctx Window | Reasoning? | Architecture | Highlights | Strength | MT‑Bench¹ | MMLU² |
|---|---|---|---|---|---|---|---|---|
| **OpenAI** | **[o3](https://openai.com/index/introducing-o3-and-o4-mini/)** | 128 k | ✅ | Dense Transf. | Best‑in‑class reasoning & vision | Cost‑‑optimised "frontier lite" | 9.2 | 87.5 |
| | **[o4‑mini](https://openai.com/index/introducing-o3-and-o4-mini/)** | 128 k | ✅ | Dense Transf. | Faster & cheaper than o3 | Cost‑‑optimised "frontier lite" | 8.8 | 82.0 |
| | **[o4‑mini‑high](https://openai.com/index/introducing-o3-and-o4-mini/)** | 128 k | ✅ | Dense Transf. | Higher limits, same latency | Cost‑‑optimised "frontier lite" | 9.0 | 84.0 |
| | **[GPT‑4o](https://openai.com/index/gpt-4o-system-card/)** | 128 k | ✅ | Multimodal Dense | Replaces GPT‑4 in ChatGPT (Apr 2025) | Multimodal & fastest reasoning latency | 9.4 | 86.8 |
| | **[GPT‑4.1](https://platform.openai.com/docs/models#gpt-4.1)** | 128 k | ✅ | Dense Transf. | Latest preview now in Cursor/API | Latest reasoning preview for devs | 9.5 | 87.0 |
| | **[GPT‑4.5 "Orion"](https://openai.com/index/introducing-gpt-4-5/)** | 256 k | ✅ | Dense Transf. | Research preview (Mar 2025) | Highest benchmark scores to date | 9.6 | 88.2 |
| **Anthropic** | **[Claude 3.7 Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet)** | 200 k | ✅ | Hybrid (MoE + Dense) | STEM/code specialist | Long‑form writing & STEM code | 8.7 | 83.5 |
| **Google** | **[Gemini 2.5 Flash](https://deepmind.google/technologies/gemini/flash/)** | 1 M | ✅* | MoE | "Thinking budgets" cut cost > 6× | 1 M‑token context window + low cost | 8.3 | 77.9 |
| | **[Gemini 2.5 Pro Preview](https://deepmind.google/technologies/gemini/pro/)** | 1 M | ✅ | MoE | Long‑context, enhanced reasoning; preview tier | High‑accuracy long‑context preview | 9.1 | 87.0 |
| | **[Gemma 3 (1–27 B) QAT](https://huggingface.co/lmstudio-community/gemma-3-27B-it-qat-GGUF)** | 128 k | ✅ | Dense (QAT) | 4‑bit GGUF; ≈99 % bfloat16 acc | 4‑bit QAT checkpoint for local GPUs | 7.8 | 72.5 |
| **DeepSeek** | **[DeepSeek V3](https://huggingface.co/deepseek-ai/DeepSeek-V3)** | 128 k | ✅ | Dense Transf. | +50 % reasoning vs V2 | Open‑weights reasoning boost vs V2 | 8.4 | 80.5 |
| **Meta** | **[Llama‑3 70B](https://huggingface.co/meta-llama/Meta-Llama-3-70B)** | 8‑128 k | ✅ | Dense Transf. | Open‑weights, commercially usable | Fully open, strong coding | 7.9 | 73.0 |
| | **[Maverick 140B](https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct)** | 128 k | ✅ | Sparse MoE | High‑capacity open checkpoint | Largest open MoE | 8.2 | 78.5 |
| | **[Scout 48B](https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct-Original)** | 64 k | ✅ | Dense Transf. | Lightweight, instruction‑tuned | Lightweight, low‑latency | 7.6 | 72.4 |
| **Mistral** | **[Mixtral 8×22B](https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1)** | 64 k | ✅ | Sparse MoE | SoTA open model | Best open‑source general model | 8.1 | 78.0 |
| **Alibaba** | **[Qwen 2.5‑1M](https://huggingface.co/collections/Qwen/qwen25-1m-679325716327ec07860530ba)** | 1 M | ✅ | MoE | First OSS model with 1 M tokens | First OSS model with 1 M+ context | 8.4 | 79.5 |

<sub>¹ MT‑Bench (10 = max) compiled from vendor or community MT‑Bench dashboards, Apr 2025.  
² MMLU (0‑100). Scores vary ±0.3 depending on evaluation harness.</sub>
</details>

### 2.1 🔍 Model Architecture Cheat‑Sheet

<details>
<summary>🏗️ Model Architecture Cheat‑Sheet table ▸</summary>

| Architecture | Core idea | Popular 2025 examples | Strengths | Trade‑offs |
|---|---|---|---|---|
| **Dense Transformer** | Every token attends to every other via full attention; parameters fully active each step. | GPT‑4o, Llama‑3 70B, DeepSeek V3, Gemma 3 QAT | Strong generalization; mature tooling. | Expensive compute; quadratic memory. |
| **Sparse Mixture‑of‑Experts (MoE)** | Router sends each token to a small subset of expert Multilayer Perceptrons (MLPs) → only ~10‑25 % parameters active. | Mixtral 8×22B, OpenAI o‑series, Qwen 2.5‑1M | Higher parameter count at lower FLOPs; easy scaling. | Router complexity; load‑balancing issues. |
| **Hybrid Dense + MoE (Hierarchical)** | Alternate dense layers with MoE blocks or blend both paths. | Claude 3.7 Sonnet, Gemini 1.5 Pro | Combines dense robustness with MoE efficiency. | Implementation complexity; tuning router‑dense balance. |
| **State‑Space Models (SSM)** | Replace attention with linear state‑space kernels (convolutional recursion). | Mamba 2.8B, S4‑X, RWKV‑5 | O(T) memory, handles >4 M tokens. | Still experimental; fewer inference libraries. |
| **Retrieval‑Augmented Autoregressive (Retro‑style)** | Decoder consults external vector DB or memory for nearest passages mid‑generation. | DeepMind RETRO, Alibaba Giraffe | Built‑in factual recall and smaller base model. | Requires datastore infra; retrieval latency. |
| **Structured Expert (GQA / MQA)** | Multi‑query or grouped‑query attention reduces KV size; acts like lightweight "expert routing." | Llama‑3, Mistral‑7B | Faster inference, smaller KV cache. | Slight accuracy trade‑off on small models. |
| **Diffusion Transformer (DiT)** | Use diffusion denoising steps with transformer backbone for images. | Stable Diffusion 3 DiT, DeepFloyd IF | High‑quality image generation. | Not suited for language tasks. |

</details>

<details>
<summary>🔍 State‑Space Models (SSM) — Linear‑time context ▸</summary>

SSMs replace O(N²) attention with **state‑space convolution kernels**.  
* **Key idea:** hidden state hₜ evolves via linear ODE; output is causal convolution.  
* **Why:** O(T) memory → streaming windows up to 4 M tokens (Mamba 2.8 B).  
* **Trade‑off:** still maturing; fewer inference libraries than Transformers.

</details>

<details>
<summary>🔍 Retrieval‑Augmented Transformers (RETRO‑style) ▸</summary>

DeepMind **RETRO** mixes a decoder with a **nearest‑neighbor lookup**:

1. Chunk current hidden tokens → vector DB search  
2. Fuse top‑K neighbors via cross‑attention  
3. Continue autoregressive generation

Benefits = factual recall with a smaller base model.  
Costs = retrieval latency & datastore infra.

</details>

### 2.2 Model Modalities & Classes

<details>
<summary>🔍 Model Modalities table ▸</summary>

| Class | Core tasks | Canonical architectures | Signature checkpoints |
|---|---|---|---|
| **Language (LLM)** | text understanding, code, reasoning | Decoder‑only Transformers; Dense / MoE / Hybrid | GPT‑4o, Claude 3.7 Sonnet, Llama‑3 70B |
| **Vision** | classification, detection, segmentation | ViT, Swin, Mask R‑CNN | SAM, CLIP‑ViT B/16 |
| **Cross‑modal (Vision‑Language)** | image ↔ text alignment, captioning, retrieval | Dual encoders; gated fusion | CLIP | Gemini 2.5 Flash |
| **Speech / Audio (ASR)** | transcription, voice control | Conformer, Transducer | Whisper (v3) |
|  | **TTS / Music Gen** | Diffusion‑decoders | Suno v3, MusicGen |
| **Diffusion / Generative Media** | images, video, 3‑D assets | Latent Diffusion, DiT | Stable Diffusion 3 | Runway Gen‑3 |
| **Graph Neural Nets (GNN)** | social‑/protein‑/traffic graphs, recommendations | GCN, GAT, GraphSage | PyG demo models |
| **Retrieval‑Augmented** | knowledge‑dense Q&A with small base LLM | Chunk retriever + Transformer decoder | DeepMind RETRO |
| **State‑Space (SSM)** | ultra‑long context seq2seq, streaming | Mamba, RWKV | Mamba‑2.8 B |
| **Reinforcement / Policy** | robotics, games, decision agents | PPO, MuZero, policy transformers | AlphaGo | Gato |
</details>

---

# 3 | 🛠️ Ecosystem & Tooling

### 3.1 Core Platform for Experiments
<details>
<summary>🧪 Core‑Platform table ▸</summary>

| Platform | Link | Purpose |
|---|---|---|
| **Andromeda Protocol Testnet** | https://app.testnet.andromedaprotocol.io/ | Decentralized sandbox for AI×Blockchain experiments |
| **Fetch.ai Agentverse** | https://fetch.ai/docs/concepts/agent-services/agentverse-intro | Marketplace & runtime for on‑chain autonomous agents |
| **ChainML** | https://chainml.xyz | Smart‑contract ⇄ LLM orchestration toolkit |
| **0xPrompt (0x AI Tools)** | https://0x.org/docs/ai-tools | Open‑source toolkit for LLM agents on Ethereum |

</details>

### 3.2 AI Search Engines (Research / Thinking Modes)

<details>
<summary>🔎 AI‑Search‑Engines table ▸</summary>

| Engine | Modes / Flagship Feature | Model Backend | Free Tier | DR* | Notes |
|---|---|---|---|:---:|---|
| **[ChatGPT](https://chat.openai.com)** | Multi‑step autonomous research agent | GPT‑4o / o3 | Plus & Enterprise | ✔ | First mainstream deep‑research release (Feb 2025) |
| **[Google Gemini](https://gemini.google.com)** | In‑depth reports & podcast‑style summaries | Gemini 2.5 Pro | **Free** on web + EDU | ✔ | Added "Research" button (Apr 2025) |
| **[Perplexity](https://www.perplexity.ai)** | Research mode: multi‑query + citations | o4‑mini‑high | Free (rate‑limited), Pro faster | ✔ | Public rollout (Mar 2025) |
| **[DeepSeek](https://deepseek.com)** | Thinking mode with chain‑of‑thought answers | DeepSeek‑V3 | Free (open‑source) | ✔ | First "thinking" mode (Oct 2024) |
| **[Bing Copilot](https://copilot.microsoft.com)** | Deep Search: reasoning + source triangulation | GPT‑4o | Free | ✔ | Hybrid lexical + vector retrieval |
| **[You.com](https://you.com)** | Research mode scans 200+ sources, cluster view | GPT‑4o & Claude | Free & Pro | ✔ | Strong on academic PDFs |
| **[Phind](https://phind.com)** | Dev‑centric "Explain Code" + snippet search | Mixtral fine‑tune | Free & Pro | ❌ | Code reasoning focus |
| **[Komo AI](https://komo.ai)** | Mind‑map visual search, citation graph | OSS Llama‑3 | Free | ❌ | Brainstorm UI |

> *DR = Deep Research / Thinking mode (multi‑step autonomous research).*

> **Tip:** For class projects, Perplexity Research or DeepSeek Thinking give free no‑sign‑up access; Gemini Deep Research is free via the Gemini web UI as of Apr 2025.

</details>

### 3.3 AI‑Infused Coding Tools & IDEs

<details>
<summary>🛠️ Coding Tools table ▸</summary>

| Category | Tool | What it does | Link |
|---|---|---|---|
| IDE | Cursor | Context‑aware IDE built around LLM pair‑programming | https://www.cursor.sh |
| IDE | VS Code | Extensible open‑source editor with vast AI plug‑in ecosystem | https://code.visualstudio.com/ |
| IDE | JetBrains AI Assistant | Adds the "Junie" agent + context menus across IntelliJ family | https://www.jetbrains.com/ai/ |
| IDE | Google IDX | Cloud IDE that auto‑completes full functions & handles deploys | https://idx.dev |
| IDE | Windsurf Editor | Local agent‑powered IDE (acquired Codeium for autocomplete) | https://windsurf.com |
| IDE Ext | RepoPrompt | macOS native app that turns a whole repo into an AI‑ready prompt | https://repoprompt.com |
| One‑Shot Agent | Vercel V0 | Generates production‑ready React/Next UI from a prompt | https://v0.dev |
| One‑Shot Agent | Replit | Browser IDE with "Replit AI" full‑stack agent scaffold | https://replit.com |
| One‑Shot Agent | bolt.new | Creates SaaS back‑ends + dashboards in one command | https://bolt.new |
| One‑Shot Agent | Lovable.dev | Drag‑and‑drop AI internal‑tool generator | https://lovable.dev |
| One‑Shot Agent | Llamacoder | Local full‑stack agent built on Together AI models | https://llamacoder.together.ai/ |
| Plug‑in | Continue | OSS multi‑model copilot for VS Code & JetBrains | https://www.continue.dev |
| Plug‑in | Cline | Autonomous coding agent plug‑in w/ Model Context Protocol | https://cline.bot |
| Plug‑in | AI Commit | Generates git commit messages from staged diffs | https://marketplace.visualstudio.com/items?itemName=Sitoi.ai-commit |
| Plug‑in | CodeViz | Interactive call‑graph & architecture explorer | https://marketplace.visualstudio.com/items?itemName=codeviz.codeviz |
| Plug‑in | Tabby Autocomplete | Self‑hosted, open‑source autocomplete server | https://github.com/TabbyML/tabby |
| CLI | Warp | Modern terminal with natural‑language command search | https://warp.dev |
| CLI | Aider | AI-powered command-line assistant | https://aider.chat |
| CLI | Claude Code | Code generation and debugging assistant | https://github.com/anthropics/claude-code |
| CLI | OpenAI Codex CLI | Command-line interface for OpenAI Codex | https://github.com/openai/codex |
</details>

### 3.4 Desktop Chat Clients & Local Runners

<details>
<summary>💬 Desktop Chat table ▸</summary>

| App | What it does | Models supported | Link |
|---|---|---|---|
| ChatGPT Desktop | Native macOS / Windows app; global hot‑key, screenshot & file chat | GPT‑4o, o‑series | https://openai.com/chatgpt/desktop/ |
| Claude Desktop | Anthropic desktop client with drag‑drop files and Claude 3 family | Claude 3.7 Sonnet / Opus | https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop |
| Perplexity Desktop | macOS App Store build; "Workspaces" + Research Mode | o4‑mini‑high (Pro) + free LLM | https://www.perplexity.ai/mac |
| MSTY | Offline‑first multiverse chat with branch views | Any local GGUF + OpenAI / Anthropic | https://msty.app |
| LM Studio | Discover, download & run OSS LLMs locally | Llama‑3, DeepSeek, Gemma, etc. | https://lmstudio.ai |
| AnythingLLM Desktop | Turnkey local RAG + chat with multiple OSS models | GGUF / ggml models; OpenAI key optional | https://useanything.com |
| Chorus | Chat with multiple models side‑by‑side and synthesize answers | OpenAI, Anthropic, local GGUF | https://chorus.sh |
</details>

### 3.5 Open‑Source Utilities & Creative Suite

<details>
<summary>🎨 Utilities & Creative Suite ▸</summary>

| Category | Tool | What it does | Link |
|---|---|---|---|
| Visual | MidJourney | High‑quality image generation via Discord | https://www.midjourney.com |
| Visual | Krea | Real‑time generative image & reference search | https://www.krea.ai |
| Visual | Ideogram | Text‑centric image generation (typography aware) | https://ideogram.ai |
| Visual | DALL·E 3 | OpenAI text‑to‑image model (web/API) | https://openai.com/dall-e-3 |
| Visual | Runway ML | AI video & image creation suite | https://runwayml.com |
| Visual | ComfyUI | Node‑based Stable Diffusion workflow GUI | https://github.com/comfyanonymous/ComfyUI |
| Audio/Video | Suno | Generate full songs from text prompts | https://suno.com |
| Audio/Video | Udio | Text‑to‑music generation platform | https://www.udio.com |
| Audio/Video | Descript | AI‑assisted audio & video editing | https://www.descript.com |
| Audio/Video | Adobe Firefly | Generative image and text effects in Creative Cloud | https://firefly.adobe.com |
| Audio/Video | Adobe Premiere Pro | Video editor with AI background removal & speech clean‑up | https://www.adobe.com/products/premiere.html |
| Framework | LangChain | Composable framework for LLM chains, tools & agents | https://github.com/langchain-ai/langchain |
| Framework | Flowise | Drag‑and‑drop UI wrapper around LangChain for fast demos | https://github.com/FlowiseAI/Flowise |
| Framework | LlamaIndex | Data framework bridging docs → embeddings → LLM | https://github.com/run-llama/llama_index |
</details>

### 3.6 Agent Frameworks & Orchestrators

<details>
<summary>🤖 Agent‑Frameworks table ▸</summary>

| Framework | Highlight | Link |
|---|---|---|
| AutoGen | Multi‑agent workflow engine (Microsoft) | https://github.com/microsoft/autogen |
| LangGraph | Graph‑based state‑machine wrapper for LangChain agents | https://github.com/langchain-ai/langgraph |
| ElizaOS | Decentralized agent OS for Web3 automations | https://github.com/eliza-os/ElizaOS |
| MetaGPT | Multi‑agent code‑generation (Spec → PR) | https://github.com/geekan/MetaGPT |
| DSPy | Declarative structured prompting framework | https://github.com/stanfordnlp/dspy |

</details>

### 3.7 Web3 × AI — Protocols & Marketplaces

<details>
<summary>⛓️ Web3 × AI table ▸</summary>

| Category | Project / Protocol | Core value‑prop | Link |
|---|---|---|---|
| On‑chain agent frameworks | Andromeda OS | Cross‑chain "App DAO" framework that lets LLM agents invoke Cosmos smart contracts | https://andromedaprotocol.io |
|  | Fetch.ai Agentverse | Marketplace + runtime for autonomous agents with token incentives | https://fetch.ai |
|  | ChainML | Smart‑contract ⇄ LLM orchestration toolkit | https://chainml.xyz |
| Decentralized model training / inference | Bittensor | Incentivised peer‑to‑peer gradient & inference network | https://bittensor.com |
|  | Gensyn | Pay‑as‑you‑go distributed GPU training on idle hardware | https://gensyn.ai |
|  | Filecoin FVM | Smart contracts over IPFS data; emerging LLM‑training marketplaces | https://filecoin.io |
|  | Akash Network | Spot GPU marketplace (A100 / H100) for model inference | https://akash.network |
|  | Render Network | Tokenized GPU render farm for diffusion models | https://rendernetwork.com |
| Data & model marketplaces | Ocean Protocol | ERC‑721 data NFTs + compute‑to‑data swaps | https://oceanprotocol.com |
| Verifiable AI / on‑chain proofs | ORA Protocol | zk‑style proofs for ML inference (opML) | https://mirror.xyz/orablog.eth/tHHeXtvl__w8qJiYo6Uu0Iac964Wm0hoVfiL-VDf-Nw |
|  | EigenLayer × Ritual | Restaked ETH secures decentralized model actions | https://www.blog.eigenlayer.xyz/ritual-eigenlayer-ai-x-restaking/ |
| Identity & trust | Worldcoin / World ID | Iris‑based proof‑of‑personhood for human ≠ AI distinction | https://worldcoin.org/blog/worldcoin/proof-of-personhood-what-it-is-why-its-needed |
</details>

---

# 4 | 🧑‍🔬 Research & Thought Leadership
<details>
<summary>🧑‍🔬 Research & Thought Leadership table ▸</summary>

Follow on **X/Twitter** with notifications; mine quality replies for other high-signal accounts.

| Account | Focus / Role | Why Follow |
|---|---|---|
| **[Andrej Karpathy (@karpathy)](https://x.com/karpathy)** | Founder Tiny Corp; ex‑OpenAI/Tesla, AI educator & code explainer | Deep‑dive threads & code walk‑throughs |
| **[Demis Hassabis (@demishassabis)](https://x.com/demishassabis)** | Co‑founder & CEO, Google DeepMind; neuroscientist‑turned‑AI pioneer | Cutting‑edge research drops |
| **[Geoffrey Hinton (@geoffreyhinton)](https://x.com/geoffreyhinton)** | "Godfather of deep learning"; now focuses on AI‑risk research | Brain‑inspired models & safety |
| **[Yannic Kilcher (@ykilcher)](https://x.com/ykilcher)** | YouTuber who decodes new papers into plain English | Weekly paper explainers |
| **[Jeff Dean (@JeffDean)](https://x.com/JeffDean)** | Google DeepMind Chief Scientist; ex‑Google Research SVP | Model‑scaling insights |
| **[Emily Bender (@emilymbender)](https://x.com/emilymbender)** | UW linguist; co‑author "Stochastic Parrots"; data‑ethics critic | Ethics & dataset discourse |
| **[Jeremy Howard (@jeremyphoward)](https://x.com/jeremyphoward)** | fast.ai co‑founder; practical ML educator | Hands‑on notebooks & courses |
| **[Emad Mostaque (@EMostaque)](https://x.com/EMostaque)** | Stability AI founder; champion of open generative media | Model release announcements |
| **[Jim Fan (@DrJimFan)](https://x.com/DrJimFan)** | Sr. Research Scientist, NVIDIA; leads embodied‑agent group (GR00T) | Robotics insights |
| **[Teknium (@Teknium1)](https://x.com/Teknium1)** | Co‑founder / research lead at Nous Research; open‑weights evaluator | Frontier‑model benchmarking |
| **[Robert Scoble (@scobleizer)](https://x.com/scobleizer)** | Silicon‑Valley tech scout; curates large lists of AI startups & demos | Long‑horizon spotting |
| **[Logan Kilpatrick (@OfficialLoganK)](https://x.com/OfficialLoganK)** | DevRel Lead for Google AI Studio & Gemini API | Productization threads |
| **[Gary Marcus (@garymarcus)](https://x.com/garymarcus)** | NYU cognitive scientist & AI skeptic; policy commentator | Hype‑balanced takes |
| **[Shaw (@shawmakesmagic)](https://x.com/shawmakesmagic)** | Creator of ElizaOS agent framework; agentic tooling for Web3 | Decentralized‑agent ecosystem |
| **[Yann LeCun (@ylecun)](https://x.com/ylecun)** | Meta Chief AI Scientist; Turing Award winner, conv‑net pioneer | EBMs + open research |
| **[Andrew Ng (@AndrewYNg)](https://x.com/AndrewYNg)** | Founder DeepLearning.AI / Landing AI; MOOC & enterprise AI guru | Democratizing AI |
| **[Ian Goodfellow (@goodfellow_ian)](https://x.com/goodfellow_ian)** | Director of ML, Apple SPG; inventor of GANs | Generative pioneer |
| **[Sam Altman (@sama)](https://x.com/sama)** | Co‑founder & CEO, OpenAI; investor & policy advocate | Macro ethics + product |
| **[John Carmack (@ID_AA_Carmack)](https://x.com/ID_AA_Carmack)** | Legendary game dev; independent AGI researcher focused on efficiency | GPU‑level pragmatism |
| **[Fei‑Fei Li (@drfeifei)](https://x.com/drfeifei)** | Stanford HAI Co‑Director; vision & human‑centered AI | Human‑centered research |
| **[Ilya Sutskever (@ilyasut)](https://x.com/ilyasut)** | Co‑founder & Chief Scientist, OpenAI; superalignment research | Transformer deep dives |
| **[Lex Fridman (@lexfridman)](https://x.com/lexfridman)** | Research scientist & long‑form podcaster interviewing AI leaders | Long‑form interviews |
| **[Swyx (@swyx)](https://x.com/swyx)** | Co‑founder Smol AI; dev‑infra & agent‑engineering evangelist | Practical infra insights |
| **[Teng Yan (@0xPrismatic)](https://x.com/0xPrismatic)** | Author of Chain‑of‑Thought.xyz; bridges AI & crypto ecosystems | AI‑crypto convergence |
| **[Shreya Rajpal (@shreyar)](https://x.com/shreyar)** | Research Partner, a16z; founder Guardrails AI; MoE evangelist | Safe prompting & MoE |
| **[Dario Amodei (@darioamodei)](https://x.com/darioamodei)** | Co‑founder & CEO, Anthropic; safety & scaling benchmarks | Frontier‑safety leadership |
| **[Margaret Mitchell (@mmitchell_ai)](https://x.com/mmitchell_ai)** | Chief Ethics Scientist, Hugging Face; fairness & bias researcher | Model accountability |
| **[Paul Kedrosky (@pkedrosky)](https://x.com/pkedrosky)** | VC at SK Ventures; macro‑economics of AI adoption | Market signal threads |

</details>

---

# 5 | 🌐 Applied Case Studies

<details>
<summary>🌐 Applied Case Studies ▸</summary>

1. **[GitHub Copilot Agent Mode](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/)**  
   Turns GitHub issues into pull‑requests that include code, unit tests, and a passing CI pipeline.  
   • Uses OpenAI o3 (optionally Claude 3.7) + repository embeddings.  
   • Early adopters (Shopify, HashiCorp) report 27 % faster PR merge times.

2. **[Perplexity AI](https://www.perplexity.ai)**  
   Free AI answer engine with "Workspaces" for collaborative multi‑query research and citation management.  
   • Pro tier unlocks GPT‑4o context and file uploads.  
   • Popular for team literature reviews.

3. **[Runway Gen‑3 Alpha](https://runwayml.com/research/introducing-gen-3-alpha)**  
   Diffusion‑Transformer text‑to‑video model generating 4‑10 s 4 K clips.  
   • Used in Nike's April 2025 Air Max ad.  
   • Supports "sample‑reference" frames for style transfer.

4. **[Hippocratic AI Nurse Triage](https://www.hippocraticai.com)**  
   Mixtral 8×22B fine‑tune handling symptom triage at 14 U.S. hospitals.  
   • Passed NCLEX at 85 % and meets HIPAA compliance.  
   • Average call time cut by ≈23 % in pilot studies.

5. **[Google Project Astra](https://deepmind.google/technologies/project-astra/)**  
   Research prototype running Gemini 2.5 Flash; answers live camera queries.  
   • Demo: location inference & code reading from whiteboards.  
   • Forms the basis for upcoming "Gemini Live View".

6. **[Google Meet — "Take notes with Gemini"](https://blog.google/products/workspace/workspace-feature-drop-gemini-google-meet/)**  
   Gemini 1.5 Pro auto‑creates Google Docs with highlights and action items.  
   • Works up to ~300 k‑token meetings; links each note to transcript timecodes.  
   • Lets you ask: "Who owns the Q3 marketing OKR?"

7. **[DeepSeek R1 Robotics Stack](https://github.com/deepseek-ai/DeepSeek-R1)** – on‑device MoE model driving a warehouse Vector arm (≈600 picks / hr).  
   • Demo video: <https://www.youtube.com/watch?v=DhqtwdtfGcM>

8. **[Covariant Brain Robotic Picking](https://covariant.ai/covariant-brain/)**  
   Vision transformer + compact LLM handling SKU variation in JD.com and Ocado warehouses.  
   • Achieves 98 % pick accuracy on unseen items.  
   • Self‑improves via federated learning across 50+ robot arms.

9. **NVIDIA Isaac Sim + GR00T Pilot** – simulated warehouse robot running vision foundation model + GPT policy.  
   • Uses Isaac Sim for synthetic data; GR00T for task planning  [oai_citation_attribution:2‡arXiv](https://arxiv.org/abs/2306.01116?utm_source=chatgpt.com)

</details>

---

# 6 | ⚖️ Ethics, Safety & Policy
- **OpenAI Preparedness Team** – Catastrophic risk benchmarks.  
- **Anthropic RSP** – Responsible scaling policy v2 (Mar 2025).  
- **EU AI Act** passed 13 Mar 2025; tiered compliance for foundation models.  
- **NIST AI RMF 2.0** draft (Feb 2025) introduces continuous assurance.
- **U.S. Executive Order 14110** – "Safe, Secure, Trustworthy AI" (Jan 2025).

<details>
<summary>⚖️ Policy‑Countdown table ▸</summary>

| Regulation / Policy | Enforcement or Key Milestone | Affects |
|---|---|---|
| EU AI Act Codes of Practice | **May 2 2025** – draft codes become binding | All frontier‑model providers serving EU |
| Anthropic Responsible Scaling Policy v2 | **Mar 31 2025** – threshold checks activated | Claude family deployments |
| NIST AI RMF 2.0 (Draft) | **Jul 2025** – public comment closes | US federal procurement |
| UK AI Safety Institute Evaluations | **Q3 2025** – initial model eval suite published | Models > 10¹⁴ params |
| U.S. EO 14110 guidance | **Oct 2025** – OMB implementation memo due | All federal contracts |
| NIST AI RMF 2.0 Final | **Dec 2025** – Final framework published | U.S. critical‑infra vendors |

</details>

---

# 7 | 🎓 Student Opportunities
- **Implementation Checklist**  
  - [ ] Follow all X accounts & enable 🔔  
  - [ ] Benchmark three search engines  
  - [ ] Try one creative tool per week  
  - [ ] Replicate Graph RAG tutorial in LangChain  
- **Events & Fellowships**  
  NeurIPS • CVPR • AI Engineer Summit • MIT EmTech • ETHDenver • DEFCON AI Village • Stanford HAI Fellowships

---

# 8 | 📜 Appendices & Further Reading
### Mandatory Reading
* **Books:** *The Coming Wave*, *A Thousand Brains*, *Human Compatible*  
* **Manifestos & Threads:**  
  - Sam Altman – *Moore's Law for Everything*  
  - Yann LeCun – *Energy‑Based Models*

### Prompt Engineering 101

<details>
<summary>📝 Prompt‑Engineering table ▸</summary>

| Pattern | Core idea | Example / Colab |
|---|---|---|
| Chain‑of‑Thought (CoT) | Let the model "think aloud." | https://github.com/ysymyth/GSM8K-CoT |
| ReAct | Interleave reasoning & tool actions. | https://github.com/ydixon/reaxt-agent-search-demo |
| Self‑Critique / Reflexion | Model critiques & revises its own answer. | https://github.com/reflexion-ai/reflexion |
| Tree‑of‑Thought | Branch multiple reasoning paths, vote on best. | https://github.com/princeton-nlp/tree-of-thought |

</details>

### Advanced Challenges
Groq LPU benchmarks • Adversarial Claude prompts • Beat AlphaFold 3 with OpenFold • Spoof GPT‑5 via Llama‑3‑400B • Optimize NVIDIA Blackwell inference

---

*Happy innovating! Pull requests welcome → **#ai‑dev‑master‑list***

