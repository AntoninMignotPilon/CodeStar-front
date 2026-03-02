import type { Course } from "@/types/course"

/**
 * Static course catalogue.
 * Each entry maps to a CourseCard on the homepage.
 * Add or remove entries here to update the grid — no other file needs touching.
 */
export const COURSES: Course[] = [
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    description:
      "Master variables, control flow, functions, and data structures in Python — the most beginner-friendly language in the world.",
    difficulty: "Beginner",
    topic: "Python",
    accentColor: "bg-blue-500",
    lessonCount: 14,
    progress: 0,
    href: "/courses/python-fundamentals",
  },
  {
    id: "algorithms-data-structures",
    title: "Algorithms & Data Structures",
    description:
      "Understand Big-O notation, sorting, searching, trees, graphs, and dynamic programming — the backbone of every technical interview.",
    difficulty: "Intermediate",
    topic: "Algorithms",
    accentColor: "bg-violet-500",
    lessonCount: 22,
    progress: 0,
    href: "/courses/algorithms-data-structures",
  },
  {
    id: "web-development-basics",
    title: "Web Development Basics",
    description:
      "Go from zero to a deployed web page using HTML, CSS, and JavaScript. Learn the building blocks that power every website.",
    difficulty: "Beginner",
    topic: "Web",
    accentColor: "bg-orange-500",
    lessonCount: 18,
    progress: 0,
    href: "/courses/web-development-basics",
  },
  {
    id: "intro-to-databases",
    title: "Introduction to Databases",
    description:
      "Learn relational database design, SQL queries, indexing, and how to integrate a database into a real application.",
    difficulty: "Intermediate",
    topic: "Database",
    accentColor: "bg-emerald-500",
    lessonCount: 16,
    progress: 0,
    href: "/courses/intro-to-databases",
  },
  {
    id: "networking-fundamentals",
    title: "Networking Fundamentals",
    description:
      "Explore how the internet works — IP addressing, DNS, HTTP, TCP/IP, and the protocols that connect billions of devices.",
    difficulty: "Beginner",
    topic: "Networking",
    accentColor: "bg-sky-500",
    lessonCount: 12,
    progress: 0,
    href: "/courses/networking-fundamentals",
  },
  {
    id: "system-design",
    title: "System Design",
    description:
      "Learn to design scalable, reliable distributed systems — load balancers, caching strategies, microservices, and more.",
    difficulty: "Advanced",
    topic: "System Design",
    accentColor: "bg-rose-500",
    lessonCount: 20,
    progress: 0,
    href: "/courses/system-design",
  },
]
