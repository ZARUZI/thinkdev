import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";
import FollowGif from "@/components/FollowGif";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThinkDev",
  description: "Ideas → Code → Impact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-neutral-950 text-neutral-100">
        <Navbar />
        {children}
        <FollowGif /> {/* absolute, jadi ikut scroll */}
      </body>
    </html>
  );
}