import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "To-Do App",
  description: "To-Do App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center  p-8">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
