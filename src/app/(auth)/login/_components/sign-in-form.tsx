"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { type z } from "zod";

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
import { Separator } from "~/components/ui/separator";

import { signInSchema } from "~/utils/validation";

export const SignInForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="flex w-full items-center gap-2 rounded-xl text-xl"
          >
            Sign in
            <ArrowUpRight className="h-6 w-6" />
          </Button>
        </form>
      </Form>
      <div className="relative my-8 ">
        <hr className="-z-10 h-2" />
        <p className="absolute -top-5 left-0 right-0 z-10 mx-auto w-[40px] bg-white text-center  leading-[40px] text-black ">
          OR
        </p>
      </div>
      <div className="my-4">
        <Button
          className="flex w-full items-center justify-start gap-24 rounded-xl text-center text-xl lg:gap-32"
          size="lg"
        >
          <Image src="/social/google.svg" alt="google" width={30} height={30} />
          <span>Continue with Google</span>
        </Button>
      </div>
      <div className="flex items-center justify-center  gap-2">
        <span className="text-sm tracking-wide text-muted-foreground">
          Not signed up?
        </span>
        <Link href="/register" className="font-bold">
          Create an account
        </Link>
      </div>
    </div>
  );
};
