import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ExercisePage from "./pages/Exercisepage.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import React from "react";
import Home from "./pages/Home";
import Sarapan from "./pages/Sarapan";
import Makansiang from "./pages/Makansiang";
import Makanmalam from "./pages/Makanmalam";
import Sandwichtelur from "./pages/sandwichtelur";
import Potatowedges from "./pages/Potatowedges";
import Saladsayur from "./pages/Saladsayur";
import Tumisbrokoli from "./pages/tumisbrokoli";
import Ayamteriyaki from "./pages/Ayamteriyaki";
import Ayamgoreng from "./pages/Ayamgoreng";
import Supkrim from "./pages/Supkrim";
import Chickenkatsu from "./pages/Chickenkatsu";
import Bihunkuah from "./pages/Bihunkuah";
import CatatanSehat from "./pages/Catatansehat";
import Dashboard from "./pages/Dashboard";
import SleepTracker from "./pages/SleepTracker.jsx";
import HealthInputPage from "./pages/HealthInputPage.jsx";
import HealthMonitorPage from "./pages/HealthMonitorPage.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/exercise/:type" element={<ExercisePage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />

              <Route
                path="/payment"
                element={<PrivateRoute element={<PaymentPage />} />}
              />
              <Route
                path="/home"
                element={
                  <PrivateRoute element={<PrivateRoute element={<Home />} />} />
                }
              />
              <Route
                path="/sarapan"
                element={<PrivateRoute element={<Sarapan />} />}
              />
              <Route
                path="/makansiang"
                element={<PrivateRoute element={<Makansiang />} />}
              />
              <Route
                path="/makanmalam"
                element={<PrivateRoute element={<Makanmalam />} />}
              />
              <Route
                path="/sandwichtelur"
                element={<PrivateRoute element={<Sandwichtelur />} />}
              />
              <Route
                path="/potatowedges"
                element={<PrivateRoute element={<Potatowedges />} />}
              />
              <Route
                path="/saladsayur"
                element={<PrivateRoute element={<Saladsayur />} />}
              />
              <Route
                path="/tumisbrokoli"
                element={<PrivateRoute element={<Tumisbrokoli />} />}
              />
              <Route
                path="/ayamteriyaki"
                element={<PrivateRoute element={<Ayamteriyaki />} />}
              />
              <Route
                path="/ayamgoreng"
                element={<PrivateRoute element={<Ayamgoreng />} />}
              />

              <Route
                path="/supkrim"
                element={<PrivateRoute element={<Supkrim />} />}
              />
              <Route
                path="/chickenkatsu"
                element={<PrivateRoute element={<Chickenkatsu />} />}
              />
              <Route
                path="/bihunkuah"
                element={<PrivateRoute element={<Bihunkuah />} />}
              />
              <Route
                path="/catatansehat"
                element={<PrivateRoute element={<CatatanSehat />} />}
              />
              <Route
                path="/dashboard"
                element={<PrivateRoute element={<Dashboard />} />}
              />
              <Route
                path="/sleep-tracker"
                element={<PrivateRoute element={<SleepTracker />} />}
              />
              <Route
                path="/health-input"
                element={<PrivateRoute element={<HealthInputPage />} />}
              />
              <Route
                path="/health-monitor"
                element={<PrivateRoute element={<HealthMonitorPage />} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
