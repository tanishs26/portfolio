import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import { Toaster } from "sonner";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Tanish Sharma-Portfolio",
  description: "Portfolio of Tanish sharma",
  icons: {
    icon: "/dip.ico",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="">
        <body
          className={` bg-[#f5f5f5]
          dark:bg-black antialiased  selection:bg-neutral-900 selection:text-neutral-300 dark:selection:bg-neutral-50 dark:selection:text-neutral-800 relative 
           
          `}
        >
          <Toaster position="top-center" className="rounded-2xl h-fit" />
          <Cursor />
          <Navbar />

          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
