/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calender";
import { Badge } from "~/components/ui/badge";

// Mock data
const properties = [
  { id: 1, address: "123 Main St", tenants: 2, rent: 1200 },
  { id: 2, address: "456 Elm St", tenants: 1, rent: 950 },
  { id: 3, address: "789 Oak St", tenants: 3, rent: 1500 },
];

const reviews = [
  {
    id: 1,
    property: "123 Main St",
    rating: 4,
    comment: "Great landlord, responsive to issues.",
  },
  {
    id: 2,
    property: "456 Elm St",
    rating: 5,
    comment: "Excellent property management.",
  },
  {
    id: 3,
    property: "789 Oak St",
    rating: 3,
    comment: "Good, but some maintenance delays.",
  },
];

export default function LandlordDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col space-y-4 p-4">
      <h2 className="text-2xl font-semibold">Landlord Dashboard</h2>
      <Tabs defaultValue="properties" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="reviews">Property Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="properties">
          <Card>
            <CardHeader>
              <CardTitle>Your Properties</CardTitle>
              <CardDescription>
                Manage and view your rental properties.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {properties.map((property) => (
                <div key={property.id} className="mb-4 rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{property.address}</h3>
                  <p>Tenants: {property.tenants}</p>
                  <p>Rent: {property.rent}/month</p>
                  <Button className="mt-2">Manage Property</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
              <CardDescription>
                Manage your appointments and important dates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="mt-4">
                <h3 className="font-semibold">Upcoming Events:</h3>
                <ul className="mt-2 list-inside list-disc">
                  <li>Property Inspection - 123 Main St (in 3 days)</li>
                  <li>Rent Collection - All Properties (in 7 days)</li>
                  <li>Maintenance - 456 Elm St (in 10 days)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Property Reviews</CardTitle>
              <CardDescription>
                See what tenants are saying about your properties.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {reviews.map((review) => (
                <div key={review.id} className="mb-4 rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{review.property}</h3>
                  <div className="mt-1 flex items-center">
                    <span className="mr-2">Rating:</span>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-2">{review.comment}</p>
                  <Badge className="mt-2" variant="outline">
                    {review.rating >= 4
                      ? "Positive"
                      : review.rating >= 3
                        ? "Neutral"
                        : "Needs Attention"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
