/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION & DATA - TEJAS MARTIN
 * ====================================================================
 * All personal details, achievements, skills, projects, and contact info
 * are centralized in this file.
 */

const profileData = {
  // ------------------------------------------------------------------
  // 1. Personal & Contact Information
  // ------------------------------------------------------------------
  personal: {
    fullName: "Tejas Martin",
    age: 19,
    headline: "Computer Science Student @ Newton School of Technology",
    tagline: "A curious mind, a problem solver, and an aspiring software engineer — constantly learning, exploring, and building.",
    shortBio: "Computer Science student at Newton School of Technology, passionate about technology, mathematics, logical thinking, and problem-solving. Curious by nature and enthusiastic about learning new concepts and exploring ideas.",
    location: "Hyderabad, India",
    statusBadge: "Open to Open-Source Collaboration & Projects",
    avatarUrl: "assets/avatar.svg", // Replace with your photo in the assets folder!

    // Contact details used for direct communication
    email: "tjsmrtn084@gmail.com",
    phoneNumber: "+916268914414",        // Used for direct SMS / iMessage
    whatsappNumber: "+916268914414",      // Digits only with country code
    
    // Default message pre-filled when someone clicks "Text Me"
    defaultTextMessage: "Hi Tejas, I saw your portfolio and would love to connect with you!",

    // Social & Professional Profiles
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "X (Twitter)", url: "https://twitter.com", icon: "twitter" },
      { name: "Email", url: "mailto:tjsmrtn084@gmail.com", icon: "mail" },
    ]
  },

  // ------------------------------------------------------------------
  // 2. Key Highlights / Quick Counters
  // ------------------------------------------------------------------
  stats: [
    { label: "Competitive Programming", value: "ICPC" },
    { label: "National Level", value: "Chess" },
    { label: "Core Foundation", value: "PCM" },
    { label: "Future Aspiration", value: "GSoC" }
  ],

  // ------------------------------------------------------------------
  // 3. About Me Details
  // ------------------------------------------------------------------
  about: {
    title: "About Me",
    subtitle: "A curious mind, a problem solver, and an aspiring software engineer.",
    paragraphs: [
      "I am a 19-year-old Computer Science student at Newton School of Technology, passionate about technology, mathematics, logical thinking, and problem-solving. I come from a strong academic background in Physics, Chemistry, and Mathematics (PCM), which laid the foundation for my analytical mindset.",
      "Curious by nature and enthusiastic about learning new concepts, I love dissecting ideas from first principles and exploring how things work behind the scenes. Whether it's tackling algorithmic problems, writing Python CLI tools, or diving into software development, I enjoy transforming logical ideas into functioning code.",
      "Beyond standard coursework, I am an ICPC Regionalist and a National-level Chess Player. I believe in continuous learning, curiosity, creativity, experimentation, understanding concepts deeply, and improving through challenges."
    ],
    highlights: [
      { 
        icon: "zap", 
        title: "Logical Reasoning & Problem-Solving", 
        desc: "Enjoys mathematical challenges, logical puzzles, number-based programming problems, algorithms, and competitive programming." 
      },
      { 
        icon: "trophy", 
        title: "ICPC Regionalist & National Chess Player", 
        desc: "Applies deep strategic planning, calculated foresight, patience, and composure honed through high-level competitive tournaments." 
      },
      { 
        icon: "code", 
        title: "Open-Source & GSoC Aspirations", 
        desc: "Aspires to participate in Google Summer of Code (GSoC) and actively contribute to impactful, community-driven open-source projects." 
      },
      { 
        icon: "book-open", 
        title: "Emerging Tech & Exploration", 
        desc: "Constantly expanding knowledge in Python, Data Structures & Algorithms, Artificial Intelligence, Machine Learning, and Game Development." 
      }
    ],

    // Personal Philosophy
    philosophy: "Believes in continuous learning, curiosity, creativity, experimentation, understanding concepts deeply, and improving through challenges.",

    // Personal Interests
    interests: [
      "Chess", 
      "Mathematics", 
      "Music", 
      "Gaming", 
      "Technology", 
      "Fictional Universes", 
      "Storytelling", 
      "Creative Exploration"
    ],

    // Short-Term and Long-Term Goals
    goals: {
      shortTerm: [
        "Strengthen Python and Java programming skills",
        "Master Data Structures and Algorithms (DSA)",
        "Build practical projects & command-line tools",
        "Improve Linux workflow and advanced Git/GitHub proficiency",
        "Explore foundational Artificial Intelligence & Machine Learning"
      ],
      longTerm: [
        "Explore advanced AI & Machine Learning applications",
        "Pursue game development and interactive experiences",
        "Contribute actively to open source and participate in GSoC",
        "Design and build meaningful, high-impact software products"
      ]
    }
  },

  // ------------------------------------------------------------------
  // 4. Achievements & Aspirations (Your major spotlight!)
  // ------------------------------------------------------------------
  achievements: [
    {
      id: 1,
      title: "ICPC Regionalist",
      issuer: "International Collegiate Programming Contest",
      date: "Competitive Programming",
      category: "Competitions",
      badge: "Regionalist 🚀",
      description: "Qualified and competed as an ICPC Regionalist, solving rigorous algorithmic, combinatorial, and data structure challenges under strict timed conditions.",
      link: "#"
    },
    {
      id: 2,
      title: "National Chess Player",
      issuer: "National Chess Championship",
      date: "Strategic Sports",
      category: "Chess & Strategy",
      badge: "National Level ♟️",
      description: "Competed at national-level chess tournaments, cultivating sharp tactical foresight, pattern recognition, spatial calculation, and composure under pressure.",
      link: "#"
    },
    {
      id: 3,
      title: "PCM Academic Foundation",
      issuer: "Senior Secondary Education",
      date: "Academic Grounding",
      category: "Academics",
      badge: "Strong Foundation 📐",
      description: "Strong academic background in Physics, Chemistry, and Mathematics (PCM), fostering deep mathematical intuition, logical deduction, and scientific reasoning.",
      link: "#"
    }
  ],

  // ------------------------------------------------------------------
  // 5. Skills & Technologies
  // ------------------------------------------------------------------
  skills: [
    {
      category: "Languages & Programming Fundamentals",
      items: ["Python", "Java", "Programming Fundamentals", "Data Structures & Algorithms (DSA)", "Object-Oriented Programming"]
    },
    {
      category: "Problem Solving & Mathematics",
      items: ["Competitive Programming", "Mathematical Logic", "Number-Based Problems", "Algorithmic Reasoning", "Logical Thinking"]
    },
    {
      category: "Development, Git & Tools",
      items: ["Git & GitHub", "Linux / Bash", "CLI Applications", "VS Code", "Software Development Fundamentals"]
    },
    {
      category: "Interests & Future Explorations",
      items: ["Artificial Intelligence (AI)", "Machine Learning (ML)", "Game Development", "Open-Source Projects", "Creative Storytelling"]
    }
  ],

  // ------------------------------------------------------------------
  // 6. Featured Projects
  // ------------------------------------------------------------------
  projects: [
    {
      id: 1,
      title: "Python CLI Tools & Utilities",
      category: "CLI & Python",
      description: "Developing command-line utilities and scripts in Python, focusing on modular architecture, user interaction, and practical automation.",
      tags: ["Python", "CLI", "Automation", "Git"],
      liveUrl: "",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Mathematical & Algorithmic Problem Solvers",
      category: "Algorithms & Math",
      description: "Curated collection of solutions and analysis for complex mathematical challenges, number-based logic puzzles, and competitive programming problems.",
      tags: ["Python", "DSA", "Algorithms", "Mathematics"],
      liveUrl: "",
      githubUrl: "https://github.com",
      featured: true
    }
  ],

  // ------------------------------------------------------------------
  // 7. Journey & Milestones (Timeline)
  // ------------------------------------------------------------------
  timeline: [
    {
      year: "Present",
      role: "B.Tech in Computer Science & Engineering",
      institution: "Newton School of Technology",
      description: "Pursuing Computer Science and Engineering, focusing on software development fundamentals, algorithms, mathematics, and building practical technology projects."
    },
    {
      year: "Milestone",
      role: "ICPC Regionalist & National Chess Player",
      institution: "Collegiate & National Competitions",
      description: "Competed at national-level chess tournaments and qualified as an ICPC Regionalist, uniting strategic gaming foresight with algorithmic problem-solving."
    },
    {
      year: "Academic Foundation",
      role: "Senior Secondary (PCM)",
      institution: "Academic Education",
      description: "Completed academic education with core focus on Physics, Chemistry, and Mathematics (PCM), cultivating a passion for mathematical reasoning and logical puzzles."
    }
  ]
};

// Expose to window object so other scripts can access it easily
if (typeof window !== "undefined") {
  window.profileData = profileData;
}
