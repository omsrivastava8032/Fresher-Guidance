
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Goals = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Goals</h1>
        <Button>Add New Goal</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
            <CardDescription>Become a full-stack web developer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="task-1" checked />
                <label htmlFor="task-1" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Learn HTML & CSS basics
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="task-2" checked />
                <label htmlFor="task-2" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Complete JavaScript fundamentals
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="task-3" />
                <label htmlFor="task-3" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Build a React project
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="task-4" />
                <label htmlFor="task-4" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Learn Node.js and Express
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Data Science</CardTitle>
            <CardDescription>Master data analysis and machine learning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="ds-task-1" checked />
                <label htmlFor="ds-task-1" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Learn Python basics
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="ds-task-2" checked />
                <label htmlFor="ds-task-2" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Complete data visualization course
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="ds-task-3" />
                <label htmlFor="ds-task-3" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Study statistics fundamentals
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="ds-task-4" />
                <label htmlFor="ds-task-4" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Build ML models with scikit-learn
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Goals;
