import type { AITool } from "@/components/AIToolCard";

export const aiTools: AITool[] = [
  {
    id: "t-ux-pilot",
    name: "UX Pilot",
    category: "Content Generation",
    description:
      "Perfect for creating educational content, course outlines, and interactive learning materials.",
    suggestedPrompt:
      "Create a comprehensive course outline for beginner data visualization, including modules, outcomes, and assessments.",
    affiliateUrl: "https://example.com/aff/ux-pilot",
  },
  {
    id: "t-tableau",
    name: "Tableau",
    category: "Data Visualization",
    description:
      "Create interactive dashboards and visualizations for learning analytics and progress tracking.",
    suggestedPrompt:
      "Build student performance dashboards with real-time data.",
    affiliateUrl: "https://example.com/aff/tableau",
  },
  {
    id: "t-loom",
    name: "Loom",
    category: "Video Creation",
    description:
      "Record and share educational videos, tutorials, and course content with ease.",
    suggestedPrompt: "Create engaging video lessons and tutorials.",
    affiliateUrl: "https://example.com/aff/loom",
  },
  {
    id: "t-notion-ai",
    name: "Notion AI",
    category: "Content Organization",
    description:
      "Organize course materials, create knowledge bases, and manage educational content efficiently.",
    suggestedPrompt: "Build comprehensive course documentation and wikis.",
    affiliateUrl: "https://example.com/aff/notion-ai",
  },
];
