import { ExternalLink } from "lucide-react";

export type AITool = {
  id: string;
  name: string;
  category: string;
  description: string;
  suggestedPrompt: string;
  affiliateUrl: string;
};

export function AIToolCard({ tool }: { tool: AITool }) {
  return (
    <article className="flex flex-col rounded-xl border border-[#003057]/15 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#003057]/70">{tool.category}</div>
      <h3 className="mb-1 text-lg font-extrabold text-[#003057]">{tool.name}</h3>
      <p className="mb-3 text-sm text-[#003057]/80">{tool.description}</p>
      <div className="mb-4 rounded-md bg-[#003057]/5 p-3 text-sm text-[#003057]">
        <span className="font-semibold">Suggested Prompt: </span>
        <span className="italic">{tool.suggestedPrompt}</span>
      </div>
      <a
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-md bg-[#B3A369] px-4 py-2 text-sm font-semibold text-[#003057] shadow-sm transition-colors hover:bg-[#a4945c]"
      >
        Use Tool
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </article>
  );
}
