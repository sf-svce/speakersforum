/* ========================================
   DATA
   SVCEMUN'26 - Conference Data
   ======================================== */

// FAQ Data
export const faqData = [
  {
    question: "Who can participate in SVCEMUN'26?",
    answer: "SVCEMUN'26 is open to students from all colleges and universities. Both beginners and experienced delegates are welcome to participate."
  },
  {
    question: "What is the registration fee?",
    answer: "Registration fees will be announced soon. Early bird discounts may be available. Please check the registration page or contact us for the latest information."
  },
  {
    question: "How do I register for the conference?",
    answer: "Click the 'Register NOW!' button on the homepage. You'll be directed to fill out a registration form with your details and committee preferences."
  },
  {
    question: "Can I choose my committee?",
    answer: "Yes! During registration, you can indicate your committee preferences. Allocations will be made based on availability and your preferences, confirmed via email."
  },
  {
    question: "What if I've never attended a MUN before?",
    answer: "No worries! We welcome first-timers. Study guides for each committee will be provided, and our executive board will conduct brief orientation sessions before the conference begins."
  },
  {
    question: "Is accommodation provided?",
    answer: "Limited on-campus accommodation may be available for outstation delegates on a first-come, first-served basis. Please contact us at sf@svce.ac.in to inquire about availability."
  },
  {
    question: "What documents do I need to bring?",
    answer: "Please bring a valid government-issued photo ID (Aadhar card, student ID, etc.), your delegate registration confirmation, and any study materials you need."
  },
  {
    question: "Will meals be provided?",
    answer: "Yes! Breakfast, lunch, and refreshments will be provided to all registered delegates on both days of the conference."
  }
];

// Committee Data
export const committees = [
  {
    id: 1,
    name: "UNSC",
    fullName: "United Nations Security Council",
    logo: "🛡️",
    description: "The Security Council has primary responsibility for the maintenance of international peace and security. It is the premier crisis committee dealing with pressing global conflicts.",
    members: [
      { name: "Sarah Johnson", role: "Chairperson" },
      { name: "Michael Chen", role: "Vice-Chair" },
      { name: "Aisha Patel", role: "Rapporteur" }
    ],
    color: "#800000"
  },
  {
    id: 2,
    name: "UNHRC",
    fullName: "UN Human Rights Council",
    logo: "⚖️",
    description: "The Human Rights Council addresses situations of human rights violations and makes recommendations on them. It discusses thematic human rights issues and situations requiring attention.",
    members: [
      { name: "James Rodriguez", role: "Chairperson" },
      { name: "Emma Thompson", role: "Vice-Chair" },
      { name: "Yuki Tanaka", role: "Rapporteur" }
    ],
    color: "#B8860B"
  },
  {
    id: 3,
    name: "DISEC",
    fullName: "Disarmament & International Security",
    logo: "☮️",
    description: "DISEC deals with disarmament, global challenges and threats to peace that affect the international community. Topics include nuclear weapons, conventional arms, and cyber warfare.",
    members: [
      { name: "Hassan Ahmed", role: "Chairperson" },
      { name: "Sofia Martinez", role: "Vice-Chair" },
      { name: "David Kim", role: "Rapporteur" }
    ],
    color: "#800000"
  },
  {
    id: 4,
    name: "UNODC",
    fullName: "UN Office on Drugs and Crime",
    logo: "🔒",
    description: "UNODC works to combat illicit drugs and international crime, as well as terrorism. It focuses on justice, crime prevention, and criminal justice reform.",
    members: [
      { name: "Isabella Costa", role: "Chairperson" },
      { name: "Omar Hassan", role: "Vice-Chair" },
      { name: "Mei Wong", role: "Rapporteur" }
    ],
    color: "#B8860B"
  }
];

// Itinerary Data
export const itineraries = {
  day1: [
    { time: "9:00 AM", event: "REGISTRATION & BREAKFAST" },
    { time: "10:30 AM", event: "OPENING CEREMONY" },
    { time: "11:30 AM", event: "COMMITTEE SESSION 1 BEGINS" },
    { time: "1:30 PM", event: "LUNCH BREAK" },
    { time: "2:30 PM", event: "COMMITTEE SESSION 2" }
  ],
  day2: [
    { time: "9:30 AM", event: "COMMITTEE SESSION 3" },
    { time: "1:00 PM", event: "LUNCH BREAK" },
    { time: "2:00 PM", event: "COMMITTEE SESSION 4" },
    { time: "4:00 PM", event: "CLOSING CEREMONY & AWARDS" }
  ]
};

// Secretariat Data
export const secretariat = [
  {
    name: "PAVAN",
    role: "PRESIDENT",
    quote: "When the going gets tough, only the toughest will keep going",
    image: "images/team/pavan.jpg"
  },
  {
    name: "THEJAS AVILA MARGRET YP",
    role: "VICE PRESIDENT",
    quote: "Making Impact look Effortless",
    image: "images/team/avila.jpg"
  }
];
