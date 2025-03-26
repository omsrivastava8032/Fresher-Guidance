import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Course = {
  id: number;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  rating: number;
  reviews: number;
  url: string;
  level: 'beginner' | 'intermediate' | 'advanced';
};

const Courses = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "The Complete Modern JavaScript Course",
      description: "Master ES6+ features and modern JS concepts",
      duration: "6 weeks",
      instructor: "Packt Instructors",
      rating: 4.7,
      reviews: 3560,
      url: "https://www.coursera.org/specializations/packt-the-complete-modern-javascript-course-with-es6",
      level: "beginner"
    },
    {
      id: 2,
      title: "Complete ReactJS Masterclass",
      description: "Build modern web applications with React from scratch",
      duration: "8 weeks",
      instructor: "Eduonix Team",
      rating: 4.6,
      reviews: 8924,
      url: "https://www.udemy.com/course/complete-reactjs-masterclass/?couponCode=ST22MT240325G3",
      level: "intermediate"
    },
    {
      id: 3,
      title: "Machine Learning Specialization",
      description: "Introduction to ML concepts and algorithms",
      duration: "12 weeks",
      instructor: "Andrew Ng",
      rating: 4.9,
      reviews: 45230,
      url: "https://www.coursera.org/specializations/machine-learning-introduction",
      level: "advanced"
    },
    {
      id: 4,
      title: "HTML, CSS, and JavaScript Fundamentals",
      description: "Web development basics for beginners",
      duration: "5 weeks",
      instructor: "Johns Hopkins University",
      rating: 4.8,
      reviews: 12456,
      url: "https://www.coursera.org/specializations/html-css-javascript-for-web-developers",
      level: "beginner"
    },
    {
      id: 5,
      title: "Data Visualization with Microsoft",
      description: "Master data presentation techniques",
      duration: "6 weeks",
      instructor: "Microsoft Experts",
      rating: 4.5,
      reviews: 8912,
      url: "https://www.coursera.org/professional-certificates/microsoft-data-visualization",
      level: "intermediate"
    },
    {
      id: 6,
      title: "Statistics Fundamentals",
      description: "Stanford University's introduction to statistics",
      duration: "7 weeks",
      instructor: "Stanford Professors",
      rating: 4.8,
      reviews: 23456,
      url: "https://www.coursera.org/learn/stanford-statistics",
      level: "intermediate"
    }
  ];

  const getBadgeVariant = (level: Course['level']) => {
    switch(level) {
      case 'beginner': return undefined;
      case 'intermediate': return 'outline';
      case 'advanced': return 'secondary';
      default: return undefined;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Recommended Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <Badge variant={getBadgeVariant(course.level)}>
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </Badge>
              </div>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {course.rating} ({course.reviews.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                asChild
              >
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:no-underline"
                >
                  Enroll Now
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;