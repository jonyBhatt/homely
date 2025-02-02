"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Property } from "@prisma/client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { updateAgency } from "~/server/action/agency";

interface UpdateAgencyProps {
  agency: {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    image: string | null;
    landlordId: string;
    publish: boolean;
    createdAt: Date;
    updatedAt: Date;
    properties: Property[];
  };
}

export const updateAgencySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  image: z.string().url().optional(),
});

export const UpdateAgency = ({ agency }: UpdateAgencyProps) => {
  const form = useForm<z.infer<typeof updateAgencySchema>>({
    resolver: zodResolver(updateAgencySchema),
    defaultValues: {
      name: agency.name,
      address: agency.address,
      phone: agency.phone,
      email: agency.email,
      image: agency.image ?? "",
    },
  });

  function onSubmit(values: z.infer<typeof updateAgencySchema>) {
    toast.promise(updateAgency(agency.id, values), {
      loading: "Loading...",
      success: (data) => {
        return `${data?.message}`;
      },
      error: "Error",
    });
  }
  
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Agency Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Agency Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email Address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="Image URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Update
          </Button>
        </form>
      </Form>
    </div>
  );
};
