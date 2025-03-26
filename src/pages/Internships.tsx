
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Internships = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Internship Opportunities</h1>
          <p className="text-muted-foreground mt-2">Curated internships to kickstart your career</p>
        </div>
        <Badge variant="outline" className="px-3 py-1">Premium Feature</Badge>
      </div>
      
      <Tabs defaultValue="recommended" className="mb-8">
        <TabsList>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="new">New Listings</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recommended">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              {
                company: "TechFlow",
                position: "Frontend Developer Intern",
                location: "Remote",
                type: "Part-time",
                tags: ["React", "JavaScript", "UI/UX"],
                deadline: "Aug 15, 2023",
                logo: "T"
              },
              {
                company: "DataViz Inc.",
                position: "Data Science Intern",
                location: "New York, NY",
                type: "Full-time",
                tags: ["Python", "Machine Learning", "SQL"],
                deadline: "Aug 20, 2023",
                logo: "D"
              },
              {
                company: "CloudFusion",
                position: "Full Stack Developer Intern",
                location: "San Francisco, CA",
                type: "Full-time",
                tags: ["JavaScript", "Node.js", "React"],
                deadline: "Aug 25, 2023",
                logo: "C"
              },
              {
                company: "MobileFirst",
                position: "Mobile App Developer Intern",
                location: "Remote",
                type: "Part-time",
                tags: ["React Native", "iOS", "Android"],
                deadline: "Aug 30, 2023",
                logo: "M"
              }
            ].map((internship, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6 flex gap-4">
                  <div className="flex-none w-12 h-12 rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    {internship.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{internship.position}</h3>
                    <p className="text-sm text-muted-foreground">{internship.company}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">{internship.location}</Badge>
                      <Badge variant="outline" className="text-xs">{internship.type}</Badge>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-2">
                  <div className="flex flex-wrap gap-1">
                    {internship.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <CardFooter className="flex justify-between items-center border-t bg-muted/30 px-6 py-3">
                  <div className="text-xs">Apply by {internship.deadline}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">Save</Button>
                    <Button size="sm">Apply</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="new">
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-muted-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium">New listings coming soon</h3>
            <p className="text-muted-foreground mt-2 mb-4">We're updating our internship database with fresh opportunities.</p>
            <Button variant="outline">Notify me of new opportunities</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="applied">
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-muted-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium">No applications yet</h3>
            <p className="text-muted-foreground mt-2 mb-4">You haven't applied to any internships yet.</p>
            <Button variant="outline">Browse opportunities</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="saved">
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-muted-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium">No saved internships</h3>
            <p className="text-muted-foreground mt-2 mb-4">Save internships to review them later.</p>
            <Button variant="outline">Browse opportunities</Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Internship Application Tips</CardTitle>
              <CardDescription>Maximize your chances of landing your dream internship</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Perfect Your Resume</h3>
                <p className="text-sm text-muted-foreground">
                  Tailor your resume for each application, highlighting relevant skills and projects. Keep it concise and focused on achievements rather than responsibilities.
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  <li>Use strong action verbs to describe your experiences</li>
                  <li>Quantify your achievements whenever possible</li>
                  <li>Include relevant technical skills and proficiency levels</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Build a Portfolio</h3>
                <p className="text-sm text-muted-foreground">
                  Create a polished online portfolio showcasing your best projects. Include detailed descriptions, the technologies used, and your specific contributions.
                </p>
                <div className="mt-2 p-3 bg-accent/50 rounded-md">
                  <p className="text-sm font-medium">Pro Tip</p>
                  <p className="text-xs text-muted-foreground">
                    Include a link to your GitHub profile and make sure repositories are well-documented with descriptive README files.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Ace the Technical Interview</h3>
                <p className="text-sm text-muted-foreground">
                  Practice coding challenges regularly and review fundamental computer science concepts. Be prepared to explain your thought process clearly.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2 bg-muted rounded-md">
                    <p className="text-xs font-medium">Data Structures</p>
                    <p className="text-xs text-muted-foreground">Arrays, linked lists, trees, graphs</p>
                  </div>
                  <div className="p-2 bg-muted rounded-md">
                    <p className="text-xs font-medium">Algorithms</p>
                    <p className="text-xs text-muted-foreground">Sorting, searching, dynamic programming</p>
                  </div>
                  <div className="p-2 bg-muted rounded-md">
                    <p className="text-xs font-medium">System Design</p>
                    <p className="text-xs text-muted-foreground">Basic architecture and design patterns</p>
                  </div>
                  <div className="p-2 bg-muted rounded-md">
                    <p className="text-xs font-medium">Problem Solving</p>
                    <p className="text-xs text-muted-foreground">Time/space complexity analysis</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Download Complete Guide</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Internship Stats</CardTitle>
              <CardDescription>Based on our recent placements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Application to Interview Rate</span>
                    <span className="font-medium">28%</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Interview to Offer Rate</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Internship to Full-time Conversion</span>
                    <span className="font-medium">63%</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '63%' }}></div>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <h3 className="font-medium text-sm mb-2">Top Industries</h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm">Software Development (45%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                      <span className="text-sm">Data Science (28%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                      <span className="text-sm">Product Management (15%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                      <span className="text-sm">UX/UI Design (12%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Mock Interviews</CardTitle>
              <CardDescription>Practice with industry experts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Prepare for technical interviews with real-world scenarios and expert feedback to improve your chances.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Card className="border bg-muted/30">
                    <CardContent className="p-3">
                      <h4 className="font-medium text-sm">Technical</h4>
                      <p className="text-xs text-muted-foreground">Coding & system design</p>
                      <p className="text-sm font-bold mt-1">$49</p>
                    </CardContent>
                  </Card>
                  <Card className="border bg-muted/30">
                    <CardContent className="p-3">
                      <h4 className="font-medium text-sm">Behavioral</h4>
                      <p className="text-xs text-muted-foreground">Soft skills & culture fit</p>
                      <p className="text-sm font-bold mt-1">$39</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Schedule a Mock Interview</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Internships;
