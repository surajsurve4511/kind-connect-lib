// Onboarding Flow Data

export const lifeStages = [
    { id: "new-together", label: "New Together", description: "Just started your journey as a couple", icon: "🌱", color: "mint" },
    { id: "building-foundation", label: "Building Foundation", description: "Establishing your life together", icon: "🏗️", color: "sky" },
    { id: "growing-family", label: "Growing Family", description: "Expanding your family unit", icon: "👶", color: "amber" },
    { id: "raising-kids", label: "Raising Kids", description: "Navigating parenthood together", icon: "🎈", color: "coral" },
    { id: "established-life", label: "Established Life", description: "Settled and thriving together", icon: "🏡", color: "lavender" },
    { id: "empty-nest", label: "Empty Nest", description: "Kids have grown and moved on", icon: "🕊️", color: "rose" },
    { id: "pre-retirement", label: "Pre-Retirement", description: "Planning for the next chapter", icon: "🌅", color: "amber" },
    { id: "golden-years", label: "Golden Years", description: "Enjoying life's rewards together", icon: "✨", color: "coral" },
];

export const relationshipTypes = [
    { id: "dating", label: "Dating", icon: "💕" },
    { id: "engaged", label: "Engaged", icon: "💍" },
    { id: "married", label: "Married", icon: "💒" },
    { id: "long-distance", label: "Long Distance", icon: "🌍" },
    { id: "same-sex", label: "Same-Sex", icon: "🏳️‍🌈" },
    { id: "blended-family", label: "Blended Family", icon: "👨‍👩‍👧‍👦" },
];

export const familyStructures = [
    { id: "childless", label: "No Children (Yet)", icon: "👫" },
    { id: "expecting", label: "Expecting", icon: "🤰" },
    { id: "parent", label: "Parent(s)", icon: "👨‍👩‍👧" },
    { id: "single-parent", label: "Single Parent", icon: "👩‍👧" },
    { id: "multi-generational", label: "Multi-Generational", icon: "👨‍👩‍👧‍👦" },
];

export const ageGroups = [
    { id: "18-24", label: "18–24" },
    { id: "25-34", label: "25–34" },
    { id: "35-44", label: "35–44" },
    { id: "45-54", label: "45–54" },
    { id: "55-64", label: "55–64" },
    { id: "65+", label: "65+" },
];

export const countries = [
    { id: "us", label: "United States", currency: "USD", units: "imperial" },
    { id: "uk", label: "United Kingdom", currency: "GBP", units: "metric" },
    { id: "ca", label: "Canada", currency: "CAD", units: "metric" },
    { id: "au", label: "Australia", currency: "AUD", units: "metric" },
    { id: "in", label: "India", currency: "INR", units: "metric" },
    { id: "de", label: "Germany", currency: "EUR", units: "metric" },
];

export const languages = [
    { id: "en", label: "English" },
    { id: "es", label: "Spanish" },
    { id: "fr", label: "French" },
    { id: "de", label: "German" },
    { id: "hi", label: "Hindi" },
    { id: "zh", label: "Chinese" },
];

export const loveLanguageQuiz = [
    {
        id: 1,
        question: "After a long day, what feels most meaningful to you?",
        options: [
            { label: "A heartfelt compliment or message from my partner", type: "words" },
            { label: "My partner doing a chore I was dreading", type: "acts" },
            { label: "A warm hug or cuddle on the couch", type: "touch" },
            { label: "Spending uninterrupted time talking together", type: "quality" },
            { label: "Receiving a small, thoughtful surprise gift", type: "gifts" },
        ],
    },
    {
        id: 2,
        question: "How do you prefer to show love?",
        options: [
            { label: "Writing love notes or sending sweet texts", type: "words" },
            { label: "Cooking their favorite meal or helping out", type: "acts" },
            { label: "Holding hands, back rubs, physical closeness", type: "touch" },
            { label: "Planning a special date or activity together", type: "quality" },
            { label: "Finding the perfect gift that says 'I know you'", type: "gifts" },
        ],
    },
    {
        id: 3,
        question: "What bothers you most when missing from your relationship?",
        options: [
            { label: "Not hearing 'I love you' or 'I'm proud of you'", type: "words" },
            { label: "Partner not helping when I'm overwhelmed", type: "acts" },
            { label: "Lack of physical affection", type: "touch" },
            { label: "Not having meaningful conversations", type: "quality" },
            { label: "Forgetting important dates or occasions", type: "gifts" },
        ],
    },
    {
        id: 4,
        question: "What makes you feel most appreciated?",
        options: [
            { label: "Being told specifically what my partner loves about me", type: "words" },
            { label: "Coming home to find something done without asking", type: "acts" },
            { label: "A spontaneous kiss or embrace", type: "touch" },
            { label: "An evening with no phones, just us", type: "quality" },
            { label: "A surprise that shows they were thinking of me", type: "gifts" },
        ],
    },
    {
        id: 5,
        question: "What's your ideal weekend together?",
        options: [
            { label: "Deep conversations about dreams and feelings", type: "words" },
            { label: "Tackling a home project as a team", type: "acts" },
            { label: "Lazy morning cuddles and physical closeness", type: "touch" },
            { label: "An adventure or shared experience together", type: "quality" },
            { label: "Exchanging thoughtful presents or experiences", type: "gifts" },
        ],
    },
];

export const financialPreferences = [
    { id: "fully-open", label: "Fully Open", description: "Share everything — all accounts, spending, and goals visible to both", icon: "👁️" },
    { id: "partially-shared", label: "Partially Shared", description: "Joint accounts visible; personal accounts private", icon: "🔓" },
    { id: "private", label: "Private", description: "Each partner manages finances independently, share only what you choose", icon: "🔒" },
];

export const lifeGoals = [
    { id: "financial-freedom", label: "Financial Freedom", icon: "💰" },
    { id: "start-family", label: "Start a Family", icon: "👶" },
    { id: "buy-home", label: "Buy a Home", icon: "🏡" },
    { id: "travel-world", label: "Travel the World", icon: "✈️" },
    { id: "career-growth", label: "Career Growth", icon: "📈" },
    { id: "health-wellness", label: "Health & Wellness", icon: "🧘" },
    { id: "relationship-strength", label: "Strengthen Relationship", icon: "❤️" },
    { id: "education", label: "Education & Learning", icon: "📚" },
    { id: "retirement", label: "Plan for Retirement", icon: "🌅" },
    { id: "give-back", label: "Give Back to Community", icon: "🤝" },
];

export const subscriptionTiers = [
    {
        id: "free",
        name: "Starter",
        price: "$0/mo",
        description: "Basic life management for couples",
        features: ["Dashboard & 3 pillars", "Basic task management", "Shared calendar", "5 document uploads"],
        recommended: false,
    },
    {
        id: "plus",
        name: "LifeSync Plus",
        price: "$9.99/mo",
        description: "Full access to all life pillars",
        features: ["All 8 life pillars", "AI Assistant (basic)", "Unlimited documents", "Financial tracking", "Health profiles", "Family planning tools"],
        recommended: true,
    },
    {
        id: "premium",
        name: "LifeSync Premium",
        price: "$19.99/mo",
        description: "Everything + AI-powered insights",
        features: ["Everything in Plus", "Advanced AI insights", "Auto-pilot tasks", "Priority support", "API integrations", "Custom reports", "Offline access"],
        recommended: false,
    },
];
