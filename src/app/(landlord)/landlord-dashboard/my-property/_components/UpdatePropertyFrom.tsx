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
import { updateProperty } from "~/server/action/property";

interface UpdateProps {
  property: Property;
}

export const updateAgencySchema = z.object({
  title: z.string().min(2, { message: "Name must be at least 2 characters." }),
  price: z.string(),
  category: z.string(),
  bedrooms: z.string(),
  bathrooms: z.string(),
  garage: z.string(),
  dining: z.string(),
  kitchen: z.string(),
  size: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  address: z.string(),
  image: z.string().url().optional(),
});

export const UpdateProperty = ({ property }: UpdateProps) => {
  const form = useForm<z.infer<typeof updateAgencySchema>>({
    resolver: zodResolver(updateAgencySchema),
    defaultValues: {
      title: property.title,
      address: property.address,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      garage: property.garage,
      dining: property.dining,
      kitchen: property.kitchen,
      size: property.size,
      city: property.city,
      state: property.state ?? "",
      country: property.country ?? "Bangladesh",
      price: property.price,
      category: property.category,

      image: property.image ?? "",
    },
  });

  function onSubmit(values: z.infer<typeof updateAgencySchema>) {
    toast.promise(updateProperty(property.id, values), {
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Property Name" {...field} />
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
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input placeholder="Bedrooms" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                  <Input placeholder="Bathrooms" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="garage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Garage</FormLabel>
                <FormControl>
                  <Input placeholder="Garage" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dining"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dining</FormLabel>
                <FormControl>
                  <Input placeholder="Dining" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kitchen"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kitchen</FormLabel>
                <FormControl>
                  <Input placeholder="Kitchen" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <FormControl>
                  <Input placeholder="Size" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Country" {...field} />
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
