import Image from "next/image";
import { SignInForm } from "./_components/sign-in-form";

export default function LoginPage() {
  return (
    <section className="relative h-dvh">
      <div className=" container z-10 px-28 py-24 ">
        <div className="flex w-full flex-col items-center md:items-start gap-4 rounded ">
          <div className="flex flex-col items-center gap-4">
            <Image src="/logo.svg" alt="logo" width={100} height={80} />
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-2xl font-bold tracking-wide">Sign In</h2>
              <span className="text-base font-normal text-muted-foreground">
                Sign in with this account across the following sites.
              </span>
            </div>
          </div>
          <div className="w-full bg-white px-4 py-8 overflow-hidden rounded">
            <SignInForm />
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
