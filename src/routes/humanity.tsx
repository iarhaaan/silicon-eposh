import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/humanity")({
  head: () => ({
    meta: [
      { title: "AI for Humanity — Silicon Epoch" },
      { name: "description", content: "How AI is helping humanity solve disease, decode biology, expand the mind, and reach beyond the limits of a single human lifetime." },
      { property: "og:title", content: "AI for Humanity — Silicon Epoch" },
    ],
  }),
  component: Humanity,
});

const PROMISES = [
  { k: "Health", title: "Compress 100 years of medicine into 10.", body: "Dario Amodei's ‘Machines of Loving Grace’ argues that a benevolent powerful AI could deliver the equivalent of a century of biomedical progress within a decade — eliminating most cancers, curing most genetic disease, doubling healthy lifespan, ending malaria, and bringing mental-health care to everyone on Earth." },
  { k: "Science", title: "An AI scientist in every lab.", body: "Foundation models for biology, chemistry and materials are already designing new molecules, proteins and crystals. Self-driving labs combine LLM planners with robotic chemistry. The bottleneck is becoming wet-lab throughput, not ideas." },
  { k: "Knowledge", title: "A patient expert tutor for every person.", body: "For the first time in history, a child in a remote village and a child in Manhattan have access to the same Socratic, infinitely patient teacher — in their own language, on a $50 phone." },
  { k: "Economy", title: "An end to scarcity for cognitive work.", body: "If AI keeps trending, the marginal cost of an expert second-opinion — legal, medical, financial, technical — falls toward zero. The biggest economic shift since electrification." },
  { k: "Accessibility", title: "Give back what was lost.", body: "Speech for the speechless. Sight for the blind. Mobility for the paralysed. Multilingual fluency for everyone. AI is one of the most powerful assistive technologies ever built." },
  { k: "Discovery", title: "Reach beyond what one human mind can hold.", body: "A single researcher can now read every paper in their field, synthesise it overnight, design experiments, write the code, and run the analysis. The leverage on individual genius is unprecedented." },
];

function Humanity() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 04 · Beyond our limits</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl">
          For the first time, our tools <em className="italic text-ember">think with us</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Every previous technology amplified our muscles, our senses or our reach. AI is the first that amplifies our minds. The implications are still settling in.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {PROMISES.map((p) => (
            <article key={p.k} className="bg-background p-10">
              <div className="eyebrow">{p.k}</div>
              <h3 className="font-display text-3xl mt-3">{p.title}</h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-14">
        <div>
          <div className="eyebrow">Already shipped</div>
          <h2 className="display mt-4 text-5xl">Receipts, not promises.</h2>
        </div>
        <ul className="space-y-6 text-foreground/85">
          <li><strong className="font-display text-xl">AlphaFold 3 (2024)</strong> — predicted the structure of nearly every protein known to science, plus DNA, RNA and small-molecule interactions. Used by 2M+ researchers in 190 countries.</li>
          <li><strong className="font-display text-xl">Antibiotics from deep learning (MIT 2023–25)</strong> — discovered halicin, abaucin, and new classes of compounds effective against MRSA and A. baumannii.</li>
          <li><strong className="font-display text-xl">Plasma control for fusion (DeepMind × EPFL)</strong> — RL controllers shape and stabilise plasma inside tokamak reactors.</li>
          <li><strong className="font-display text-xl">Brain–computer interfaces (Neuralink, Synchron, Stanford)</strong> — paralysed patients ‘typing’ at ~90 wpm and speaking via LLM-decoded neural signals.</li>
          <li><strong className="font-display text-xl">AlphaProof & AlphaGeometry 2</strong> — solved 4 of 6 IMO problems, performing at the level of a silver medallist.</li>
          <li><strong className="font-display text-xl">Weather forecasting (GraphCast, GenCast)</strong> — beats the European centre's gold-standard model, running 1000× faster.</li>
          <li><strong className="font-display text-xl">Universal translation</strong> — real-time speech-to-speech for 100+ languages on consumer devices.</li>
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-cream border border-border p-10 lg:p-16">
          <div className="eyebrow">A note on risks</div>
          <h2 className="display text-4xl lg:text-5xl mt-4 max-w-3xl">We take the upside seriously. We take the downside seriously too.</h2>
          <p className="mt-6 max-w-3xl text-foreground/80 leading-relaxed">
            Every frontier lab has signed onto Responsible Scaling Policies, model evaluations, red-teaming and pre-deployment safety testing. The risks — bio-misuse, mass disinformation, concentration of power, autonomy and alignment — are real and the people building the technology say so publicly. The right answer isn't to stop building. It's to build carefully, openly, and with humanity in the loop.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
