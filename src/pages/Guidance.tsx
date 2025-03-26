
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Guidance = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Personal Guidance</h1>
          <p className="text-muted-foreground mt-2">Connect with industry experts for personalized mentoring</p>
        </div>
        <Badge variant="outline" className="px-3 py-1">Premium Feature</Badge>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Your Upcoming Sessions</CardTitle>
              <CardDescription>Scheduled mentoring calls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-accent rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-center">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Mentor" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Career Guidance Session</h3>
                      <p className="text-sm text-muted-foreground">with Alex Morgan, Senior Developer</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <div className="text-sm font-medium">Tomorrow, 3:00 PM</div>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline">Reschedule</Button>
                      <Button size="sm">Join Call</Button>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-background px-4 text-xs text-muted-foreground">Past Sessions</span>
                  </div>
                </div>
                
                <div className="bg-muted/40 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-center">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Mentor" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">React Project Review</h3>
                      <p className="text-sm text-muted-foreground">with Jason Davis, Frontend Expert</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <div className="text-sm text-muted-foreground">May 15, 2023</div>
                    <Button size="sm" variant="ghost" className="mt-2">View Recording</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book a New Session</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Session History & Notes</CardTitle>
              <CardDescription>Your past mentoring sessions and guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">React Project Review</h3>
                    <span className="text-xs text-muted-foreground">May 15, 2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Jason provided feedback on component structure and state management. Suggested implementing useContext for better state sharing between components.
                  </p>
                  <div className="bg-accent/50 p-3 rounded text-sm">
                    <p className="font-medium mb-1">Key Takeaways:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Refactor user authentication flow</li>
                      <li>Add unit tests for critical components</li>
                      <li>Optimize performance by memoizing expensive calculations</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Career Path Discussion</h3>
                    <span className="text-xs text-muted-foreground">April 28, 2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Discussed frontend specialization vs. full-stack roles. Alex recommended focusing on React ecosystem while gradually learning Node.js for backend development.
                  </p>
                  <div className="bg-accent/50 p-3 rounded text-sm">
                    <p className="font-medium mb-1">Key Takeaways:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Build 2-3 solid portfolio projects showing depth of knowledge</li>
                      <li>Join open source projects to gain collaborative experience</li>
                      <li>Prepare for technical interviews by practicing algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Featured Mentors</CardTitle>
              <CardDescription>Industry experts available for guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Alex Morgan", role: "Senior Frontend Developer", expertise: "React, TypeScript, UI/UX" },
                  { name: "Sophia Chen", role: "Tech Lead", expertise: "Full Stack, System Design" },
                  { name: "Marcus Johnson", role: "Engineering Manager", expertise: "Career Development, Leadership" }
                ].map((mentor, index) => (
                  <div key={index} className="flex items-center gap-3 pb-3 border-b last:border-0 last:pb-0">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/100?img=${index + 10}`} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-sm">{mentor.name}</h3>
                      <p className="text-xs text-muted-foreground">{mentor.role}</p>
                      <p className="text-xs mt-1">
                        <Badge variant="secondary" className="text-xs font-normal">
                          {mentor.expertise}
                        </Badge>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Mentors</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>Get the most from your mentoring sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">1</div>
                  <div>
                    <h3 className="font-medium">Book a Session</h3>
                    <p className="text-sm text-muted-foreground">Choose a mentor that matches your needs and schedule a time.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">2</div>
                  <div>
                    <h3 className="font-medium">Prepare Questions</h3>
                    <p className="text-sm text-muted-foreground">List your goals and specific questions before the call.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">3</div>
                  <div>
                    <h3 className="font-medium">Join the Video Call</h3>
                    <p className="text-sm text-muted-foreground">Connect with your mentor via our secure video platform.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">4</div>
                  <div>
                    <h3 className="font-medium">Follow Up</h3>
                    <p className="text-sm text-muted-foreground">Review session notes and implement suggested actions.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
