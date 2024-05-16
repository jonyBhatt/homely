import Image from "next/image";
import { SignUpForm } from "./_components/sign-up-form";

export default function SignUpPage() {
  return (
    <section className="relative h-dvh">
      <div className=" container z-10 px-28 py-10 ">
        <div className="flex w-full flex-col items-center gap-4 rounded md:items-start ">
          <div className="flex w-full flex-col items-center gap-4 lg:w-1/2">
            <Image src="/logo.svg" alt="logo" width={100} height={80} />
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-2xl font-bold tracking-wide">Create Your Account</h2>
              <span className="text-base font-normal text-muted-foreground">
                Sign in with this account across the following sites.
              </span>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded bg-white px-4 py-8 lg:w-1/2">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <Image
          src="/login-bg.svg"
          alt="login-bg"
          width={1000}
          height={100}
          objectFit="cover"
        />
      </div>
    </section>
  );
}