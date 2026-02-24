// Extended Mock Data for all new LifeSync sections

// ========== DASHBOARD EXTENDED ==========
export const lifeBalanceScores = {
    relationship: 87, household: 72, financial: 68, family: 75,
    health: 80, career: 65, future: 58, social: 70,
};

export const todaysMomentCard = {
    activity: "Ask each other: What made you smile today?",
    category: "Connection",
    duration: "2 min",
};

export const partnerStatus = {
    alex: { mood: "😊", location: "Office", energy: "High" },
    jordan: { mood: "😌", location: "Home", energy: "Medium" },
};

export const lifeAlerts = [
    { id: 1, message: "Your emergency fund is below target — $3,000 short", severity: "warning", pillar: "Financial" },
    { id: 2, message: "No date night planned this week", severity: "info", pillar: "Relationship" },
    { id: 3, message: "Alex's annual physical is overdue", severity: "urgent", pillar: "Health" },
];

export const upcomingMilestones = [
    { title: "Anniversary", date: "2026-06-15", daysUntil: 111, icon: "💍" },
    { title: "Alex's Physical", date: "2026-03-10", daysUntil: 14, icon: "🩺" },
    { title: "Credit Card Due", date: "2026-02-27", daysUntil: 3, icon: "💳" },
];

export const weatherCommute = {
    alex: { temp: "62°F", condition: "Partly Cloudy", commute: "25 min", icon: "⛅" },
    jordan: { temp: "62°F", condition: "Partly Cloudy", commute: "Work from home", icon: "🏠" },
};

export const seasonalReminder = {
    message: "It's February — time to schedule HVAC servicing before spring",
    icon: "🔧",
    action: "Add to tasks",
};

// ========== RELATIONSHIP EXTENDED ==========
export const relationshipHealthBreakdown = [
    { name: "Quality Time", score: 85, max: 100 },
    { name: "Communication", score: 78, max: 100 },
    { name: "Intimacy", score: 82, max: 100 },
    { name: "Conflict Resolution", score: 70, max: 100 },
    { name: "Shared Goals", score: 90, max: 100 },
    { name: "Gratitude", score: 88, max: 100 },
];

export const loveLanguageResults = {
    alex: [
        { language: "Quality Time", percentage: 35 },
        { language: "Physical Touch", percentage: 28 },
        { language: "Words of Affirmation", percentage: 20 },
        { language: "Acts of Service", percentage: 12 },
        { language: "Gifts", percentage: 5 },
    ],
    jordan: [
        { language: "Words of Affirmation", percentage: 32 },
        { language: "Acts of Service", percentage: 25 },
        { language: "Quality Time", percentage: 22 },
        { language: "Physical Touch", percentage: 15 },
        { language: "Gifts", percentage: 6 },
    ],
};

export const sayThisExamples = [
    { feeling: "I feel unheard when you're on your phone during dinner", rephrased: "I really value our dinner time together. Could we try putting phones away so we can connect more?" },
    { feeling: "You never help with the dishes", rephrased: "I'd love it if we could share the dishes together — it would mean a lot to me." },
];

export const conflictResolutionSteps = [
    { step: 1, title: "Describe the Situation", prompt: "Partner A, describe the situation in 2 sentences without blame.", icon: "📝" },
    { step: 2, title: "Share Your Feelings", prompt: "Using 'I feel...' statements, share how this made you feel.", icon: "💭" },
    { step: 3, title: "Listen & Reflect", prompt: "Partner B, repeat back what you heard to show understanding.", icon: "👂" },
    { step: 4, title: "Find Common Ground", prompt: "What do you both agree on? Start from shared values.", icon: "🤝" },
    { step: 5, title: "Create a Solution", prompt: "Together, agree on one specific action each of you will take.", icon: "✅" },
];

export const conversationStarters = {
    deep: ["What's a fear you've never shared with anyone?", "If you could change one decision from the past, what would it be?", "What does a perfect life look like to you in 10 years?"],
    fun: ["If we won the lottery tomorrow, what's the first thing you'd buy?", "What's the most embarrassing thing you've done on a date?", "If you could have dinner with any person, dead or alive, who would it be?"],
    intimate: ["What's the most loved you've ever felt?", "What's something I do that makes you feel safe?", "Describe the perfect evening together."],
    growth: ["What skill would you like us to learn together?", "How can I better support your dreams?", "What's one thing you'd like us to improve about our communication?"],
};

export const timeCapsules = [
    { id: 1, title: "Our First Year", revealDate: "2027-02-14", createdBy: "Both", sealed: true, type: "message" },
    { id: 2, title: "Baby Predictions", revealDate: "2028-01-01", createdBy: "Alex", sealed: true, type: "photo" },
];

export const onThisDayMemories = [
    { year: 2025, event: "Had our first snowball fight ❄️", hasPhoto: true },
    { year: 2024, event: "Tried sushi for the first time together 🍣", hasPhoto: false },
];

export const loveLetterTemplates = [
    { id: 1, name: "Classic Romance", preview: "My dearest...", bgColor: "coral" },
    { id: 2, name: "Modern Love", preview: "Hey you...", bgColor: "sky" },
    { id: 3, name: "Gratitude Letter", preview: "I want you to know...", bgColor: "mint" },
    { id: 4, name: "Anniversary Special", preview: "On this day...", bgColor: "lavender" },
];

// ========== HOUSEHOLD EXTENDED ==========
export const chorePreferenceQuiz = [
    { question: "Do you prefer indoor or outdoor chores?", options: ["Indoor", "Outdoor", "No preference"] },
    { question: "Morning person or night owl?", options: ["Morning", "Night", "Flexible"] },
    { question: "Do you enjoy cooking?", options: ["Love it", "It's okay", "Not really"] },
];

export const serviceProviders = [
    { id: 1, name: "Mr. Fix-It Plumbing", category: "Plumber", rating: 4.8, phone: "(555) 123-4567", verified: true },
    { id: 2, name: "Spark Electric Co.", category: "Electrician", rating: 4.6, phone: "(555) 234-5678", verified: true },
    { id: 3, name: "Green Thumb Gardens", category: "Gardener", rating: 4.9, phone: "(555) 345-6789", verified: false },
    { id: 4, name: "Crystal Clean Services", category: "Cleaning", rating: 4.7, phone: "(555) 456-7890", verified: true },
];

