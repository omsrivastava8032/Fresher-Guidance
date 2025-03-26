
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { lazy, Suspense } from "react";

// Layout components
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";

// Pages
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Goals = lazy(() => import("./pages/Goals"));
const Courses = lazy(() => import("./pages/Courses"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Guidance = lazy(() => import("./pages/Guidance"));
const Internships = lazy(() => import("./pages/Internships"));
const University = lazy(() => import("./pages/University"));
const Payment = lazy(() => import("./pages/Payment"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <LoadingScreen />;
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

// Premium route component
const PremiumRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to="/login" replace />;
  return user.premium ? <>{children}</> : <Navigate to="/payment" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Layout><Dashboard /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/goals" element={
                <ProtectedRoute>
                  <Layout><Goals /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/courses" element={
                <ProtectedRoute>
                  <Layout><Courses /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/certificates" element={
                <ProtectedRoute>
                  <Layout><Certificates /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/payment" element={
                <ProtectedRoute>
                  <Layout><Payment /></Layout>
                </ProtectedRoute>
              } />
              
              {/* Premium routes */}
              <Route path="/roadmap" element={
                <PremiumRoute>
                  <Layout><Roadmap /></Layout>
                </PremiumRoute>
              } />
              <Route path="/guidance" element={
                <PremiumRoute>
                  <Layout><Guidance /></Layout>
                </PremiumRoute>
              } />
              <Route path="/internships" element={
                <PremiumRoute>
                  <Layout><Internships /></Layout>
                </PremiumRoute>
              } />
              <Route path="/university" element={
                <PremiumRoute>
                  <Layout><University /></Layout>
                </PremiumRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
