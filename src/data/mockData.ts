// LifeSync Mock Data

export const partners = {
  partner1: { name: "Alex", avatar: "A", color: "coral" },
  partner2: { name: "Jordan", avatar: "J", color: "sky" },
};

export const relationshipData = {
  healthScore: 87,
  loveLanguages: {
    partner1: { quality: 90, acts: 60, gifts: 40, touch: 85, words: 70 },
    partner2: { quality: 70, acts: 80, gifts: 55, touch: 60, words: 90 },
  },
  todaysMoment: "Share one thing you're grateful for about each other today",
  checkIns: [
    { date: "2026-02-24", mood: "happy", note: "Great morning walk together" },
    { date: "2026-02-23", mood: "calm", note: "Movie night was perfect" },
    { date: "2026-02-22", mood: "stressed", note: "Work deadlines piling up" },
  ],
  journalEntries: [
    { id: 1, date: "2026-02-24", author: "Alex", title: "Our weekend getaway", content: "We visited the mountains and it was magical...", hasPhoto: true },
    { id: 2, date: "2026-02-22", author: "Jordan", title: "Cooking together", content: "Tried a new pasta recipe and it turned out amazing...", hasPhoto: true },
    { id: 3, date: "2026-02-20", author: "Both", title: "Anniversary reflections", content: "Two years of growing together...", hasPhoto: false },
  ],
  dateIdeas: [
    { id: 1, title: "Sunset Picnic", category: "Outdoor", budget: "$30", rating: 5 },
    { id: 2, title: "Cooking Class", category: "Experience", budget: "$80", rating: 4 },
    { id: 3, title: "Stargazing", category: "Outdoor", budget: "$10", rating: 5 },
    { id: 4, title: "Art Museum", category: "Culture", budget: "$25", rating: 4 },
  ],
  milestones: [
    { date: "2024-02-14", title: "First Date", icon: "heart" },
    { date: "2024-06-15", title: "Moved In Together", icon: "home" },
    { date: "2024-12-25", title: "First Holiday Together", icon: "gift" },
    { date: "2025-02-14", title: "1 Year Anniversary", icon: "cake" },
    { date: "2025-08-01", title: "Adopted Luna", icon: "dog" },
    { date: "2026-02-14", title: "2 Year Anniversary", icon: "sparkles" },
  ],
  gratitudes: [
    { from: "Alex", message: "Thank you for making coffee every morning ☕" },
    { from: "Jordan", message: "I love how you always make me laugh 😄" },
  ],
  conversationStarters: [
    "What's a dream you haven't told me about?",
    "If we could live anywhere for a year, where would you choose?",
    "What's one thing I do that makes you feel most loved?",
  ],
};

export const householdData = {
  tasks: [
    { id: 1, title: "Vacuum living room", assignee: "Alex", priority: "medium", completed: false, recurring: "weekly", points: 15 },
    { id: 2, title: "Grocery shopping", assignee: "Jordan", priority: "high", completed: false, recurring: "weekly", points: 20 },
    { id: 3, title: "Clean bathroom", assignee: "Alex", priority: "medium", completed: true, recurring: "weekly", points: 20 },
    { id: 4, title: "Cook dinner", assignee: "Jordan", priority: "high", completed: false, recurring: "daily", points: 10 },
    { id: 5, title: "Do laundry", assignee: "Alex", priority: "low", completed: false, recurring: "biweekly", points: 15 },
    { id: 6, title: "Water plants", assignee: "Jordan", priority: "low", completed: true, recurring: "weekly", points: 5 },
  ],
  choreDistribution: { Alex: 55, Jordan: 45 },
  gamificationPoints: { Alex: 145, Jordan: 130 },
  groceryList: [
    { id: 1, item: "Milk", category: "Dairy", checked: false },
    { id: 2, item: "Eggs", category: "Dairy", checked: false },
    { id: 3, item: "Bread", category: "Bakery", checked: true },
    { id: 4, item: "Chicken breast", category: "Meat", checked: false },
    { id: 5, item: "Spinach", category: "Produce", checked: false },
    { id: 6, item: "Tomatoes", category: "Produce", checked: true },
    { id: 7, item: "Rice", category: "Pantry", checked: false },
    { id: 8, item: "Olive oil", category: "Pantry", checked: false },
  ],
  mealPlan: [
    { day: "Mon", breakfast: "Oatmeal", lunch: "Salad", dinner: "Grilled chicken" },
    { day: "Tue", breakfast: "Smoothie", lunch: "Sandwich", dinner: "Pasta" },
    { day: "Wed", breakfast: "Eggs", lunch: "Soup", dinner: "Stir fry" },
    { day: "Thu", breakfast: "Yogurt", lunch: "Wrap", dinner: "Fish tacos" },
    { day: "Fri", breakfast: "Pancakes", lunch: "Salad", dinner: "Pizza night" },
    { day: "Sat", breakfast: "Brunch out", lunch: "-", dinner: "BBQ" },
    { day: "Sun", breakfast: "French toast", lunch: "Leftovers", dinner: "Roast" },
  ],
  maintenance: [
    { id: 1, task: "HVAC filter replacement", due: "2026-03-15", status: "upcoming", priority: "high" },
    { id: 2, task: "Gutter cleaning", due: "2026-04-01", status: "upcoming", priority: "medium" },
    { id: 3, task: "Smoke detector batteries", due: "2026-02-28", status: "overdue", priority: "high" },
  ],
};

