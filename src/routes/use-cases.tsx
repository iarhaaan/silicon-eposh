import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "AI Use Cases — Silicon Epoch" },
      { name: "description", content: "Cursor at $2B ARR, Claude Code at $2.5B, SWE-bench 80%, 51% of devs use AI daily, AlphaProof solves IMO problems, AI-designed drugs in Phase IIb trials." },
      { property: "og:title", content: "AI Use Cases — Silicon Epoch" },
    ],
  }),
  component: UseCases,
});

const SECTORS = [
  {
    eyebrow: "Software",
    title: "AI is now writing most new code.",
    body: "84–91% of developers use AI coding tools across the four major 2025–26 surveys (Stack Overflow, JetBrains, DORA, DX). 51% of professional developers use AI tools every single day, and daily AI coding users merge 60% more pull requests per week (2.3 vs 1.4, measured across 85,350 developers at 435 companies — DX Q4 2025).",
    bullets: [
      "Cursor crossed $2B ARR in February 2026 — from $100M just 13 months earlier. The fastest ARR trajectory in developer-tooling history.",
      "Anthropic's run-rate went from $500M (Sept 2025) to $2.5B (Feb 2026), largely on Claude Code.",
      "GitHub Copilot: 4.7M paid subscribers, +75% YoY; 90% of Fortune 100 use it.",
      "SWE-bench Verified now sits at ~80% for top models (Claude Opus 4.5: 80.9%, Gemini 3.1 Pro: 80.6%, GPT-5.2: 80.0%) — up from <50% a year ago.",
      "Caveat: only 29% of Stack Overflow respondents trust AI code accuracy, and Veracode 2025 found 45% of AI-generated code contained a security vulnerability.",
    ],
  },
  {
    eyebrow: "Science",
    title: "From AlphaFold to autonomous laboratories.",
    body: "Stanford HAI's 2026 AI Index counted ~80,150 AI-related natural-science publications in 2025, up 26% YoY. AlphaFold 3 underpins drug discovery, vaccine design, and crops — DeepMind is using it to engineer a heat-tolerant Rubisco for a warming planet. AlphaProof (Nature, March 2026) achieves Olympiad-level formal math reasoning in Lean.",
    bullets: [
      "Terence Tao, arguably the world's greatest living mathematician, has become a public evangelist for AI proof assistants (Quanta, June 2026).",
      "DeepMind's plasma-control RL stabilises tokamak fusion reactors with EPFL.",
      "Materials: GNoME identified 2.2M+ new crystals; designed materials now in mass production.",
    ],
  },
  {
    eyebrow: "Medicine",
    title: "AI-designed drugs are now in human trials.",
    body: "60% of healthcare and life-sciences organisations have deployed AI in production (NVIDIA State of AI in Healthcare 2026), up from 42% in 2024. Insilico Medicine's ISM001-055 is in Phase IIb for fibrosis — one of the first AI-designed small molecules in late-stage trials. Recursion's REC-1245 is in early solid-tumor trials.",
    bullets: [
      "Google's mammography AI (Nature Cancer, March 2026) is non-inferior to NHS radiologists across 115,973 scans.",
      "DeepSeek-powered chest X-ray AI (Nature Communications, 2026) deployed in real clinical settings.",
      "Med-Gemini and Microsoft MAI-DxO outperform panels of physicians on diagnostic benchmarks.",
      "Brain–computer interfaces (Neuralink, Synchron, Stanford) let paralysed patients type at ~90 wpm and speak via LLM-decoded neural signals.",
    ],
  },
  {
    eyebrow: "Education",
    title: "A tutor for every child.",
    body: "Khanmigo, ChatGPT Edu, LearnLM and national programs in Estonia, Singapore and beyond are delivering personal, Socratic tutoring at near-zero marginal cost — the closest we've come to Bloom's two-sigma problem.",
    bullets: [
      "ChatGPT is the most-used learning tool in higher education worldwide.",
      "Duolingo Max uses LLMs for role-play conversation and explanations.",
      "AI literacy is now a top priority for K-12 systems globally (Code.org 2025 State of AI + CS report).",
    ],
  },
  {
    eyebrow: "Creativity",
    title: "A new medium is born every six months.",
    body: "Image (Midjourney, Nano Banana 2, gpt-image-2, Qwen-Image), video (Sora 2, Veo 3, Hailuo, Kling, Seedance, Runway), music (Suno, Udio), 3D (Tripo, Marble), voice (ElevenLabs, OpenAI Realtime, Sesame). G-Dragon's 2025 ‘Home Sweet Home’ music video was produced with Sora at ~90% cost reduction vs traditional production.",
    bullets: [
      "AI music-video production now: $100–$300, 3–7 day turnaround for independent artists.",
      "Adobe, Canva, Figma and CapCut have all rebuilt flagship tools around AI.",
      "Live interactive characters (Character.ai, Talkie, Replika) attract billions of monthly messages.",
    ],
  },
  {
    eyebrow: "Robotics & embodiment",
    title: "Foundation models meet hardware.",
    body: "Tesla Optimus and Figure 03 are in factory deployment trials. Figure's Helix 02 (January 2026) uses a single neural network to control walking, manipulation and balance directly from pixels. Boston Dynamics Atlas Electric leads dynamic mobility. Goldman projects a $38B humanoid market by 2035.",
    bullets: [
      "1X NEO ships to homes in 2026; Unitree G1 and Apptronik Apollo expand industrial pilots.",
      "Waymo runs millions of paid driverless rides per month; Tesla FSD and Chinese robotaxi fleets scale fast.",
      "Physical Intelligence π0, Google Gemini Robotics — generalist robot policies are catching up to language models.",
    ],
  },
  {
    eyebrow: "Agents & work",
    title: "Autonomous time horizons doubled every four months.",
    body: "METR's measurement (March 2025) found agent autonomous time horizons grew from seconds in 2019 to ~50 minutes in early 2025 — and continues. Qwen 3.7-Max runs 35-hour autonomous tasks. GLM-5.1 runs 8-hour loops. On OSWorld (real desktop automation) the best agents now score 76% — beating the 72.4% human expert baseline.",
    bullets: [
      "Microsoft Copilot, Gemini for Workspace, ChatGPT Enterprise and Claude for Enterprise are inside the workflows of tens of millions of professionals.",
      "McKinsey 2025: 78% of organisations regularly use generative AI, up from 55% in 2023.",
      "WEF Future of Jobs 2025: 170M new jobs created and 92M displaced by 2030 — a net +78M, with violent redistribution underneath.",
    ],
  },
  {
    eyebrow: "Climate & energy",
    title: "AI helps run the grid that powers it.",
    body: "Google's RL cuts data-centre cooling energy by 40%. DeepMind's GraphCast / GenCast beat the European centre's gold-standard weather forecast at 1000× speed. AI optimises battery chemistries, wind farms, grid balancing and carbon capture.",
    bullets: [
      "Microsoft, Google, Amazon and Meta are now the largest buyers of new nuclear and renewable power on Earth.",
      "DeepMind-designed materials accelerate the search for better batteries and superconductors.",
      "AlphaFold-engineered Rubisco aims at heat-tolerant crops for a warming planet.",
    ],
  },
];

function UseCases() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 03 · In production today · June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl">
          AI isn't coming. It's already <em className="italic text-ember">here</em>, doing the work.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Nine domains where artificial intelligence has already left the lab and entered daily life — with the products, the numbers and the names that prove it. Every figure below is sourced from a 2025–2026 primary source.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {SECTORS.map((s, i) => (
          <article key={s.eyebrow} className="bg-background p-10 lg:p-14 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">{String(i + 1).padStart(2, "0")}</div>
              <div className="eyebrow mt-2">{s.eyebrow}</div>
              <h2 className="display mt-4 text-4xl lg:text-5xl">{s.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-foreground/80 leading-relaxed">{s.body}</p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-ember mt-2">▸</span>
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
