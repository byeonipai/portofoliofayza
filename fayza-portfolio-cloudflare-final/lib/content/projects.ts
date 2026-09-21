import type { Project } from "./types"

/**
 * To add a project: copy an existing object, give it a unique `slug`, set
 * `featured` to true (large showcase) or false (Other Projects grid), and drop
 * the images into /public/images/projects/. No layout changes required.
 */
export const projects: Project[] = [
{
  slug: "dental-senyum-clinic",
  title: "Dental Senyum Clinic Information System",
  summary:
    "A system analysis case study completed as part of the BNSP System Analyst competency assessment, covering requirements analysis, software specification, system design, UI/UX design, validation, and user acceptance planning.",
  role: "System Analyst",
  tools: ["Requirement Analysis", "UML", "Draw.io", "Figma", "Documentation"],
  categories: ["System Analysis", "UI/UX", "Case Study"],
  thumbnail: "/images/projects/dental-senyum1.png",
  featured: true,
  detail: {
    overview:
      "A system analysis case study for Dental Senyum Clinic completed as part of the BNSP System Analyst competency assessment. The project covered the analysis and design process from identifying software requirements to designing system components, user interfaces, and user experience.",

    background:
      "The assessment was based on a provided clinic case study. The task focused on analyzing business and user needs, organizing software requirements, designing the proposed system, and preparing supporting system analysis documentation.",

    objectives: [
      "Identify software requirement sources and appropriate elicitation techniques",
      "Analyze, classify, and document software requirements",
      "Prepare software requirement specifications",
      "Design software structure and system components",
      "Design user interface and user experience",
      "Validate requirements and prepare user acceptance testing scenarios",
    ],

    contribution: [
      "Analyzed the case study and interview findings to identify system requirements",
      "Classified and structured functional and supporting requirements",
      "Prepared software requirement and system analysis documentation",
      "Created system models and software design artifacts",
      "Designed UI/UX concepts based on identified user needs",
      "Prepared requirement validation and user acceptance testing scenarios",
    ],

    process: [
      "Requirement source identification",
      "Requirement elicitation and analysis",
      "Requirement classification and specification",
      "Requirement review and validation",
      "Software structure and component design",
      "UI/UX design",
      "User acceptance testing preparation",
      "Final competency assessment",
    ],

    features: [
      "Software requirement specification",
      "System and software design documentation",
      "UML and workflow modeling",
      "UI/UX design",
      "Requirement validation",
      "User acceptance testing scenarios",
    ],

    learnings: [
      "Structuring business and user needs into clear software requirements",
      "Connecting requirement analysis with system and interface design",
      "Validating requirements before implementation",
      "Preparing professional system analysis documentation",
    ],

    gallery: [
      "/images/projects/dental-senyum1.png",
      "/images/projects/dental-senyum2.png",
    ],
  },
},

{
  slug: "combie-coffee",
  title: "Combie Coffee Information System",
  summary:
    "A team-based information systems project for Combie Coffee, developed from direct stakeholder observation and requirement analysis through system documentation, UI/UX design, implementation planning, and final handover.",
  role: "System Design & UI/UX Contributor",
  tools: ["UML", "Figma", "Draw.io", "Database Design", "SRS", "SDD"],
  categories: ["System Analysis", "System Design", "Database", "UI/UX"],
  thumbnail: "/images/projects/combie-coffee1.png",
  featured: true,

  detail: {
    overview:
      "A campus information systems project developed for Combie Coffee. The team worked directly with the business to understand its operations, identify system requirements, and design a website-based information system supported by structured project and system documentation.",

    background:
      "The project began with understanding the company profile and existing operational processes at Combie Coffee. Based on the findings, the team identified system needs and prepared a proposed information system to support the business.",

    objectives: [
      "Understand the business profile and existing operational processes",
      "Identify business and system requirements",
      "Prepare structured project and software documentation",
      "Design the proposed system architecture and database",
      "Create an interface design aligned with user needs",
      "Prepare an implementation plan and complete project handover",
    ],

    contribution: [
      "Collaborated with the team in requirement analysis and project documentation",
      "Contributed to the Project Charter and company profile analysis",
      "Participated in preparing the Software Requirements Specification (SRS)",
      "Focused on Software Design Description (SDD) and system design documentation",
      "Designed UML diagrams and supporting system models",
      "Contributed to database structure design",
      "Designed the UI/UX for the proposed web application",
      "Participated in implementation planning and final project handover documentation",
    ],

    process: [
      "Company profile and stakeholder analysis",
      "Project Charter preparation",
      "Requirement identification and documentation",
      "Software Requirements Specification (SRS)",
      "Software Design Description (SDD)",
      "UML and database design",
      "UI/UX design",
      "Implementation planning",
      "System review and final handover",
    ],

    features: [
      "Structured project documentation",
      "Software requirements specification",
      "Software design documentation",
      "UML system models",
      "Database design",
      "UI/UX design",
      "Implementation plan",
      "Formal project handover documentation",
    ],

    learnings: [
      "Working with a real business stakeholder",
      "Translating business processes into structured system requirements",
      "Preparing SRS and SDD documentation collaboratively",
      "Connecting system design, database design, and interface design",
      "Understanding the information system project lifecycle through final handover",
    ],

    gallery: [
      "/images/projects/combie-coffee1.png",
      "/images/projects/combie-coffee2.png",
      "/images/projects/combie-coffee3.jpg",
    ],
  },
},
  
{
  slug: "explore-jakarta",
  title: "Explore Jakarta",
  summary:
    "A team capstone project that developed a tourism destination recommendation website for Jakarta with machine learning integration. My contribution focused on UI/UX design, frontend implementation, interface refinement, and team collaboration throughout the development process.",
  role: "UI/UX Designer & Frontend Contributor",
  tools: ["React", "Vite", "Tailwind CSS", "Figma", "Git", "GitHub"],
  categories: ["UI/UX", "Frontend", "Team Project"],
  thumbnail: "/images/projects/explore-jakarta1.png",
  featured: true,

  detail: {
    overview:
      "Explore Jakarta is a team-based tourism recommendation website designed to help users discover destinations that better match their interests, visit preferences, and travel context. The system combines a web interface with a machine learning recommendation component.",

    background:
      "The project started with team brainstorming to identify a relevant problem. The team selected tourism destination recommendation in Jakarta as the main topic, focusing on the difficulty users may face when comparing destinations, identifying suitable places, and planning trips efficiently.",

    objectives: [
      "Develop a tourism recommendation website for Jakarta",
      "Design an interface that makes destination discovery easier",
      "Integrate machine learning recommendations into the web experience",
      "Build a responsive frontend based on the agreed UI/UX design",
      "Collaborate through a structured Git and GitHub workflow",
    ],

    contribution: [
      "Participated in early project brainstorming and planning",
      "Contributed to UI/UX design using Figma",
      "Worked with the frontend team to refine interfaces based on the design",
      "Contributed to frontend implementation using the project frontend stack",
      "Used GitHub branches to collaborate with other team members",
      "Participated in discussions during machine learning integration",
      "Supported interface adjustments so recommendation results could be presented clearly",
      "Participated in project testing, documentation, evaluation, and final presentation preparation",
    ],

    process: [
      "Idea brainstorming and problem definition",
      "Project planning",
      "UI/UX design in Figma",
      "Frontend project setup using Vite and Tailwind CSS",
      "Collaborative development using GitHub branches",
      "Machine learning integration",
      "Interface refinement and functional testing",
      "Documentation and final presentation",
    ],

    features: [
      "Tourism destination discovery",
      "Personalized recommendation interface",
      "Destination information and images",
      "Location-related destination information",
      "Responsive web interface",
      "Machine learning recommendation integration",
    ],

    learnings: [
      "Working collaboratively in a multi-role development team",
      "Translating Figma designs into frontend interfaces",
      "Using Git branches for collaborative development",
      "Understanding how machine learning outputs are integrated into a web interface",
      "Participating in an end-to-end capstone development process",
    ],

    gallery: [
      "/images/projects/explore-jakarta1.png",
      "/images/projects/explore-jakarta2.png",
      "/images/projects/explore-jakarta3.png",
    ],
  },
},
  
{
  slug: "java-island-tourism",
  title: "Java Island Tourism Destination Recommendation System",
  summary:
    "An undergraduate thesis project independently developed from data preparation and recommendation modeling to system design, implementation, testing, and deployment using Content-Based Filtering and Context-Aware Re-ranking.",
  role: "Researcher & System Developer",
  tools: [
    "Python",
    "Streamlit",
    "Pandas",
    "Scikit-learn",
    "TF-IDF",
    "Cosine Similarity",
    "Haversine",
    "GitHub"
  ],
  categories: [
    "Thesis",
    "System Development",
    "Recommendation System",
    "Machine Learning"
  ],
  thumbnail: "/images/projects/java-island1.png",
  featured: true,
  links: [
    {
      label: "Live Application",
      href: "https://rekomendasiwisatajawabyeonipai.streamlit.app/",
    },
  ],

  detail: {
    overview:
      "An undergraduate thesis project focused on developing a tourism destination recommendation system for Java Island using Content-Based Filtering and Context-Aware Re-ranking. The project was independently developed from research and data preparation through system design, implementation, testing, and deployment.",

    background:
      "Users searching for tourism destinations often need to consider multiple factors such as interests, budget, ratings, and location. The system was developed to combine content similarity with contextual factors so users could filter and explore tourism destinations based on their preferences.",

    metrics: [
      { value: "839", label: "Final Destinations" },
      { value: "18/18", label: "Black Box Tests Passed" },
      { value: "42", label: "UAT Respondents" },
      { value: "92%", label: "User Acceptance Score" },
    ],

    objectives: [
      "Develop a web-based tourism recommendation system for Java Island",
      "Apply Content-Based Filtering using TF-IDF and Cosine Similarity",
      "Apply Context-Aware Re-ranking using similarity, rating, and distance",
      "Provide preference-based filtering for tourism destinations",
      "Design and implement an interactive web interface",
      "Evaluate both recommendation performance and user acceptance",
    ],

    contribution: [
      "Designed and developed the entire project independently",
      "Collected, integrated, cleaned, and prepared tourism datasets",
      "Developed the Content-Based Filtering model using TF-IDF and Cosine Similarity",
      "Implemented Context-Aware Re-ranking based on content similarity, rating, and geographical distance",
      "Implemented Haversine distance calculation for location-based recommendations",
      "Designed the system workflow, navigation structure, and user interface",
      "Developed the web application using Python and Streamlit",
      "Performed Black Box Testing and User Acceptance Testing",
      "Evaluated recommendation results using Precision@5",
      "Deployed and documented the completed application",
    ],

    process: [
      "Business understanding",
      "Data understanding",
      "Data preparation",
      "Recommendation model development",
      "Context-aware re-ranking design",
      "System requirement analysis",
      "System and interface design",
      "Application implementation",
      "Model evaluation",
      "Black Box Testing",
      "User Acceptance Testing",
      "Deployment and documentation",
    ],

    features: [
      "Tourism recommendations across Java Island",
      "Content-Based Filtering using TF-IDF and Cosine Similarity",
      "Context-Aware Re-ranking using rating and geographical distance",
      "Category, city, keyword, budget, and minimum-rating filters",
      "Reference-destination recommendation",
      "Location and radius-based filtering",
      "Interactive recommendation map",
      "Destination detail pages",
      "Similar-destination recommendations",
      "Recommendation results in card, map, and table views",
      "CSV export for recommendation results",
    ],

    learnings: [
      "Developing an end-to-end recommendation system independently",
      "Integrating data preparation, recommendation modeling, and application development",
      "Evaluating recommendation systems using Precision@5",
      "Designing recommendation logic around multiple user contexts",
      "Conducting functional testing and user acceptance testing",
      "Documenting a complete research and software development process",
    ],

    gallery: [
      "/images/projects/java-island1.png",
      "/images/projects/java-island2.png",
      "/images/projects/java-island3.jpg",
    ],
  },
},
  
  {
    slug: "pwa-story-app",
    title: "PWA Story App",
    summary:
      "A story-sharing web app built with JavaScript using SPA and MVP architecture, featuring authentication, digital maps, push notifications, service workers, IndexedDB, offline access, and the View Transition API.",
    role: "Frontend Developer & UI Designer",
    tools: ["JavaScript", "SPA", "MVP", "Service Worker", "IndexedDB", "Web Push"],
    categories: ["Frontend", "PWA", "SPA"],
    thumbnail: "/images/projects/pwa-story.jpg",
    featured: false,
    detail: {
      overview:
        "A progressive web app for sharing stories, built with a clean SPA + MVP architecture and rich offline capabilities.",
      background:
        "The goal was to explore modern PWA capabilities while delivering a smooth, installable story-sharing experience.",
      objectives: [
        "Build an installable, offline-capable PWA",
        "Apply SPA + MVP architecture cleanly",
        "Implement location, notification, and offline capabilities",
      ],
      contribution: [
        "Designed and implemented the user interface",
        "Developed the application using JavaScript with SPA and MVP architecture",
        "Set up service worker caching and IndexedDB for offline support",
        "Integrated digital maps and push notifications",
        "Implemented the View Transition API for smoother navigation",
      ],
      process: [
        "Architecture setup (SPA + MVP)",
        "Feature implementation and offline support",
        "Testing across network conditions",
      ],
      features: [
        "Authentication and add-story flow",
        "Digital maps and geolocation",
        "Push notifications",
        "Offline access via service worker + IndexedDB",
        "Smooth View Transition API navigation",
      ],
      learnings: [
        "Designing for offline-first experiences",
        "Applying MVP architecture in vanilla JS",
        "Using modern browser platform APIs",
      ],
      gallery: ["/images/projects/pwa-story.jpg"],
    },
  },
  {
    slug: "notes-app",
    title: "Notes App",
    summary:
      "A simple notes web app built with a Single Page Application approach, supporting creating, archiving, and deleting notes with local storage and RESTful API support.",
    role: "Frontend Developer & UI Designer",
    tools: ["JavaScript", "SPA", "REST API", "Web Components"],
    categories: ["Frontend", "SPA"],
    thumbnail: "/images/projects/notes-app.jpg",
    featured: false,
    detail: {
      overview:
        "A lightweight notes application built as a Single Page Application with RESTful API integration.",
      background: "A focused build to practice SPA fundamentals and clean component structure.",
      objectives: ["Build a responsive SPA", "Support core note management", "Integrate a REST API"],
      contribution: ["Implemented the full frontend and UI", "Integrated the notes REST API"],
      process: ["Component and state design", "REST API integration", "UI polish and testing"],
      features: [
        "Create, archive, and delete notes",
        "RESTful API integration",
        "Responsive single-page interface",
      ],
      learnings: ["SPA structure and state handling", "Working with REST APIs on the frontend"],
      gallery: ["/images/projects/notes-app.jpg"],
    },
  },
  {
    slug: "dibimbing-uiux",
    title: "Dibimbing UI/UX Case Study",
    summary:
      "A UI/UX learning project completed during Digital Skill Fair 40.0 by Dibimbing.id, covering user needs, wireframe creation, user flow, and prototype development.",
    role: "UI/UX Participant",
    tools: ["Figma", "Wireframing", "Prototyping", "User Flow"],
    categories: ["UI/UX", "Wireframe", "Prototype"],
    thumbnail: "/images/projects/dibimbing-uiux.png",
    featured: false,
    links: [
      { label: "Figma File", href: "https://lnkd.in/gc5c-DqS" },
      { label: "Prototype", href: "https://lnkd.in/g5y9X3Pc" },
      { label: "Case Study", href: "https://lnkd.in/gHESAV8t" },
    ],
    detail: {
      overview:
        "A guided UI/UX case study exploring the design process end to end, from user needs to an interactive prototype.",
      background: "Completed during Digital Skill Fair 40.0 by Dibimbing.id.",
      objectives: ["Understand user needs", "Create wireframes and user flows", "Build a prototype"],
      contribution: [
        "Analyzed user needs based on the provided case study",
        "Designed wireframes and user flows",
        "Built an interactive prototype in Figma",
      ],
      process: ["User needs analysis", "Wireframing", "User flow mapping", "Prototype development"],
      features: ["Wireframe set", "Documented user flow", "Interactive prototype"],
      learnings: ["Structured design thinking", "Prototyping in Figma"],
      gallery: ["/images/projects/dibimbing-uiux.png"],
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

/** High-level filters shown in the UI. Detailed tags stay on each project card. */
export const projectCategories = [
  "System Analysis",
  "UI/UX",
  "Frontend",
  "Machine Learning",
] as const
