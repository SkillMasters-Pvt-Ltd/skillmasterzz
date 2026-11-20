const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mern", label: "MERN Stack" },
  { id: "ai", label: "AI & ML" },
  { id: "design", label: "UI/UX & Graphics" },
  { id: "video", label: "Video & Motion" },
  { id: "college", label: "College Projects" },
];

const projectsData = [
  {
    id: "mern-ecom",
    title: "NexStore – Full Stack E-Commerce Platform",
    category: "mern",
    categories: ["mern", "web"],
    categoryLabel: "MERN Web Application",
    shortDesc: "Complete full-stack online shopping platform with payment gateway integration, real-time inventory management, and an admin dashboard.",
    fullDesc: "NexStore is an enterprise-grade e-commerce web application featuring user authentication, product catalog filtering, Stripe payment gateway, cart state management, and an interactive admin dashboard for order tracking and sales analytics.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe API"],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    metrics: "99.9% Uptime • Sub-second search latency • 100% responsive",
    highlights: [
      "JWT-based role authentication (Admin / Customer)",
      "Secure Stripe checkout with webhook receipt generation",
      "Dynamic filtering by categories, price range, and rating",
      "Comprehensive Admin panel with sales revenue charts"
    ]
  },
  {
    id: "ai-vision-analyzer",
    title: "NeuroVision – AI Medical X-Ray Analyzer",
    category: "ai",
    categories: ["ai", "college"],
    categoryLabel: "AI-Based Application",
    shortDesc: "Deep learning computer vision application for automated anomaly detection in pulmonary chest X-rays with heatmap localization.",
    fullDesc: "An advanced convolutional neural network (CNN) trained to identify anomalies in medical radiology images. Built with PyTorch and wrapped into an interactive Gradio/React dashboard for instant diagnosis preview and Grad-CAM visual heatmaps.",
    tags: ["Python", "PyTorch", "OpenCV", "CNN", "FastAPI", "React"],
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    metrics: "94.8% Validation Accuracy • Real-time Grad-CAM visual explanations",
    highlights: [
      "Custom ResNet-50 transfer learning pipeline",
      "Grad-CAM visual heatmap generation for explainability",
      "Instant PDF diagnostic report export",
      "Complete IEEE final year documentation included"
    ]
  },
  {
    id: "campus-portal",
    title: "EduPulse – Smart Campus Management System",
    category: "college",
    categories: ["college", "web"],
    categoryLabel: "College Project",
    shortDesc: "Comprehensive academic management portal for student attendance, internal assessment grading, timetable scheduling, and fee tracking.",
    fullDesc: "Developed as a final year capstone project, EduPulse streamlines university workflows by bridging students, faculty, and administrative staff with real-time notifications, automated attendance QR codes, and grade sheet generation.",
    tags: ["React", "Firebase", "Node.js", "Tailwind CSS", "Chart.js"],
    gradient: "from-cyan-600 via-teal-600 to-blue-600",
    metrics: "Zero lag queries • Full IEEE documentation & Viva PPT ready",
    highlights: [
      "Automated attendance computation with deficit warning alerts",
      "Role-based access for Faculty, Student, and HOD",
      "Instant PDF Hall Ticket and Marks transcript generation",
      "Includes complete 75-page IEEE report and presentation deck"
    ]
  },
  {
    id: "fintech-uiux",
    title: "NovaPay – Crypto & Banking Mobile App UI/UX",
    category: "design",
    categories: ["design"],
    categoryLabel: "UI/UX Design",
    shortDesc: "Sleek, dark-mode fintech mobile user interface with fluid glassmorphic cards, biometric onboarding, and portfolio analytics.",
    fullDesc: "A complete mobile app design system crafted in Figma consisting of 40+ responsive screens, custom micro-interactions, dark/light token architecture, and high-fidelity prototype flows ready for developer handoff.",
    tags: ["Figma", "UI/UX", "Design System", "Prototyping", "Mobile App"],
    gradient: "from-violet-600 via-purple-600 to-cyan-600",
    metrics: "40+ Screens • 100% Auto-Layout • Complete Component Design System",
    highlights: [
      "Clean dark-mode aesthetic with neon accent highlights",
      "Comprehensive interaction prototypes with micro-animations",
      "Design tokens for colors, typography, spacing, and iconography",
      "Ready-to-export SVG icon library & developer spec sheet"
    ]
  },
  {
    id: "tech-summit-poster",
    title: "CyberX 2026 – National Tech Fest Poster Suite",
    category: "design",
    categories: ["design"],
    categoryLabel: "Poster Design",
    shortDesc: "Futuristic visual branding, social media campaign flyers, and high-resolution print banners for a national college symposium.",
    fullDesc: "A vibrant, cyber-themed design campaign created for a premier technical symposium. Includes main event posters, social media carousel posts, certificates, and ID card templates engineered in Ultra HD resolution.",
    tags: ["Photoshop", "Illustrator", "Branding", "Print Design", "Typography"],
    gradient: "from-amber-500 via-pink-600 to-purple-600",
    metrics: "300 DPI Print-Ready • 4K Digital Assets • 8 Coordinated Templates",
    highlights: [
      "Dynamic 3D typography and cyberpunk lighting aesthetic",
      "Social media kit for Instagram, WhatsApp, and LinkedIn",
      "Print-ready CMYK files with bleed margins and vector logos",
      "Custom sponsor badges and interactive registration QR codes"
    ]
  },
  {
    id: "brand-promo-video",
    title: "Apex Fitness – Cinematic Product Launch Reel",
    category: "video",
    categories: ["video"],
    categoryLabel: "Promotional Video",
    shortDesc: "High-energy commercial promo video featuring 3D product motion graphics, sound design, and speed-ramp transitions.",
    fullDesc: "A captivating 45-second commercial engineered for high viewer retention and social media conversion. Features seamless kinetic typography, custom sound design, cinematic color grading, and dynamic music beat sync.",
    tags: ["Premiere Pro", "After Effects", "Motion Graphics", "Sound Design", "4K Video"],
    gradient: "from-rose-600 via-purple-600 to-indigo-700",
    metrics: "4K 60FPS Master • Optimized for 9:16 Reels & 16:9 YouTube",
    highlights: [
      "Custom kinetic typography & glowing text animations",
      "Immersive sound mastering and beat-matched transitions",
      "Color graded in Rec.709 with cinematic contrast curve",
      "Multi-format delivery for Instagram Reels, TikTok, and YouTube"
    ]
  },
  {
    id: "ai-llm-chatbot",
    title: "DocuQuery – Enterprise RAG AI Knowledge Assistant",
    category: "ai",
    categories: ["ai", "web"],
    categoryLabel: "AI-Based Application",
    shortDesc: "Intelligent document question-answering assistant powered by vector embeddings and local LLMs for instant accurate research insights.",
    fullDesc: "DocuQuery allows users to upload PDF textbooks, research papers, and spreadsheets, querying them in natural conversational English. Powered by LangChain, ChromaDB vector search, and Llama 3 / OpenAI models.",
    tags: ["Python", "LangChain", "Vector DB", "OpenAI / Llama", "Streamlit", "React"],
    gradient: "from-pink-600 via-indigo-600 to-cyan-500",
    metrics: "Instant sub-second semantic retrieval • Citation page references",
    highlights: [
      "Chunking and embedding with hybrid semantic keyword search",
      "Precise source citation linking directly to document page numbers",
      "Chat history persistence with token usage analytics",
      "Modern glassmorphism chat interface with Markdown code highlighting"
    ]
  },
  {
    id: "iot-home-system",
    title: "IoT Sense – Automated Smart Environmental Monitor",
    category: "college",
    categories: ["college", "web"],
    categoryLabel: "College Project",
    shortDesc: "Hardware simulation and cloud telemetry dashboard for monitoring air quality, ambient temperature, and energy efficiency in real-time.",
    fullDesc: "An IoT academic project integrating ESP32 / Arduino sensor telemetry with an interactive cloud dashboard. Features live MQTT stream visualization, emergency SMS threshold alerts, and an IEEE publication-ready report.",
    tags: ["IoT / ESP32", "MQTT", "Node.js", "React Dashboard", "C++", "Firebase"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    metrics: "Live sensor graphs • Complete circuit diagrams & simulation files",
    highlights: [
      "Real-time MQTT data streaming with low-latency charts",
      "Threshold anomaly alert notifications via Telegram / Email",
      "Full Proteus/Wokwi circuit simulation schematics included",
      "Includes complete presentation deck and viva question bank"
    ]
  }
];
const servicesData = [
  {
    id: "freelancing",
    title: "Freelancing",
    shortDesc: "Get professional digital work delivered with quality and on-time execution.",
    fullDesc: "Need specialized digital assistance, feature development, bug fixes, or rapid prototyping? Our freelancing services offer flexible, on-demand support tailored to your project milestones and technical requirements.",
    icon: "Briefcase",
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    badge: "Flexible & Fast",
    features: [
      "Custom software & feature development",
      "Bug fixing, debugging & code reviews",
      "API integrations & automation scripts",
      "Dedicated milestone updates & sprint delivery"
    ],
    deliverables: ["Clean Source Code", "Deployment Assistance", "Support & Walkthrough"]
  },
  {
    id: "college-projects",
    title: "College Projects",
    shortDesc: "Complete academic projects with modern technologies and proper documentation.",
    fullDesc: "Comprehensive assistance for mini-projects, major final-year capstones, research implementations, and academic software. We supply complete, clean source code, PPT presentations, IEEE report documentation, and step-by-step viva explanations.",
    icon: "GraduationCap",
    gradient: "from-cyan-500 via-teal-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    badge: "Student Favorite",
    features: [
      "Final year major & mini projects",
      "IEEE format reports, synopsis & PPT decks",
      "Complete code explanation & viva guidance",
      "100% working setup on your local machine"
    ],
    deliverables: ["Full Project Source Code", "Complete IEEE Documentation", "Presentation Slides (PPT)", "Viva Preparation Notes"]
  },
  {
    id: "ms-office",
    title: "MS Office",
    shortDesc: "Professional Excel, PowerPoint and Word solutions for academic and business needs.",
    fullDesc: "High-impact spreadsheets with automated macros & pivot dashboards, boardroom-ready executive presentation decks, and professionally formatted thesis reports, dissertations, and corporate documentation.",
    icon: "FileSpreadsheet",
    gradient: "from-emerald-500 via-cyan-500 to-blue-500",
    glowColor: "rgba(16, 185, 129, 0.4)",
    badge: "Precision & Speed",
    features: [
      "Advanced Excel formulas, VBA macros & visual dashboards",
      "Modern PowerPoint pitch decks & academic slides",
      "Custom Word formatting, thesis layouts & typography",
      "Data cleaning, statistical charts & summary models"
    ],
    deliverables: ["Formatted XLSX / PPTX / DOCX", "PDF Export Ready", "Customizable Templates"]
  },
  {
    id: "mern-projects",
    title: "Full Stack & MERN Projects",
    shortDesc: "Modern full-stack web applications using React, Node.js, Express and MongoDB.",
    fullDesc: "End-to-end production-grade web applications built with modern architectural standards. From responsive frontends in React / Next.js to robust REST APIs and scalable MongoDB database models with authentication and payment gateways.",
    icon: "Layers",
    gradient: "from-blue-500 via-indigo-600 to-purple-600",
    glowColor: "rgba(59, 130, 246, 0.4)",
    badge: "High Demand",
    features: [
      "React.js & Next.js frontend with Tailwind CSS",
      "Node.js & Express.js RESTful API backends",
      "MongoDB / PostgreSQL database architecture",
      "JWT Authentication, role management & cloud deployment"
    ],
    deliverables: ["Production Web Application", "API Documentation", "Git Repository", "Live Cloud Deployment (Vercel/Render)"]
  },
  {
    id: "ai-projects",
    title: "AI-Based Projects",
    shortDesc: "AI-powered applications, automation solutions and intelligent project development.",
    fullDesc: "Cutting-edge artificial intelligence, machine learning, and deep learning solutions. We build LLM-powered chatbots, computer vision pipelines, natural language processing tools, and predictive models using Python, TensorFlow, and PyTorch.",
    icon: "Cpu",
    gradient: "from-pink-500 via-purple-600 to-indigo-600",
    glowColor: "rgba(236, 72, 153, 0.4)",
    badge: "Trending Tech",
    features: [
      "Custom LLM wrappers & RAG knowledge chatbots",
      "Computer vision (OpenCV, YOLO object detection)",
      "Machine learning classification & regression models",
      "Interactive Streamlit / Gradio / React web interfaces"
    ],
    deliverables: ["Python / Jupyter Notebooks", "Trained Model Weights", "Interactive Web Interface", "Dataset Analysis Report"]
  },
  {
    id: "posters",
    title: "Posters",
    shortDesc: "Creative and professional posters for events, promotions and digital marketing.",
    fullDesc: "Eye-catching graphic designs that command attention. Whether you need promotional event flyers, college symposium posters, social media campaign graphics, or corporate banners, we create visually stunning high-resolution assets.",
    icon: "Palette",
    gradient: "from-amber-500 via-pink-500 to-rose-500",
    glowColor: "rgba(245, 158, 11, 0.4)",
    badge: "High Visual Impact",
    features: [
      "College symposium & event banners",
      "Social media posters (Instagram, LinkedIn, Facebook)",
      "Corporate flyers, product infographics & brochures",
      "Vector artwork & print-ready CMYK/RGB exports"
    ],
    deliverables: ["Ultra HD Print PDF", "Web Optimized PNG/JPEG", "Editable Source PSD/Figma Files"]
  },
  {
    id: "ui-ux",
    title: "UI/UX Designing",
    shortDesc: "Modern, user-friendly interfaces designed for better usability and visual impact.",
    fullDesc: "User-centric interface and experience designs crafted in Figma. We focus on modern design trends (dark mode, glassmorphism, clean typography, micro-interactions) with design systems and developer-ready handoff specs.",
    icon: "Layout",
    gradient: "from-violet-500 via-purple-500 to-cyan-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
    badge: "Pixel Perfect",
    features: [
      "Interactive Figma wireframes & high-fidelity prototypes",
      "Responsive mobile app & web dashboard designs",
      "Design systems, typography scales & color tokens",
      "User journey mapping & usability optimization"
    ],
    deliverables: ["Interactive Figma Project Link", "Component Design System", "Asset Exports (SVG/PNG)"]
  },
  {
    id: "video-editing",
    title: "Promo Videos & Video Editing",
    shortDesc: "Creative promotional videos and professional video editing for brands and businesses.",
    fullDesc: "Dynamic video creation with crisp cuts, engaging sound design, motion graphics, subtitles, and color grading. Ideal for college project demos, brand promo reels, YouTube videos, and social media campaigns.",
    icon: "Video",
    gradient: "from-rose-500 via-purple-600 to-blue-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    badge: "Viral Quality",
    features: [
      "Product showcase & promotional video ads",
      "High-retention Reels, TikToks & Shorts editing",
      "Software & project demonstration walkthroughs",
      "Motion graphics, kinetic typography & sound mastering"
    ],
    deliverables: ["4K / 1080p Master Video (MP4)", "Multi-aspect ratio exports (16:9, 9:16)", "Project files upon request"]
  }
];
