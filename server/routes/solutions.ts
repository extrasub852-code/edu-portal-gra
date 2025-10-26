import { RequestHandler } from "express";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import type { Solution, SolutionListResponse, SearchResponse, ScoredSolution } from "@shared/api";

let cachedSolutions: Solution[] | null = null;

function getDataFilePath(): string {
  const fromRoot = path.resolve(process.cwd(), "server/data/solutions.json");
  if (fs.existsSync(fromRoot)) return fromRoot;
  const fromDist = path.resolve(process.cwd(), "dist/server/data/solutions.json");
  return fromDist;
}

function loadSolutions(): Solution[] {
  if (cachedSolutions) return cachedSolutions;
  const filePath = getDataFilePath();
  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw) as Solution[];
  cachedSolutions = json;
  return json;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const synonymToTag: Record<string, string> = {
  // Customer support / chatbots
  "support": "customer-service",
  "customer support": "customer-service",
  "helpdesk": "customer-service",
  "chatbot": "chatbot",
  "assistant": "chatbot",
  "agent": "chatbot",
  "faq": "faq",
  "routing": "routing",
  "intent": "intent",
  "nlp": "nlp",
  "natural language": "nlp",

  // Sales outreach
  "email": "email",
  "emails": "email",
  "outreach": "outreach",
  "personalization": "personalization",
  "personalised": "personalization",
  "crm": "crm",
  "copy": "copywriting",
  "copywriting": "copywriting",

  // Summarization / RAG
  "summarize": "summarization",
  "summarization": "summarization",
  "summary": "summarization",
  "pdf": "pdf",
  "document": "pdf",
  "documents": "pdf",
  "chunk": "chunking",
  "chunking": "chunking",
  "embedding": "embedding",
  "embeddings": "embedding",
  "retrieval": "retrieval",
  "rag": "rag",

  // MLOps
  "monitoring": "monitoring",
  "observe": "monitoring",
  "drift": "drift",
  "latency": "latency",
  "quality": "quality",
  "alert": "alerts",
  "alerts": "alerts",
  "lineage": "lineage",
  "mlops": "monitoring",

  // Trust & Safety
  "moderation": "moderation",
  "toxicity": "toxicity",
  "toxic": "toxicity",
  "pii": "pii",
  "policy": "policy",
  "real time": "realtime",
  "real-time": "realtime",
  "realtime": "realtime",
  "screen": "screening",
  "screening": "screening",
  "safety": "policy",
};

function extractTags(query: string, knownTags: Set<string>): string[] {
  const text = normalize(query);
  if (!text) return [];
  const tokens = text.split(" ");
  const bigrams: string[] = [];
  for (let i = 0; i < tokens.length - 1; i++) {
    bigrams.push(tokens[i] + " " + tokens[i + 1]);
  }

  const candidates = new Set<string>();

  for (const t of tokens) {
    if (knownTags.has(t)) candidates.add(t);
    if (synonymToTag[t]) candidates.add(synonymToTag[t]);
  }

  for (const bg of bigrams) {
    if (knownTags.has(bg)) candidates.add(bg);
    if (synonymToTag[bg]) candidates.add(synonymToTag[bg]);
  }

  return Array.from(candidates);
}

function computeScore(s: Solution, extractedTags: string[], query: string): { score: number; matchedTags: string[] } {
  const solutionTags = new Set(s.tags.map((t) => normalize(t)));
  const matchedTags = extractedTags.filter((t) => solutionTags.has(t));
  let score = matchedTags.length;

  const q = normalize(query);
  if (q) {
    const inTitle = s.title.toLowerCase().includes(q) ? 0.7 : 0;
    const inDesc = s.description.toLowerCase().includes(q) ? 0.4 : 0;
    score += inTitle + inDesc;
  }

  if (q && s.category.toLowerCase().includes(q)) {
    score += 0.5;
  }

  return { score, matchedTags };
}

const SearchSchema = z.object({
  query: z.string().default(""),
  categories: z.array(z.string()).optional(),
  limit: z.number().int().min(1).max(100).optional().default(20),
  offset: z.number().int().min(0).optional().default(0),
});

export const listSolutions: RequestHandler = (_req, res) => {
  const solutions = loadSolutions();
  const response: SolutionListResponse = { solutions, total: solutions.length };
  res.status(200).json(response);
};

export const searchSolutions: RequestHandler = (req, res) => {
  const parsed = SearchSchema.safeParse({
    query: req.body?.query ?? (typeof req.query?.q === "string" ? req.query.q : ""),
    categories: (req.body?.categories as string[] | undefined) ?? undefined,
    limit: req.body?.limit ?? (req.query?.limit ? Number(req.query.limit) : undefined),
    offset: req.body?.offset ?? (req.query?.offset ? Number(req.query.offset) : undefined),
  });

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request" });
    return;
  }

  const { query, categories, limit, offset } = parsed.data;
  const solutions = loadSolutions();

  const knownTags = new Set<string>(solutions.flatMap((s) => s.tags.map((t) => normalize(t))));
  Object.values(synonymToTag).forEach((t) => knownTags.add(normalize(t)));

  const extractedTags = extractTags(query, knownTags);

  let candidates = solutions.map((s) => {
    const { score, matchedTags } = computeScore(s, extractedTags, query);
    const withScore: ScoredSolution = { ...s, score, matchedTags };
    return withScore;
  });

  if (categories && categories.length > 0) {
    const set = new Set(categories.map((c) => c.toLowerCase()));
    candidates = candidates.filter((s) => set.has(s.category.toLowerCase()));
  }

  candidates.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.popularity - a.popularity;
  });

  const total = candidates.length;
  const paged = candidates.slice(offset, offset + limit);

  const response: SearchResponse = {
    query,
    extractedTags,
    results: paged,
    total,
  };
  res.status(200).json(response);
};
