const projects = [
  {
    id: "browse",
    title: "B2B Browse Journey",
    client: "Walmart",
    year: "2023–2024",
    role: "UX Designer",
    category: "E-commerce · Enterprise",
    
    // Brief summary for card
    shortDescription: "Designed search improvements for business buyers purchasing in bulk, reducing friction in product discovery.",
    
    // Case study sections
    context: "B2B BROWSE JOURNEY is a design case study focused on enhancing the browsing experience for business-to-business users. The goal is to address the specific challenges faced by B2B users during their product search and selection process.",
    
    roleDetail: "UX Designer focused on the search experience for B2B users. Led research to identify pain points, designed solutions addressing search accuracy and bulk workflows, and collaborated with the team to present and refine proposals based on feedback.",
    
    process: [
      { 
        step: "Research findings", 
        detail: "User research identified three main issues: inaccurate search results, difficulty finding relevant products, and users having lists of items in mind or on paper. B2B users don't browse — they search with specific product details and expect precision."
      },
      { 
        step: "Exact match results", 
        detail: "Show results matching exact size, unit of measurement (UOM), and variant. Product variant and UOM dynamically adjust in dropdown selection based on search term, ensuring users find precisely what they're looking for."
      },
      { 
        step: "Auto-correct misspellings", 
        detail: "Automatically correct obvious misspellings while providing an option to proceed with original input when the term might be valid but appears misspelled."
      },
      { 
        step: "Enhanced search attributes", 
        detail: "Added brand, category, and color attributes to filter results effectively. Most users search with specific attributes and expect results to include them."
      },
      { 
        step: "Previous and trending searches", 
        detail: "Display previous searches for quick access to frequently purchased items. Show trending searches to highlight popular products. B2B users often purchase the same items repeatedly."
      },
      { 
        step: "Multi-item search", 
        detail: "Enable searching for multiple products at once in the search bar, freeing up cognitive load. It significantly helps users with bulk lists."
      },
      { 
        step: "Category display with imagery", 
        detail: "Display categories in rows with imagery for intuitive navigation. Visuals have lasting impact compared to words, reducing intellectual and memory load."
      },
      { 
        step: "Quick-add and related products", 
        detail: "Product cards include Add button for quick selection. Show related products when adding items to suggest complementary purchases, streamlining the browsing experience."
      }
    ],
    
    impact: "The proposed solutions aim to significantly enhance the B2B browsing experience by addressing specific user challenges. Expected outcomes include improved user satisfaction, increased efficiency, and higher conversion rates for business buyers.",
    
    reflection: "I learned how to understand users and design solutions that meet their specific needs by thinking outside the box. Gained experience presenting solutions to the team and refining them based on feedback. The challenge was designing for users who know exactly what they want rather than users who browse.",
    
    // Links
    thumbnail: "https://lh3.googleusercontent.com/d/17W3KNiwG3LHilX6dTxOfwXAbAsohmM-a",
    caseStudyUrl: "https://www.behance.net/gallery/243511251/B2B-BROWSE-JOURNEY",
    behanceUrl: "https://www.behance.net/gallery/243511251/B2B-BROWSE-JOURNEY"
  },
  
  {
    id: "insights",
    title: "My Insights Portal",
    client: "Amnet Digital",
    year: "2023",
    role: "UX Designer (2-person team)",
    category: "Enterprise · SaaS",
    
shortDescription: "Designed a centralized enterprise reporting portal that unified PowerBI, Tableau, Cognos, and Excel reports into one secure and scalable system.",

context: "Organizations generate reports from multiple platforms such as PowerBI, Tableau, Cognos, and Excel. Accessing reports across different tools was time-consuming, confusing, and impacted employee performance. The goal was to design a seamless web portal that connects all enterprise reports in one place with role-based and row-level security, ensuring employees only access the data relevant to them.",

roleDetail: "Led the portal design as one of two UX designers, driving the project from concept to delivery. Responsibilities included stakeholder interviews, user surveys, brainstorming sessions, digital wireframing, low- and high-fidelity prototyping, accessibility considerations, iterative design improvements, defining information architecture, and creating responsive layouts for multiple devices.",

process: [
  { 
    step: "User research and requirements", 
    detail: "Conducted stakeholder interviews and user surveys to understand needs from both user and admin perspectives. Users required features such as sharing and collaboration, email subscriptions, favorites and bookmarks, multi-format exports, and help support. Admins needed self-service controls, report security management, user metrics, customizable experiences, and training resources."
  },
  { 
    step: "Competitive audit", 
    detail: "Analyzed existing reporting portals to identify best practices and gaps. Observed common patterns such as left navigation, top bars, dashboard summaries, filters, and structured security controls. Insights informed navigation structure, dashboard behavior, and placement of account settings and help documentation."
  },
  { 
    step: "Report mapping system", 
    detail: "Solved the core complexity of mapping hundreds of reports to thousands of users with both role-based and row-level security. Established constraints: reports must belong to single categories, cannot be duplicated, and are mapped through categories instead of directly to users. Defined three access levels — global access, category-level mapping, and exceptional single-report access — to handle edge cases without breaking clarity."
  },
  { 
    step: "Role architecture design", 
    detail: "Created a scalable three-role system: User (default), Department Admin (middle role), and Super Admin (highest access). Department admins were introduced to distribute responsibility without creating security risks, allowing structured management of reports, groups, and mappings across departments."
  },
  { 
    step: "Discoverability and collaboration", 
    detail: "Focused the experience around report discoverability. Designed the home page to highlight favorites, recently opened reports, newly added reports, and popular reports to ensure critical insights are never hidden. Encouraged collaboration through sharing and subscription features."
  },
  { 
    step: "Information architecture and responsive design", 
    detail: "Developed a structured information architecture grounded in research and audit findings. Designed for clarity across desktop and mobile devices, ensuring consistent navigation, usability, and performance regardless of screen size."
  }
],

impact: "Delivered a centralized reporting system that streamlined access to enterprise data, reduced confusion caused by fragmented tools, and improved report discoverability across the organization. The structured mapping logic and role system created a secure yet flexible foundation for scaling across departments.",

reflection: "This project reinforced the importance of diagramming complex systems before moving into wireframes. Defining constraints early prevented confusion later in the process. Iterative refinement ensured consistency across screens. Most importantly, I learned that enterprise solutions must account for edge cases and scalability from day one — otherwise, complexity eventually breaks the experience.",

    
    thumbnail: "https://casestudy-images.s3.ap-south-1.amazonaws.com/Myinsights_paulisac/Myinsights_casestudy_by_paulisac.png",
    caseStudyUrl: "https://www.behance.net/gallery/186443095/My-Insights-Case-Study",
    behanceUrl: "https://www.behance.net/gallery/186443095/Enterprise-Reporting-Portal"
  },
  
  {
    id: "taksh",
    title: "Takshashila",
    client: "Concept project",
    year: "2022",
    role: "Solo designer, end-to-end",
    category: "EdTech · Concept",
    
    shortDescription: "Educational app concept for exploring Indian culture and mythology — structured for self-paced, interconnected learning.",
    
    context: "Indian culture is becoming more widely known throughout the world, and people want to learn about it, but they cannot find materials that are well written, well structured, and easily understood. Most scriptures lack regional translation. The challenge: making dense, layered cultural knowledge feel accessible and genuinely engaging without dumbing it down or turning it into a quiz.",
    
    roleDetail: "UX designer leading the app design from conception to delivery. Responsibilities included conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs, and determining information architecture.",
    
    process: [
      { 
        step: "User research and pain points", 
        detail: "Research revealed users want to learn at their own pace (not like regular courses requiring external motivation). They value guru-sishya connection but video recordings don't provide that feeling. Users need self-motivation, so we broke large goals into 3–5 minute lessons to keep focus."
      },
      { 
        step: "Pain point solutions", 
        detail: "Offered live classes between courses for guru connection and doubt clearing. Provided multiple formats (video, audio, images) for different learning styles. Translated ancient context into contemporary situations. Created multilingual support for native language understanding. Added comics, games, and quizzes for engagement."
      },
      { 
        step: "Content structure research", 
        detail: "Cultural and mythological content is deeply interconnected. Mapping relationships between stories, figures, and events became the core design challenge. Needed structure that allowed both guided learning and free exploration."
      },
      { 
        step: "Thread system design", 
        detail: "Each story connects to 2–3 related threads. Users can follow a single narrative or jump between connected ideas. This hybrid approach won in testing — users wanted a guided entry point but freedom to wander."
      },
      { 
        step: "Reading experience refinement", 
        detail: "Typography, spacing, and scroll rhythm matter more in reading-heavy apps than almost anywhere else. Spent significant time on text layout to ensure comfortable, sustained reading."
      },
      { 
        step: "Information architecture", 
        detail: "Developed information architecture through user research and competitive analysis to provide seamless interactions. Focused on balancing structure with exploration freedom."
      }
    ],
    
    impact: "User testing with 12 participants showed a 20% lift in time-on-content compared to a baseline linear app. Qualitative feedback: users said the app felt like 'following a conversation' rather than reading an encyclopedia. The thread system successfully enabled both guided learning and free exploration.",
    
    reflection: "Through this project, I learned to clear my head of assumptions and build from data. When you work with actual data, you'll find edge case scenarios. The best way to design for users is to use mental models. Iteration is the key to successful design. Content-heavy apps live or die on the reading experience — the flashier parts of interaction design mattered less than getting typography and scroll rhythm right.",
    
    thumbnail: "https://casestudy-images.s3.ap-south-1.amazonaws.com/Takshashila_paulisac/Takshashila_casestudy_by_paulisac.png",
    caseStudyUrl: "https://www.behance.net/gallery/110209063/Ed-Tech-App-Case-Study",
    behanceUrl: "https://www.behance.net/gallery/110209063/Ed-Tech-App-Case-Study"
  },
  
  {
    id: "mechanic",
    title: "Mighty Mechanic",
    client: "Concept project",
    year: "2021",
    role: "Solo designer (design + illustration)",
    category: "Mobile · Service Industry",
    
    shortDescription: "Sales management app for auto mechanics — designed for one-handed use in fast-paced, hands-dirty environments.",
    
    context: "It is difficult for auto mechanics, especially local mechanics with little or no education, to manage their sales. Most mechanics rely on books and don't manage their customers. The existing workflow for most small shops is a mix of paper, WhatsApp messages, and memory. Sales management apps are too complex with many features requiring learning time.",
    
    roleDetail: "UX designer creating an app from concept to delivery for Mighty Mechanic. Responsibilities included conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs. Also created custom illustration work for the app's visual identity.",
    
    process: [
      { 
        step: "Understanding constraints", 
        detail: "Research showed three pain points: sales apps are too complex, mechanics are busy servicing vehicles (work must be done quickly), and language barriers make apps difficult to understand. The design had to account for users who aren't tech-savvy, often in a hurry, with hands dirty."
      },
      { 
        step: "User research insights", 
        detail: "Created empathy maps and conducted interviews. Primary users identified as solo mechanic entrepreneurs. Research confirmed digitalization wasn't the only factor — education level and app complexity were major barriers preventing mechanics from using sales management tools."
      },
      { 
        step: "Paper wireframes", 
        detail: "Drafted iterations of the app's screens on paper to ensure elements were well-suited to address user pain points. Prioritized quick and easy navigation on home screen to save time for busy users."
      },
      { 
        step: "One-handed design", 
        detail: "Designed for mechanics who check phones for 15 seconds max. All critical actions reachable with one thumb. Booking confirmation — the most common action — is two taps from home screen. Easy product scanning with assistive technology integration."
      },
      { 
        step: "Usability study iterations", 
        detail: "Conducted two rounds of usability studies. Round 1 revealed need for quick product selection, ability to add multiple products at once, and easier customer retention. Round 2 showed cart was missing, navigation needed adjustment, and everyday report generation needed to be easier."
      },
      { 
        step: "Simplified invoice flow", 
        detail: "The invoice was previously a multi-step form. Redesigned as single scrollable summary with auto-populated fields from the booking. One tap to send. Added cart with product count. Created simple, mechanical visual style matching the work environment."
      }
    ],
    
    impact: "The app gives mechanics the feeling of being a Mighty Mechanic — it considers their needs carefully. Usability testing showed 30% reduction in booking-to-invoice cycle time. Peer feedback quote: 'The Mighty Mechanic app makes managing sales and customers so simple. This app makes my job easy and quick.' Testers said it felt like 'the app already knows what I'm going to do next.'",
    
    reflection: "My experience designing Mighty Mechanic showed me that the first ideas for the app are just the beginning. The app was designed iteratively based on user feedback and usability studies. Designing for people in physical, time-pressured environments demands different attention — the interface has to be almost invisible. Speed and confidence matter more than polish.",
    
    thumbnail: "https://casestudy-images.s3.ap-south-1.amazonaws.com/Mightymechanic_paulisac/Mightymechanic_casestudy_by_paulisac.png",
    caseStudyUrl: "https://www.behance.net/gallery/131227255/Mighty-Mechanic-App-Case-Study",
    behanceUrl: "https://www.behance.net/gallery/131227255/Mighty-Mechanic-App-Case-Study"
  }
];

export default projects;
