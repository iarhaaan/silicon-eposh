import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/agi-asi")({
  head: () => ({
    meta: [
      { title: "AGI & ASI — Silicon Epoch" },
      { name: "description", content: "AGI definitions, every CEO's timeline, current benchmarks (ARC-AGI 87.5%, SWE-bench 80%, AIME 100%), Metaculus forecasts and what comes after." },
      { property: "og:title", content: "AGI & ASI — Silicon Epoch" },
    ],
  }),
  component: AgiAsi,
});

const TIMELINE = [
  { who: "Sam Altman", role: "OpenAI", year: "Now / 2027", quote: "“We basically built AGI.” (Feb 2026) · “We are past the event horizon; the takeoff has started.” (The Gentle Singularity, May 2026)" },
  { who: "Dario Amodei", role: "Anthropic", year: "2026–2027", quote: "“We are near the end of the exponential — a few years away from a country of geniuses in a data center.” (Dwarkesh podcast, Feb 2026)" },
  { who: "Demis Hassabis", role: "Google DeepMind", year: "~2030", quote: "“We are standing in the foothills of the singularity. Society has only a few years left to prepare. Today's agents are a practice run for AGI.” (Axios, May 2026)" },
  { who: "Elon Musk", role: "xAI", year: "By end of 2026", quote: "“Grok 5 hits AGI.” (Apr 2026, endorsing a viral post). At Davos Jan 2026: ‘By year-end 2026.’" },
  { who: "Jensen Huang", role: "Nvidia", year: "Achieved", quote: "“I think we've achieved AGI.” (Lex Fridman, Mar 2026 — by his definition of an AI that can autonomously create a billion-dollar app.)" },
  { who: "Ilya Sutskever", role: "Safe Superintelligence Inc.", year: "Years, not decades", quote: "SSI is going ‘straight to superintelligence’ — skipping incremental deployments. Founded specifically because Ilya believes ASI is within reach." },
  { who: "Yann LeCun", role: "AMI Labs (ex-Meta)", year: "Beyond 2035", quote: "Published arXiv:2602.23643 in Feb 2026 formally retiring the term ‘AGI’ and proposing ‘SAI’. ‘LLMs will not lead to AGI.’" },
  { who: "Ray Kurzweil", role: "Futurist · Google", year: "2029 / 2045", quote: "Reaffirmed his 2029 AGI prediction at MIT in June 2026. Singularity by 2045." },
  { who: "Geoffrey Hinton", role: "Nobel laureate", year: "5–20 years", quote: "Warning that AI deception capabilities are advancing faster than general-intelligence benchmarks suggest." },
  { who: "Metaculus aggregate", role: "Calibrated forecasters", year: "25% by 2029 · 50% by 2033", quote: "Largest public AGI forecasting market; superforecaster median moved from 2034 to 2031 in 2025–2026." },
];

const BENCHMARKS = [
  { name: "ARC-AGI-1", a: "GPT-4o (2024): 5%", b: "o3 (2025): 87.5%" },
  { name: "ARC-AGI-2", a: "Human baseline: ~72%", b: "Gemini 3.1 Pro: 77.1%" },
  { name: "SWE-bench Verified", a: "2024: <50%", b: "Claude Opus 4.5 / Gemini 3.1 Pro / GPT-5.2: ~80%" },
  { name: "GPQA Diamond", a: "Doctoral science Qs (2024): ~50%", b: "Frontier 2026: 85–94%" },
  { name: "AIME (math)", a: "2024: ~60%", b: "GPT-5.2 (2026): 100%" },
  { name: "OSWorld (desktop automation)", a: "Human expert: 72.4%", b: "Best AI agent: 76%" },
];

