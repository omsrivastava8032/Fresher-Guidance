
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { 
  Laptop, 
  GraduationCap, 
  Award, 
  MapPin, 
  Video, 
  Briefcase, 
  Globe, 
  LogOut, 
  Crown, 
  Menu, 
  X, 
  User 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  premium?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: Laptop },
  { label: 'Goals', href: '/goals', icon: MapPin },
  { label: 'Courses', href: '/courses', icon: GraduationCap },
  { label: 'Certificates', href: '/certificates', icon: Award },
  { label: 'Roadmap', href: '/roadmap', icon: MapPin, premium: true },
  { label: 'Guidance', href: '/guidance', icon: Video, premium: true },
  { label: 'Internships', href: '/internships', icon: Briefcase, premium: true },
  { label: 'University Programs', href: '/university', icon: Globe, premium: true },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageTransitioning, setPageTransitioning] = useState(false);

  // Handle page transitions
  useEffect(() => {
    setPageTransitioning(true);
    const timer = setTimeout(() => setPageTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Close sidebar on mobile when navigating
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const handleNav = (href: string) => {
    navigate(href);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 transform bg-white/90 backdrop-blur-lg",
          "border-r border-border shadow-subtle transition-transform duration-300 ease-in-out",
          "lg:relative lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo and brand */}
          <div className="flex items-center h-16 px-6 border-b">
            <span className="text-xl font-medium">Fresher Guidance</span>
          </div>
          
          {/* Navigation items */}
          <nav className="flex-1 px-4 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.href;
                const isPremium = item.premium && !user?.premium;
                
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => isPremium ? navigate('/payment') : handleNav(item.href)}
                      className={cn(
                        "flex items-center w-full px-3 py-2 rounded-lg text-left",
                        "transition-all duration-200 group gap-3",
                        isActive 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-secondary text-foreground",
                        isPremium && "opacity-70"
                      )}
                    >
                      <item.icon className={cn(
                        "w-5 h-5",
                        isActive ? "" : "text-muted-foreground group-hover:text-foreground"
                      )} />
                      <span>{item.label}</span>
                      {isPremium && (
                        <Crown className="w-4 h-4 ml-auto text-amber-500" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* User section */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{user?.name}</p>
                <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start gap-2"
              onClick={() => logout()}
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="h-16 flex items-center justify-between px-6 border-b bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-medium hidden sm:block">
              {navItems.find(item => item.href === location.pathname)?.label || 'Dashboard'}
            </h1>
          </div>
          
          {/* User premium status */}
          <div className="flex items-center gap-3">
            {user?.premium ? (
              <div className="flex items-center text-amber-500 gap-1 px-3 py-1 bg-amber-50 rounded-full text-sm">
                <Crown className="w-3 h-3" />
                <span className="font-medium">Premium</span>
              </div>
            ) : (
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                onClick={() => navigate('/payment')}
              >
                <Crown className="w-4 h-4 mr-2" />
                Go Premium
              </Button>
            )}
          </div>
        </header>
        
        {/* Page content */}
        <main className={cn(
          "flex-1 overflow-y-auto p-6 transition-opacity duration-300",
          pageTransitioning ? "opacity-0" : "opacity-100"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}
