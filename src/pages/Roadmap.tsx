
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Roadmap = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Your Personalized Roadmap</h1>
          <p className="text-muted-foreground mt-2">Your path to becoming a Full Stack Developer</p>
        </div>
        <Badge variant="outline" className="px-3 py-1">Premium Feature</Badge>
      </div>
      
      <div className="space-y-8">
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary/20 z-0"></div>
          
          <div className="relative z-10 flex gap-4 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">1</div>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Fundamentals</CardTitle>
                <CardDescription>4-6 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>HTML, CSS basics</li>
                  <li>JavaScript fundamentals</li>
                  <li>Git & GitHub workflow</li>
                  <li>Basic terminal usage</li>
                </ul>
                <Button variant="outline" className="mt-4">View Resources</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative z-10 flex gap-4 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">2</div>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>8-10 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>CSS frameworks (Tailwind, Bootstrap)</li>
                  <li>JavaScript frameworks (React)</li>
                  <li>State management</li>
                  <li>API integration</li>
                </ul>
                <Button variant="outline" className="mt-4">View Resources</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative z-10 flex gap-4 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/40 text-primary-foreground">3</div>
            <Card className="flex-1 border-dashed">
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>8-10 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Node.js & Express</li>
                  <li>RESTful API design</li>
                  <li>Database integration (MongoDB, PostgreSQL)</li>
                  <li>Authentication & Authorization</li>
                </ul>
                <Button variant="outline" className="mt-4">View Resources</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative z-10 flex gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary-foreground">4</div>
            <Card className="flex-1 border-dashed">
              <CardHeader>
                <CardTitle>DevOps & Deployment</CardTitle>
                <CardDescription>4-6 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>CI/CD pipelines</li>
                  <li>Docker basics</li>
                  <li>Cloud deployment (AWS, Vercel)</li>
                  <li>Performance optimization</li>
                </ul>
                <Button variant="outline" className="mt-4">View Resources</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