export const homeAppliances = [
    { id: 1, name: "Samsung Refrigerator", model: "RF28R7351SR", purchaseDate: "2024-03-15", warrantyExpiry: "2027-03-15", room: "Kitchen" },
    { id: 2, name: "LG Washer", model: "WM4500HBA", purchaseDate: "2023-08-20", warrantyExpiry: "2025-08-20", room: "Laundry" },
    { id: 3, name: "Dyson Vacuum", model: "V15 Detect", purchaseDate: "2025-01-10", warrantyExpiry: "2027-01-10", room: "Storage" },
];

export const movingChecklist = [
    { week: "8 weeks", tasks: ["Research neighborhoods", "Set budget", "Start decluttering"], completed: 2, total: 3 },
    { week: "6 weeks", tasks: ["Hire movers", "Notify landlord", "Begin packing non-essentials"], completed: 0, total: 3 },
    { week: "4 weeks", tasks: ["Change address", "Transfer utilities", "Pack room by room"], completed: 0, total: 3 },
    { week: "2 weeks", tasks: ["Confirm movers", "Pack essentials box", "Final walkthrough"], completed: 0, total: 3 },
    { week: "Moving week", tasks: ["Move day logistics", "Unpack essentials", "Update address"], completed: 0, total: 3 },
];

export const energyUsage = [
    { month: "Sep", electricity: 850, gas: 40, water: 55 },
    { month: "Oct", electricity: 780, gas: 55, water: 50 },
    { month: "Nov", electricity: 820, gas: 85, water: 48 },
    { month: "Dec", electricity: 900, gas: 120, water: 52 },
    { month: "Jan", electricity: 870, gas: 130, water: 50 },
    { month: "Feb", electricity: 810, gas: 110, water: 47 },
];

export const seasonalMaintenance = {
    spring: ["Clean gutters", "Service HVAC", "Check smoke detectors", "Power wash exterior", "Inspect roof"],
    summer: ["Maintain lawn", "Check irrigation", "Clean dryer vents", "Inspect windows", "Service pool"],
    fall: ["Rake leaves", "Winterize pipes", "Check insulation", "Clean chimney", "Test heating"],
    winter: ["Check weatherstripping", "Prevent ice dams", "Monitor heating", "Check carbon monoxide detectors", "Insulate pipes"],
};

// ========== FINANCES EXTENDED ==========
export const financialHealthScore = {
    overall: 72,
    breakdown: [
        { name: "Savings Rate", score: 78, description: "You save 22% of income" },
        { name: "Debt Ratio", score: 65, description: "Debt-to-income is 28%" },
        { name: "Emergency Fund", score: 70, description: "3.5 months of expenses saved" },
        { name: "Investment Rate", score: 80, description: "Contributing 15% to retirement" },
        { name: "Bill Payment", score: 95, description: "All bills paid on time" },
    ],
};

export const subscriptions = [
    { id: 1, name: "Netflix", amount: 15.99, category: "Entertainment", status: "keep", billingDate: 15 },
    { id: 2, name: "Spotify", amount: 14.99, category: "Entertainment", status: "keep", billingDate: 1 },
    { id: 3, name: "Gym Membership", amount: 49.99, category: "Health", status: "review", billingDate: 5 },
    { id: 4, name: "Adobe CC", amount: 54.99, category: "Work", status: "keep", billingDate: 20 },
    { id: 5, name: "Unused Cloud Storage", amount: 9.99, category: "Tech", status: "cancel", billingDate: 10 },
    { id: 6, name: "Magazine Subscription", amount: 12.99, category: "Education", status: "cancel", billingDate: 22 },
];

export const cashFlowForecast = [
    { period: "Next 30 days", income: 7500, expenses: 5800, net: 1700 },
    { period: "30-60 days", income: 7500, expenses: 6200, net: 1300 },
    { period: "60-90 days", income: 7500, expenses: 5500, net: 2000 },
];

export const insurancePolicies = [
    { id: 1, type: "Health", provider: "Blue Cross", coverage: 500000, premium: 450, renewalDate: "2026-12-01", status: "active" },
    { id: 2, type: "Life", provider: "MetLife", coverage: 1000000, premium: 85, renewalDate: "2027-03-15", status: "active" },
    { id: 3, type: "Home", provider: "State Farm", coverage: 350000, premium: 120, renewalDate: "2026-09-01", status: "active" },
    { id: 4, type: "Auto", provider: "Geico", coverage: 100000, premium: 95, renewalDate: "2026-06-15", status: "active" },
    { id: 5, type: "Travel", provider: "—", coverage: 0, premium: 0, renewalDate: "—", status: "gap" },
];

export const debtPayoffSimulation = {
    avalanche: { totalInterest: 4200, payoffDate: "2029-06-15", monthlySaved: 85 },
    snowball: { totalInterest: 4800, payoffDate: "2029-09-20", monthlySaved: 0 },
};

export const billCalendar = [
    { day: 1, name: "Rent", amount: 2200, status: "paid" },
    { day: 5, name: "Gym", amount: 49.99, status: "paid" },
    { day: 10, name: "Cloud Storage", amount: 9.99, status: "upcoming" },
    { day: 15, name: "Netflix", amount: 15.99, status: "upcoming" },
    { day: 18, name: "Car Insurance", amount: 95, status: "upcoming" },
    { day: 22, name: "Student Loan", amount: 250, status: "upcoming" },
    { day: 25, name: "Credit Card", amount: 85, status: "upcoming" },
    { day: 28, name: "Utilities", amount: 180, status: "upcoming" },
];

// ========== FAMILY EXTENDED ==========
export const familyPlanningStages = [
    { id: "pre-conception", label: "Pre-Conception", icon: "🌸", active: true },
    { id: "pregnant", label: "Pregnant", icon: "🤰", active: false },
    { id: "parent", label: "Parent", icon: "👶", active: false },
    { id: "eldercare", label: "Eldercare", icon: "🧓", active: true },
];

export const fertilityData = {
    cycleDay: 14,
    cycleLength: 28,
    fertileWindow: { start: 11, end: 16 },
    ovulationDay: 14,
    lastPeriod: "2026-02-10",
    basalTemp: [
        { day: 1, temp: 97.2 }, { day: 5, temp: 97.3 }, { day: 10, temp: 97.1 },
        { day: 14, temp: 97.8 }, { day: 18, temp: 98.1 }, { day: 22, temp: 98.0 },
        { day: 26, temp: 97.9 },
    ],
};

