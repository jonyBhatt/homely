import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "~/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "~/auth";
import QClientProvider from "~/components/QueryClientProvider";
export const metadata = {
  title: "Homely",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" className={`${poppins.className}`}>
        <body>
          <QClientProvider>
            {children}
            <Toaster richColors />
          </QClientProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
