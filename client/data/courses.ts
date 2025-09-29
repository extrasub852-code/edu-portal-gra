export type CourseType = "self" | "live";

export type Course = {
  id: string;
  title: string;
  type: CourseType;
  description: string;
  progress?: number; // 0-100 for self-paced
  lastAccess?: string; // ISO
  instructor?: string;
  nextSession?: string; // ISO for live
  popularity?: number;
  recommended?: boolean;
};

export const courses: Course[] = [
  {
    id: "c-1",
    title: "Modern Data Visualization",
    type: "self",
    description: "Learn charts, dashboards, and storytelling with real datasets.",
    progress: 45,
    lastAccess: "2025-09-20T14:32:00.000Z",
    popularity: 1250,
    recommended: false,
  },
  {
    id: "c-2",
    title: "Intro to Machine Learning (Self-Paced)",
    type: "self",
    description: "Core ML concepts, model training, and evaluation for beginners.",
    progress: 12,
    lastAccess: "2025-09-10T09:15:00.000Z",
    popularity: 2043,
    recommended: true,
  },
  {
    id: "c-3",
    title: "Designing Engaging Course Content",
    type: "self",
    description: "Techniques for creating interactive lessons and assessments.",
    progress: 78,
    lastAccess: "2025-09-22T07:50:00.000Z",
    popularity: 810,
    recommended: true,
  },
  {
    id: "c-4",
    title: "Live: Advanced React Patterns",
    type: "live",
    description: "Instructor-led workshops on advanced React patterns and performance.",
    nextSession: new Date(Date.now() + 1000 * 60 * 60 * 26).toISOString(),
    instructor: "Alex Johnson",
    popularity: 980,
    recommended: false,
  },
  {
    id: "c-5",
    title: "Live: Teaching with Technology",
    type: "live",
    description: "Interactive live sessions focused on using tech in the classroom.",
    nextSession: new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString(),
    instructor: "Priya Singh",
    popularity: 670,
    recommended: false,
  },
  {
    id: "c-6",
    title: "Future: Generative AI for Educators",
    type: "live",
    description: "Upcoming series about using generative AI to create course materials.",
    nextSession: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14).toISOString(),
    instructor: "Dr. Maya Lee",
    popularity: 430,
    recommended: false,
  },
];

export const recommended = courses.filter((c) => c.recommended).slice(0, 6);
