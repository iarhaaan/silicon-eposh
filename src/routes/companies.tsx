import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { getLogoComponent } from "@/components/company-logos";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Frontier AI Labs — Every Model, Every Roadmap · June 2026" },
      { name: "description", content: "OpenAI GPT-5.5, Anthropic Claude Fable 5, Google Gemini 3.5, xAI Grok 4.3, Meta Muse Spark, DeepSeek V4-Pro, Kimi K2.6, Qwen 3.7-Max, GLM-5.1, Hunyuan Hy3 — flagship models, CEO quotes, 10-year plans." },
      { property: "og:title", content: "Frontier AI Labs — Every Model, Every Roadmap" },
    ],
  }),
  component: Companies,
});

type Lab = {
  name: string;
  hq: string;
  founded: string;
  ceo: string;
  tag: string;
  models: { name: string; note: string }[];
  vision: string;
  quote: string;
  plan: string;
  accent: "ember" | "cobalt" | "moss" | "ink";
};

const LABS: Lab[] = [
  {
    name: "OpenAI",
    hq: "San Francisco, USA",
    founded: "2015",
    ceo: "Sam Altman",
    tag: "The creator of ChatGPT. Self-described as 'a superintelligence research company'. Shifted focus to Phase 3: personal AGI for every human.",
    accent: "ember",
    models: [
      { name: "GPT-5.5 (Apr 2026)", note: "Flagship frontier model. 1.1M-token context window, reduced hallucinations, state-of-the-art agentic tool-use routing." },
      { name: "GPT-5.5 Instant", note: "Fast, cost-efficient model powering default ChatGPT tiers." },
      { name: "GPT-Rosalind (2026)", note: "Specialized scientific model family purpose-built for life sciences, drug discovery, and genomics." },
      { name: "Sora 2 / Realtime API", note: "Generative video and sub-second speech-to-speech multi-modal APIs." },
      { name: "Sunset Schedule", note: "o3 and GPT-4.5 scheduled for retirement from ChatGPT in June-August 2026, folded into the unified GPT-5.x router." },
    ],
    vision: "Altman's May 2026 essay 'The Gentle Singularity': 'We are past the event horizon; the takeoff has started. Humanity is close to building digital superintelligence.' Focused on delivering abundance in intelligence and energy via oracle partnerships.",
    quote: "“Intelligence too cheap to meter is well within grasp.” — Sam Altman",
    plan: "Deploy Stargate ($500B supercompute cluster built with Oracle / SoftBank) · 2027 'embodied robots doing physical work' · 2030s 'abundance in compute and clean fusion energy'.",
  },
  {
    name: "Anthropic",
    hq: "San Francisco, USA",
    founded: "2021",
    ceo: "Dario Amodei",
    tag: "Safety-first research lab. Creators of Claude and pioneers in mechanistic interpretability. Claude Code terminal agent now accounts for 4% of GitHub commits.",
    accent: "cobalt",
    models: [
      { name: "Claude Fable 5 (Jun 9, 2026)", note: "Flagship model with built-in safety classifiers. Highest score on Cognition's FrontierCode eval; migrated a 50M-line Ruby codebase at Stripe in one day." },
      { name: "Claude Mythos 5 (Jun 2026)", note: "Unsafeguarded version restricted to US gov cyber defenders ('Project Glasswing') and critical infrastructure providers." },
      { name: "Claude Opus 4.8", note: "Deep reasoning fallback when Fable 5's safety router redirects sensitive inputs." },
      { name: "Claude Code", note: "Agentic terminal CLI tool. Dominating SWE-bench Pro (80.0% accuracy)." },
    ],
    vision: "Amodei's 'Machines of Loving Grace' details how a benevolent powerful AI could compress 50–100 years of biomedical progress into 5–10 years. Calls for a verifiable global pause mechanism before recursive self-improvement starts.",
    quote: "“Powerful AI — smarter than a Nobel-prize winner across most fields — could arrive as early as 2026 or 2027.” — Dario Amodei",
    plan: "Implement Responsible Scaling Policy (RSP) as industry standard · Scale Mythos-class models under strict classifier-routed safety · Advance multi-agent orchestration.",
  },
  {
    name: "Google DeepMind",
    hq: "London / Mountain View",
    founded: "2010 · merged 2023",
    ceo: "Demis Hassabis",
    tag: "The science-first powerhouse. Built AlphaGo, AlphaFold 3, and the Gemini ecosystem. Now offering the Antigravity agentic platform.",
    accent: "moss",
    models: [
      { name: "Gemini 3.5 Flash (May 2026)", note: "High-efficiency frontier model designed for agent loops. Natively multimodal, extremely high speed, and competitive API pricing." },
      { name: "Gemini 3.5 Pro (Jun 2026)", note: "High-end reasoning model announced at Google I/O 2026." },
      { name: "Gemini Omni (May 2026)", note: "Generative world model natively outputs video and audio directly from any input combinations." },
      { name: "AlphaFold 3 / AlphaProof", note: "Nobel-winning biology predictor and Olympiad-level formal math reasoning (Lean proof assistant)." },
      { name: "Antigravity & Managed Agents", note: "First-party SDK and cloud environment for stateful, autonomous software agents." },
    ],
    vision: "Hassabis claims we are standing in the 'foothills of the singularity' and that 'society has only a few years left to prepare.' Today's agentic systems are a 'practice run' for true AGI, which will serve as the ultimate tool for scientific discovery.",
    quote: "“AGI is within reach. Five to ten years out. The next decade will be the most exciting in the history of science.” — Demis Hassabis",
    plan: "Integrate Gemini substrate into all Alphabet hardware and software · Deploy generalist robotics policies (π0/Robotics) · Advance simulators using world models (Genie 3).",
  },
  {
    name: "xAI",
    hq: "Bay Area / Memphis",
    founded: "2023",
    ceo: "Elon Musk",
    tag: "Built Colossus 2, the world's first gigawatt-scale training cluster in Memphis. Acquired by SpaceX in April 2026.",
    accent: "ink",
    models: [
      { name: "Grok 4.3 (Apr 2026)", note: "Flagship model with active computer-use API and rapid real-time X data lookup." },
      { name: "Grok Build", note: "Agentic terminal-based coding model with 100+ tokens/second throughput." },
      { name: "Grok 5 (In Training)", note: "Estimated 6T-parameter MoE model training on Colossus 2. Musk claims it will 'hit true AGI'." },
    ],
    vision: "Maximally truth-seeking AI that understands the universe. Positioned as the geopolitical check on 'woke' AI. Musk envisions deep hardware integrations across Tesla (FSD, Optimus humanoids) and SpaceX launch systems.",
    quote: "“Digital superintelligence will arrive in a few years. The question is what kind of universe we want our children to live in.” — Elon Musk",
    plan: "Complete training of Grok 5 · Expand Memphis Colossus cluster capacity · Deploy Grok as the brain of Tesla's Optimus humanoid robots.",
  },
  {
    name: "Meta AI · MSL",
    hq: "Menlo Park, USA",
    founded: "2013 (FAIR) · restructuring 2025/26",
    ceo: "Mark Zuckerberg",
    tag: "Restructured around Meta Superintelligence Labs (MSL) with Alexandr Wang as CAIO. Pivoted from open-weights Llama to closed-weights Muse.",
    accent: "cobalt",
    models: [
      { name: "Muse Spark (Apr 2026)", note: "First closed-weights model from MSL. Tiered reasoning modes, including a 'Contemplating' mode utilizing parallel sub-agents." },
      { name: "Llama 4 Herd (2025)", note: "The final major open-weight MoE family (17B to Behemoth sizes) before the Muse pivot." },
      { name: "Movie Gen / Emu Video", note: "Generative video and image synthesis suites." },
    ],
    vision: "Zuckerberg's vision is 'personal superintelligence' running on smart glasses (Ray-Ban Meta, Orion AR) and across WhatsApp, Instagram, and Facebook. Pivoted to closed-weights to compete at the frontier of AGI.",
    quote: "“Muse Spark represents a transition to personal superintelligence. It is closed-weights to ensure safety at AGI-scale.” — Mark Zuckerberg",
    plan: "Inject $135B–$145B into AI infrastructure in 2026 · Roll out public APIs for Muse Spark · Expand AR smart glasses AI capabilities.",
  },
  {
    name: "DeepSeek",
    hq: "Hangzhou, China",
    founded: "2023",
    ceo: "Liang Wenfeng",
    tag: "The cost-efficiency disruptor. Raised a historic $7B at a $45B valuation in June 2026. Famous for open-weights performance at 90% lower cost.",
    accent: "ember",
    models: [
      { name: "DeepSeek V4-Pro (Apr 2026)", note: "1.6T total / 49B active MoE. Introduces mHC architectures, Compressed Sparse Attention, and Muon optimizer. Under MIT open license." },
      { name: "DeepSeek V4-Flash", note: "284B / 13B active. Economical model designed for high-volume agent loops." },
      { name: "DeepSeek R1 / R2 reasoning", note: "Reasoning models trained using pure Reinforcement Learning (GRPO), rewriting post-training scaling globally." },
    ],
    vision: "Achieve AGI through algorithmic curiosity over brute-force compute scaling. Proving that optimization and MoE architectures can match US frontier labs at a fraction of the capital expenditure.",
    quote: "“We are not here to win a price war. We are here to push the boundary of intelligence.” — Liang Wenfeng",
    plan: "Optimize models to run on domestic Huawei Ascend chips · Maintain open-weights commitment under MIT license · Advance synthetic data self-play.",
  },
  {
    name: "Mistral AI",
    hq: "Paris, France",
    founded: "2023",
    ceo: "Arthur Mensch",
    tag: "Europe's sovereign champion. Open weights + enterprise deployment stack, focusing on industrial applications.",
    accent: "ember",
    models: [
      { name: "Mistral Medium 3.5 (May 2026)", note: "Powering the Vibe remote agent platform. Multimodal, optimized for enterprise pipelines." },
      { name: "Mistral Large 3", note: "41B active / 675B total MoE. Released under fully open Apache 2.0 weights." },
      { name: "Voxtral / Mistral 3", note: "On-device efficient models and voice transcription models." },
    ],
    vision: "Mensch argues models are commodities, and the moat lies in local deployment and sovereign execution. Mistral for Industrial Engineering merges physics models with robotics for factory operations.",
    quote: "“Europe needs its own frontier AI. We will not be a colony of someone else's models.” — Arthur Mensch",
    plan: "Double down on EU government and defense partnerships · Scale the Vibe long-horizon agent suite · Deliver sovereign, air-gapped deployments.",
  },
  {
    name: "Cohere",
    hq: "Toronto, Canada",
    founded: "2019",
    ceo: "Aidan Gomez",
    tag: "Enterprise and sovereign AI specialist. Merged with Germany's Aleph Alpha to anchor EU enterprise deployment.",
    accent: "cobalt",
    models: [
      { name: "Command A+ (May 2026)", note: "Apache 2.0 enterprise flagship. Quantized to run on 2 H100s, native citations, supports 48 languages." },
      { name: "North Mini Code", note: "First developer-targeted coding model from Cohere." },
    ],
    vision: "Gomez (co-author of the Transformer paper) focuses on enterprise security. Argues companies and sovereign states must control their models rather than leasing API access from US closed hyperscalers.",
    quote: "“The future of enterprise AI is AI agents — built for production, reliability and security.” — Aidan Gomez",
    plan: "Deepen enterprise agentic deployment · Grow sovereign AI globally post-Aleph Alpha merger · Push toward IPO within 12-18 months.",
  },
  {
    name: "Moonshot AI (Kimi)",
    hq: "Beijing, China",
    founded: "2023",
    ceo: "Yang Zhilin",
    tag: "Long-context and agent-swarm pioneer. Creators of the Kimi app, China's dominant consumer AI platform.",
    accent: "cobalt",
    models: [
      { name: "Kimi K2.6 (Apr 2026)", note: "1T total / 32B active MoE. 256K context. Leads the HLE benchmark with tool integration. Open weights." },
      { name: "Agent Swarm API", note: "Allows developers to spin up and orchestrate up to 300 simultaneous sub-agents." },
    ],
    vision: "Seeking the optimal conversion from energy to intelligence. Zhilin bets on extremely long context windows, personal memory, and agent swarm collaboration.",
    quote: "“The next decade belongs to AI that remembers everything you've ever told it.” — Yang Zhilin",
    plan: "Scale Kimi consumer app · Refine context memory architecture · Deploy Agent Swarm systems for complex enterprise automation.",
  },
  {
    name: "Alibaba Qwen",
    hq: "Hangzhou, China",
    founded: "2023",
    ceo: "Eddie Wu (Alibaba)",
    tag: "The most prolific open-model ecosystem. Qwen3.7-Max is currently the highest-ranked Chinese model on Artificial Analysis.",
    accent: "ember",
    models: [
      { name: "Qwen3.7-Max (May 2026)", note: "Built for agentic workflows, capable of 35-hour autonomous runs. GPQA Diamond score: 92.4." },
      { name: "Qwen3.7-Plus (Jun 2026)", note: "Natively multimodal computer-use agent. Extremely cheap inference ($1.6/1M output tokens)." },
      { name: "Qwen3-Coder / Wan Video", note: "State-of-the-art coding and open generative video specialists." },
    ],
    vision: "Power Alibaba Cloud and 1M+ global developers. Strategic pivot: closed-weights proprietary models at the absolute frontier (Qwen Max series) and open-weights at the mid-tier.",
    quote: "“Open source is not a strategy. It's a belief.” — Qwen Team",
    plan: "Anchor Alibaba Cloud's enterprise AI business · Deliver autonomous coding agents that run for tens of hours · Grow APAC developer share.",
  },
  {
    name: "ByteDance Doubao · Seed",
    hq: "Beijing / Singapore",
    founded: "2023",
    ceo: "Liang Rubo",
    tag: "TikTok's parent company. Doubao is China's most-used consumer AI app with hundreds of millions of monthly users.",
    accent: "cobalt",
    models: [
      { name: "Doubao Seed 2.0 (Feb 2026)", note: "Flagship multimodal model powering the Doubao app and Coze agent creator." },
      { name: "SeedUplex (2026)", note: "Native full-duplex voice model with simultaneous listening/speaking, eliminating the walkie-talkie delay." },
      { name: "Seedream / Seedance", note: "Top-tier video and image synthesis engines." },
    ],
    vision: "Embed multimodal AI into every ByteDance surface (TikTok, CapCut, Lark, education apps) and leverage TikTok's massive global content delivery infrastructure.",
    quote: "“Creation belongs to everyone, and AI is the great democratiser.” — ByteDance Leadership",
    plan: "Aggressive consumer rollout · Deep integration with short-video creator tools · Scale global research labs in Singapore and Europe.",
  },
  {
    name: "Baidu Ernie",
    hq: "Beijing, China",
    founded: "2000 (Baidu) · 2019 (Ernie)",
    ceo: "Robin Li",
    tag: "Baidu's search and cloud substrate. ERNIE 5.1 is the #1 Chinese model on LMArena Search.",
    accent: "ink",
    models: [
      { name: "ERNIE 5.1 (May 2026)", note: "MoE; compressed to 1/3 of ERNIE 5.0 parameters at 6% of pre-training compute. Dominates LMArena legal and search benchmarks." },
      { name: "Apollo Go AI", note: "Autonomous driving neural planner powering China's largest robotaxi fleet." },
    ],
    vision: "Power Baidu Search, Baidu Cloud, and Apollo autonomous driving with highly optimized, cost-efficient models tailored for Chinese language and reasoning.",
    quote: "“The era of AI-native applications has just begun.” — Robin Li",
    plan: "Maintain Search dominance in China · Expand Apollo Go robotaxi fleet · Deliver cost-efficient enterprise MoE models.",
  },
  {
    name: "Zhipu AI · GLM (Z.ai)",
    hq: "Beijing, China",
    founded: "2019",
    ceo: "Zhang Peng",
    tag: "Tsinghua University spin-out. Built GLM-5.1, trained entirely on domestic Chinese chips.",
    accent: "moss",
    models: [
      { name: "GLM-5.1 (Apr 2026)", note: "202K context, 8-hour autonomous execution loops. GPQA: 86.2, MMLU: 89. Open weights under MIT license." },
      { name: "AutoGLM / AutoClaw", note: "Phone and PC-level agent suites for automated web and desktop control." },
    ],
    vision: "Inspiring AGI to benefit humanity. Bucking the Chinese price war by raising API prices 10% after open-sourcing GLM-5.1, focusing on premium capabilities.",
    quote: "“China's open models will set the global baseline for capability and price.” — Tang Jie / Zhipu Team",
    plan: "Chip-independent training using domestic accelerators · Scale autonomous browser agents · Expand international brand Z.ai.",
  },
  {
    name: "Tencent Hunyuan",
    hq: "Shenzhen, China",
    founded: "2023",
    ceo: "Pony Ma",
    tag: "Rebuilt from scratch in 90 days under ex-OpenAI Chief AI Scientist Yao Shunyu.",
    accent: "ink",
    models: [
      { name: "Hunyuan Hy3 Preview (Apr 2026)", note: "295B total / 21B active MoE. Integrates fast and slow thinking (System 1 & 2), 40% efficiency gains." },
      { name: "Hunyuan Video / 3D", note: "Open-weight video and 3D mesh generator." },
    ],
    vision: "Full-ecosystem agent foundation. Deeply integrating Hunyuan into Tencent's gaming pipelines, WeChat messaging, QQ, and Tencent Cloud infrastructure.",
    quote: "“The next generation of architectures must integrate fast and slow thinking at the silicon level.” — Yao Shunyu",
    plan: "Deploy agents across WeChat's 1.3B users · Release open-weight models · Invest in a multi-year AGI architecture.",
  },
  {
    name: "MiniMax",
    hq: "Shanghai, China",
    founded: "2021",
    ceo: "Yan Junjie",
    tag: "Focused on expressive voice, long-context, and character AI. Creators of Hailuo and Talkie.",
    accent: "moss",
    models: [
      { name: "MiniMax M3 (Jun 2026)", note: "MoE model with MiniMax Sparse Attention. 1M-token context window. Open weights." },
      { name: "Hailuo 2.3 / Speech-02", note: "Top-tier cinematic video generation and state-of-the-art expressive text-to-speech." },
    ],
    vision: "Multimodal personal AI for creators and characters. Junjie believes AI-native entertainment and conversational companions represent the next computing platform.",
    quote: "“The next platform shift is AI-native entertainment.” — Yan Junjie",
    plan: "Scale Talkie and Hailuo globally · Improve video generation to feature-film quality · Deliver high-expressive vocal models.",
  },
  {
    name: "01.AI",
    hq: "Beijing, China",
    founded: "2023",
    ceo: "Kai-Fu Lee",
    tag: "Founded by venture capitalist and AI pioneer Kai-Fu Lee. Famous for delivering frontier-quality results at small parameter sizes.",
    accent: "ember",
    models: [
      { name: "Yi-Lightning", note: "Highly cost-efficient model beating GPT-4o-level performance on LMArena at a fraction of the cost." },
      { name: "Yi-Large", note: "Enterprise flagship model powering productivity suites in China and globally." },
    ],
    vision: " Lee calls AI 2.0 'bigger than the internet, mobile, and cloud combined'. Driven to make frontier intelligence cheap, fast, and accessible globally.",
    quote: "“AI 2.0 will rewrite every layer of the global economy.” — Kai-Fu Lee",
    plan: "Maximize model quantization and efficiency · Deliver global B2B enterprise integrations · Ship lightweight, high-performance edge models.",
  },
  {
    name: "AMI Labs (Yann LeCun)",
    hq: "Paris / New York, USA",
    founded: "January 2026",
    ceo: "Yann LeCun",
    tag: "LeCun's new venture after departing Meta FAIR. Raised $1B in March 2026. Rejects generative autoregressive LLMs.",
    accent: "moss",
    models: [
      { name: "JEPA World Models", note: "Joint Embedding Predictive Architecture. Systems that learn the structure of reality from video and planning without token prediction." },
      { name: "V-JEPA 2 Lineage", note: "Self-supervised video understanding engines optimized for physical simulation." },
    ],
    vision: "LeCun asserts LLMs will never reach AGI because they lack world models, common sense, and planning. AMI Labs builds predictive architectures specifically designed to plan and act in physical reality.",
    quote: "“The next AI revolution is coming. But it's not AGI and not coming next year.” — Yann LeCun",
    plan: "Develop physics-grounded world models for industrial robotics · Form partnerships with robotics and autonomous manufacturing systems · Refine objective-driven planning.",
  },
];

