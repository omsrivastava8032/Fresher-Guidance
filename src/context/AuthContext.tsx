
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "@/components/ui/sonner";

type User = {
  id: string;
  email: string;
  name: string;
  premium: boolean;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserPremium: (premium: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for user in local storage
    const storedUser = localStorage.getItem('fresherguidance_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const updateUser = (userData: User | null) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('fresherguidance_user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('fresherguidance_user');
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // This is a mock implementation - in a real app, this would call an API
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock authentication logic - in a real app, this would verify credentials with a backend
      if (email && password) {
        // Mock successful login
        const userData: User = {
          id: 'user_' + Math.random().toString(36).substring(2, 9),
          email,
          name: email.split('@')[0],
          premium: false,
        };
        
        updateUser(userData);
        toast.success("Login successful", {
          description: `Welcome back, ${userData.name}!`,
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast.error("Login failed", {
        description: error instanceof Error ? error.message : "Please check your credentials and try again",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (name && email && password) {
        const userData: User = {
          id: 'user_' + Math.random().toString(36).substring(2, 9),
          email,
          name,
          premium: false,
        };
        
        updateUser(userData);
        toast.success("Registration successful", {
          description: `Welcome to Fresher Guidance, ${name}!`,
        });
      } else {
        throw new Error('Please complete all fields');
      }
    } catch (error) {
      toast.error("Registration failed", {
        description: error instanceof Error ? error.message : "Please check your information and try again",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    updateUser(null);
    toast.success("Logged out successfully");
  };

  const updateUserPremium = (premium: boolean) => {
    if (user) {
      const updatedUser = { ...user, premium };
      updateUser(updatedUser);
      toast.success(premium ? "Premium features activated!" : "Premium status updated");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        updateUserPremium,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