export const pregnancyWeeks = [
    { week: 1, size: "Poppy seed", symptoms: ["No symptoms yet"], todo: ["Take prenatal vitamins", "Schedule first appointment"] },
    { week: 8, size: "Raspberry", symptoms: ["Morning sickness", "Fatigue"], todo: ["First ultrasound", "Announce to close family"] },
    { week: 12, size: "Lime", symptoms: ["Less nausea", "More energy"], todo: ["Genetic screening", "Start maternity clothes shopping"] },
    { week: 20, size: "Banana", symptoms: ["Baby kicks!", "Back pain"], todo: ["Anatomy scan", "Start nursery planning"] },
    { week: 30, size: "Cabbage", symptoms: ["Heartburn", "Shortness of breath"], todo: ["Hospital tour", "Pack hospital bag"] },
    { week: 40, size: "Watermelon", symptoms: ["Ready!", "Braxton Hicks"], todo: ["Final preparations", "Rest and relax"] },
];

export const hospitalBagChecklist = {
    birthingParent: [
        { item: "Hospital gown or comfortable clothes", packed: true },
        { item: "Toiletries", packed: false },
        { item: "Snacks", packed: false },
        { item: "Phone charger (long cable)", packed: true },
        { item: "Nursing bra", packed: false },
        { item: "Going-home outfit", packed: false },
    ],
    partner: [
        { item: "Change of clothes", packed: false },
        { item: "Toiletries", packed: false },
        { item: "Snacks & drinks", packed: false },
        { item: "Camera", packed: true },
        { item: "Pillow", packed: false },
    ],
    baby: [
        { item: "Going-home outfit", packed: true },
        { item: "Car seat (installed)", packed: true },
        { item: "Blanket", packed: false },
        { item: "Diapers & wipes", packed: false },
        { item: "Pacifier", packed: false },
    ],
};

export const vaccinationSchedule = [
    { vaccine: "Hepatitis B", age: "Birth", status: "done", date: "2025-06-15" },
    { vaccine: "DTaP (1st dose)", age: "2 months", status: "done", date: "2025-08-15" },
    { vaccine: "IPV (1st dose)", age: "2 months", status: "done", date: "2025-08-15" },
    { vaccine: "MMR (1st dose)", age: "12 months", status: "upcoming", date: "2026-06-15" },
    { vaccine: "Varicella", age: "12 months", status: "upcoming", date: "2026-06-15" },
];

export const childProfiles = [
    {
        id: 1, name: "Emma", age: "8 months", photo: "E",
        milestonesDue: ["Crawling", "First words", "Sitting alone"],
        school: "—", allergies: ["None known"], doctor: "Dr. Smith",
    },
];

// ========== HEALTH EXTENDED ==========
export const medicationSchedule = [
    { id: 1, name: "Albuterol", dose: "2 puffs", time: "As needed", partner: "Alex", refillDate: "2026-03-15" },
    { id: 2, name: "Vitamin D", dose: "1000 IU", time: "Morning", partner: "Jordan", refillDate: "2026-04-01" },
    { id: 3, name: "Omega-3", dose: "1000mg", time: "With dinner", partner: "Both", refillDate: "2026-03-20" },
];

export const labResults = [
    { test: "Total Cholesterol", value: 195, unit: "mg/dL", range: "< 200", status: "normal", date: "2026-01-15" },
    { test: "Fasting Glucose", value: 92, unit: "mg/dL", range: "70-100", status: "normal", date: "2026-01-15" },
    { test: "Vitamin D", value: 28, unit: "ng/mL", range: "30-100", status: "low", date: "2026-01-15" },
    { test: "HDL Cholesterol", value: 55, unit: "mg/dL", range: "> 40", status: "normal", date: "2026-01-15" },
];

export const preventiveCareSchedule = [
    { screening: "Annual Physical", partner: "Alex", lastDone: "2025-03-10", nextDue: "2026-03-10", status: "due-soon" },
    { screening: "Dental Cleaning", partner: "Alex", lastDone: "2025-09-15", nextDue: "2026-03-15", status: "due-soon" },
    { screening: "Eye Exam", partner: "Jordan", lastDone: "2025-06-20", nextDue: "2026-06-20", status: "okay" },
    { screening: "Skin Check", partner: "Both", lastDone: "Never", nextDue: "Overdue", status: "overdue" },
];

export const mentalHealthCheckins = [
    { week: "W1", phq2: 1, gad2: 2 },
    { week: "W2", phq2: 0, gad2: 1 },
    { week: "W3", phq2: 1, gad2: 1 },
    { week: "W4", phq2: 2, gad2: 3 },
    { week: "W5", phq2: 1, gad2: 2 },
    { week: "W6", phq2: 0, gad2: 1 },
];

export const stressHeatmap = [
    { day: 1, level: 3 }, { day: 2, level: 2 }, { day: 3, level: 4 }, { day: 4, level: 2 },
    { day: 5, level: 5 }, { day: 6, level: 3 }, { day: 7, level: 1 }, { day: 8, level: 2 },
    { day: 9, level: 3 }, { day: 10, level: 4 }, { day: 11, level: 3 }, { day: 12, level: 2 },
    { day: 13, level: 1 }, { day: 14, level: 2 }, { day: 15, level: 3 }, { day: 16, level: 4 },
    { day: 17, level: 5 }, { day: 18, level: 3 }, { day: 19, level: 2 }, { day: 20, level: 1 },
    { day: 21, level: 2 }, { day: 22, level: 3 }, { day: 23, level: 2 }, { day: 24, level: 3 },
    { day: 25, level: 4 }, { day: 26, level: 2 }, { day: 27, level: 1 }, { day: 28, level: 2 },
];

export const nutritionLog = [
    { meal: "Breakfast", items: "Oatmeal, banana, coffee", calories: 350, protein: 12, carbs: 55, fat: 8 },
    { meal: "Lunch", items: "Chicken salad, whole wheat bread", calories: 520, protein: 35, carbs: 42, fat: 18 },
    { meal: "Dinner", items: "Grilled salmon, rice, vegetables", calories: 680, protein: 42, carbs: 55, fat: 22 },
    { meal: "Snacks", items: "Apple, almonds, yogurt", calories: 280, protein: 10, carbs: 35, fat: 12 },
];

