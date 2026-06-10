import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Energy — Silicon Epoch" },
      { name: "description", content: "Gigawatt compute clusters, nuclear power grids, Blackwell and Rubin GPUs, and the physical substrate powering the AI revolution." },
      { property: "og:title", content: "Infrastructure & Energy — Silicon Epoch" },
    ],
  }),
  component: Infrastructure,
});

const SUBSTRATES = [
  {
    eyebrow: "The Silicon Hardware",
    title: "Blackwell Ultra, Rubin, & Domestic Chinese Nodes",
    body: "The physical compute units are scaling rapidly. NVIDIA's Blackwell (B200/B300) and Blackwell Ultra are the current workhorses of frontier training runs. Rubin (announced for 2027) will transition to TSMC's 3nm and 2nm nodes, using HBM4 memory. In China, due to US export bans, labs train on domestic nodes like the Huawei Ascend 910C, fabricated locally using advanced multi-patterning techniques.",
    points: [
      "NVIDIA Blackwell: 20-petaflops of FP4 compute per single GPU, scale-out up to 576-GPU clusters.",
      "TSMC 2nm (N2): Entered volume production in late 2025; executing aggressive fab buildout in Taiwan.",
      "Huawei Ascend 910C: China's domestic flagship; successfully runs 1,000-chip post-training clusters."
    ]
  },
  {
    eyebrow: "The Megawatts",
    title: "The Transition to Gigawatt-Scale Datacenters",
    body: "A single frontier training run now demands a city's worth of power. Compute clusters are transitioning from 100-megawatt envelopes to gigawatt-scale. This has shifted the limiting factor of AI development from chip availability to grid connection speed and energy abundance.",
    points: [
      "Compute Density: A single Blackwell rack (NVL72) draws 120kW of power, requiring liquid cooling.",
      "Grid Bottlenecks: Major US grids have queues of up to 5 years for connecting new datacenters.",
      "Global Compute Capital: Memphis (xAI), Northern Virginia, and West Texas are the hotspots."
    ]
  },
  {
    eyebrow: "The Power Deals",
    title: "AI Resurrects Nuclear Energy",
    body: "Frontier labs require 24/7 carbon-free baseload power. This has triggered a historic alliance between AI hyperscalers and nuclear utility companies, bringing mothballed reactors back online and funding next-generation Small Modular Reactors (SMRs).",
    points: [
      "Microsoft & Constellation: A 20-year deal to restart the Three Mile Island Unit 1 reactor (835MW) solely for Microsoft AI.",
      "Google & Kairos Power: An agreement to purchase power from a fleet of 500MW of Small Modular Reactors by 2030.",
      "Amazon & Talen Energy: Acquisition of a 960MW nuclear-powered datacenter campus next to the Susquehanna plant."
    ]
  }
];

const CLUSTERS = [
  ["xAI Colossus 2", "Memphis, USA", "Gigawatt-scale", "Hundreds of thousands of NVIDIA H100/B200 GPUs. Currently training Grok 5."],
  ["OpenAI / Microsoft Stargate", "Proposed / Undisclosed", "$500B build", "Planned multi-phase buildout utilizing dedicated nuclear reactors to support 10M+ GPUs by 2030."],
  ["Meta MSL Cluster", "Oregon / Texas, USA", "600MW+", "Equipped with Llama 4 and Muse Spark training infrastructure, utilizing custom liquid-cooled architectures."],
  ["DeepSeek Ascend Cluster", "Hangzhou, China", "Sovereign Node", "Utilizing domestic Chinese hardware and advanced algorithmic optimization to training models with 90% less power."],
];

function Infrastructure() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 09 · The grid · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl">
          The physical substrate of <em className="italic text-ember">intelligence</em> is power.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          AGI is not a cloud construct; it is a massive engineering project requiring thousands of tons of copper, millions of gallons of water, gigawatts of electricity, and the most advanced lithography machines on Earth. Here is the architecture of the physical grid.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {SUBSTRATES.map((s, i) => (
          <article key={s.eyebrow} className="bg-background p-10 lg:p-14 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">{String(i + 1).padStart(2, "0")}</div>
              <div className="eyebrow mt-2">{s.eyebrow}</div>
              <h2 className="display mt-4 text-4xl lg:text-5xl">{s.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-foreground/80 leading-relaxed">{s.body}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-ember mt-2">▸</span>
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-12">
        <div className="eyebrow">Frontier AI Compute Clusters · June 2026</div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left">
            <thead className="bg-cream">
              <tr className="text-sm">
                <th className="p-4 font-medium">Cluster Name</th>
                <th className="p-4 font-medium">Location</th>
                <th className="p-4 font-medium">Power Scale</th>
                <th className="p-4 font-medium">Key Hardware & Purpose</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {CLUSTERS.map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-foreground/70">{row[1]}</td>
                  <td className="p-4 text-foreground/70">{row[2]}</td>
                  <td className="p-4 text-foreground/70">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-ink text-paper p-14 grain">
          <div className="grain-overlay" />
          <div className="eyebrow text-paper/60">The future of energy</div>
          <h2 className="display text-4xl lg:text-6xl mt-3 max-w-4xl">The ultimate limiting factor of superintelligence is not chips, but sustainable energy.</h2>
          <p className="mt-6 max-w-3xl text-paper/80 leading-relaxed">As compute demands triple every 8 months, the grid cannot adapt using standard coal or natural gas power. The labs that secure dedicated nuclear, geothermal, and solar reservoirs will dictate the pace of AGI development.</p>
        </div>
      </section>
    </PageShell>
  );
}
