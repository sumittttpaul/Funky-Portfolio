import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MotionOptimize } from "utils/FramerMotion";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumeet Kumar Paul",
  description: "Portfolio by Sumit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-hidden bg-body-color text-white`}
      >
        <MotionOptimize>{children}</MotionOptimize>
        <Analytics />
      </body>
    </html>
  );
}
