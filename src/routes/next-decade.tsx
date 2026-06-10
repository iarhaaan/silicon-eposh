import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/next-decade")({
  head: () => ({
    meta: [
      { title: "The Next Decade — Silicon Epoch" },
      { name: "description", content: "Year by year, capability by capability — what artificial intelligence will be able to do in the next ten years, according to the people building it." },
      { property: "og:title", content: "The Next Decade — Silicon Epoch" },
    ],
  }),
  component: NextDecade,
});

const YEARS = [
  { y: "2026", t: "The year of the agent.", b: "Reasoning models become standard. Multi-step browser and coding agents go from demo to default. First AI-run software companies. Humanoid robots enter homes (1X NEO) and factories at scale (Figure, Optimus pilots)." },
  { y: "2027", t: "Frontier models match top human experts.", b: "Amodei's ‘powerful AI’ threshold. Models that out-perform Nobel laureates across most fields, on demand. Massive scientific acceleration begins. Compute clusters cross the gigawatt mark." },
  { y: "2028", t: "AI-native consumer hardware everywhere.", b: "AI glasses (Meta Orion, Apple), ambient AI in cars and homes, real-time speech-to-speech translation as default. Personal AI agents start managing schedules, money and inboxes end-to-end." },
  { y: "2029", t: "Kurzweil's AGI year.", b: "By many definitions, AGI exists in the lab. Multiple AI-discovered drugs reach approval. Software engineering as a profession is restructured around AI co-developers. Robotaxi fleets surpass human-driven rides in major cities." },
  { y: "2030", t: "AI as scientific infrastructure.", b: "Most new physics, chemistry and biology results have AI co-authors. The first AI-designed material in mass production. Climate models, fusion experiments and drug pipelines all routed through neural networks." },
  { y: "2031", t: "Real-time generated entertainment.", b: "First mainstream games and films built on neural world models. Personalised, infinite-length media — every viewer gets a different cut. AI characters with persistent memory across platforms." },
  { y: "2032", t: "The robotics ImageNet moment matures.", b: "General-purpose humanoids common in warehouses, hospitals and homes. Surgical robotics with AI co-pilots become standard of care. Cost per humanoid drops below $20K." },
  { y: "2033", t: "Education is rebuilt around AI tutors.", b: "Most learners worldwide have lifetime personal AI tutors. Credentialing shifts from time-served to capability-demonstrated. Universities re-purpose around mentorship, research and community." },
  { y: "2034", t: "Pre-ASI guardrails get serious.", b: "International treaties on frontier training runs. Compute monitoring, interpretability research and model evaluations as mature as nuclear safeguards. Public debate on rights and personhood of digital minds begins in earnest." },
  { y: "2035", t: "The decade closes with the question of our era.", b: "Either we have entered the early phase of superintelligence and learned to live with it, or we have collectively agreed to slow down. Either way, the world looks more different from 2025 than 2025 looked from 1995." },
];

function NextDecade() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 07 · 2026 → 2035</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl">
          Ten years that will <em className="italic text-ember">remake the world</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          A year-by-year sketch, synthesised from the public roadmaps of OpenAI, Anthropic, DeepMind, xAI, Meta and the leading Chinese labs. Predictions are predictions — but every line below is anchored in something someone building this technology is on record saying.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 pb-24">
        <ol className="relative border-l-2 border-border">
          {YEARS.map((y) => (
            <li key={y.y} className="ml-8 mb-12 relative">
              <span className="absolute -left-[44px] top-1 inline-flex h-5 w-5 rounded-full bg-ember ring-8 ring-background" />
              <div className="font-mono text-sm text-ember">{y.y}</div>
              <h3 className="font-display text-3xl mt-1">{y.t}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{y.b}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
