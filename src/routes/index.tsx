import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import {
  OpenAILogo,
  AnthropicLogo,
  DeepMindLogo,
  XAILogo,
  MetaLogo,
  MistralLogo,
  CohereLogo,
  DeepSeekLogo,
  MoonshotLogo,
  QwenLogo,
  ByteDanceLogo,
  BaiduLogo,
  ZhipuLogo,
  TencentLogo,
} from "@/components/company-logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silicon Epoch — How AI Will Reshape Humanity" },
      { name: "description", content: "A comprehensive, current field guide to the AI revolution: every frontier lab, every model, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence." },
      { property: "og:title", content: "Silicon Epoch — How AI Will Reshape Humanity" },
      { property: "og:description", content: "Every frontier lab, the chip wars, power grids, reasoning models, the data wall, and the road to superintelligence." },
    ],
  }),
  component: Index,
});

const STATS = [
  { k: "78%", v: "Of organisations regularly use generative AI, up from 55% in 2023 (McKinsey 2025)" },
  { k: "+170M", v: "New jobs created by AI by 2030, with 92M displaced — net +78M (WEF Future of Jobs 2025)" },
  { k: "80.0%", v: "Top model score on SWE-bench Pro (Claude Fable 5, June 2026) — up from <50% a year ago" },
  { k: "$2B", v: "Cursor's ARR in February 2026 — from $100M just 13 months earlier" },
];

const PILLARS = [
  {
    eyebrow: "01 · The Machines",
    title: "Every frontier lab & flagship model",
    body: "From OpenAI's GPT-5.5 family and Google's Gemini 3.5 to Anthropic's Claude Fable 5, xAI's Grok 4.3, DeepSeek V4-Pro, Muse Spark, and beyond — a living catalogue of who is building what.",
    to: "/companies" as const,
    cta: "Browse the labs",
  },
  {
    eyebrow: "02 · The Mechanics",
    title: "How AI actually works",
    body: "Transformers, tokens, training, RLHF, tool use, chain-of-thought, mixture-of-experts, multimodality, agentic loops. Demystified without dumbing down.",
    to: "/how-ai-works" as const,
    cta: "Open the engine bay",
  },
  {
    eyebrow: "03 · The Impact",
    title: "What AI is already doing for humanity",
    body: "AlphaFold mapped 200M+ proteins. AI co-discovered new antibiotics, controlled fusion plasma, formalised major math proofs, and brought speech back to people who lost it.",
    to: "/humanity" as const,
    cta: "See the breakthroughs",
  },
  {
    eyebrow: "04 · The Horizon",
    title: "AGI, ASI, and the next ten years",
    body: "Altman says AGI by 2027. Dario Amodei sees 'genius-in-a-data-center' by 2027. Hassabis says AGI within 5–10 years. We map every prediction, every roadmap, every risk.",
    to: "/agi-asi" as const,
    cta: "Read the timelines",
  },
  {
    eyebrow: "05 · Play",
    title: "AI in games & virtual worlds",
    body: "Google Genie 3, World Labs Marble, and Decart DOS 2.0. Explore how AI-driven NPCs, real-time world generators, and neural engines are transforming play.",
    to: "/games" as const,
    cta: "Step into the simulation",
  },
  {
    eyebrow: "06 · The Grid",
    title: "Infrastructure & Energy",
    body: "Powering the intelligence: gigawatt-scale datacenters, nuclear deals (Three Mile Island, Kairos Power), Blackwell chips, and the transition from megawatts to gigawatts.",
    to: "/infrastructure" as const,
    cta: "Inspect the infrastructure",
  },
  {
    eyebrow: "07 · Geopolitics",
    title: "The Chip Wars & Lithography",
    body: "Taiwan's TSMC chokepoint, ASML's High-NA EUV monopoly, US export controls, and China's domestic Ascend chips. Mapping the geopolitical supply chain of compute.",
    to: "/geopolitics" as const,
    cta: "Explore the supply chain",
  },
  {
    eyebrow: "08 · The Weights",
    title: "Open Weights vs Closed APIs",
    body: "The philosophical and commercial war between closed models (OpenAI, Anthropic, DeepMind) and open-weights (DeepSeek, Qwen, Mistral). Compare safety, cost, and access.",
    to: "/open-vs-closed" as const,
    cta: "Compare the architectures",
  },
  {
    eyebrow: "09 · The Pivot",
    title: "The Data Wall & Synthetic Futures",
    body: "Exhausting human internet data. Discover how test-time compute, inference-time scaling (o-series, DeepSeek-R1), and RL self-play bypass the physical data wall.",
    to: "/data-wall" as const,
    cta: "Study the new scaling laws",
  },
  {
    eyebrow: "10 · The Skill",
    title: "Why AI is the skill that compounds",
    body: "Solo founders building million-dollar products. Developers shipping 60% more PRs. A guide to Daily AI Fluency: six habits to stay ahead.",
    to: "/learn" as const,
    cta: "Build your AI practice",
  },
  {
    eyebrow: "11 · The Next Decade",
    title: "Year-by-year roadmap (2026-2035)",
    body: "From agentic software companies and humanoid robots entering factories to personalized neural media and international compute treaties. A detailed look ahead.",
    to: "/next-decade" as const,
    cta: "See the roadmap",
  },
  {
    eyebrow: "12 · Transparency",
    title: "Our Sources & Bibliography",
    body: "Every claim, figure, and quote on this site is grounded. View the directory of lab blogs, academic research papers, podcasts, and data reports we built upon.",
    to: "/sources" as const,
    cta: "Browse the bibliography",
  },
];

