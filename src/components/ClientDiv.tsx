"use client";

import { useLoadingState } from "utils/Zustand";

export default function ClientDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const LoadingState = useLoadingState();
  return (
    <div
      className={`${
        LoadingState.Complete ? "overflow-x-hidden" : "overflow-hidden"
      } ${className}`}
    >
      {children}
    </div>
  );
}
