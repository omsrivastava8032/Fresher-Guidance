
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Certificates & Qualifications</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Your Current Certificates</CardTitle>
            </div>
            <CardDescription>Showcase your achievements</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Empty state */}
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">No certificates yet</h3>
              <p className="text-muted-foreground mt-1 mb-4 max-w-xs mx-auto">
                Complete courses and earn certificates to showcase your skills.
              </p>
              <Button variant="outline" size="sm">Upload Certificate</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Certifications</CardTitle>
            <CardDescription>Based on your goals and progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-accent/50 p-4 rounded-lg flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">React Developer Certificate</h3>
                <p className="text-sm text-muted-foreground">Verify your React skills with this industry-recognized certification.</p>
                <Button variant="link" className="h-auto p-0 text-sm mt-1">Learn more</Button>
              </div>
            </div>
            
            <div className="bg-accent/50 p-4 rounded-lg flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">JavaScript Fundamentals</h3>
                <p className="text-sm text-muted-foreground">Master core JavaScript concepts and earn this essential certificate.</p>
                <Button variant="link" className="h-auto p-0 text-sm mt-1">Learn more</Button>
              </div>
            </div>
            
            <div className="bg-accent/50 p-4 rounded-lg flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Node.js Backend Specialist</h3>
                <p className="text-sm text-muted-foreground">Validate your backend development skills with this comprehensive certification.</p>
                <Button variant="link" className="h-auto p-0 text-sm mt-1">Learn more</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Certification Roadmap</CardTitle>
          <CardDescription>Recommended certification path based on your career goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-0.5 bg-border"></div>
            
            <div className="relative mb-8 pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-medium">Fundamentals Certification</h3>
              <p className="text-sm text-muted-foreground mt-1">Validate your core programming knowledge across HTML, CSS and JavaScript</p>
              <Badge className="mt-2">Beginner</Badge>
            </div>
            
            <div className="relative mb-8 pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-medium">Frontend Developer Certification</h3>
              <p className="text-sm text-muted-foreground mt-1">Demonstrate your frontend skills with React and modern UI frameworks</p>
              <Badge className="mt-2" variant="outline">Intermediate</Badge>
            </div>
            
            <div className="relative mb-8 pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium">Backend Developer Certification</h3>
              <p className="text-sm text-muted-foreground mt-1">Certify your skills in server-side development and database management</p>
              <Badge className="mt-2" variant="outline">Intermediate</Badge>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-bold">4</span>
              </div>
              <h3 className="text-lg font-medium">Full Stack Developer Certification</h3>
              <p className="text-sm text-muted-foreground mt-1">The comprehensive certification that validates all your web development skills</p>
              <Badge className="mt-2" variant="secondary">Advanced</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View Details</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Certificates;
