

# LifeSync — Complete UI Implementation Plan

## Overview
Build the entire LifeSync "Life Operating System" UI — all 8 pillars, every screen, every feature — as a beautiful, interactive frontend with mock data. Warm, emotionally resonant design with soft corals, rounded elements, and card-based layouts.

---

## Phase 1: Foundation & App Shell

### Design System
- Warm color palette: coral/rose primary, soft blue secondary, cream backgrounds
- Rounded corners, soft shadows, friendly typography
- Custom CSS variables for the LifeSync theme (light mode)

### App Shell & Layout
- Sidebar navigation with icons for: Home, all 8 Pillars, AI Assistant, Settings
- Top header bar with partner avatars, notification bell, search, and AI chat toggle
- Responsive layout using SidebarProvider
- Bottom navigation hint for mobile

### Home Dashboard
- **Morning Brief** card — today's summary across all pillars
- **Relationship Pulse** — circular score gauge with partner connection status
- **Today's Priorities** — top tasks from all pillars
- **Quick Actions** grid — 8 pillar shortcuts
- **Life Timeline** — recent milestones carousel
- Mini-widgets row from each pillar (finances, health, tasks, etc.)

---

## Phase 2: Relationship & Emotional Wellness (Pillar 1)

### Connection Hub
- Relationship health score visualization (circular gauge)
- "Today's Moment" prompt card
- Love language profiles for both partners (radar chart)
- Daily check-in cards

### Shared Journal & Communication
- Co-authored journal entries list with photos
- Emotional check-in UI with emoji selector and mood scale
- Gratitude exchange cards
- Conversation starter generator
- "Say This Instead" communication helper

### Intimacy & Romance
- Date night planner with idea cards
- Surprise generator UI
- Romance budget tracker
- Intimacy calendar (tasteful, abstract)

### Memory & Legacy
- Smart photo album grid
- "On This Day" memories card
- Life story builder timeline
- Time capsule creator
- Anniversary & milestone timeline with countdown

---

## Phase 3: Home & Household Management (Pillar 2)

### Task & Chore Dashboard
- Task list with assignee avatars and priority badges
- Fair distribution visualization (bar chart comparing partners)
- Recurring task scheduler
- Gamification points display and leaderboard

### Grocery & Pantry
- Shopping list builder with categories
- Meal planner (weekly calendar grid)
- Pantry inventory tracker with expiry alerts
- Recipe suggestions cards

### Home Maintenance
- Maintenance calendar with upcoming tasks
- Appliance warranty tracker table
- Service provider directory cards
- Home project tracker with progress bars

### Smart Home & Moving
- Smart home integration dashboard mockup (device cards, energy chart)
- Moving checklist with progress
- Neighborhood comparison cards
- Address change tracker

---

## Phase 4: Financial Life Management (Pillar 3)

### Financial Dashboard
- Unified account overview with net worth chart (Recharts area chart)
- Income vs expenses bar chart
- Account cards (checking, savings, credit, investment)
- Recent transactions list

### Budgeting
- Envelope budgeting UI with visual spending categories
- Monthly budget progress bars
- Bill tracker with due dates
- Subscription audit list with cancel suggestions

### Savings & Goals
- Visual savings pots with progress rings
- Emergency fund thermometer
- Goal timeline projections
- Savings challenges cards

### Investments & Debt
- Portfolio overview with asset allocation pie chart
- Retirement projection line chart
- Debt inventory table
- Payoff strategy comparison (avalanche vs snowball charts)
- Credit score display gauge

### Tax & Insurance
- Document organizer file list
- Tax deduction tracker
- Insurance coverage cards with gap analysis
- Year-end tax summary

---

## Phase 5: Family Planning & Parenting (Pillar 4)

### Pre-Conception & Pregnancy
- Family readiness assessment dashboard with radar chart
- Fertility tracker calendar
- Week-by-week pregnancy tracker with fetal development illustrations
- Symptom log and appointment scheduler
- Birth plan builder checklist

### Newborn & Child Care
- Feeding tracker (bottle/breast log)
- Sleep tracker with pattern charts
- Baby milestone timeline
- Vaccination record table
- Growth chart (height/weight over time)

