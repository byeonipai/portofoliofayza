import type { Certificate } from "./types"

export const certificates: Certificate[] = [
  {
    id: "designing-software",
    title: "Designing Software",
    issuer: "Universitas Gunadarma",
    year: "2026",
    note:
      "Professional training covering software structure design, software component design, user interface design, and user experience design.",
    category: "Analysis",
    image: "/images/certificates/designing-software.png",
    href: "/certificates/designing-software.pdf",
  },
  {
    id: "analyze-software-requirements",
    title: "Analyze Software Requirements",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Professional training covering requirement sources, elicitation techniques, requirement classification, specification, review, validation, and software requirement documentation.",
    category: "Analysis",
    image: "/images/certificates/analyze-software-requirements.png",
    href: "/certificates/analyze-software-requirements.pdf",
  },
  {
    id: "coding-camp-2025",
    title: "Front-End & Back-End Developer - Distinction Graduate",
    issuer: "Coding Camp powered by DBS Foundation x Dicoding",
    year: "2025",
    note:
      "Completed the Front-End and Back-End Developer learning path with Distinction, covering web development, REST APIs, Git and GitHub, intermediate web development, and a capstone project.",
    category: "Development",
    image: "/images/certificates/coding-camp-2025.png",
    href: "/certificates/coding-camp-2025.pdf",
  },
  {
    id: "intermediate-web-development",
    title: "Intermediate Web Development",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Intermediate web development training covering accessibility, animations, page transitions, digital maps, browser APIs, Progressive Web Apps, and deployment.",
    category: "Development",
    image: "/images/certificates/intermediate-web-development.png",
    href: "/certificates/intermediate-web-development.pdf",
  },
  {
    id: "backend-javascript",
    title: "Back-End Beginner with JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Back-end development training covering Node.js, HTTP communication, RESTful APIs, deployment, and API testing with Postman.",
    category: "Development",
    image: "/images/certificates/backend-javascript.png",
    href: "/certificates/backend-javascript.pdf",
  },
  {
    id: "git-github",
    title: "Git & GitHub Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Version control training covering Git repositories, branches, merging, conflict resolution, collaboration workflows, and GitHub-based development.",
    category: "Development",
    image: "/images/certificates/git-github.png",
    href: "/certificates/git-github.pdf",
  },
  {
    id: "software-developer-fundamentals",
    title: "Software Developer Programming Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Programming fundamentals covering user and technical requirements, application planning, flow diagrams, and basic software modification.",
    category: "Development",
    image: "/images/certificates/software-developer-fundamentals.png",
    href: "/certificates/software-developer-fundamentals.pdf",
  },
  {
    id: "programming-logic",
    title: "Programming Logic 101",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Covered programming logic, algorithms, computational thinking, decomposition, pattern recognition, abstraction, and structured problem solving.",
    category: "Development",
    image: "/images/certificates/programming-logic.png",
    href: "/certificates/programming-logic.pdf",
  },
  {
    id: "sql-server-intermediate",
    title: "SQL Server for Intermediate",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Intermediate database training covering complex queries, security, indexing, optimization, views, stored procedures, backup and recovery, and database administration.",
    category: "Development",
    image: "/images/certificates/sql-server-intermediate.png",
    href: "/certificates/sql-server-intermediate.pdf",
  },
  {
    id: "golang-intermediate",
    title: "Go-Lang for Intermediate",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Intermediate Go programming training covering functions and methods, testing, SQL integration, HTTP requests, and application development.",
    category: "Development",
    image: "/images/certificates/golang-intermediate.png",
    href: "/certificates/golang-intermediate.pdf",
  },
  {
    id: "cloud-computing",
    title: "Fundamentals of Cloud Computing & Networking Administration",
    issuer: "Digital Talent Scholarship x Alibaba Cloud",
    year: "2024",
    note:
      "Completed the cloud computing microcredential with a score of 94.5/100 (Excellent) and passed the ACA Cloud Computing Certification.",
    category: "Cloud",
    image: "/images/certificates/cloud-computing.png",
    href: "/certificates/cloud-computing.pdf",
  },
  {
    id: "scientific-writing-academic-completion",
    title: "Scientific Writing & Academic Completion",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Academic completion associated with the scientific writing project 'Rekomendasi Destinasi Wisata di Jakarta Berbasis Website dengan Integrasi Machine Learning.'",
    category: "Academic",
    image: "/images/certificates/scientific-writing.png",
    href: "/certificates/scientific-writing.pdf",
  },
  {
    id: "thesis-workshop",
    title: "Thesis Proposal & Academic Writing Workshop",
    issuer: "Universitas Gunadarma",
    year: "2026",
    note:
      "Participated in a workshop covering research proposal preparation, undergraduate thesis preparation, and thesis writing guidelines.",
    category: "Academic",
    image: "/images/certificates/thesis-workshop.png",
    href: "/certificates/thesis-workshop.pdf",
  },
]

export const certificateCategories = [
  "Analysis",
  "Development",
  "Cloud",
  "Academic",
] as const
