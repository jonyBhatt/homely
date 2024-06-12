"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { makeSchedule } from "~/server/action/property";
import { scheduleSchema } from "~/utils/validation";

export const ScheduleForm = ({ id }: { id: string | undefined }) => {
  const form = useForm<z.infer<typeof scheduleSchema>>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      username: "",
      email: "",
      date: "",
    },
  });

  async function onSubmit(values: z.infer<typeof scheduleSchema>) {
    console.log(values);
    try {
      const res = await makeSchedule(id!, values);
      if (res?.success) {
        toast.success("Schedule booked");
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wrong");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/** Name */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/** Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" required placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/** Date */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  required
                  placeholder="pick a date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full rounded ">
          Schedule
        </Button>
      </form>
    </Form>
  );
};