### Child Development & Education
- Age-appropriate milestone checklist
- School management dashboard
- Co-parenting calendar
- Education savings tracker
- College prep timeline

### Eldercare
- Care needs assessment cards
- Medication management table
- Appointment tracker
- Emergency contacts and legal documents list

---

## Phase 6: Health & Wellness (Pillar 5)

### Health Profiles
- Individual health cards for each partner
- Conditions, medications, allergies lists
- Health score overview gauge
- Emergency medical info card

### Medical Management
- Appointment scheduler calendar
- Medication tracker with reminders list
- Lab results trends (line charts)
- Doctor/specialist directory
- Health insurance claims tracker

### Fitness & Activity
- Workout plan cards
- Couple workout suggestions
- Activity tracking charts (steps, calories, distance)
- Wearable data dashboard mockup
- Exercise history log

### Mental Health
- Mood tracker with daily trend chart
- Stress level monitoring gauge
- Meditation library grid with session cards
- Journaling interface
- Sleep quality tracker

### Nutrition
- Meal plan calendar
- Macro/calorie tracker with pie chart
- Dietary restriction manager
- Supplement tracker
- Weight management chart with goal line

---

## Phase 7: Career & Professional Growth (Pillar 6)

### Career Profiles
- Individual career dashboards with current role, goals, skills
- Skills inventory with proficiency bars
- Certification tracker
- Professional development plan

### Career Alignment
- Partner career compatibility visualization
- "Career Priority Turns" framework UI
- Work schedule overlap calendar
- Income contribution chart

### Job Search & Entrepreneurship
- Job application pipeline (kanban board)
- Interview tracker with stages
- Salary benchmarking comparison
- Side hustle tracker cards
- Business idea validator scorecard

### Work-Life Integration
- Calendar optimization view with color-coded blocks
- "Protected Time" block scheduler
- Commute/remote work balance chart
- Professional network management

---

## Phase 8: Future Planning & Life Goals (Pillar 7)

### Vision Board & Bucket List
- Visual board with draggable cards (grid layout)
- Shared bucket list with progress tracking
- Dream categories (travel, experiences, achievements)
- Timeline/deadline tracker

### Property & Real Estate
- Home buying readiness dashboard with score
- Mortgage calculator with sliders
- Down payment savings tracker
- Property comparison cards
- Renovation budget planner

### Retirement & Estate
- Retirement countdown timer
- Income projection charts
- Savings gap analysis
- Will & estate planning checklist
- Beneficiary tracker table
- Digital asset inventory
- Legacy letter builder

### Travel Planning
- Bucket list destinations map/grid
- Trip planner with itinerary builder
- Travel document manager (passports, visas)
- Travel budget tracker

---

## Phase 9: Social Life & Experiences (Pillar 8)

### Social Calendar
- Unified event calendar view
- RSVP management cards
- Event planning checklists
- Hosting planner

### Celebrations & Gifts
- Birthday/anniversary tracker with countdown
- Holiday organizer
- Gift manager with AI recommendation cards
- Gift budget tracker per person
- Thank you note tracker

### Community
- Volunteer opportunity finder
- Community group manager
- Neighborhood connections
- Shared interest groups

---

## Phase 10: Cross-Cutting Features

### AI Assistant Interface
- Floating chat panel (slide-in from right)
- AI suggestion cards throughout the app
- Morning brief generator
- Smart recommendations contextual to current page

### Notifications & Settings
- Smart notification hub with categorized, prioritized alerts
- Partner sync status indicators throughout
- Settings page: profile, relationship info, life stage selector, notification preferences, privacy controls, theme options
- Subscription tier comparison page (Free/Premium/Family)

### Onboarding Flow
- Welcome screen with couple illustration
- Life stage selector (newlyweds, expecting, established, etc.)
- Pillar priority picker
- Partner invite/linking UI
- Quick preference setup

---

## Technical Approach
- ~40+ page components with React Router
- All data is mock/static JSON — no backend needed
- Recharts for all data visualizations
- Shadcn UI components throughout
- Organized folder structure: `src/pages/{pillar}/`, `src/components/{pillar}/`
- Shared mock data in `src/data/` folder

