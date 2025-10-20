/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Solution data model used by the Use Case Finder.
 */
export interface Solution {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  tags: string[];
  rating: number; // 0-5
  popularity: number; // arbitrary score or likes
  dateAdded: string; // ISO timestamp
  link?: string;
}

/**
 * Plain listing response. Primarily for diagnostics and simple UIs.
 */
export interface SolutionListResponse {
  solutions: Solution[];
  total: number;
}

/**
 * Search request sent from client to server.
 */
export interface SearchRequest {
  query: string;
  categories?: string[];
  limit?: number;
  offset?: number;
}

/**
 * Search result item with scoring and matched tags for transparency.
 */
export interface ScoredSolution extends Solution {
  score: number;
  matchedTags: string[];
}

/**
 * Search response with extracted tags and ranked results.
 */
export interface SearchResponse {
  query: string;
  extractedTags: string[];
  results: ScoredSolution[];
  total: number;
}
