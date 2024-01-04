"use client";

import { useEffect, useState } from "react";
import { MotionDiv } from "utils/FramerMotion";
import SlideUpTextTransition from "utils/SlideUpTextTransition";

const TEXTS = [
  "waking up...",
  "having breakfast...",
  "scrolling linkedin...",
  "dressing...",
  "on my way...",
  "here!",
];

export default function TextArrayAnimation({
  transition,
  isMobile,
}: {
  transition: {};
  isMobile: boolean;
}) {
  const [Animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation("starting");
    const intervalId = setInterval(() => setAnimation("ending"), 6000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={Animation}
      variants={{
        starting: { opacity: 100 },
        ending: { opacity: 0 },
      }}
      transition={transition}
      className="ml-[calc(50%-100px)] flex w-full flex-col items-center delay-150"
    >
      <h1
        className={`w-full justify-start ${
          isMobile ? "text-[20px]" : "text-[25px]"
        } font-extrabold tracking-wider`}
      >
        <span className="bg-gradient-to-r from-[#ffa500] to-[#ff4500] bg-clip-text text-transparent">
          I&apos;m
        </span>
      </h1>
      <h1
        className={`w-full justify-start ${
          isMobile ? "text-[18px]" : "text-[23px]"
        } font-bold tracking-wide`}
      >
        <SlideUpTextTransition items={TEXTS} duration={1000} />
      </h1>
    </MotionDiv>
  );
}
