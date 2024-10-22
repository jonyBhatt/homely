"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import UploadButton from "~/lib/UploadButton";

import { agencySchema } from "~/utils/validation";
export const CreateAgencyForm = () => {
  const form = useForm<z.infer<typeof agencySchema>>({
    resolver: zodResolver(agencySchema),
    defaultValues: {
      agencyname: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof agencySchema>) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid w-full grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
            <FormField
              control={form.control}
              name="agencyname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agency Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your agency name"
                      {...field}
                      className="border-0 border-b border-b-lime-300 pb-2 focus-visible:ring-0"
                      required
                    />
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
                  <FormLabel>Agency Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your agency email"
                      {...field}
                      className="border-0 border-b border-b-lime-300 pb-2 focus-visible:ring-0"
                      required
                    />
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
                  <FormLabel>Agency Mobile number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+880..."
                      {...field}
                      className="border-0 border-b border-b-lime-300 pb-2 focus-visible:ring-0"
                      required
                    />
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
                  <FormLabel>Agency Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="agency location"
                      {...field}
                      className="border-0 border-b border-b-lime-300 pb-2 focus-visible:ring-0"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="mt-8 flex items-center justify-center rounded-md border border-lime-400 p-4">
                <FormControl>
                  <UploadButton
                    onChange={field.onChange}
                    text="Upload agency logo"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-lg" size={"lg"}>
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};

/**
 * 
 * <FormField
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
 */
