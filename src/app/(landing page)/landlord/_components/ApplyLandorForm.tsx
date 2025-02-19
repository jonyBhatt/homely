"use client";

import type React from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export  function ApplyLandorForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 col-span-1">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" required />
        </div>
        <div className="space-y-2 col-span-1">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dob">Date of birth</Label>
        <Input id="dob" type="date" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" type="tel" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="nid">NID (National ID)</Label>
        <Input id="nid" required />
      </div>
      <Button type="submit" className="w-full">
        Submit Application
      </Button>
    </form>
  );
}
