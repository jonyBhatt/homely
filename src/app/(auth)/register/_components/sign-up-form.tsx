"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { toast } from "sonner";

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

import { signUpSchema } from "~/utils/validation";
import { Register } from "~/server/action/auth";
import { useState } from "react";
import { FormSuccessMessage } from "~/components/seccess-message";
import { CustomError } from "~/components/custom-error";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
  const router = useRouter() 
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
    setSuccess("");
    setError("");

    await Register(values).then((data) => {
      if (data?.error) {
        setError(data?.error);
        setSuccess("");
      } else {
        setError("");
        setSuccess(data?.message);
        form.reset();
        router.push("/login")
      }
    });
  }
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} />
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
                  <Input type="email" placeholder="Enter Email" {...field} />
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
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="my-4">
            {success && <FormSuccessMessage message={success} />}
            {error && <CustomError message={error} />}
          </div>
          <Button
            type="submit"
            size="lg"
            className="flex w-full items-center gap-2 rounded-xl text-xl"
          >
            Create Account
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
          Already Have an Account?
        </span>
        <Link href="/sign-up" className="font-bold">
          Login
        </Link>
      </div>
    </div>
  );
};