export const financialData = {
  netWorth: 185000,
  netWorthHistory: [
    { month: "Sep", value: 162000 },
    { month: "Oct", value: 168000 },
    { month: "Nov", value: 172000 },
    { month: "Dec", value: 175000 },
    { month: "Jan", value: 180000 },
    { month: "Feb", value: 185000 },
  ],
  accounts: [
    { name: "Joint Checking", balance: 8500, type: "checking" },
    { name: "Joint Savings", balance: 25000, type: "savings" },
    { name: "Alex's 401k", balance: 85000, type: "investment" },
    { name: "Jordan's IRA", balance: 42000, type: "investment" },
    { name: "Emergency Fund", balance: 15000, type: "savings" },
    { name: "Credit Card", balance: -2800, type: "credit" },
  ],
  monthlyBudget: [
    { category: "Housing", budgeted: 2200, spent: 2200, color: "coral" },
    { category: "Food", budgeted: 800, spent: 650, color: "mint" },
    { category: "Transport", budgeted: 400, spent: 320, color: "sky" },
    { category: "Entertainment", budgeted: 300, spent: 280, color: "lavender" },
    { category: "Health", budgeted: 200, spent: 150, color: "rose" },
    { category: "Savings", budgeted: 1000, spent: 1000, color: "amber" },
  ],
  incomeVsExpenses: [
    { month: "Sep", income: 7500, expenses: 5800 },
    { month: "Oct", income: 7500, expenses: 6100 },
    { month: "Nov", income: 7800, expenses: 5900 },
    { month: "Dec", income: 8200, expenses: 7200 },
    { month: "Jan", income: 7500, expenses: 5700 },
    { month: "Feb", income: 7500, expenses: 5400 },
  ],
  recentTransactions: [
    { id: 1, description: "Whole Foods", amount: -85.30, category: "Food", date: "2026-02-24" },
    { id: 2, description: "Salary - Alex", amount: 3750, category: "Income", date: "2026-02-22" },
    { id: 3, description: "Netflix", amount: -15.99, category: "Entertainment", date: "2026-02-21" },
    { id: 4, description: "Gas Station", amount: -45.00, category: "Transport", date: "2026-02-20" },
    { id: 5, description: "Salary - Jordan", amount: 3750, category: "Income", date: "2026-02-20" },
  ],
  savingsGoals: [
    { name: "Vacation Fund", current: 3200, target: 5000, icon: "plane" },
    { name: "New Car", current: 8000, target: 30000, icon: "car" },
    { name: "Home Down Payment", current: 25000, target: 60000, icon: "home" },
    { name: "Emergency Fund", current: 15000, target: 18000, icon: "shield" },
  ],
  debts: [
    { name: "Credit Card", balance: 2800, rate: 19.99, minPayment: 85 },
    { name: "Student Loan (Alex)", balance: 18000, rate: 4.5, minPayment: 250 },
    { name: "Car Loan", balance: 12000, rate: 3.9, minPayment: 380 },
  ],
  creditScore: { alex: 752, jordan: 788 },
};