const TICKER = [
  "GPT-5.5 (April 2026) · ",
  "Claude Fable 5 (June 9, 2026) · ",
  "Gemini 3.5 Flash (May 2026) · ",
  "DeepSeek V4-Pro (April 2026) · ",
  "Muse Spark (April 2026) · ",
  "Qwen 3.7-Max (May 2026) · ",
  "GLM-5.1 (April 2026) · ",
  "Kimi K2.6 (April 2026) · ",
  "Colossus 2 Operational (Memphis) · ",
  "TSMC 2nm N2 Shipping · ",
  "Microsoft Three Mile Island Nuclear Deal · ",
  "Google Kairos Power SMR Deal · ",
  "DeepSeek-R1 Reasoning Shift · ",
  "OSWorld Agent Baseline 76% · ",
  "Claude Code Authoring 4% of GitHub · ",
];

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-28">
          <div className="eyebrow">A field guide · Updated June 2026</div>
          <h1 className="display mt-6 text-[clamp(3rem,9vw,9rem)] max-w-6xl">
            The most consequential <em className="italic text-ember">technology</em> in human history is being built right now.
          </h1>
          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-7 text-xl leading-relaxed text-foreground/80">
              We have entered the **Silicon Epoch**. In the next decade, artificial intelligence will rewrite science, medicine, work, geopolitics, and the texture of daily life. This is a living, deeply researched guide to *who* is building it, *how* it works, the *grid* that powers it, and *where* it is going.
            </p>
            <div className="md:col-span-5 md:justify-self-end flex flex-wrap gap-3">
              <Link to="/companies" className="rounded-full bg-ink text-paper px-6 py-3 text-sm hover:bg-ember transition-colors">Tour the frontier labs →</Link>
              <Link to="/infrastructure" className="rounded-full border border-ink/20 px-6 py-3 text-sm hover:bg-ink hover:text-paper transition-colors">Hardware & Grid</Link>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="rule border-y border-border bg-cream overflow-hidden">
          <div className="flex ticker whitespace-nowrap py-3 text-sm font-mono text-foreground/60">
            <div className="flex shrink-0">{TICKER.concat(TICKER).map((t,i) => <span key={i} className="px-2">{t}</span>)}</div>
            <div className="flex shrink-0">{TICKER.concat(TICKER).map((t,i) => <span key={"b"+i} className="px-2">{t}</span>)}</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <div key={s.k}>
              <div className="font-display text-6xl text-ember">{s.k}</div>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOGO CLOUD (Frontier Partners) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 border-t border-border">
        <div className="eyebrow text-center mb-10 text-foreground/50">Frontier AI Labs & Ecosystem covered in this guide</div>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-y-12 gap-x-8 justify-items-center items-center opacity-65 hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col items-center gap-2" title="OpenAI">
            <OpenAILogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">OpenAI</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Anthropic">
            <AnthropicLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Anthropic</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Google DeepMind">
            <DeepMindLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">DeepMind</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="xAI">
            <XAILogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">xAI</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Meta AI">
            <MetaLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Meta MSL</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="DeepSeek">
            <DeepSeekLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">DeepSeek</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Mistral AI">
            <MistralLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Mistral AI</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Cohere">
            <CohereLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Cohere</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Moonshot AI">
            <MoonshotLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Moonshot</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Alibaba Qwen">
            <QwenLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Alibaba Qwen</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="ByteDance">
            <ByteDanceLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">ByteDance</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Baidu">
            <BaiduLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Baidu Ernie</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Zhipu AI">
            <ZhipuLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Zhipu GLM</span>
          </div>
          <div className="flex flex-col items-center gap-2" title="Tencent">
            <TencentLogo size={32} />
            <span className="text-xs font-mono text-foreground/60 mt-1">Tencent</span>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 border-t border-border">
        <div className="eyebrow mb-6">Field Guide Chapters</div>
        <h2 className="display text-5xl lg:text-6xl mb-12">Twelve vectors of the intelligence explosion.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {PILLARS.map((p) => (
            <Link key={p.to} to={p.to} className="group bg-background p-10 hover:bg-cream transition-colors flex flex-col justify-between">
              <div>
                <div className="eyebrow">{p.eyebrow}</div>
                <h2 className="display mt-4 text-3xl">{p.title}</h2>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{p.body}</p>
              </div>
              <div className="mt-8 text-sm font-medium inline-flex items-center gap-2 group-hover:text-ember self-start">
                {p.cta} <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE WALL */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28 border-t border-border">
        <div className="eyebrow">What the builders are saying</div>
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {[
            { q: "We are past the event horizon; the takeoff has started. Humanity is close to building digital superintelligence.", who: "Sam Altman · OpenAI · May 2026" },
            { q: "We are near the end of the exponential — a few years away from a country of geniuses in a data center.", who: "Dario Amodei · Anthropic · Feb 2026" },
            { q: "We are standing in the foothills of the singularity. Society has only a few years left to prepare.", who: "Demis Hassabis · Google DeepMind · May 2026" },
            { q: "Digital superintelligence is coming. xAI is positioning Colossus 2 and Grok 5 to achieve true AGI.", who: "Elon Musk · xAI · 2026" },
            { q: "LLMs will not lead to AGI. Objective-driven world models are the true path forward.", who: "Yann LeCun · AMI Labs · Feb 2026" },
            { q: "We are not here to win a price war. We are here to push the boundary of intelligence, raising $7B to build open weights.", who: "Liang Wenfeng · DeepSeek · June 2026" },
          ].map((c) => (
            <figure key={c.who} className="border-t border-border pt-6">
              <blockquote className="font-display text-2xl leading-snug">“{c.q}”</blockquote>
              <figcaption className="mt-4 eyebrow text-foreground/60">{c.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="rounded-3xl bg-ink text-paper p-14 lg:p-20 grain">
          <div className="grain-overlay" />
          <div className="eyebrow text-paper/60">Where to start</div>
          <h2 className="display mt-4 text-5xl lg:text-7xl max-w-4xl">
            If you read one thing today, read <Link to="/agi-asi" className="ember-underline">the timeline to AGI</Link>.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/agi-asi" className="rounded-full bg-ember text-white px-6 py-3 text-sm hover:opacity-90">The road to AGI →</Link>
            <Link to="/infrastructure" className="rounded-full border border-paper/30 px-6 py-3 text-sm hover:bg-paper hover:text-ink">Nuclear Datacenters & Grid</Link>
            <Link to="/open-vs-closed" className="rounded-full border border-paper/30 px-6 py-3 text-sm hover:bg-paper hover:text-ink">Open vs Closed weights</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
