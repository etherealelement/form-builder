"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/shared/ui/card";

export function ProcessList() {
  const [forms, setForms] = useState([
    {
      id: 1,
      name: "Feedback Form",
      type: "Feedback",
    },
    {
      id: 2,
      name: "Contact Us",
      type: "Contact",
    },
    {
      id: 3,
      name: "Order Form",
      type: "Order",
    },
  ]);
  const [newFormType, setNewFormType] = useState("Feedback");
  const handleAddForm = () => {
    const newForm = {
      id: forms.length + 1,
      name: `New ${newFormType} Form`,
      type: newFormType,
    };
    setForms([...forms, newForm]);
  };

  const handleDeleteForm = (id: number) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Forms</h1>
        <div className="flex items-center gap-4">
          <Select value={newFormType} onValueChange={setNewFormType}>
            <SelectTrigger>
              <SelectValue placeholder="Select form type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Feedback">Feedback</SelectItem>
              <SelectItem value="Contact">Contact</SelectItem>
              <SelectItem value="Order">Order</SelectItem>
              <SelectItem value="Survey">Survey</SelectItem>
              <SelectItem value="Application">Application</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleAddForm}>Add Form</Button>
        </div>
      </div>
      <div className="grid gap-4">
        {forms.map((form) => (
          <Card key={form.id}>
            <CardHeader>
              <CardTitle>{form.name}</CardTitle>
              <CardDescription>Type: {form.type}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Button
                variant="ghost"
                onClick={() => handleDeleteForm(form.id)}
                className="text-red-500 hover:bg-red-500 hover:text-white"
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
