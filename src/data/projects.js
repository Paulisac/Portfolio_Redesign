export const projects = {
  b2b: {
    title: "B2B Browse Journey",
    client: "Walmart",
    year: "2023–2024",
    role: "Independent UX collaborator",
    outcome: "Streamlined B2B product discovery — 30% efficiency gain across the browse-to-purchase flow.",
    context: "Walmart's B2B platform was built on top of consumer-facing infrastructure. Business buyers — people purchasing in bulk for warehouses and small businesses — were navigating an interface designed for weekend shoppers. The result: slow searches, confusing filters, and high abandonment at checkout.",
    constraints: "Eighteen months of accumulated technical debt meant certain UI patterns were locked in place. The consumer experience could not break. Timeline was tight — three months from scoping to shipped.",
    roleDetail: "I worked independently within the UX team, collaborating with a research group for user insights and leaning on senior designers for feedback at key checkpoints. Scope covered the full browse experience: search, filtering, product comparison, and cart entry.",
    process: [
      { step: "Shadowed B2B buyers", detail: "Watched how real business purchasers actually use the platform. The gap between the designed flow and the actual flow was significant." },
      { step: "Mapped decision points", detail: "Identified where buyers leave or hesitate. Most friction lived in three places: initial search, applying filters, and choosing between similar SKUs." },
      { step: "Explored filter paradigms", detail: "Tested bulk-first filtering versus category-first. Business buyers don't browse — they already know what they need. The interface should get out of their way." },
      { step: "Iterated on comparison", detail: "Built and tested a side-by-side comparison mode. Reduced the cognitive load of choosing between high-volume products." }
    ],
    impact: "Search-to-cart conversion improved by 30%. Post-launch feedback from B2B account managers: the tool finally felt like it was built for them, not repurposed from somewhere else.",
    reflection: "The best interfaces for experts don't explain. They get out of the way. Most of the design work here was deciding what to remove, not what to add."
  },
  insights: {
    title: "My Insights Portal",
    client: "Amnet Digital",
    year: "2023",
    role: "UX Designer (2-person team)",
    outcome: "Report configuration time cut by 40% — analysts could build custom dashboards without engineering support.",
    context: "A data reporting portal where analysts needed to configure reports from multiple data sources. The existing interface required a near-engineering-level understanding of the underlying data structure. Non-technical users avoided it entirely and requested reports through tickets instead.",
    constraints: "The backend data model was complex and not going to change. The UI had to abstract that complexity without hiding information that power users needed. Budget was limited — no new infrastructure, just a better layer on top.",
    roleDetail: "Two designers on this project. I led the interaction design and information architecture, working closely with my partner on visual polish and component consistency. We collaborated directly with the engineering team throughout.",
    process: [
      { step: "Interviewed analysts", detail: "Discovered that most users wanted the same 4–5 report types, configured slightly differently each time. The tool was built for infinite flexibility — but the actual need was structured repetition." },
      { step: "Designed a template system", detail: "Instead of building reports from scratch, users now start from a template and customize. The complexity drops dramatically on the first interaction." },
      { step: "Simplified the data picker", detail: "Replaced a tree-view data source selector with a search-and-filter interface. Users find fields in seconds instead of navigating nested folders." },
      { step: "Added live previews", detail: "As users configure, a small live preview updates in real time. This single change reduced the 'did it work?' anxiety that was causing most ticket requests." }
    ],
    impact: "Report configuration time dropped by 40%. Ticket requests for report builds fell by over half within the first month. Analysts reported feeling in control of their own data for the first time.",
    reflection: "The problem wasn't that the tool was bad. It was that it assumed the user already knew what they were doing. Designing for the second interaction — not just the first — made the difference."
  },
  taksh: {
    title: "Takshashila",
    client: "Concept project",
    year: "2022",
    role: "Solo designer, end-to-end",
    outcome: "Educational app concept — 20% engagement lift in structured user testing across 12 sessions.",
    context: "A mobile app concept for exploring Indian traditions, culture, and mythology. The challenge: making dense, layered cultural knowledge feel accessible and genuinely engaging — without dumbing it down or turning it into a quiz.",
    constraints: "Paper project — no engineering team, no production constraints. The focus was entirely on interaction design and information architecture. User testing was conducted with low-fidelity prototypes in Figma.",
    roleDetail: "Everything was solo. Research, information architecture, interaction design, visual design, and user testing — all done by me over the course of several weeks.",
    process: [
      { step: "Content structure research", detail: "Cultural and mythological content is deeply interconnected. Mapping the relationships between stories, figures, and events became the core design challenge." },
      { step: "Explored navigation models", detail: "Tested linear storytelling, graph-based exploration, and a hybrid. The hybrid won — users wanted a guided entry point but freedom to wander." },
      { step: "Designed the 'thread' system", detail: "Each story connects to 2–3 related threads. Users can follow a single narrative or jump between connected ideas. Engagement data from testing confirmed this worked." },
      { step: "Refined the reading experience", detail: "Typography, spacing, and scroll rhythm matter more in a reading-heavy app than almost anywhere else. Spent significant time on just the text layout." }
    ],
    impact: "User testing with 12 participants showed a 20% lift in time-on-content compared to a baseline linear app. Qualitative feedback: users said the app felt like 'following a conversation' rather than reading an encyclopedia.",
    reflection: "Content-heavy apps live or die on the reading experience. The flashier parts of the interaction design mattered less than getting the typography and scroll rhythm right."
  },
  mechanic: {
    title: "Mighty Mechanic",
    client: "Concept project",
    year: "2021",
    role: "Solo designer (design + illustration)",
    outcome: "Service booking flow redesigned — 30% faster task completion in usability testing.",
    context: "A mobile app concept for auto mechanics managing their daily work: bookings, customer info, parts inventory, and invoicing — all in one place. The existing workflow for most small shops was a mix of paper, WhatsApp messages, and memory.",
    constraints: "Concept project built solo. The design had to account for users who are not tech-savvy and are often in a hurry — hands dirty, phone in one hand. Usability testing was conducted with clickthrough prototypes.",
    roleDetail: "Solo end-to-end: research, UX, UI, and custom illustration work for the app's visual identity. The illustration style was deliberately simple and mechanical — no decoration, just clarity.",
    process: [
      { step: "Shadowed a mechanic", detail: "Spent a morning watching how a real mechanic manages their day. The phone is checked quickly and often — never for more than 15 seconds at a time. Every interaction had to be fast." },
      { step: "Designed for one hand", detail: "All critical actions reachable with a thumb. The booking confirmation — the most common action — is two taps from the home screen." },
      { step: "Simplified the invoice flow", detail: "The invoice was previously a multi-step form. Redesigned as a single scrollable summary with auto-populated fields from the booking. One tap to send." },
      { step: "Created the visual system", detail: "Illustrated a small set of icons and status indicators in a style that felt mechanical and grounded — matching the environment where the app would actually be used." }
    ],
    impact: "Usability testing showed a 30% reduction in time to complete a booking-to-invoice cycle. Testers (real mechanics) said it felt like 'the app already knows what I'm going to do next.'",
    reflection: "Designing for people in physical, time-pressured environments demands a different kind of attention. The interface has to be almost invisible. Speed and confidence — not polish — are what matter."
  }
}

export const getProject = (id) => projects[id] || null