export const supplements = [
    { name: "Vitamin D", dose: "1000 IU", time: "Morning", partner: "Jordan" },
    { name: "Omega-3", dose: "1000mg", time: "Dinner", partner: "Both" },
    { name: "Magnesium", dose: "400mg", time: "Night", partner: "Alex" },
    { name: "Probiotics", dose: "1 capsule", time: "Morning", partner: "Both" },
];

// ========== CAREER EXTENDED ==========
export const skillsInventory = {
    alex: [
        { skill: "React", proficiency: 90, gap: false },
        { skill: "Python", proficiency: 75, gap: false },
        { skill: "Leadership", proficiency: 65, gap: true },
        { skill: "System Design", proficiency: 80, gap: false },
        { skill: "Public Speaking", proficiency: 40, gap: true },
    ],
    jordan: [
        { skill: "Strategy", proficiency: 85, gap: false },
        { skill: "Analytics", proficiency: 80, gap: false },
        { skill: "Communication", proficiency: 95, gap: false },
        { skill: "Technical", proficiency: 60, gap: true },
        { skill: "SQL", proficiency: 45, gap: true },
    ],
};

export const learningPlan = [
    { id: 1, title: "Leadership Fundamentals", type: "Course", platform: "Coursera", progress: 40, partner: "Alex", skill: "Leadership" },
    { id: 2, title: "Public Speaking Mastery", type: "Book", platform: "—", progress: 15, partner: "Alex", skill: "Public Speaking" },
    { id: 3, title: "SQL for Product Managers", type: "Course", platform: "Udemy", progress: 60, partner: "Jordan", skill: "SQL" },
    { id: 4, title: "Technical Product Management", type: "Certification", platform: "PMI", progress: 0, partner: "Jordan", skill: "Technical" },
];

export const professionalNetwork = [
    { id: 1, name: "Sarah Chen", role: "VP Engineering", company: "TechCorp", lastContact: "2026-02-15", followUp: "2026-03-15", partner: "Alex" },
    { id: 2, name: "Mike Ross", role: "CPO", company: "StartupXYZ", lastContact: "2026-01-20", followUp: "2026-02-28", partner: "Jordan" },
    { id: 3, name: "Lisa Wang", role: "Recruiter", company: "BigTech", lastContact: "2026-02-10", followUp: "2026-03-10", partner: "Alex" },
];

export const jobPipeline = [
    { id: 1, company: "BigTech", role: "Staff Engineer", status: "applied", date: "2026-02-20", partner: "Alex" },
    { id: 2, company: "StartupXYZ", role: "Tech Lead", status: "interview", date: "2026-02-18", partner: "Alex" },
    { id: 3, company: "MegaCorp", role: "Principal Engineer", status: "rejected", date: "2026-02-10", partner: "Alex" },
    { id: 4, company: "InnovateCo", role: "Senior PM", status: "researching", date: "2026-02-22", partner: "Jordan" },
];

export const workLifeBalance = {
    alex: { score: 65, hoursWorked: 48, protectedTimeKept: 70, commuteHours: 5 },
    jordan: { score: 78, hoursWorked: 42, protectedTimeKept: 85, commuteHours: 0 },
};

export const incomeTimeline = [
    { month: "Sep 25", alex: 10400, jordan: 9600, combined: 20000 },
    { month: "Oct 25", alex: 10400, jordan: 9600, combined: 20000 },
    { month: "Nov 25", alex: 10800, jordan: 9600, combined: 20400 },
    { month: "Dec 25", alex: 10400, jordan: 11000, combined: 21400 },
    { month: "Jan 26", alex: 10400, jordan: 9600, combined: 20000 },
    { month: "Feb 26", alex: 10400, jordan: 9600, combined: 20000 },
];

export const sideHustles = [
    { id: 1, name: "Freelance Web Dev", income: 2400, expenses: 200, hoursPerMonth: 20, effectiveRate: 110, partner: "Alex" },
    { id: 2, name: "Etsy Shop", income: 800, expenses: 350, hoursPerMonth: 15, effectiveRate: 30, partner: "Jordan" },
];

// ========== FUTURE PLANNING EXTENDED ==========
export const lifeGoalsTimeline = [
    { year: 2026, goal: "Pay off credit cards", pillar: "Financial", status: "in-progress" },
    { year: 2027, goal: "Buy first home", pillar: "Financial", status: "planning" },
    { year: 2028, goal: "Start a family", pillar: "Family", status: "dreaming" },
    { year: 2030, goal: "Alex promotion to Staff", pillar: "Career", status: "dreaming" },
    { year: 2035, goal: "Kids' education fund fully funded", pillar: "Family", status: "dreaming" },
    { year: 2056, goal: "Retirement", pillar: "Financial", status: "dreaming" },
];

export const mortgageCalculation = {
    homePrice: 450000, downPayment: 60000, loanAmount: 390000,
    interestRate: 6.5, termYears: 30, monthlyPayment: 2466,
    totalInterest: 497760, totalPaid: 887760,
    amortization: [
        { year: 1, principal: 5400, interest: 24192, balance: 384600 },
        { year: 5, principal: 31200, interest: 117000, balance: 358800 },
        { year: 10, principal: 72000, interest: 222000, balance: 318000 },
        { year: 20, principal: 180000, interest: 384000, balance: 210000 },
        { year: 30, principal: 390000, interest: 497760, balance: 0 },
    ],
};

export const estateChecklist = [
    { item: "Will", status: "not-started", priority: "high" },
    { item: "Beneficiary Designations", status: "in-progress", priority: "high" },
    { item: "Power of Attorney", status: "not-started", priority: "high" },
    { item: "Advance Directive", status: "not-started", priority: "medium" },
    { item: "Digital Assets Plan", status: "not-started", priority: "medium" },
    { item: "Life Insurance Review", status: "done", priority: "high" },
];

