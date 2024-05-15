"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
        <p className="text-sm opacity-50">OR</p>
        <Button asChild>
          <Link href={"/"}>Return Home</Link>
        </Button>
      </body>
    </html>
  );
}
