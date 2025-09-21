import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import UseCaseFinder from "@/pages/UseCaseFinder";
import Courses from "@/pages/Courses";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout><Index /></Layout>} path="/" />
          <Route element={<Layout><Courses /></Layout>} path="/courses" />
          <Route element={<Layout><About /></Layout>} path="/about" />
          <Route element={<Layout><Contact /></Layout>} path="/contact" />
          <Route element={<Layout><UseCaseFinder /></Layout>} path="/use-case-finder" />
          <Route element={<Layout><Login /></Layout>} path="/login" />
          <Route element={<Layout><Signup /></Layout>} path="/signup" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