export const digitalAssets = [
    { name: "Google Account", type: "Email/Cloud", action: "Transfer to partner", hasRecovery: true },
    { name: "Bank Accounts", type: "Financial", action: "Joint account — auto transfer", hasRecovery: true },
    { name: "Social Media", type: "Social", action: "Memorialize", hasRecovery: false },
    { name: "Crypto Wallet", type: "Financial", action: "Seed phrase in safe deposit box", hasRecovery: true },
    { name: "Photo Library", type: "Personal", action: "Share with family", hasRecovery: true },
];

export const charitableGiving = [
    { charity: "Red Cross", annualTarget: 500, donated: 250, taxReceipt: true },
    { charity: "Local Food Bank", annualTarget: 300, donated: 300, taxReceipt: true },
    { charity: "Animal Shelter", annualTarget: 200, donated: 0, taxReceipt: false },
];

// ========== SOCIAL EXTENDED ==========
export const giftManager = [
    { person: "Mom", occasion: "Birthday", date: "2026-04-10", budget: 100, ideas: ["Spa voucher", "Scarf", "Books"], pastGifts: ["Flowers (2025)", "Perfume (2024)"], status: "planned" },
    { person: "Dad", occasion: "Father's Day", date: "2026-06-21", budget: 75, ideas: ["Golf accessories", "Watch"], pastGifts: ["Tie (2025)"], status: "brainstorming" },
    { person: "Best Friend", occasion: "Wedding", date: "2026-04-15", budget: 150, ideas: ["Kitchen set"], pastGifts: [], status: "purchased" },
];

export const hostPlanner = {
    event: "Spring Dinner Party",
    date: "2026-03-20",
    guests: ["Sarah & Mike", "Lisa & Tom", "Emily & Dan"],
    menu: ["Appetizer: Bruschetta", "Main: Grilled Salmon", "Dessert: Tiramisu"],
    tasks: [
        { task: "Send invitations", done: true },
        { task: "Buy ingredients", done: false },
        { task: "Clean house", done: false },
        { task: "Set table", done: false },
        { task: "Prepare playlist", done: true },
    ],
    budget: { total: 200, spent: 45 },
};

export const socialBalance = [
    { month: "Sep", socialEvents: 8, coupleTime: 12 },
    { month: "Oct", socialEvents: 10, coupleTime: 10 },
    { month: "Nov", socialEvents: 12, coupleTime: 8 },
    { month: "Dec", socialEvents: 15, coupleTime: 7 },
    { month: "Jan", socialEvents: 6, coupleTime: 14 },
    { month: "Feb", socialEvents: 8, coupleTime: 12 },
];

export const volunteeringData = [
    { org: "Local Food Bank", commitment: "Monthly", hoursLogged: 24, nextDate: "2026-03-08", role: "Volunteer" },
    { org: "Animal Shelter", commitment: "Bi-weekly", hoursLogged: 36, nextDate: "2026-03-01", role: "Dog Walker" },
];

export const communityGroups = [
    { name: "Book Club", members: 8, nextMeeting: "2026-03-08", role: "Member" },
    { name: "Neighborhood Watch", members: 15, nextMeeting: "2026-03-15", role: "Co-lead" },
    { name: "Couples Game Night", members: 6, nextMeeting: "2026-03-22", role: "Organizer" },
];

// ========== AI ASSISTANT EXTENDED ==========
export const aiInsights = {
    pillarSummary: [
        { pillar: "Relationship", score: 87, trend: "up", color: "coral" },
        { pillar: "Household", score: 72, trend: "stable", color: "sky" },
        { pillar: "Financial", score: 68, trend: "up", color: "mint" },
        { pillar: "Family", score: 75, trend: "stable", color: "amber" },
        { pillar: "Health", score: 80, trend: "down", color: "lavender" },
        { pillar: "Career", score: 65, trend: "up", color: "sky" },
        { pillar: "Future", score: 58, trend: "stable", color: "coral" },
        { pillar: "Social", score: 70, trend: "up", color: "mint" },
    ],
    weeklyPriority: "Focus on building your emergency fund — you're $3,000 short of your 6-month target.",
    recommendations: [
        "Schedule a date night this week — it's been 10 days since your last one",
        "Review your subscription audit — you could save $23/month",
        "Alex's annual physical is overdue — book it today",
        "Consider increasing retirement contribution by 2%",
        "Start holiday gift planning early — 3 occasions in the next 60 days",
    ],
    upcomingDeadlines: [
        { title: "Credit card payment", date: "2026-02-27", pillar: "Financial" },
        { title: "Smoke detector batteries", date: "2026-02-28", pillar: "Household" },
        { title: "Annual physical (Alex)", date: "2026-03-10", pillar: "Health" },
        { title: "Sarah's Birthday", date: "2026-03-05", pillar: "Social" },
    ],
};

export const autoPilotTasks = [
    { id: 1, task: "Bill tracking & reminders", status: "active", lastRun: "Today", pillar: "Financial" },
    { id: 2, task: "Maintenance schedule reminders", status: "active", lastRun: "Yesterday", pillar: "Household" },
    { id: 3, task: "Grocery list updates", status: "active", lastRun: "Today", pillar: "Household" },
    { id: 4, task: "Medication refill reminders", status: "active", lastRun: "2 days ago", pillar: "Health" },
];

export const morningBriefFull = {
    weather: { temp: "62°F", condition: "Partly Cloudy", icon: "⛅" },
    partnerStatus: { alex: "At office", jordan: "Working from home" },
    priorities: [
        "Replace smoke detector batteries (overdue)",
        "Credit card payment due in 3 days",
        "Grocery shopping this afternoon",
    ],
    relationshipTip: "Try the '10-second kiss' today — it's scientifically proven to boost connection!",
    financialInsight: "You're $200 under budget this month. Consider putting the extra into your vacation fund.",
    healthReminder: "Both of you have hit your step goals 4/7 days this week — keep it up!",
};

// ========== SETTINGS EXTENDED ==========
export const integrations = [
    { id: 1, name: "Chase Bank", type: "Bank", status: "connected", lastSync: "Today", icon: "🏦" },
    { id: 2, name: "Apple Health", type: "Wearable", status: "connected", lastSync: "Today", icon: "⌚" },
    { id: 3, name: "Google Calendar", type: "Calendar", status: "connected", lastSync: "1 hour ago", icon: "📅" },
    { id: 4, name: "Nest Thermostat", type: "Smart Home", status: "disconnected", lastSync: "Never", icon: "🏠" },
];

