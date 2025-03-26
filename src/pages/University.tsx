
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const University = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">University Transfer Programs</h1>
          <p className="text-muted-foreground mt-2">Explore study abroad opportunities and transfer programs</p>
        </div>
        <Badge variant="outline" className="px-3 py-1">Premium Feature</Badge>
      </div>
      
      <Tabs defaultValue="opportunities">
        <TabsList className="mb-6">
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="application">Application Process</TabsTrigger>
          <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="opportunities">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Featured Transfer Programs</CardTitle>
                  <CardDescription>Top university transfer opportunities for international students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Global Engineering Exchange",
                        university: "Stanford University",
                        location: "California, USA",
                        duration: "1-2 semesters",
                        deadline: "October 15, 2023",
                        fields: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
                        requirements: "Min. GPA 3.5, 2+ years of undergraduate study completed"
                      },
                      {
                        name: "International Business Program",
                        university: "London School of Economics",
                        location: "London, UK",
                        duration: "1-2 semesters",
                        deadline: "November 30, 2023",
                        fields: ["Business Administration", "Economics", "Finance"],
                        requirements: "Min. GPA 3.2, IELTS 7.0 or equivalent"
                      },
                      {
                        name: "Computer Science Exchange",
                        university: "ETH Zurich",
                        location: "Zurich, Switzerland",
                        duration: "1-2 semesters",
                        deadline: "January 15, 2024",
                        fields: ["Computer Science", "Data Science", "AI/ML"],
                        requirements: "Min. GPA 3.4, completed core CS courses"
                      }
                    ].map((program, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6">
                          <div>
                            <h3 className="font-medium">{program.name}</h3>
                            <p className="text-sm text-muted-foreground">{program.university} • {program.location}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {program.fields.map((field, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">{field}</Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col items-start md:items-end">
                            <Badge variant="outline" className="mb-2">
                              Deadline: {program.deadline}
                            </Badge>
                            <Button size="sm">View Details</Button>
                          </div>
                        </div>
                        <div className="bg-muted/30 p-4 border-t">
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                            <div>
                              <span className="text-xs font-medium">Duration:</span>
                              <span className="text-xs text-muted-foreground ml-1">{program.duration}</span>
                            </div>
                            <div>
                              <span className="text-xs font-medium">Requirements:</span>
                              <span className="text-xs text-muted-foreground ml-1">{program.requirements}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Transfer Programs</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Eligibility Check</CardTitle>
                  <CardDescription>See which programs match your profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 py-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">Current University</label>
                      <input 
                        type="text" 
                        placeholder="Enter your university" 
                        className="w-full px-3 py-2 border rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Field of Study</label>
                      <input 
                        type="text" 
                        placeholder="E.g., Computer Science" 
                        className="w-full px-3 py-2 border rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Current GPA</label>
                      <input 
                        type="text" 
                        placeholder="E.g., 3.5" 
                        className="w-full px-3 py-2 border rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Year of Study</label>
                      <input 
                        type="text" 
                        placeholder="E.g., 2nd year" 
                        className="w-full px-3 py-2 border rounded-md text-sm"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Check Eligibility</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Success Stories</CardTitle>
                  <CardDescription>Students who benefited from our programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-medium">RJ</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Raj Kumar</h4>
                        <p className="text-xs text-muted-foreground">Computer Science</p>
                        <p className="text-xs mt-1">
                          "Transferred to MIT through the exchange program. Best decision of my academic career!"
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-medium">AZ</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Aisha Zhang</h4>
                        <p className="text-xs text-muted-foreground">Business Administration</p>
                        <p className="text-xs mt-1">
                          "Studied at LSE for a semester. The international exposure transformed my career prospects."
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-medium">MS</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Miguel Santos</h4>
                        <p className="text-xs text-muted-foreground">Mechanical Engineering</p>
                        <p className="text-xs mt-1">
                          "The guidance helped me secure a full scholarship for my transfer to TU Munich."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="application">
          <Card>
            <CardHeader>
              <CardTitle>Application Process Guide</CardTitle>
              <CardDescription>Step-by-step guidance to successfully apply for university transfers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-border"></div>
                  
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">1</div>
                    <h3 className="text-lg font-medium">Research Programs</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Identify universities and programs that align with your academic goals and meet your eligibility criteria.
                    </p>
                    <div className="mt-3 bg-accent/50 p-3 rounded text-sm">
                      <p className="font-medium">Key considerations:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Academic reputation and ranking</li>
                        <li>Program curriculum and specializations</li>
                        <li>Location and cultural fit</li>
                        <li>Financial aspects (tuition, cost of living)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">2</div>
                    <h3 className="text-lg font-medium">Prepare Documentation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Gather all required documents and ensure they meet the specific requirements of each university.
                    </p>
                    <div className="mt-3 bg-accent/50 p-3 rounded text-sm">
                      <p className="font-medium">Common requirements:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Official transcripts and degree certificates</li>
                        <li>Language proficiency tests (TOEFL/IELTS)</li>
                        <li>Statement of purpose/personal statement</li>
                        <li>Letters of recommendation (2-3)</li>
                        <li>CV/Resume highlighting academic achievements</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">3</div>
                    <h3 className="text-lg font-medium">Submit Applications</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Complete and submit your applications before the deadlines, paying close attention to each university's specific requirements.
                    </p>
                    <div className="mt-3 bg-accent/50 p-3 rounded text-sm">
                      <p className="font-medium">Application tips:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Apply to multiple universities to increase your chances</li>
                        <li>Tailor each application to the specific university</li>
                        <li>Submit well before deadlines to avoid technical issues</li>
                        <li>Keep track of application status and communications</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">4</div>
                    <h3 className="text-lg font-medium">Prepare for Transition</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Once accepted, prepare for your transition to the new university and country.
                    </p>
                    <div className="mt-3 bg-accent/50 p-3 rounded text-sm">
                      <p className="font-medium">Transition checklist:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Visa application and documentation</li>
                        <li>Housing arrangements</li>
                        <li>Financial planning and currency exchange</li>
                        <li>Health insurance and medical requirements</li>
                        <li>Cultural and academic orientation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <p className="text-sm text-muted-foreground">Need personalized guidance with your application?</p>
              <Button>Schedule a Consultation</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="scholarships">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Global Leaders Scholarship",
                amount: "$15,000 - $25,000",
                eligibility: "Outstanding academic achievement (GPA 3.7+) and demonstrated leadership",
                deadline: "September 30, 2023",
                category: "Merit-based"
              },
              {
                name: "STEM Excellence Fund",
                amount: "Up to $20,000",
                eligibility: "Students in Science, Technology, Engineering and Mathematics with GPA 3.5+",
                deadline: "October 15, 2023",
                category: "Field-specific"
              },
              {
                name: "International Diversity Grant",
                amount: "$5,000 - $15,000",
                eligibility: "International students from underrepresented countries",
                deadline: "November 30, 2023",
                category: "Diversity"
              },
              {
                name: "Future Innovators Award",
                amount: "$10,000 - $30,000",
                eligibility: "Demonstrated innovation through projects or research",
                deadline: "December 15, 2023",
                category: "Merit-based"
              },
              {
                name: "Women in Tech Scholarship",
                amount: "Up to $18,000",
                eligibility: "Female students pursuing degrees in technology-related fields",
                deadline: "January 15, 2024",
                category: "Diversity"
              },
              {
                name: "Need-Based International Grant",
                amount: "Varies based on need",
                eligibility: "Demonstrated financial need and strong academic standing",
                deadline: "Rolling applications",
                category: "Need-based"
              }
            ].map((scholarship, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                    <Badge>{scholarship.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium">Award Amount</p>
                      <p className="text-sm text-muted-foreground">{scholarship.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Eligibility</p>
                      <p className="text-sm text-muted-foreground">{scholarship.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Application Deadline</p>
                      <p className="text-sm text-muted-foreground">{scholarship.deadline}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button size="sm" variant="outline" className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Scholarship Application Tips</CardTitle>
              <CardDescription>Maximize your chances of receiving financial aid</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Perfect Your Personal Statement</h3>
                  <p className="text-sm text-muted-foreground">
                    Your personal statement should tell a compelling story that highlights your unique qualities, achievements, and aspirations.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Be specific about your goals and motivations</li>
                    <li>Highlight meaningful experiences and their impact</li>
                    <li>Connect your background to your future plans</li>
                    <li>Edit carefully for clarity and conciseness</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Strong Letters of Recommendation</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure letters from professors or mentors who know you well and can speak to your academic abilities and character.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Choose recommenders who know you well</li>
                    <li>Provide them with your resume and goals</li>
                    <li>Request letters well in advance of deadlines</li>
                    <li>Thank your recommenders afterward</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Apply Broadly</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't limit yourself to just one or two scholarship opportunities. Apply to multiple scholarships to increase your chances.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Research scholarships from multiple sources</li>
                    <li>Consider university, government, and private scholarships</li>
                    <li>Look for field-specific funding opportunities</li>
                    <li>Create a spreadsheet to track applications and deadlines</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Showcase Your Uniqueness</h3>
                  <p className="text-sm text-muted-foreground">
                    Highlight what makes you different from other applicants and why you're particularly deserving of support.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Emphasize your unique perspective or background</li>
                    <li>Detail specific achievements and their significance</li>
                    <li>Explain how the scholarship aligns with your goals</li>
                    <li>Be authentic rather than trying to fit a mold</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Download Scholarship Guide</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Templates</CardTitle>
                <CardDescription>Professionally designed templates for your applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Statement of Purpose</h3>
                    <p className="text-xs text-muted-foreground">Professional template with guidelines</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">CV/Resume</h3>
                    <p className="text-xs text-muted-foreground">Academic resume format</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Recommendation Letter Request</h3>
                    <p className="text-xs text-muted-foreground">Template email for professors</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Visa Guidelines</CardTitle>
                <CardDescription>Country-specific visa requirements and tips</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">US</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">United States F-1 Visa</h3>
                    <p className="text-xs text-muted-foreground">Student visa requirements and process</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">UK</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">UK Student Visa</h3>
                    <p className="text-xs text-muted-foreground">Tier 4 student visa guide</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">EU</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">EU Student Residence</h3>
                    <p className="text-xs text-muted-foreground">Requirements for European universities</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Webinars & Workshops</CardTitle>
                <CardDescription>Recorded sessions to help with your applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Personal Statement Masterclass</h3>
                    <p className="text-xs text-muted-foreground">60 min • May 15, 2023</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Scholarship Application Strategies</h3>
                    <p className="text-xs text-muted-foreground">45 min • April 22, 2023</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <div className="flex-none w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Student Visa Interview Prep</h3>
                    <p className="text-xs text-muted-foreground">90 min • March 5, 2023</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Resources</Button>
              </CardFooter>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about university transfers and study abroad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <h3 className="font-medium mb-1">How do credits transfer between universities?</h3>
                  <p className="text-sm text-muted-foreground">
                    Credit transfer policies vary by university. Generally, universities evaluate your previous coursework and determine which credits will transfer based on course content, grades, and accreditation status of your current institution.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">When should I start the application process?</h3>
                  <p className="text-sm text-muted-foreground">
                    Start at least 12 months before your intended transfer date. This gives you enough time for research, gathering documents, taking required tests, and meeting application deadlines.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Can I transfer in the middle of my degree?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, most universities accept transfer students in their second or third year. However, some programs may have specific requirements regarding completed coursework.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">How can I improve my chances of acceptance?</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintain strong grades, participate in extracurricular activities, secure strong recommendation letters, and craft a compelling personal statement that clearly explains your reasons for transferring.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Are language tests required for all universities?</h3>
                  <p className="text-sm text-muted-foreground">
                    Most international universities require English proficiency tests like TOEFL or IELTS if English is not your first language. Some may waive this requirement if your current education is in English.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Can I get financial aid as a transfer student?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, many universities offer scholarships and financial aid for transfer students, though options may be more limited than for first-year students. Research university-specific financial aid policies.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Ask a Question</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default University;
