"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function SignatureAnimation() {
  const [Play, setPlay] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(document.documentElement.scrollHeight);
    };
    handleScroll();
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="mx-auto flex h-screen w-full max-w-[800px] place-content-center">
      <ReactPlayer
        width={800}
        height={222}
        playing={Play}
        url="/signature_video_small.mp4"
      />
    </div>
  );
}
