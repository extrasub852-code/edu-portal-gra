import { useEffect, useState } from "react";
import type { Course } from "@/data/courses";
import { courses as seed } from "@/data/courses";

export function useCourses() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    // simulate network
    const t = setTimeout(() => {
      if (!mounted) return;
      setData(seed);
      setLoading(false);
    }, 500);

    return () => {
      mounted = false;
      clearTimeout(t);
    };
  }, []);

  return { loading, data, error } as const;
}
