import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';

type Task = {
  id: string;
  label: string;
  checked: boolean;
};

type Goal = {
  id: number;
  title: string;
  description: string;
  tasks: Task[];
};

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: "Web Development",
      description: "Become a full-stack web developer",
      tasks: [
        { id: "task-1", label: "Learn HTML & CSS basics", checked: true },
        { id: "task-2", label: "Complete JavaScript fundamentals", checked: true },
        { id: "task-3", label: "Build a React project", checked: false },
        { id: "task-4", label: "Learn Node.js and Express", checked: false },
      ],
    },
    {
      id: 2,
      title: "Data Science",
      description: "Master data analysis and machine learning",
      tasks: [
        { id: "ds-task-1", label: "Learn Python basics", checked: true },
        { id: "ds-task-2", label: "Complete data visualization course", checked: true },
        { id: "ds-task-3", label: "Study statistics fundamentals", checked: false },
        { id: "ds-task-4", label: "Build ML models with scikit-learn", checked: false },
      ],
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTasks, setNewTasks] = useState([{ id: Date.now().toString(), value: "" }]);

  // Toggle task implementation
  const toggleTask = (goalId: number, taskId: string) => {
    setGoals(prevGoals =>
      prevGoals.map(goal => 
        goal.id === goalId ? {
          ...goal,
          tasks: goal.tasks.map(task => 
            task.id === taskId ? { ...task, checked: !task.checked } : task
          )
        } : goal
      )
    );
  };

  const addNewTaskInput = () => {
    setNewTasks([...newTasks, { id: Date.now().toString(), value: "" }]);
  };

  const handleTaskChange = (id: string, value: string) => {
    setNewTasks(tasks =>
      tasks.map(task => (task.id === id ? { ...task, value } : task))
    );
  };

  const removeTaskInput = (id: string) => {
    setNewTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const submitNewGoal = () => {
    if (!newTitle || newTasks.some(t => !t.value)) return;

    const newGoal: Goal = {
      id: goals.length + 1,
      title: newTitle,
      description: newDescription,
      tasks: newTasks.map((task, index) => ({
        id: `task-${Date.now()}-${index}`,
        label: task.value,
        checked: false,
      })),
    };

    setGoals([...goals, newGoal]);
    setShowAddForm(false);
    setNewTitle("");
    setNewDescription("");
    setNewTasks([{ id: Date.now().toString(), value: "" }]);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Goals</h1>
        <Button onClick={() => setShowAddForm(true)}>Add New Goal</Button>
      </div>

      {showAddForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create New Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Goal Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <Input
                placeholder="Goal Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <div className="space-y-2">
                {newTasks.map(task => (
                  <div key={task.id} className="flex gap-2 items-center">
                    <Input
                      placeholder="Subtasks"
                      value={task.value}
                      onChange={(e) => handleTaskChange(task.id, e.target.value)}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTaskInput(task.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" onClick={addNewTaskInput}>
                  Add Subtask
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowAddForm(false)}>
              Cancel
            </Button>
            <Button onClick={submitNewGoal}>Create Goal</Button>
          </CardFooter>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map(goal => {
          const completedTasks = goal.tasks.filter(task => task.checked).length;
          const totalTasks = goal.tasks.length;
          const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

          return (
            <Card key={goal.id}>
              <CardHeader>
                <CardTitle>{goal.title}</CardTitle>
                <CardDescription>{goal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {goal.tasks.map(task => (
                    <div key={task.id} className="flex items-start space-x-3">
                      <Checkbox
                        id={task.id}
                        checked={task.checked}
                        onCheckedChange={() => toggleTask(goal.id, task.id)}
                      />
                      <label
                        htmlFor={task.id}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {task.label}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <div className="text-sm mb-1">
                    {completedTasks}/{totalTasks} tasks completed
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;