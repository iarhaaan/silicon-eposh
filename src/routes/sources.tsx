import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { useState } from "react";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Sources & Bibliography — Silicon Epoch" },
      { name: "description", content: "Transparency bibliography of the primary source publications, research papers, interviews, and statistical reports used on Silicon Epoch." },
      { property: "og:title", content: "Sources & Bibliography — Silicon Epoch" },
    ],
  }),
  component: Sources,
});

type SourceItem = {
  title: string;
  author: string;
  date: string;
  category: "lab" | "paper" | "interview" | "report";
  summary: string;
  url: string;
};

const SOURCES_DATA: SourceItem[] = [
  // LAB BLOGS & RELEASES
  {
    title: "Anthropic News & Research Releases",
    author: "Anthropic Safety & Research Team",
    date: "June 2026",
    category: "lab",
    summary: "Anthropic's official updates portal. Houses release announcements for Claude 3.5 Sonnet, Responsible Scaling Policies (RSP), and research into mechanistic interpretability.",
    url: "https://www.anthropic.com/news"
  },
  {
    title: "OpenAI o1 and Frontier Model Research Releases",
    author: "OpenAI Research Team",
    date: "September 2024 (Iterated 2025/2026)",
    category: "lab",
    summary: "OpenAI's introduction of System 2 thinking models, detailing how reinforcement learning scales performance during inference.",
    url: "https://openai.com/index/introducing-openai-o1-preview/"
  },
  {
    title: "DeepSeek Model Repositories & Research Index",
    author: "DeepSeek-AI Open Source Group",
    date: "April 2026",
    category: "lab",
    summary: "DeepSeek's official GitHub repository and research page, detailing their low-cost, open-weights Mixture-of-Experts (MoE) architectures.",
    url: "https://github.com/deepseek-ai/DeepSeek-V3"
  },
  {
    title: "Google DeepMind Gemini Technologies Hub",
    author: "Google DeepMind Team",
    date: "May 2026",
    category: "lab",
    summary: "Google DeepMind's official landing page explaining their multimodal Gemini family (Pro, Flash, and Nano) and real-time world simulator research (Genie).",
    url: "https://deepmind.google/technologies/gemini/"
  },
  {
    title: "Meta Llama Open Weights Portal",
    author: "Meta AI",
    date: "July 2024 (Iterated 2025/2026)",
    category: "lab",
    summary: "Meta's open-weights resource center, providing model downloads, documentation, and safety guardrails for the Llama herd.",
    url: "https://ai.meta.com/llama/"
  },
  {
    title: "xAI Research and Grok Blog",
    author: "xAI Team",
    date: "April 2026",
    category: "lab",
    summary: "xAI's developer portal detailing Grok's integration with real-time X feed data, visual models, and Memphis cluster engineering.",
    url: "https://x.ai"
  },

  // RESEARCH PAPERS
  {
    title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
    author: "DeepSeek-AI Team",
    date: "January 2025",
    category: "paper",
    summary: "The landmark academic paper detailing training reasoning models with pure Reinforcement Learning, demonstrating SWE-bench and AIME breakthroughs at minimal training cost.",
    url: "https://arxiv.org/abs/2501.12948"
  },
  {
    title: "Google DeepMind: AI Solves Olympiad-level Mathematical Problems",
    author: "Google DeepMind Team",
    date: "July 2024 (Iterated 2025/2026)",
    category: "paper",
    summary: "Details the achievements of AlphaProof and AlphaGeometry 2 in solving Silver-medal level International Mathematical Olympiad (IMO) problems.",
    url: "https://deepmind.google/discover/blog/ai-solves-imo-problems/"
  },
  {
    title: "AlphaFold 3: Structure Predictions of Biological Assemblies",
    author: "John Jumper, Demis Hassabis, et al. (Google DeepMind)",
    date: "May 2024",
    category: "paper",
    summary: "The Nature publication detailing AlphaFold 3, which maps proteins, DNA, RNA, and chemical ligands in 3D. Awarded the 2024 Nobel Prize in Chemistry.",
    url: "https://www.nature.com/articles/s41586-024-07487-w"
  },
  {
    title: "Attention Is All You Need (Transformer Architecture)",
    author: "Ashish Vaswani et al. (Google Brain)",
    date: "June 2017",
    category: "paper",
    summary: "The foundational academic paper introducing self-attention mechanisms and the Transformer model that underpins the entire modern AI ecosystem.",
    url: "https://arxiv.org/abs/1706.03762"
  },
  {
    title: "A Path Towards Autonomous Machine Intelligence",
    author: "Yann LeCun (NYU & Meta FAIR)",
    date: "June 2022",
    category: "paper",
    summary: "LeCun's foundational position paper detailing Joint-Embedding Predictive Architectures (JEPA) as an alternative to autoregressive generative LLMs.",
    url: "https://arxiv.org/abs/2206.08853"
  },

  // INTERVIEWS & PODCASTS
  {
    title: "Dario Amodei (CEO of Anthropic) on dwarkesh.patel",
    author: "Dwarkesh Patel",
    date: "August 2023 (Followed up 2025/2026)",
    category: "interview",
    summary: "A comprehensive interview discussing scaling laws, biosecurity evaluations, alignment research, and the arrival timeline of human-level AI.",
    url: "https://www.dwarkeshpatel.com/p/dario-amodei"
  },
  {
    title: "Demis Hassabis (CEO of DeepMind) on dwarkesh.patel",
    author: "Dwarkesh Patel",
    date: "February 2024",
    category: "interview",
    summary: "DeepMind's CEO discussing AGI timelines, structural biology breakthroughs, room-temperature superconductivity searches, and the future of science.",
    url: "https://www.dwarkeshpatel.com/p/demis-hassabis"
  },

  // DATA REPORTS
  {
    title: "The Stanford HAI AI Index Report Hub",
    author: "Stanford Institute for Human-Centered AI",
    date: "April 2026",
    category: "report",
    summary: "The official archive of Stanford's annual AI Index, tracking global AI training costs, compute capital, geopolitical dynamics, and job markets.",
    url: "https://aiindex.stanford.edu/report/"
  },
  {
    title: "McKinsey State of AI & Generative AI Insights",
    author: "McKinsey & Company",
    date: "November 2025",
    category: "report",
    summary: "Corporate index charting business adoption rates, structural changes, and value creation metrics for generative AI across global enterprises.",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
  },
  {
    title: "Stack Overflow Developer Survey Hub",
    author: "Stack Overflow",
    date: "2024 (Iterated 2025/2026)",
    category: "report",
    summary: "Developer survey tracking the daily adoption, trust levels, and tool configurations of AI coding assistants (GitHub Copilot, ChatGPT, Cursor).",
    url: "https://survey.stackoverflow.co/"
  },
  {
    title: "World Economic Forum Future of Jobs Report",
    author: "World Economic Forum (WEF)",
    date: "May 2023 (Iterated 2025/2026)",
    category: "report",
    summary: "Global economic forecast detailing labor dislocations, emerging cognitive worker demands, and structural job creation sparked by AI.",
    url: "https://www.weforum.org/publications/the-future-of-jobs-report-2023/"
  }
];

