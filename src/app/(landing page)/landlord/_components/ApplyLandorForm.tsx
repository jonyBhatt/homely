"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { applyLandlord } from "~/server/action/user";
import { LandlordApplicationData } from "~/types/lanlord-interface";

export function ApplyLandorForm() {
  const [formData, setFormData] = useState<LandlordApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phone: "",
    nid: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    toast.promise(applyLandlord(formData), {
      loading: "Submitting Application...",
      success: (data) => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          dob: "",
          phone: "",
          nid: "",
        });
        return `${data?.message}`;
      },
      error: "Failed to submit application",
    });
  };

  return (
    <div className="mx-auto max-w-7xl rounded-lg  p-6 shadow-lg">
      <form className="w-full space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              required
              className="w-full"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              required
              className="w-full"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            className="w-full"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            required
            className="w-full"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            required
            className="w-full"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nid">NID (National ID)</Label>
          <Input
            id="nid"
            required
            className="w-full"
            value={formData.nid}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="w-full ">
          Submit Application
        </Button>
      </form>
    </div>
  );
}
