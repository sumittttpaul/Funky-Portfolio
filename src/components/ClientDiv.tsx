"use client";

import { useEffect, useState } from "react";
import { useLoadingState } from "utils/Zustand";

export default function ClientDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const LoadingState = useLoadingState();

  useEffect(() => {
    const Div = document.getElementById("ClientDiv");
    if (Div) {
      if (LoadingState.Complete) {
        Div.setAttribute("style", "height: 100vh");
        Div.style.height === "100vh";
      } else {
        Div.setAttribute("style", `height: ${window.innerHeight}px`);
        Div.style.height === `${window.innerHeight}px`;
      }
    }
  }, [LoadingState.Complete]);

  return (
    <div
      id="ClientDiv"
      className={`${
        LoadingState.Complete ? "overflow-x-hidden" : "overflow-hidden "
      } ${className}`}
    >
      {children}
    </div>
  );
}