export const healthData = {
  profiles: [
    {
      name: "Alex", age: 30, bloodType: "O+",
      conditions: ["Mild asthma"],
      medications: [{ name: "Albuterol", dose: "As needed", time: "PRN" }],
      allergies: ["Peanuts"],
      healthScore: 82,
    },
    {
      name: "Jordan", age: 28, bloodType: "A+",
      conditions: [],
      medications: [{ name: "Vitamin D", dose: "1000 IU", time: "Morning" }],
      allergies: [],
      healthScore: 91,
    },
  ],
  appointments: [
    { id: 1, title: "Annual Physical - Alex", date: "2026-03-10", doctor: "Dr. Smith", type: "General" },
    { id: 2, title: "Dental Cleaning - Jordan", date: "2026-03-15", doctor: "Dr. Lee", type: "Dental" },
    { id: 3, title: "Eye Exam - Alex", date: "2026-04-02", doctor: "Dr. Patel", type: "Vision" },
  ],
  moodHistory: [
    { date: "Mon", alex: 8, jordan: 7 },
    { date: "Tue", alex: 7, jordan: 8 },
    { date: "Wed", alex: 6, jordan: 7 },
    { date: "Thu", alex: 8, jordan: 9 },
    { date: "Fri", alex: 9, jordan: 8 },
    { date: "Sat", alex: 9, jordan: 9 },
    { date: "Sun", alex: 8, jordan: 8 },
  ],
  fitnessStats: {
    alex: { steps: 8200, calories: 2100, activeMinutes: 45, workoutsThisWeek: 4 },
    jordan: { steps: 10500, calories: 1850, activeMinutes: 60, workoutsThisWeek: 5 },
  },
  sleepData: [
    { day: "Mon", alex: 7.5, jordan: 8.0 },
    { day: "Tue", alex: 6.5, jordan: 7.5 },
    { day: "Wed", alex: 7.0, jordan: 7.0 },
    { day: "Thu", alex: 8.0, jordan: 8.5 },
    { day: "Fri", alex: 7.5, jordan: 7.0 },
    { day: "Sat", alex: 9.0, jordan: 9.5 },
    { day: "Sun", alex: 8.5, jordan: 8.0 },
  ],
  waterIntake: { alex: 6, jordan: 8, goal: 8 },
};

export const familyData = {
  readinessScore: 72,
  readinessFactors: [
    { factor: "Financial", score: 80 },
    { factor: "Emotional", score: 85 },
    { factor: "Housing", score: 70 },
    { factor: "Career", score: 65 },
    { factor: "Health", score: 90 },
    { factor: "Support", score: 60 },
  ],
  milestones: [
    { age: "0-3 months", items: ["First smile", "Holds head up", "Tracks objects"] },
    { age: "3-6 months", items: ["Rolls over", "Babbles", "Reaches for toys"] },
    { age: "6-12 months", items: ["Sits alone", "First words", "Crawls"] },
  ],
  eldercare: [
    { name: "Mom (Sarah)", age: 68, needs: "Regular check-ins", medications: 3 },
    { name: "Dad (Robert)", age: 71, needs: "Doctor appointments", medications: 5 },
  ],
};

export const careerData = {
  profiles: [
    {
      name: "Alex", role: "Senior Software Engineer", company: "TechCorp",
      salary: 125000, satisfaction: 78,
      skills: [
        { name: "React", level: 90 }, { name: "Python", level: 75 },
        { name: "Leadership", level: 65 }, { name: "System Design", level: 80 },
      ],
      goals: ["Promotion to Staff Engineer", "Learn Rust", "Speak at conference"],
    },
    {
      name: "Jordan", role: "Product Manager", company: "InnovateCo",
      salary: 115000, satisfaction: 85,
      skills: [
        { name: "Strategy", level: 85 }, { name: "Analytics", level: 80 },
        { name: "Communication", level: 95 }, { name: "Technical", level: 60 },
      ],
      goals: ["VP of Product", "MBA consideration", "Launch flagship product"],
    },
  ],
  incomeContribution: [
    { month: "Sep", alex: 5200, jordan: 4800 },
    { month: "Oct", alex: 5200, jordan: 4800 },
    { month: "Nov", alex: 5400, jordan: 4800 },
    { month: "Dec", alex: 5200, jordan: 5500 },
    { month: "Jan", alex: 5200, jordan: 4800 },
    { month: "Feb", alex: 5200, jordan: 4800 },
  ],
  jobApplications: [
    { id: 1, company: "BigTech", role: "Staff Engineer", status: "Applied", date: "2026-02-20" },
    { id: 2, company: "StartupXYZ", role: "Tech Lead", status: "Interview", date: "2026-02-18" },
    { id: 3, company: "MegaCorp", role: "Principal Engineer", status: "Rejected", date: "2026-02-10" },
  ],
};

