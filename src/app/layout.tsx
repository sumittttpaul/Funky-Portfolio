import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MotionOptimize } from "utils/FramerMotion";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Funky Portfolio • Sumeet Kumar Paul",
  description: "Modern Funky Portfolio • Sumeet Kumar Paul",
};

export const viewport: Viewport = {
  themeColor: "#000814",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-scroll bg-body-color text-white`}
      >
        <MotionOptimize>{children}</MotionOptimize>
        <Analytics />
      </body>
    </html>
  );
}
