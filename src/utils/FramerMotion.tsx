"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export const MotionDiv = m.div;

export function MotionOptimize({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
