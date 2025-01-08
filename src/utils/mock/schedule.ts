import { Agent } from "@prisma/client";

interface Property {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  rooms: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  size: string;
  address: string;
  city: string;
  image?: string;
  state?: string;
  country?: string;
  agentId?: string;
  agent?: Agent;
  agencyId?: string;
}

interface Schedule {
  id: string;
  propertyId: string;
  property?: Property;
  username: string;
  email: string;
  date: string;
}

const sampleSchedule: Schedule[] = [
  {
    id: "1",
    propertyId: "1",
    username: "John Doe",
    email: "john.doe@example.com",
    date: "2024-12-25",
  },
  {
    id: "2",
    propertyId: "2",
    username: "Jane Smith",
    email: "jane.smith@example.com",
    date: "2024-12-28",
  },
];

export { sampleSchedule };
