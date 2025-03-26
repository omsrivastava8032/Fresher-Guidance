
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { useAuth } from '@/context/AuthContext';
import { toast } from "sonner";

const Payment = () => {
  const { user, updateUserPremium } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Update user premium status
    updateUserPremium(true);
    setLoading(false);
    
    toast.success("Premium subscription activated", {
      description: "Thank you for subscribing to our premium plan!",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Upgrade Your Learning Journey</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Get premium access to personalized guidance and exclusive features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>Free Plan</CardTitle>
              <CardDescription>Current plan</CardDescription>
              <div className="mt-4 text-3xl font-bold">$0</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Basic goals tracking</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Suggested courses</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Certificates tracking</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-muted-foreground shrink-0 mt-0.5">
                    <X className="h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground">Personalized roadmap</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-muted-foreground shrink-0 mt-0.5">
                    <X className="h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground">Personal guidance with mentors</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-muted-foreground shrink-0 mt-0.5">
                    <X className="h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground">Internship opportunities</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-muted-foreground shrink-0 mt-0.5">
                    <X className="h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground">University transfer program</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <Badge className="w-full justify-center py-1">Current Plan</Badge>
              </div>
            </CardFooter>
          </Card>
          
          <Card className="relative overflow-hidden border-primary">
            <div className="absolute top-0 right-0">
              <Badge className="rounded-tl-none rounded-br-none bg-primary text-primary-foreground">Recommended</Badge>
            </div>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
              <CardDescription>Unlock all features</CardDescription>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$10</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>All features in Free plan</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Personalized career roadmap</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">1-on-1 video mentoring sessions</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Exclusive internship opportunities</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">University transfer guidance</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Priority support</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>Resume review and feedback</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleSubscribe}
                disabled={loading || user?.premium}
              >
                {loading ? "Processing..." : user?.premium ? "Already Subscribed" : "Upgrade Now"}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <h3 className="font-medium">Can I cancel my subscription at any time?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Yes, you can cancel your premium subscription at any time. Your access will continue until the end of your current billing period.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">How many mentoring sessions do I get?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    With the premium plan, you get 2 one-on-one mentoring sessions per month. Additional sessions can be purchased separately.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Are there any student discounts?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Yes, we offer a 20% discount for students. Please contact our support team with proof of your student status to receive your discount code.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    We accept all major credit cards, PayPal, and select regional payment methods. All payments are processed securely.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-center w-full text-sm text-muted-foreground">
                Have more questions? <a href="#" className="text-primary underline">Contact our support team</a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