export const privacyControls = [
    { pillar: "Relationship", partnerCanSee: true },
    { pillar: "Household", partnerCanSee: true },
    { pillar: "Financial", partnerCanSee: true },
    { pillar: "Family", partnerCanSee: true },
    { pillar: "Health", partnerCanSee: false },
    { pillar: "Career", partnerCanSee: true },
    { pillar: "Future", partnerCanSee: true },
    { pillar: "Social", partnerCanSee: true },
];

export const notificationPreferences = [
    { pillar: "Relationship", reminders: true, suggestions: true, alerts: true },
    { pillar: "Household", reminders: true, suggestions: false, alerts: true },
    { pillar: "Financial", reminders: true, suggestions: true, alerts: true },
    { pillar: "Family", reminders: true, suggestions: true, alerts: true },
    { pillar: "Health", reminders: true, suggestions: false, alerts: true },
    { pillar: "Career", reminders: false, suggestions: true, alerts: false },
    { pillar: "Future", reminders: false, suggestions: true, alerts: false },
    { pillar: "Social", reminders: true, suggestions: false, alerts: true },
];

// ========== NEW STANDALONE SCREENS ==========
export const lifeTimeline = [
    { date: "2024-02-14", title: "First Date ❤️", category: "Relationship", description: "Coffee at Sunrise Cafe", hasPhoto: true },
    { date: "2024-06-15", title: "Moved In Together 🏡", category: "Home", description: "Our first apartment on Oak Street", hasPhoto: true },
    { date: "2024-09-01", title: "Alex's Promotion 📈", category: "Career", description: "Senior Software Engineer at TechCorp", hasPhoto: false },
    { date: "2024-12-25", title: "First Holiday Together 🎄", category: "Relationship", description: "Cozy Christmas at home", hasPhoto: true },
    { date: "2025-02-14", title: "1 Year Anniversary 💕", category: "Relationship", description: "Dinner at La Maison", hasPhoto: true },
    { date: "2025-05-01", title: "Jordan's New Role 🎯", category: "Career", description: "Product Manager at InnovateCo", hasPhoto: false },
    { date: "2025-08-01", title: "Adopted Luna 🐕", category: "Family", description: "Our furry family member", hasPhoto: true },
    { date: "2025-11-15", title: "Started Investing 💰", category: "Financial", description: "First joint investment account", hasPhoto: false },
    { date: "2026-02-14", title: "2 Year Anniversary 🥂", category: "Relationship", description: "Weekend getaway to the mountains", hasPhoto: true },
];

export const coupleGoals = [
    { id: 1, title: "Visit Japan 🇯🇵", status: "planning", owners: "Both", targetDate: "2027-04-01", linkedSavings: 1500, progress: 30 },
    { id: 2, title: "Pay Off Credit Cards 💳", status: "in-progress", owners: "Both", targetDate: "2026-08-01", linkedSavings: 0, progress: 65 },
    { id: 3, title: "Learn to Cook Italian 🍝", status: "in-progress", owners: "Jordan", targetDate: "2026-06-01", linkedSavings: 0, progress: 40 },
    { id: 4, title: "Run a 5K Together 🏃", status: "dreaming", owners: "Both", targetDate: "2026-10-01", linkedSavings: 0, progress: 10 },
    { id: 5, title: "Buy a Home 🏡", status: "planning", owners: "Both", targetDate: "2027-12-01", linkedSavings: 25000, progress: 42 },
    { id: 6, title: "Start a Side Business 💡", status: "dreaming", owners: "Alex", targetDate: "2027-06-01", linkedSavings: 0, progress: 5 },
    { id: 7, title: "Read 24 Books 📚", status: "achieved", owners: "Both", targetDate: "2025-12-31", linkedSavings: 0, progress: 100 },
];

export const emergencyInfo = [
    {
        name: "Alex", bloodType: "O+", allergies: ["Peanuts"],
        medications: ["Albuterol (as needed)"], emergencyContact: "Mom — Sarah (555) 111-2222",
        insuranceId: "BC-12345678", doctorPhone: "(555) 333-4444",
    },
    {
        name: "Jordan", bloodType: "A+", allergies: ["None"],
        medications: ["Vitamin D (daily)"], emergencyContact: "Dad — Tom (555) 555-6666",
        insuranceId: "BC-87654321", doctorPhone: "(555) 777-8888",
    },
];

export const documentsVault = [
    { id: 1, name: "Passport — Alex", category: "Identity", expiry: "2030-05-20", uploaded: true },
    { id: 2, name: "Passport — Jordan", category: "Identity", expiry: "2029-11-15", uploaded: true },
    { id: 3, name: "Lease Agreement", category: "Housing", expiry: "2027-01-31", uploaded: true },
    { id: 4, name: "Marriage Certificate", category: "Identity", expiry: "—", uploaded: false },
    { id: 5, name: "Car Title", category: "Vehicle", expiry: "—", uploaded: true },
    { id: 6, name: "Home Insurance Policy", category: "Insurance", expiry: "2026-09-01", uploaded: true },
    { id: 7, name: "Will — Alex", category: "Estate", expiry: "—", uploaded: false },
];

export const academyContent = [
    { id: 1, title: "First Baby Prep", pillar: "Family", type: "Learning Path", lessons: 12, completed: 0, duration: "4 weeks" },
    { id: 2, title: "Buying Your First Home", pillar: "Financial", type: "Learning Path", lessons: 8, completed: 3, duration: "3 weeks" },
    { id: 3, title: "Communication Masterclass", pillar: "Relationship", type: "Video Series", lessons: 6, completed: 6, duration: "2 weeks" },
    { id: 4, title: "Retirement in 10 Years", pillar: "Future", type: "Learning Path", lessons: 10, completed: 0, duration: "5 weeks" },
    { id: 5, title: "Meal Prep for Couples", pillar: "Health", type: "Article Series", lessons: 5, completed: 2, duration: "1 week" },
    { id: 6, title: "Career Negotiation", pillar: "Career", type: "Webinar", lessons: 3, completed: 0, duration: "3 hours" },
];

export const wellbeingHistory = [
    { week: "W1", score: 72 }, { week: "W2", score: 75 }, { week: "W3", score: 70 },
    { week: "W4", score: 78 }, { week: "W5", score: 74 }, { week: "W6", score: 80 },
    { week: "W7", score: 76 }, { week: "W8", score: 82 },
];

