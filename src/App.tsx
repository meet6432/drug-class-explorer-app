import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import TakeTest from "./pages/TakeTest";
import DiseaseLookup from "./components/DiseaseLookup";
import DataManagement from "./components/DataManagement";
import NotFound from "./pages/NotFound";
import DrugInteractionChecker from "./components/DrugInteractionChecker";
import DrugClassExplorer from "./components/DrugClassExplorer";
import ClinicalCaseSimulator from "./components/ClinicalCaseSimulator";
import DosageCalculator from "./components/DosageCalculator";
import SideEffectsDatabase from "./components/SideEffectsDatabase";
import PharmacokineticsSimulator from "./components/PharmacokineticsSimulator";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/test/:shareLink" element={<TakeTest />} />
            <Route path="/diseases" element={<DiseaseLookup onBackToMenu={() => window.history.back()} />} />
            <Route path="/data-management" element={<DataManagement />} />
            <Route path="/drug-interactions" element={<DrugInteractionChecker onBackToMenu={() => window.history.back()} />} />
            <Route path="/drug-classes" element={<DrugClassExplorer onBackToMenu={() => window.history.back()} />} />
            <Route path="/clinical-cases" element={<ClinicalCaseSimulator onBackToMenu={() => window.history.back()} />} />
            <Route path="/dosage-calculator" element={<DosageCalculator onBackToMenu={() => window.history.back()} />} />
            <Route path="/side-effects" element={<SideEffectsDatabase onBackToMenu={() => window.history.back()} />} />
            <Route path="/pharmacokinetics" element={<PharmacokineticsSimulator onBackToMenu={() => window.history.back()} />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;
