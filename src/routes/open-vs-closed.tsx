import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/open-vs-closed")({
  head: () => ({
    meta: [
      { title: "Open Weights vs Closed APIs — Silicon Epoch" },
      { name: "description", content: "The philosophical and economic battle between closed model APIs and downloadable open weights, with side-by-side model comparisons." },
      { property: "og:title", content: "Open Weights vs Closed APIs — Silicon Epoch" },
    ],
  }),
  component: OpenVsClosed,
});

const COMPARISON = [
  {
    feature: "Weights Accessibility",
    closed: "Restricted behind proprietary APIs. Model weights reside entirely on the lab's secure servers.",
    open: "Downloadable weights under open-source (Apache 2.0) or modified commercial licenses (e.g., MIT, Llama/Qwen licenses).",
    winner: "Open (for developers and local hosting)"
  },
  {
    feature: "Safety & Misuse Control",
    closed: "Active server-side filtering and safety classifiers (e.g., Claude Fable 5's router to Opus 4.8 on bio-threat detection). Labs can instantly revoke access.",
    open: "Relies on downstream developer guardrails. Once released, weights cannot be recalled or safety filters easily bypassed / fine-tuned out.",
    winner: "Closed (for biosecurity and malicious actor mitigation)"
  },
  {
    feature: "Economics & Inference Cost",
    closed: "Premium token-based pricing margins. GPT-5.5 at ~$5/$30 per 1M tokens. Subject to provider price floors and lock-in.",
    open: "Self-hosted hardware costs. Proved by DeepSeek V4-Pro to run at ~1/6 to 1/10 of closed model pricing at scale ($0.14/$0.28 per 1M tokens).",
    winner: "Open (for high-volume agent loops)"
  },
  {
    feature: "Customizability",
    closed: "Limited to hosted fine-tuning APIs and system prompts. Internal states and activations are opaque.",
    open: "Full model customization. Developers can run parameter merges, low-rank adaptations (LoRA), and full parameter fine-tuning on custom data.",
    winner: "Open"
  },
  {
    feature: "Sovereignty & Security",
    closed: "API queries must route to US hyperscaler datacenters, raising compliance hurdles for European defense, healthcare, and finance.",
    open: "Allows complete air-gapped deployment in private local clouds, meeting strict national security and medical sovereignty laws.",
    winner: "Open (for regulated sectors)"
  }
];

const MODELS_SIDE = [
  {
    category: "Reasoning Flagships",
    closedModel: "Claude Fable 5 / GPT-5.5",
    closedStats: "SWE-bench Pro: 80.0% · GPQA: 94.0 · ARC-AGI-2: 87.5%",
    openModel: "DeepSeek V4-Pro / Qwen3.7-Max",
    openStats: "SWE-bench Pro: 76.2% · GPQA: 92.4 · ARC-AGI-2: 77.1%"
  },
  {
    category: "Cost & API Rates",
    closedModel: "OpenAI GPT-5.5",
    closedStats: "$5.00 Input / $15.00 Output per 1M tokens",
    openModel: "DeepSeek V4-Pro API",
    openStats: "$0.14 Input / $0.28 Output per 1M tokens"
  },
  {
    category: "Agent Time Horizons",
    closedModel: "Gemini 3.5 Flash / Managed Agents",
    closedStats: "Highly reliable sub-agent routing; fast execution loops.",
    openModel: "Qwen3.7-Max / Moonshot Swarms",
    openStats: "Built-in support for 35-hour autonomous runs & 300 sub-agents."
  },
  {
    category: "Context Windows",
    closedModel: "Gemini 3.5 Flash / Pro",
    closedStats: "1M to 2M tokens (lossless retrieval / needle-in-a-haystack).",
    openModel: "Moonshot Kimi K2.6 / MiniMax M3",
    openStats: "256K to 1M tokens (Sparse Attention / open weights)."
  }
];

function OpenVsClosed() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 11 · The weights debate · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl">
          Who controls the <em className="italic text-ember">weights</em> controls the future.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          The central ideological fault-line of the AI revolution is the weights debate: should frontier model weights be locked in secure vaults behind APIs, or should they be freely downloadable to run on any computer? Here is the side-by-side reality.
        </p>
      </section>

      {/* Side-by-side Table */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="eyebrow mb-6">Structural Comparison</div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left border-collapse">
            <thead className="bg-cream">
              <tr className="text-sm">
                <th className="p-5 font-semibold border-b border-border w-1/4">Feature</th>
                <th className="p-5 font-semibold border-b border-border w-3/8 text-ink/85">Closed API (OpenAI, Anthropic, Gemini)</th>
                <th className="p-5 font-semibold border-b border-border w-3/8 text-ember/85">Open Weights (DeepSeek, Qwen, Mistral)</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-border">
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="hover:bg-cream/10 transition-colors">
                  <td className="p-5 font-medium border-r border-border">{row.feature}</td>
                  <td className="p-5 text-foreground/75 leading-relaxed border-r border-border">{row.closed}</td>
                  <td className="p-5 text-foreground/75 leading-relaxed">{row.open}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Side-by-Side Model Capabilities */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="eyebrow mb-6">Model Capabilities (June 2026)</div>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {MODELS_SIDE.map((m) => (
            <div key={m.category} className="bg-background p-10 flex flex-col justify-between">
              <div>
                <div className="eyebrow text-xs text-foreground/50 mb-3">{m.category}</div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-r border-border/50 pr-4">
                    <div className="text-sm font-semibold text-foreground/90">Closed API</div>
                    <div className="font-display text-xl text-ink mt-1">{m.closedModel}</div>
                    <div className="text-xs text-foreground/70 mt-2 font-mono">{m.closedStats}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ember/90">Open Weights</div>
                    <div className="font-display text-xl text-ember mt-1">{m.openModel}</div>
                    <div className="text-xs text-foreground/70 mt-2 font-mono">{m.openStats}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meta's Pivot */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-10 items-center bg-cream/35 border border-border rounded-3xl p-10 lg:p-14">
          <div className="md:col-span-7">
            <div className="eyebrow">The 2026 Strategic Shift</div>
            <h3 className="display text-4xl mt-3">Meta's Pivot to Muse Spark</h3>
            <p className="mt-4 text-foreground/75 leading-relaxed text-sm">
              For years, Meta was the undisputed champion of open weights, releasing the Llama series to commoditize the proprietary software moats of OpenAI and Google. However, in April 2026, Meta shocked the ecosystem by launching **Muse Spark**, a closed-weights, proprietary model series focused on "personal superintelligence."
            </p>
            <p className="mt-3 text-foreground/75 leading-relaxed text-sm">
              This pivot was driven by massive capital expenditures (exceeding $135B in 2026) and the commercial pressure to directly capture user value on WhatsApp and Instagram, demonstrating that at the absolute frontier of AGI, the economics favor closed gates.
            </p>
          </div>
          <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-border/70 pt-6 md:pt-0 md:pl-10">
            <h4 className="font-mono text-xs text-foreground/50">The Economic Paradox</h4>
            <p className="mt-3 text-xs text-foreground/75 leading-relaxed">
              Open weights transfer compute and hosting costs to developers, making it popular for high-volume agent loops. However, training frontier models requires hundreds of millions of dollars per run, creating a structural barrier for non-hyperscalers.
            </p>
            <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
              DeepSeek R1 and V4 proved that Chinese labs can break this barrier through pure algorithmic efficiency, offering weights that match US API models for pennies.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
