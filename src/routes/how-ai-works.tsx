import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/how-ai-works")({
  head: () => ({
    meta: [
      { title: "How AI Works — Silicon Epoch" },
      { name: "description", content: "Transformers, tokens, training, RLHF, mixture-of-experts, reasoning, agents and multimodality — demystified without dumbing down." },
      { property: "og:title", content: "How AI Works — Silicon Epoch" },
    ],
  }),
  component: HowAIWorks,
});

const STEPS = [
  { n: "01", t: "Tokens", b: "Text, images, audio and video are chopped into small units called tokens — roughly fragments of words or pixel patches. A modern model handles billions of tokens per training run and millions per conversation." },
  { n: "02", t: "Embeddings", b: "Each token becomes a vector — a list of numbers in a high-dimensional space where related concepts sit close together. ‘King’ and ‘queen’ end up near each other; so do ‘photo of a cat’ and the word ‘cat’." },
  { n: "03", t: "Transformer attention", b: "The transformer (Vaswani et al. 2017) lets every token look at every other token and decide what matters. Stacked dozens or hundreds of layers deep, this is the core engine behind every frontier model." },
  { n: "04", t: "Pre-training", b: "Predict the next token across the open internet, books, code and increasingly synthetic data. Trillions of parameters absorb a compressed model of human knowledge. A frontier run today costs $100M–$1B+ in compute." },
  { n: "05", t: "Post-training (RLHF / RLAIF)", b: "Humans (and now other AIs) rank model outputs. Reinforcement learning shapes the raw model into a helpful, harmless assistant. This is what turned GPT-3 into ChatGPT." },
  { n: "06", t: "Reasoning models", b: "OpenAI o-series, DeepSeek-R1, Gemini Thinking, Claude 4 with extended thinking — these models are trained to produce long internal chains of thought, dramatically improving math, code and science benchmarks." },
  { n: "07", t: "Tool use & agents", b: "The model writes code, calls APIs, browses the web, opens files, controls a browser or a robot, and loops on the results. ‘Agentic AI’ is the leap from chatbot to coworker." },
  { n: "08", t: "Multimodality", b: "One model, many senses: read images, watch video, hear speech, generate images and video, speak back in real time. Gemini, GPT, Claude and Grok are all natively multimodal." },
];

const TERMS = [
  ["Parameters", "The tunable weights inside a neural network. GPT-3 had 175B; frontier models today range from ~70B (open) to multi-trillion (closed)."],
  ["Context window", "How much text the model can ‘see’ at once. Gemini and Claude now support 1M+ tokens — roughly an entire codebase or a stack of novels."],
  ["MoE (Mixture of Experts)", "Only a fraction of the model activates per token. Lets labs scale to trillions of parameters cheaply. Used by GPT-4o, DeepSeek V3, Mixtral, Qwen3 and Kimi K2."],
  ["RAG", "Retrieval-Augmented Generation — give the model a search index so it can cite fresh, private documents instead of hallucinating from memory."],
  ["Inference", "Running the model after it's trained. The economics of AI is mostly inference cost × usage."],
  ["Distillation", "Train a small fast model to imitate a large slow one. How most ‘mini’ models are born."],
  ["Constitutional AI", "Anthropic's method: the model critiques and rewrites its own answers against a written set of principles."],
  ["Scaling laws", "Empirical curves showing performance improves predictably with more compute, data and parameters. The reason labs keep building bigger clusters."],
];

function HowAIWorks() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
        <div className="eyebrow">Chapter 02 · The mechanics</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl">
          How <em className="italic text-ember">artificial intelligence</em> actually works.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Strip away the magic and modern AI is a stack of well-understood ideas executed at staggering scale. Here is the whole pipeline, end to end, in plain English.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {STEPS.map((s) => (
            <article key={s.n} className="bg-background p-10">
              <div className="font-mono text-sm text-ember">{s.n}</div>
              <h3 className="font-display text-3xl mt-3">{s.t}</h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">{s.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="eyebrow">Field glossary</div>
        <h2 className="display mt-4 text-5xl">The vocabulary of the frontier.</h2>
        <dl className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-8">
          {TERMS.map(([k, v]) => (
            <div key={k} className="border-t border-border pt-5">
              <dt className="font-display text-2xl">{k}</dt>
              <dd className="mt-2 text-foreground/75 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="rounded-3xl bg-cream border border-border p-10 lg:p-14">
          <div className="eyebrow">Why this matters</div>
          <p className="mt-4 font-display text-3xl lg:text-4xl leading-snug max-w-4xl">
            Every leap of the last five years — ChatGPT, image generation, code agents, real-time voice, reasoning models, video — comes from the same recipe: <span className="ember-underline">bigger transformers, better data, smarter training, more compute.</span> The recipe is still scaling.
          </p>
          <div className="mt-8">
            <Link to="/companies" className="rounded-full bg-ink text-paper px-6 py-3 text-sm hover:bg-ember">See who is scaling fastest →</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
