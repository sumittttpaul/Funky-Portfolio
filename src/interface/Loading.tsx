"use client";

import TextArrayAnimation from "components/TextArrayAnimation";
import UserButton from "components/UserButton";
import ViewPhoto from "components/ViewPhoto";
import { useEffect, useState } from "react";
import { MotionDiv } from "utils/FramerMotion";
import { useLoadingState } from "utils/Zustand";

const transition = {
  duration: 0.3,
  type: "keyframes",
};

export default function Loading({ isMobile }: { isMobile: boolean }) {
  const LoadingState = useLoadingState();
  const onAnimationComplete = () => LoadingState.toggleComplete();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.setProperty("--hide-scrollbar", "none");
    } else {
      document.documentElement.style.setProperty("--hide-scrollbar", "block");
    }
  }, [isOpen]);

  return (
    <>
      {!LoadingState.Complete && (
        <MotionDiv
          id="Loading_Div"
          onAnimationComplete={onAnimationComplete}
          initial={{ opacity: "100%" }}
          animate={{ opacity: "0%" }}
          transition={{ ...transition, delay: 7.1 }}
          className="loading-bg-black absolute top-0 z-[999] flex h-full w-full items-center justify-center opacity-100"
        >
          <TextArrayAnimation transition={transition} isMobile={isMobile} />
        </MotionDiv>
      )}
      <UserButton
        DecreaseZIndex={LoadingState.Complete}
        isMobile={isMobile}
        setIsOpen={setIsOpen}
      />
      <ViewPhoto isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