function Companies() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 01 · The frontier · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl">
          Eighteen labs are <em className="italic text-ember">racing</em> to build the smartest thing on Earth.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Every frontier model in production today comes from one of the companies on this page. Below: their newest flagship models, what their CEOs are publicly saying right now, and where each lab says it's headed for the next decade.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {LABS.map((lab, idx) => (
          <article key={lab.name} className="bg-background p-8 lg:p-14 grid lg:grid-cols-12 gap-8">
            <header className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">{String(idx + 1).padStart(2, "0")} / {String(LABS.length).padStart(2, "0")}</div>
              <div className="flex items-center gap-3 mt-3">
                {getLogoComponent(lab.name, 36, "text-foreground")}
                <h2 className="display text-4xl lg:text-5xl">{lab.name}</h2>
              </div>
              <p className="mt-3 text-sm text-foreground/60">{lab.hq} · founded {lab.founded}</p>
              <p className="mt-1 text-sm text-foreground/60">CEO: {lab.ceo}</p>
              <p className="mt-6 text-foreground/80 italic">{lab.tag}</p>
            </header>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <div className="eyebrow mb-3">Flagship models · mid-2026</div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {lab.models.map((m) => (
                    <li key={m.name} className="border-t border-border pt-3">
                      <div className="font-medium">{m.name}</div>
                      <div className="text-sm text-foreground/65">{m.note}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="eyebrow mb-2">Long-term vision</div>
                  <p className="text-foreground/80 leading-relaxed text-sm">{lab.vision}</p>
                </div>
                <div>
                  <div className="eyebrow mb-2">10-year plan</div>
                  <p className="text-foreground/80 leading-relaxed text-sm">{lab.plan}</p>
                </div>
              </div>
              <blockquote className={`border-l-2 pl-5 font-display text-2xl leading-snug ${lab.accent === "ember" ? "border-ember" : lab.accent === "cobalt" ? "border-cobalt" : lab.accent === "moss" ? "border-moss" : "border-ink"}`}>
                {lab.quote}
              </blockquote>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
