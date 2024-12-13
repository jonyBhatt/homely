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
import { Textarea } from "~/components/ui/textarea";
import { UploadFileDropeZone } from "~/lib/UploadFileDropeZone";
import { agentForm } from "~/server/action/agent";
import { agentFormSchema } from "~/utils/validation";

interface AgentFormProps {
  id: string;
}
export const AgentForm = ({ id }: AgentFormProps) => {
  const form = useForm<z.infer<typeof agentFormSchema>>({
    resolver: zodResolver(agentFormSchema),
    defaultValues: {
      title: "",
      description: "",
      cv: "",
    },
  });

  function onSubmit(values: z.infer<typeof agentFormSchema>) {
    console.log(values);

    toast.promise(agentForm(values), {
      loading: "Loading...",
      success: () => {
        return `Application has been submitted!`;
      },
      error: "Something went wrong!",
    });
  }
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload your cv</FormLabel>
                <FormControl>
                  <UploadFileDropeZone
                    endpoint="pdfUploader"
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Apply
          </Button>
        </form>
      </Form>
    </div>
  );
};
