"use client";

import { useEffect } from "react";
import { useLoadingState } from "utils/Zustand";

export default function ClientDiv({
  children,
  className,
  isMobile,
}: {
  children: React.ReactNode;
  className: string;
  isMobile: boolean;
}) {
  const LoadingState = useLoadingState();

  useEffect(() => {
    const Div = document.getElementById("ClientDiv");
    if (isMobile) {
      document.documentElement.style.setProperty("--hide-scrollbar", "none");
    } else {
      document.documentElement.style.setProperty("--hide-scrollbar", "block");
    }
    if (Div) {
      if (LoadingState.Complete) {
        Div.setAttribute("style", "height: 100vh");
        Div.style.height === "100vh";
      } else {
        Div.setAttribute("style", `height: ${window.innerHeight}px`);
        Div.style.height === `${window.innerHeight}px`;
      }
    }
  }, [LoadingState.Complete, isMobile]);

  return (
    <div
      id="ClientDiv"
      className={`${isMobile ? "overflow-x-hidden" : ""} ${
        LoadingState.Complete ? "" : "overflow-hidden"
      } ${className}`}
    >
      {children}
    </div>
  );
}
