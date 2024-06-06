"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { PropertyCardProps } from "~/types/property-types";
import { propertySchema } from "~/utils/validation";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import UploadButton from "~/lib/UploadButton";
import { Textarea } from "~/components/ui/textarea";

export const UpdateProperty = ({
  title,
  description,
  id,
  image,
  bedrooms,
  bathrooms,
  state,
  address,
  country,
  price,
}: PropertyCardProps) => {
  const form = useForm<z.infer<typeof propertySchema>>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      title: title,
      description: description,
      price: price,
      category: "",
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      image: image,
      state: state,
      address: address,
      country: country,
    },
  });

  async function onSubmit(values: z.infer<typeof propertySchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/** Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="bungalow">Bungalow</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Bedrooms and Bathrooms */}
          <div className="col-span-3 flex flex-col gap-4 md:flex-row">
            {/** Bedrooms */}
            <div className="md:w-1/2">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms</FormLabel>
                    <FormControl>
                      <Input placeholder="bedrooms" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/** Bathrooms */}
            <div className="md:w-1/2">
              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bathrooms</FormLabel>
                    <FormControl>
                      <Input placeholder="bathrooms" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/** State */}
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="bathrooms" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="bathrooms" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="bathrooms" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Image */}
          <div className="col-span-3 flex flex-col items-center justify-center gap-3">
            {image && (
              <img
                src={image}
                alt="property"
                className="h-64 w-full object-cover"
              />
            )}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <UploadButton
                      onChange={field.onChange}
                      text="Upload property images"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/** Description */}
          <div className="col-span-3">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
