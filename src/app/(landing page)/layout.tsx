import { type ReactNode } from "react";
import { Navbar } from "~/components/Navbar/nav-bar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
