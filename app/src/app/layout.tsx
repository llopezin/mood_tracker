import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { MainNav } from "@/components/organisms/navigation/mainNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mood tracker",
  description: "An app to keep track of your mood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <MainNav />
        </header>
        <main className="gray-dark text-3xl underline hidden">{children}</main>
      </body>
    </html>
  );
}
