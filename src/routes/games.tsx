import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "AI in Games — Silicon Epoch" },
      { name: "description", content: "GTA 6 (no gen AI, confirmed), NVIDIA ACE, Inworld Unreal SDK, DeepMind Genie 3, World Labs Marble, Decart DOS 2.0 — the road to neural game worlds." },
      { property: "og:title", content: "AI in Games — Silicon Epoch" },
    ],
  }),
  component: Games,
});

const ACTS = [
  {
    eyebrow: "Act I · GTA 6, the elephant in the room",
    title: "‘Zero’ generative AI — and a billion-dollar handcrafted world.",
    body: "Take-Two CEO Strauss Zelnick confirmed in 2025 that generative AI plays ‘zero part’ in GTA 6's development, calling Rockstar's worlds ‘handcrafted’ down to every building and street. The game launches November 19, 2026 on PS5 and Xbox Series X|S. Take-Two does use AI internally for testing and productivity, but the player-facing world is entirely hand-built.",
    bullets: [
      "Rockstar's NPCs remain scripted simulation — extended, layered, but not LLM-driven.",
      "The signal: even the most expensive game ever made bets on craft over generation — for now.",
      "The counter-signal: every other studio on this page is going the other way.",
    ],
  },
  {
    eyebrow: "Act II · Smarter NPCs",
    title: "Characters that actually think back.",
    body: "Inworld AI's Unreal AI Runtime SDK (Oct 2025) — ‘the first unified interactive AI toolkit for game developers’ — consolidates speech, behaviour, intelligence and animation into a single system. NVIDIA ACE in May 2026 shipped DLSS 4.5 for Unreal Engine 5 alongside multilingual AI character capabilities. Multiple AAA studios are integrating.",
    bullets: [
      "NVIDIA ACE: real-time conversational, animated, voice-enabled NPCs running on consumer GPUs.",
      "Inworld AI: unified runtime for voice + behaviour + memory in Unreal.",
      "Convai, Charisma.ai, Krafton CPC, Ubisoft NEO NPC: research prototypes for fully generative companions across the industry.",
    ],
  },
  {
    eyebrow: "Act III · The worlds generate themselves",
    title: "From engines to world models.",
    body: "Google DeepMind's Genie 3 (Aug 2025) turns a text prompt into a playable 3D environment you can navigate at 720p / 24 FPS, coherently for minutes. It rolled out to Google AI Ultra subscribers via Project Genie in January 2026. World Labs (Fei-Fei Li) launched Marble in November 2025 — turning text, photos, videos and 3D layouts into navigable interactive scenes. Decart AI raised $300M in 2026 for real-time world models (DOS 2.0).",
    bullets: [
      "Genie 3: 720p, 24 FPS, several minutes of coherent interactive world from a single prompt.",
      "World Labs Marble: photos / sketches / videos → explorable persistent 3D spaces. Freemium + paid tiers shipping now.",
      "Decart DOS 2.0: real-time streamed neural game engine, designed to run ‘instantly, continuously, and efficiently’.",
    ],
  },
  {
    eyebrow: "Act IV · The endless game",
    title: "A world that never ends, never repeats, and bends to you.",
    body: "Combine reasoning models, agentic NPCs, neural world generation, on-the-fly art and music, and persistent memory — and you arrive at something the games industry has chased for forty years: a truly infinite, personal, living world.",
    bullets: [
      "Every quest, NPC, building and storyline could be generated on demand.",
      "The game ‘knows you’ — your playstyle, your past saves, your preferences across titles.",
      "Multiplayer worlds become shared dreams, not pre-built maps.",
      "Most researchers expect the first commercial titles built on neural world models within 3–5 years.",
    ],
  },
];

function Games() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Chapter 06 · Play · Updated June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-6xl">
          The next great <em className="italic text-ember">game engine</em> is a neural network.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          NPCs that improvise. Worlds that generate themselves around you. Stories that adapt to every player. Games are about to feel less like software and more like dreams you can step into.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 space-y-px bg-border border border-border rounded-3xl overflow-hidden">
        {ACTS.map((a, i) => (
          <article key={a.eyebrow} className="bg-background p-10 lg:p-14 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs text-foreground/50">{String(i + 1).padStart(2, "0")}</div>
              <div className="eyebrow mt-2">{a.eyebrow}</div>
              <h2 className="display mt-4 text-4xl lg:text-5xl">{a.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-foreground/80 leading-relaxed">{a.body}</p>
              <ul className="mt-6 space-y-3">
                {a.bullets.map((b) => (
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

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-12">
        <div className="eyebrow">The gaming AI landscape · June 2026</div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left">
            <thead className="bg-cream">
              <tr className="text-sm">
                <th className="p-4 font-medium">System</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">What it does</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ["GTA 6 AI NPCs", "No gen AI", "Handcrafted, ships Nov 19, 2026"],
                ["NVIDIA ACE", "Shipping", "Multilingual conversational NPCs for UE5"],
                ["Inworld AI Runtime", "Shipping", "Unified NPC AI SDK for Unreal Engine"],
                ["Google Genie 3", "Available (AI Ultra)", "Text → playable interactive worlds, 720p / 24 FPS"],
                ["Decart DOS 2.0", "Early access · $300M raised", "Real-time continuous world model"],
                ["World Labs Marble", "Launched (freemium)", "Text / photo / video → navigable 3D worlds"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-foreground/70">{row[1]}</td>
                  <td className="p-4 text-foreground/70">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-ink text-paper p-14 grain">
          <div className="grain-overlay" />
          <div className="eyebrow text-paper/60">The endgame</div>
          <h2 className="display text-4xl lg:text-6xl mt-3 max-w-4xl">A world entirely generated in real time, with endless possibilities — yes, it is coming. The only question is when.</h2>
          <p className="mt-6 max-w-3xl text-paper/80 leading-relaxed">Most researchers in the field believe playable, persistent, AI-generated worlds will arrive in commercial form within the next 3–7 years. The Holodeck is no longer a metaphor.</p>
        </div>
      </section>
    </PageShell>
  );
}
