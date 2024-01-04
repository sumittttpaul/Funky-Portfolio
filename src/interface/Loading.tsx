"use client";

import TextArrayAnimation from "components/TextArrayAnimation";
import UserButton from "components/UserButton";
import { MotionDiv } from "utils/FramerMotion";
import { useLoadingState } from "utils/Zustand";

const transition = {
  duration: 0.3,
  type: "keyframes",
};

export default function Loading({ isMobile }: { isMobile: boolean }) {
  const LoadingState = useLoadingState();
  const onAnimationComplete = () => LoadingState.toggleComplete();

  return (
    <>
      {!LoadingState.Complete && (
        <MotionDiv
          id="Loading_Div"
          onAnimationComplete={onAnimationComplete}
          initial={{ opacity: "100%" }}
          animate={{ opacity: "0%" }}
          transition={{ ...transition, delay: 7.1 }}
          className="absolute top-0 z-[999] flex h-full w-full items-center justify-center bg-black opacity-100"
        >
          <TextArrayAnimation transition={transition} />
        </MotionDiv>
      )}
      <UserButton DecreaseZIndex={LoadingState.Complete} isMobile={isMobile} />
    </>
  );
}
