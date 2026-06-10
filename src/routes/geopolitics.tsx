import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/geopolitics")({
  head: () => ({
    meta: [
      { title: "Geopolitics & The Chip Wars — Silicon Epoch" },
      { name: "description", content: "The TSMC Taiwan chokepoint, ASML lithography monopoly, U.S. export controls, and China's domestic silicon self-sufficiency." },
      { property: "og:title", content: "Geopolitics & The Chip Wars — Silicon Epoch" },
    ],
  }),
  component: Geopolitics,
});

const ISSUES = [
  {
    n: "01",
    title: "The Taiwan Strait Chokepoint",
    body: "TSMC (Taiwan Semiconductor Manufacturing Company) fabricates over 90% of the world's advanced processors and 100% of frontier AI chips (NVIDIA Blackwell, AMD MI300, Apple Silicon). A geopolitical crisis or conflict in the Taiwan Strait would halt global compute expansions immediately, costing the global economy trillions of dollars.",
    bullets: [
      "TSMC 2nm (N2): Fabricated exclusively in Hsinchu and Kaohsiung, Taiwan.",
      "ASMC / Arizona Fab: TSMC is building fabs in Arizona and Japan, but leading-edge volume nodes remain anchored in Taiwan due to ecosystem integration."
    ]
  },
  {
    n: "02",
    title: "ASML & The Dutch Monopoly",
    body: "Advanced chips require EUV (Extreme Ultraviolet) lithography machines, which print patterns at nanometer scale. ASML, based in Veldhoven, Netherlands, is the sole company capable of designing and assembling these machines. A single High-NA EUV scanner costs over $350M, containing over 100,000 components from global suppliers.",
    bullets: [
      "TSMC vs Intel High-NA: Intel has actively deployed High-NA EUV, while TSMC is delaying deployment until 2029, relying on optimized 2nm multi-patterning to keep costs down.",
      "Lithography Ban: The Dutch government, in alignment with US export policies, has completely blocked the shipment of EUV and advanced DUV scanners to Chinese customers."
    ]
  },
  {
    n: "03",
    title: "Export Controls & The Loophole Crackdown",
    body: "The United States has implemented strict export controls preventing Chinese firms from buying high-bandwidth NVIDIA processors or advanced EDA design software. By mid-2026, the US has expanded its enforcement to address third-party routing through logistics hubs in Malaysia, Vietnam, and the UAE, introducing a 'beneficial ownership' standard.",
    bullets: [
      "Overseas Subsidiaries: Chinese firms are blocked from leasing advanced compute in foreign cloud nodes.",
      "Taiwanese Alignments: In June 2026, Taiwan formally tightened its chip export controls to align with US security guidelines and prevent illegal diversion."
    ]
  },
  {
    n: "04",
    title: "China's Domestic Self-Sufficiency",
    body: "In response to Western bans, China has launched an aggressive campaign to build an independent domestic semiconductor pipeline. Spearheaded by Huawei (Ascend processors) and SMIC (fabrication), China has succeeded in developing capable AI accelerators using older multi-patterning DUV techniques.",
    bullets: [
      "Huawei Ascend 910C: China's current premier domestic AI chip. Used in large-scale post-training runs.",
      "Algorithmic Disruption: Chinese labs focus heavily on software-level optimization (like DeepSeek mHC and MoE structures) to compensate for inferior hardware specs."
    ]
  }
];

function Geopolitics() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 10 · Geopolitics · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl">
          The geography of silicon is a <em className="italic text-ember">geopolitical chokepoint</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The race to AGI is constrained by a hyper-concentrated physical supply chain. The software is global, but the hardware rests on a few square miles of land in Taiwan and the Netherlands.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {ISSUES.map((issue) => (
            <article key={issue.n} className="bg-background p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-sm text-ember">{issue.n}</div>
                <h3 className="font-display text-3xl mt-3">{issue.title}</h3>
                <p className="mt-4 text-foreground/75 leading-relaxed text-sm">{issue.body}</p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4">
                {issue.bullets.map((b, i) => (
                  <li key={i} className="text-xs text-foreground/70 leading-relaxed flex gap-2">
                    <span className="text-ember">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-cream border border-border p-10 lg:p-14">
          <div className="eyebrow">Sovereign AI Stacks</div>
          <h2 className="display text-3xl lg:text-4xl mt-4 max-w-3xl">The rise of national intelligence reserves.</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed text-sm">
            Nations are realizing that renting intelligence from foreign hyperscalers is a major vulnerability. Middle Eastern states like the UAE are building massive state-backed compute hubs and models (Falcon), while Europe is funding regional supercomputers (like LUMI in Finland and JUPITER in Germany) to maintain digital sovereignty. In the Silicon Epoch, compute reserves are the new oil reserves.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
