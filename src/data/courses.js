import { Database, Code2, Binary, Globe } from "lucide-react";

export const courses = [
  {
    id: "sap",
    number: "01",
    name: "SAP",
    icon: Database,
    description:
      "Explore enterprise resource planning concepts and understand how SAP technologies support business operations.",
    topics: [
      "SAP Fundamentals",
      "Enterprise Applications",
      "Business Processes",
      "SAP Modules",
    ],
  },
  {
    id: "python",
    number: "02",
    name: "Python Programming",
    icon: Code2,
    description:
      "Develop programming fundamentals and learn to solve real-world problems using Python.",
    topics: [
      "Python Fundamentals",
      "Data Types and Functions",
      "Object-Oriented Programming",
      "File Handling",
    ],
  },
  {
    id: "cpp",
    number: "03",
    name: "C++ Programming",
    icon: Binary,
    description:
      "Understand programming fundamentals, object-oriented concepts and efficient problem-solving.",
    topics: [
      "C++ Fundamentals",
      "OOP Concepts",
      "Data Structures",
      "Problem Solving",
    ],
  },
  {
    id: "web",
    number: "04",
    name: "Web Technologies",
    icon: Globe,
    description:
      "Learn how modern websites and interactive web applications are designed and developed.",
    topics: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
];