export const activityFeed = [
    { id: 1, action: "Completed task: Vacuum living room", pillar: "Household", user: "Alex", time: "2 hours ago", icon: "✅" },
    { id: 2, action: "AI suggestion: Schedule date night", pillar: "Relationship", user: "System", time: "3 hours ago", icon: "🤖" },
    { id: 3, action: "Bill paid: Netflix ($15.99)", pillar: "Financial", user: "Auto", time: "5 hours ago", icon: "💳" },
    { id: 4, action: "Mood check-in: 😊 Happy", pillar: "Health", user: "Jordan", time: "6 hours ago", icon: "😊" },
    { id: 5, action: "Milestone: 730 days together!", pillar: "Relationship", user: "System", time: "1 day ago", icon: "🎉" },
    { id: 6, action: "Grocery list updated (3 items added)", pillar: "Household", user: "Jordan", time: "1 day ago", icon: "🛒" },
    { id: 7, action: "Workout completed: 45 min run", pillar: "Health", user: "Alex", time: "1 day ago", icon: "🏃" },
    { id: 8, action: "Budget review: $200 under this month", pillar: "Financial", user: "System", time: "2 days ago", icon: "💰" },
];

// ========== FUTURE PLANNING — ADDITIONAL EXPORTS ==========
export const lifeVisionBoard = [
    { id: 1, title: "Cozy Dream Home", description: "Farmhouse with a big garden", emoji: "🏡", category: "Home" },
    { id: 2, title: "World Travel", description: "Visit 30 countries together", emoji: "✈️", category: "Adventure" },
    { id: 3, title: "Financial Freedom", description: "Retire by 55", emoji: "💰", category: "Financial" },
    { id: 4, title: "Family of Four", description: "Two kids, one dog, one cat", emoji: "👨‍👩‍👧‍👦", category: "Family" },
    { id: 5, title: "Own Business", description: "Launch our own startup", emoji: "🚀", category: "Career" },
    { id: 6, title: "Healthy Living", description: "Run a marathon together", emoji: "🏃", category: "Health" },
    { id: 7, title: "Give Back", description: "Start a community foundation", emoji: "🤝", category: "Social" },
];

export const fiveYearPlan = [
    { year: "2026", goals: [{ pillar: "Financial", goal: "Pay off credit cards" }, { pillar: "Career", goal: "Alex promotion to Staff Engineer" }, { pillar: "Relationship", goal: "Plan wedding ceremony" }] },
    { year: "2027", goals: [{ pillar: "Home", goal: "Buy first home" }, { pillar: "Financial", goal: "Build 6-month emergency fund" }, { pillar: "Career", goal: "Jordan moves to Director role" }] },
    { year: "2028", goals: [{ pillar: "Family", goal: "Start a family" }, { pillar: "Health", goal: "Complete marathon" }, { pillar: "Financial", goal: "Begin 529 education savings" }] },
    { year: "2029", goals: [{ pillar: "Career", goal: "Launch side business full-time" }, { pillar: "Travel", goal: "Visit Japan together" }] },
    { year: "2030", goals: [{ pillar: "Financial", goal: "Reach $500k net worth" }, { pillar: "Home", goal: "Home renovation" }, { pillar: "Family", goal: "Second child" }] },
];

export const homeJourney = {
    budget: 450000,
    downPayment: 60000,
    monthlyPayment: 2466,
    steps: [
        { title: "Check credit scores", description: "Both partners: 720+ recommended", completed: true },
        { title: "Get pre-approved for mortgage", description: "Shop 3+ lenders for best rate", completed: true },
        { title: "Determine must-haves vs nice-to-haves", description: "Create shared criteria list", completed: true },
        { title: "Start house hunting", description: "Tour 10+ homes in target neighborhoods", completed: false },
        { title: "Make an offer", description: "Work with agent on competitive offer", completed: false },
        { title: "Home inspection", description: "Hire inspector, review findings", completed: false },
        { title: "Close on home", description: "Sign paperwork, get keys!", completed: false },
    ],
};

export const retirementPlanning = {
    targetAge: 60,
    currentSavings: 85000,
    monthlyContribution: 2500,
    target: 2000000,
    onTrack: true,
    projections: [
        { age: 30, projected: 85000 },
        { age: 35, projected: 220000 },
        { age: 40, projected: 420000 },
        { age: 45, projected: 700000 },
        { age: 50, projected: 1100000 },
        { age: 55, projected: 1550000 },
        { age: 60, projected: 2100000 },
    ],
};

export const legacyPlanning = [
    { id: 1, document: "Will", description: "Last will and testament for both partners", status: "none" as const },
    { id: 2, document: "Power of Attorney", description: "Financial and medical POA", status: "in-progress" as const },
    { id: 3, document: "Beneficiary Designations", description: "401k, IRA, life insurance", status: "in-progress" as const },
    { id: 4, document: "Life Insurance", description: "$1M term life for both partners", status: "done" as const },
    { id: 5, document: "Digital Estate Plan", description: "Password manager, crypto, online accounts", status: "none" as const },
    { id: 6, document: "Healthcare Directive", description: "Living will and healthcare proxy", status: "none" as const },
];

export const bucketList = [
    { id: 1, title: "Northern Lights in Iceland", category: "Travel", priority: "⭐⭐⭐", done: false },
    { id: 2, title: "Learn to scuba dive", category: "Adventure", priority: "⭐⭐", done: false },
    { id: 3, title: "Cook a 5-course meal together", category: "Food", priority: "⭐⭐", done: true },
    { id: 4, title: "Write a love letter to future selves", category: "Relationship", priority: "⭐⭐⭐", done: true },
    { id: 5, title: "Skydiving tandem jump", category: "Adventure", priority: "⭐", done: false },
    { id: 6, title: "Volunteer abroad together", category: "Social", priority: "⭐⭐", done: false },
    { id: 7, title: "Build a piece of furniture", category: "Creative", priority: "⭐", done: false },
    { id: 8, title: "Attend a music festival", category: "Entertainment", priority: "⭐⭐", done: true },
];