export const futurePlanningData = {
  bucketList: [
    { id: 1, title: "Visit Japan", category: "Travel", progress: 30, priority: "high" },
    { id: 2, title: "Learn to surf", category: "Experience", progress: 0, priority: "medium" },
    { id: 3, title: "Write a book together", category: "Achievement", progress: 10, priority: "low" },
    { id: 4, title: "Northern Lights", category: "Travel", progress: 50, priority: "high" },
    { id: 5, title: "Run a marathon", category: "Fitness", progress: 25, priority: "medium" },
    { id: 6, title: "Build a treehouse", category: "Project", progress: 0, priority: "low" },
  ],
  retirementData: {
    targetAge: 60, currentAge: 30, currentSavings: 127000, monthlyContribution: 2500,
    projectedAt60: 1850000, targetAmount: 2000000,
    projections: [
      { age: 30, savings: 127000 }, { age: 35, savings: 310000 },
      { age: 40, savings: 550000 }, { age: 45, savings: 870000 },
      { age: 50, savings: 1250000 }, { age: 55, savings: 1550000 },
      { age: 60, savings: 1850000 },
    ],
  },
  propertyPlanning: {
    readinessScore: 65,
    targetPrice: 450000, downPaymentTarget: 60000, currentSaved: 25000,
    monthlyMortgage: 2100,
  },
  travelBucketList: [
    { destination: "Tokyo, Japan", budget: 5000, saved: 1500, season: "Spring" },
    { destination: "Iceland", budget: 4000, saved: 2000, season: "Winter" },
    { destination: "Amalfi Coast", budget: 6000, saved: 800, season: "Summer" },
  ],
};

export const socialData = {
  upcomingEvents: [
    { id: 1, title: "Sarah's Birthday", date: "2026-03-05", type: "birthday", rsvp: "going" },
    { id: 2, title: "Neighborhood BBQ", date: "2026-03-12", type: "social", rsvp: "maybe" },
    { id: 3, title: "Book Club", date: "2026-03-08", type: "club", rsvp: "going" },
    { id: 4, title: "Wedding - Mike & Lisa", date: "2026-04-15", type: "wedding", rsvp: "going" },
  ],
  giftTracker: [
    { person: "Mom", occasion: "Birthday", date: "2026-04-10", budget: 100, idea: "Spa voucher", status: "planned" },
    { person: "Best Friend", occasion: "Wedding", date: "2026-04-15", budget: 150, idea: "Kitchen set", status: "purchased" },
    { person: "Dad", occasion: "Father's Day", date: "2026-06-21", budget: 75, idea: "Golf accessories", status: "brainstorming" },
  ],
  celebrations: [
    { title: "Valentine's Day", date: "2026-02-14", daysUntil: -10, planned: true },
    { title: "Alex's Birthday", date: "2026-05-15", daysUntil: 80, planned: false },
    { title: "Anniversary", date: "2026-06-15", daysUntil: 111, planned: false },
  ],
};

export const dashboardPriorities = [
  { pillar: "Household", task: "Replace smoke detector batteries", urgent: true },
  { pillar: "Finance", task: "Credit card payment due in 3 days", urgent: true },
  { pillar: "Health", task: "Schedule annual physical", urgent: false },
  { pillar: "Relationship", task: "Plan date night this weekend", urgent: false },
  { pillar: "Social", task: "RSVP to neighborhood BBQ", urgent: false },
];

export const morningBrief = {
  greeting: "Good morning, Alex & Jordan! ☀️",
  date: "Monday, February 24, 2026",
  weather: "62°F, Partly Cloudy",
  summary: "You have 3 tasks due today, a relationship check-in reminder, and your grocery shopping is scheduled for this afternoon.",
  highlights: [
    "💰 You're $200 under budget this month — great job!",
    "❤️ Relationship health score is up 3 points this week",
    "🏠 Smoke detector batteries need replacing (overdue)",
    "🎂 Sarah's birthday is in 9 days — gift not yet purchased",
  ],
};