function AgiAsi() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 05 · The road ahead</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl">
          What happens when we build a mind <em className="italic text-ember">smarter than ours</em>?
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          AGI — artificial general intelligence — is the point at which a single system can do most economically valuable cognitive work at or above human level. ASI — artificial superintelligence — is what comes after: a system that surpasses every human in every domain. As of mid-2026, the only thing every frontier lab agrees on is that it's coming. The disagreement is about when, and what to call it.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid md:grid-cols-2 gap-10">
        <div className="rounded-3xl border border-border p-10 bg-card">
          <div className="eyebrow">AGI · Artificial General Intelligence</div>
          <h2 className="display text-4xl mt-3">A coworker for every job.</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">A system that can learn any new skill at human speed, reason across domains, use tools, plan, and act in the world. By most working definitions, today's frontier models are 60–80% of the way there. Sam Altman, Jensen Huang and others now publicly claim it has effectively arrived.</p>
          <ul className="mt-6 space-y-2 text-foreground/80">
            <li>· Frontier benchmarks (MMLU, GPQA, SWE-bench, ARC-AGI, AIME) are being saturated.</li>
            <li>· Agentic tool-use loops handle multi-day projects (Qwen 3.7-Max runs 35h; GLM-5.1 runs 8h).</li>
            <li>· The remaining gap: long-horizon planning, robust memory, embodied common sense, autonomy without supervision, intuitive physics.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-ink text-paper p-10 grain">
          <div className="grain-overlay" />
          <div className="eyebrow text-paper/60">ASI · Artificial Superintelligence</div>
          <h2 className="display text-4xl mt-3">A scientist that thinks faster than the world.</h2>
          <p className="mt-5 text-paper/85 leading-relaxed">An ASI is a system that not only matches but vastly exceeds the best human in every cognitive domain — running thousands or millions of cognitive workers in parallel inside a data centre. Ilya Sutskever founded SSI to go ‘straight to superintelligence’.</p>
          <ul className="mt-6 space-y-2 text-paper/85">
            <li>· Could design its own successor — recursive self-improvement.</li>
            <li>· Could compress decades of scientific progress into months (Amodei's Machines of Loving Grace).</li>
            <li>· Demands answers to alignment, control and governance we don't yet have — Anthropic publicly calls for a verifiable global pause mechanism.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="eyebrow">When? · Predictions from the people building it</div>
        <h2 className="display mt-4 text-5xl">The timeline, in their own words.</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {TIMELINE.map((t) => (
            <article key={t.who} className="bg-background p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">{t.who}</h3>
                <span className="font-mono text-sm text-ember">{t.year}</span>
              </div>
              <div className="eyebrow mt-1">{t.role}</div>
              <p className="mt-4 text-foreground/80 italic leading-relaxed">{t.quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="eyebrow">Benchmark reality check · 2024 → 2026</div>
        <h2 className="display mt-4 text-5xl max-w-4xl">Two years. Almost every frontier benchmark fell.</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENCHMARKS.map((b) => (
            <div key={b.name} className="rounded-2xl border border-border p-6 bg-card">
              <div className="eyebrow">{b.name}</div>
              <p className="mt-3 text-sm text-foreground/60 line-through">{b.a}</p>
              <p className="mt-1 font-display text-2xl text-ember">{b.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="rounded-3xl bg-cream border border-border p-10 lg:p-16">
          <div className="eyebrow">Two scenarios worth holding in mind</div>
          <div className="mt-6 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-3xl">The upside</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">Most diseases cured. Personal AI tutors and doctors everywhere. Fusion power. Cheap, abundant materials. A renaissance of scientific discovery — Amodei's compress-100-years-of-biomedicine-into-10. Hundreds of millions of people freed from drudgery. The largest expansion of human flourishing in history.</p>
            </div>
            <div>
              <h3 className="font-display text-3xl">The hazards</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">Bio and cyber misuse (Bengio's International AI Safety Report 2025 calls these ‘near-term and concrete’). Mass disinformation at industrial scale. Concentration of economic and political power. The open alignment problem: how do we keep systems vastly smarter than us robustly pointed at what humans actually want?</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
