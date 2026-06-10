import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/data-wall")({
  head: () => ({
    meta: [
      { title: "The Data Wall & Synthetic Futures — Silicon Epoch" },
      { name: "description", content: "The depletion of human data, inference-time scaling (test-time compute) via o-series and DeepSeek-R1, and synthetic data self-play." },
      { property: "og:title", content: "The Data Wall & Synthetic Futures — Silicon Epoch" },
    ],
  }),
  component: DataWall,
});

const SECTIONS = [
  {
    n: "01",
    t: "The Human Data Wall",
    b: "By early 2026, the global reserve of high-quality human-written text on the public internet has been completely exhausted by training runs. Feeding a model more of the same low-quality web scraping leads to diminishing returns and toxic noise. This bottleneck has forced the industry to look beyond raw crawling to construct new sources of signal."
  },
  {
    n: "02",
    t: "Test-Time Compute (Inference Scaling)",
    b: "If you cannot scale the model larger during pre-training, you scale it during execution. Test-time compute (inference-time scaling) shifts the compute budget to runtime, letting the model think via internal self-checking and search loops. OpenAI's o1/o3 and DeepSeek-R1 proved that allocating more tokens to deliberate thinking yields massive improvements in STEM fields."
  },
  {
    n: "03",
    t: "Synthetic Data & Self-Play",
    b: "Instead of scraping humans, models learn from each other or themselves. In reinforcement learning self-play, models generate hypotheses, code programs, or math proofs, which are verified by compilers or physics engines. This feedback loop generates highly accurate, clean synthetic training data independent of human curation."
  },
  {
    n: "04",
    t: "The Danger of Model Collapse",
    b: "Recursively training a neural network on its own synthetic output can lead to 'model collapse' or 'variance collapse,' where the model forgets rare concepts and gets stuck in repetitive loops. Labs prevent this through provenance filtering, keeping a gold-standard reserve of high-quality human data, and mixing synthetic data with real-world verification."
  }
];

function DataWall() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 12 · Synthetic data · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl">
          Running out of human <em className="italic text-ember">words</em> to learn from.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The scaling laws of the last five years relied on scraping everything humans ever wrote. Now that the internet is full, the frontier is shifting from brute-force memorization to self-play reasoning, synthetic generation, and inference-time thinking.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {SECTIONS.map((s) => (
            <article key={s.n} className="bg-background p-10">
              <div className="font-mono text-sm text-ember">{s.n}</div>
              <h3 className="font-display text-3xl mt-3">{s.t}</h3>
              <p className="mt-4 text-foreground/75 leading-relaxed text-sm">{s.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="rounded-3xl bg-cream border border-border p-10 lg:p-14">
          <div className="eyebrow">System 1 vs System 2 Thinking</div>
          <h2 className="display text-3xl lg:text-4xl mt-4 max-w-3xl">Deliberation on demand.</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed text-sm">
            Traditional LLMs operate on 'System 1' thinking—producing the next token instantly and reflexively. Reasoning models introduce 'System 2' thinking, spending seconds or minutes formulating internal chains-of-thought, correcting errors, and searching mathematical trees.
          </p>
          <p className="mt-3 text-foreground/80 leading-relaxed text-sm">
            This creates a new axis of capability: a model can be configured to run instantly for simple customer service chat, or think for 15 minutes to co-discover a new chemical superconductor. Scale is no longer static; it is allocated dynamically per query.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
