"use client";

import { TypeAnimation } from "react-type-animation";

export default function TextTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "LinkedIn",
        2000,
        "Instagram",
        2000,
        "Twitter",
        2000,
        "Facebook",
        2000,
        "WhatsApp",
        2000,
      ]}
      wrapper="h4"
      speed={50}
      repeat={Infinity}
      style={{
        fontSize: "35px",
        fontWeight: 1000,
      }}
    />
  );
}
