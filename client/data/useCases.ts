import type { UseCase } from "@/components/UseCaseCard";

export const useCases: UseCase[] = [
  {
    id: "uc-1",
    title: "Interactive Learning Dashboard",
    description:
      "A comprehensive solution for tracking student progress with real-time analytics and personalized learning paths.",
    author: "Sarah Chen",
    category: "Education",
    rating: 4.8,
    popularity: 982,
    dateAdded: "2024-07-21T00:00:00.000Z",
  },
  {
    id: "uc-2",
    title: "Automated Content Generation",
    description:
      "AI-powered system for creating educational content with customizable templates and multi-format output.",
    author: "Mike Rodriguez",
    category: "Technology",
    rating: 4.6,
    popularity: 861,
    dateAdded: "2024-08-10T00:00:00.000Z",
  },
  {
    id: "uc-3",
    title: "Course Recommendation Engine",
    description:
      "Smart algorithm that suggests relevant courses based on user behavior, skills, and career goals.",
    author: "Emma Thompson",
    category: "Marketing",
    rating: 4.9,
    popularity: 1102,
    dateAdded: "2025-02-01T00:00:00.000Z",
  },
  {
    id: "uc-4",
    title: "Virtual Classroom Platform",
    description:
      "Complete virtual learning environment with video conferencing, whiteboard, and collaboration tools.",
    author: "David Kim",
    category: "Business",
    rating: 4.7,
    popularity: 745,
    dateAdded: "2024-11-15T00:00:00.000Z",
  },
];

export const categories = [
  "Education",
  "Healthcare",
  "Marketing",
  "Technology",
  "Business",
];
