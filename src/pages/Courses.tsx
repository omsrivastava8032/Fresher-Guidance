
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Recommended Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Modern JavaScript</CardTitle>
              <Badge>Beginner</Badge>
            </div>
            <CardDescription>Master ES6+ features and modern JS concepts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Duration:</strong> 8 weeks
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Instructor:</strong> Sarah Johnson
              </p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-muted-foreground">4.9 (128 reviews)</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Enroll Now</Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>React Masterclass</CardTitle>
              <Badge variant="outline">Intermediate</Badge>
            </div>
            <CardDescription>Build modern web apps with React</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Duration:</strong> 10 weeks
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Instructor:</strong> Michael Chen
              </p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-muted-foreground">4.8 (95 reviews)</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Enroll Now</Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Machine Learning Fundamentals</CardTitle>
              <Badge variant="secondary">Advanced</Badge>
            </div>
            <CardDescription>Introduction to ML concepts and algorithms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Duration:</strong> 12 weeks
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Instructor:</strong> Dr. Emily Martinez
              </p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-muted-foreground">4.7 (112 reviews)</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Enroll Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
