"use client";

import Image from "next/image";
import Sumit_Photo from "../../public/sumit_photo.png";
import { MotionDiv } from "utils/FramerMotion";
import { useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

type AnimationType = "move-left";

const Transition = {
  type: "tween",
  easings: ["easeIn", "easeOut"],
  duration: 0.3,
};

const MaxWidth = 1500;
const ExtraWidth = 1500 + 50;

export default function UserButton({
  DecreaseZIndex,
}: {
  DecreaseZIndex: boolean;
}) {
  const [Animation, setAnimation] = useState<AnimationType>();
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);
  const x = useMotionValue(0);

  const Variant = {
    "move-left": {
      height: "50px",
      width: "50px",
      x: vw > ExtraWidth ? MaxWidth / 2 - 25 : vw / 2 - 45,
      y: -vh / 2 + 45,
    },
  };

  const onAnimationComplete = () => {
    setAnimation("move-left");
  };

  useEffect(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    );
    setVw(vw);
    setVh(vh);
  }, []);

  useEffect(() => {
    const handleResize = () =>
      x.set(
        window.innerWidth > ExtraWidth
          ? MaxWidth / 2 - 25
          : window.innerWidth / 2 - 45,
      );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${DecreaseZIndex && '-z-10'} absolute flex h-full w-full items-center justify-center`}>
      <MotionDiv
        id="Image_Moving_Div"
        animate={Animation}
        style={{ x }}
        transition={{
          ...Transition,
          delay: 0.5,
        }}
        variants={Variant}
        className="absolute flex"
      >
        <MotionDiv
          id="Image_Div"
          animate={{ opacity: 100 }}
          transition={{ ...Transition, delay: 6.2 }}
          onAnimationComplete={onAnimationComplete}
          className="opacity-0"
        >
          <Image
            src={Sumit_Photo}
            height={195}
            width={195}
            alt="Sumeet Kumar Paul"
            className="rounded-full"
            priority
          />
        </MotionDiv>
      </MotionDiv>
    </div>
  );
}