// ========== SOCIAL — ADDITIONAL EXPORTS ==========
export const couplesFriendsList = [
    { id: 1, name: "Sarah Chen", connection: "Alex's college friend", birthday: "Mar 5", lastContact: "2026-02-20", needsAttention: false },
    { id: 2, name: "Mike Ross", connection: "Couple friend", birthday: "Jul 12", lastContact: "2026-02-18", needsAttention: false },
    { id: 3, name: "Lisa & Tom Wang", connection: "Neighbors", birthday: null, lastContact: "2026-01-15", needsAttention: true },
    { id: 4, name: "Emily Davis", connection: "Jordan's work friend", birthday: "Sep 22", lastContact: "2026-02-10", needsAttention: false },
    { id: 5, name: "Dan & Katie", connection: "Couple friend", birthday: null, lastContact: "2025-12-20", needsAttention: true },
    { id: 6, name: "Jordan's Mom", connection: "Family", birthday: "Nov 3", lastContact: "2026-02-22", needsAttention: false },
];

export const giftTracker = [
    { id: 1, person: "Sarah Chen", occasion: "Birthday", date: "2026-03-05", budget: 50, status: "need" as const, ideaGiven: null },
    { id: 2, person: "Mom", occasion: "Mother's Day", date: "2026-05-10", budget: 100, status: "need" as const, ideaGiven: null },
    { id: 3, person: "Mike Ross", occasion: "Wedding", date: "2026-04-15", budget: 150, status: "given" as const, ideaGiven: "Kitchen mixer set" },
    { id: 4, person: "Emily", occasion: "Birthday", date: "2026-01-22", budget: 40, status: "given" as const, ideaGiven: "Book & candle set" },
];

export const socialCalendar = [
    { id: 1, date: "2026-03-05", event: "Sarah's Birthday Dinner", type: "Birthday", who: ["Alex", "Jordan", "Friends"], confirmed: true },
    { id: 2, date: "2026-03-08", event: "Book Club Meeting", type: "Group", who: ["Alex"], confirmed: true },
    { id: 3, date: "2026-03-15", event: "Neighborhood Watch", type: "Community", who: ["Jordan"], confirmed: false },
    { id: 4, date: "2026-03-20", event: "Spring Dinner Party (hosting)", type: "Hosting", who: ["Both", "Friends"], confirmed: true },
    { id: 5, date: "2026-03-22", event: "Couples Game Night", type: "Social", who: ["Both", "Dan & Katie"], confirmed: false },
];

export const relationshipMap = {
    tier1: [
        { name: "Jordan's Mom", relation: "Mother-in-law" },
        { name: "Alex's Parents", relation: "Parents" },
        { name: "Sarah Chen", relation: "Best Friend" },
    ],
    tier2: [
        { name: "Mike Ross", relation: "Close Friend" },
        { name: "Emily Davis", relation: "Work Friend" },
        { name: "Dr. Smith", relation: "Family Doctor" },
    ],
    tier3: [
        { name: "Lisa & Tom", relation: "Neighbors" },
        { name: "Dan & Katie", relation: "Activity Friends" },
        { name: "Book Club Members", relation: "Group" },
    ],
};

export const hospitalityLog = [
    { id: 1, event: "NYE Dinner Party", date: "2025-12-31", guests: ["Sarah", "Mike", "Emily"], feedback: "Everyone loved the pasta 🍝" },
    { id: 2, event: "Superbowl Watch Party", date: "2026-02-08", guests: ["Dan & Katie", "Lisa & Tom", "Mike"], feedback: "Great wings recipe! 🏈" },
    { id: 3, event: "Jordan's Birthday Brunch", date: "2025-07-12", guests: ["Family", "Close friends"], feedback: "Beautiful morning, perfect weather ☀️" },
];

// ========== AI ASSISTANT — ADDITIONAL EXPORTS ==========
export const weeklyReport = {
    summary: "Strong week overall — Relationship and Health pillars improved, Financial needs attention.",
    tasksDone: 24,
    qualityTimeMinutes: 340,
    savingsThisWeek: 425,
    avgMood: 7.8,
    pillarHighlights: [
        { pillar: "relationship", note: "3 date nights this week!", change: 5 },
        { pillar: "financial", note: "Credit card payment due in 3 days", change: -2 },
        { pillar: "health", note: "Both hit step goals 5/7 days", change: 8 },
        { pillar: "household", note: "12 tasks completed, 3 overdue", change: 0 },
        { pillar: "career", note: "Alex had a great interview this week", change: 3 },
    ],
    recommendations: [
        "Schedule Alex's overdue annual physical this week",
        "Review subscription audit — save $23/month by canceling unused services",
        "Increase retirement contribution by 2% given strong cash flow",
        "Plan Sarah's birthday gift — her birthday is March 5",
    ],
};

export const aiConversationHistory = [
    { role: "assistant" as const, message: "Good morning! Here's your daily brief: You have 3 tasks due today, a bill payment in 3 days, and it's been 10 days since your last date night. Want me to suggest a date idea? 😊" },
    { role: "user" as const, message: "Yes! Suggest a date night idea for this Friday." },
    { role: "assistant" as const, message: "How about a cooking class + stargazing combo? There's an Italian cooking class at 6pm downtown ($45/person) — and the weather looks clear for stargazing after! I can book it and add it to your calendar. 🍝🌟" },
    { role: "user" as const, message: "That sounds perfect! Book it." },
    { role: "assistant" as const, message: "Done! I've added 'Italian Cooking Class + Stargazing' to your shared calendar for Friday at 6pm. I also set a reminder for Thursday to prep. Budget impact: $90 from your 'Date Night' fund (you have $160 remaining). Have a wonderful time! 💕" },
];

export const nudgePreferences = [
    { id: 1, type: "Relationship Reminders", description: "Date night suggestions, appreciation prompts", enabled: true },
    { id: 2, type: "Financial Alerts", description: "Bill due dates, budget warnings, savings tips", enabled: true },
    { id: 3, type: "Health Check-ins", description: "Mood tracking, exercise reminders, sleep tips", enabled: true },
    { id: 4, type: "Household Tasks", description: "Overdue chores, maintenance reminders", enabled: true },
    { id: 5, type: "Career Growth", description: "Learning reminders, network follow-ups", enabled: false },
    { id: 6, type: "Social Nudges", description: "Friend check-in reminders, gift deadlines", enabled: false },
    { id: 7, type: "Future Planning", description: "Goal progress updates, milestone reminders", enabled: true },
];
