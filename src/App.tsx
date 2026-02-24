import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import RelationshipPage from "./pages/RelationshipPage";
import HouseholdPage from "./pages/HouseholdPage";
import FinancesPage from "./pages/FinancesPage";
import FamilyPage from "./pages/FamilyPage";
import HealthPage from "./pages/HealthPage";
import CareerPage from "./pages/CareerPage";
import FuturePage from "./pages/FuturePage";
import SocialPage from "./pages/SocialPage";
import AIAssistantPage from "./pages/AIAssistantPage";
import SettingsPage from "./pages/SettingsPage";
import OnboardingPage from "./pages/OnboardingPage";
import LifeTimelinePage from "./pages/LifeTimelinePage";
import EmergencyInfoPage from "./pages/EmergencyInfoPage";
import CoupleGoalsPage from "./pages/CoupleGoalsPage";
import DocumentsVaultPage from "./pages/DocumentsVaultPage";
import AcademyPage from "./pages/AcademyPage";
import WellbeingCheckInPage from "./pages/WellbeingCheckInPage";
import ActivityFeedPage from "./pages/ActivityFeedPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/relationship" element={<RelationshipPage />} />
            <Route path="/household" element={<HouseholdPage />} />
            <Route path="/finances" element={<FinancesPage />} />
            <Route path="/family" element={<FamilyPage />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/future" element={<FuturePage />} />
            <Route path="/social" element={<SocialPage />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/life-timeline" element={<LifeTimelinePage />} />
            <Route path="/emergency" element={<EmergencyInfoPage />} />
            <Route path="/couple-goals" element={<CoupleGoalsPage />} />
            <Route path="/documents" element={<DocumentsVaultPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/wellbeing" element={<WellbeingCheckInPage />} />
            <Route path="/activity" element={<ActivityFeedPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