function Sources() {
  const [filter, setFilter] = useState<"all" | "lab" | "paper" | "interview" | "report">("all");

  const filteredSources = filter === "all" 
    ? SOURCES_DATA 
    : SOURCES_DATA.filter(s => s.category === filter);

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <div className="eyebrow">Transparency bibliography · June 2026</div>
        <h1 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] max-w-5xl">
          Grounded in primary <em className="italic text-ember">research</em> and raw data.
        </h1>
        <p className="mt-8 max-w-3xl text-xl text-foreground/75 leading-relaxed">
          Every statistic, timeline, quote, and technical detail on **Silicon Epoch** is pulled from real-world documents. Below is our transparency bibliography.
        </p>
      </section>

      {/* Filter Badges */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-8 flex flex-wrap gap-2">
        {(["all", "lab", "paper", "interview", "report"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-xs font-mono tracking-wider uppercase transition-colors border ${
              filter === cat
                ? "bg-ink text-paper border-ink"
                : "border-border hover:bg-cream text-foreground/80"
            }`}
          >
            {cat === "all" ? "All Sources" : cat === "lab" ? "Lab Blogs" : cat === "paper" ? "Academic Papers" : cat === "interview" ? "Interviews & Talks" : "Reports & Data"}
          </button>
        ))}
      </section>

      {/* List of Sources */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSources.map((source) => (
            <article key={source.title} className="rounded-2xl border border-border p-8 bg-card hover:border-ember transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-ember border border-ember/20 rounded px-2 py-0.5">
                    {source.category === "lab" ? "Lab Blog" : source.category === "paper" ? "Research Paper" : source.category === "interview" ? "Interview" : "Report"}
                  </span>
                  <span className="font-mono text-xs text-foreground/50">{source.date}</span>
                </div>
                <h3 className="font-display text-2xl mt-4 leading-tight">{source.title}</h3>
                <p className="text-xs text-foreground/60 mt-1 font-medium">Author/Publisher: {source.author}</p>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{source.summary}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-ember hover:underline"
                >
                  Visit Primary Source Document →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
