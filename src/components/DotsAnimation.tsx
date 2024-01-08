"use client";

import anime from "animejs";

const GRID_WIDTH = 45;
const GRID_HEIGHT = 25;

export default function DotsAnimation() {
  const dots = [];
  let index = 0;

  const handleDotClick = (e: any) => {
    anime({
      targets: ".dots-animation-dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          data-index={index}
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-3 transition-colors hover:bg-white/20"
        >
          <div
            data-index={index}
            className="dots-animation-dot-point from-dot-black to-dot-white h-2 w-2 rounded-full bg-gradient-to-b opacity-50 group-hover:from-indigo-600 group-hover:to-white"
          />
        </div>,
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
}

const GRID_WIDTH_L = 12;
const GRID_HEIGHT_L = 25;

export function DotsAnimationL() {
  const dots = [];
  let index = 0;

  const handleDotClick = (e: any) => {
    anime({
      targets: ".dots-animation-dot-point-L",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH_L, GRID_HEIGHT_L],
        from: e.target.dataset.index,
      }),
    });
  };

  for (let i = 0; i < GRID_WIDTH_L; i++) {
    for (let j = 0; j < GRID_HEIGHT_L; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          data-index={index}
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-3 transition-colors hover:bg-white/20"
        >
          <div
            data-index={index}
            className="dots-animation-dot-point-L from-dot-black to-dot-white h-2 w-2 rounded-full bg-gradient-to-b opacity-50 group-hover:from-indigo-600 group-hover:to-white"
          />
        </div>,
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH_L}, 1fr)` }}
      className="grid w-fit cursor-crosshair"
    >
      {dots}
    </div>
  );
}

const GRID_WIDTH_R = 12;
const GRID_HEIGHT_R = 25;

export function DotsAnimationR() {
  const dots = [];
  let index = 0;

  const handleDotClick = (e: any) => {
    anime({
      targets: ".dots-animation-dot-point-R",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH_R, GRID_HEIGHT_R],
        from: e.target.dataset.index,
      }),
    });
  };

  for (let i = 0; i < GRID_WIDTH_R; i++) {
    for (let j = 0; j < GRID_HEIGHT_R; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          data-index={index}
          onClick={handleDotClick}
          className="group rounded-full p-3 transition-colors hover:bg-white/20"
        >
          <div
            data-index={index}
            className="dots-animation-dot-point-R from-dot-black to-dot-white h-2 w-2 rounded-full bg-gradient-to-b opacity-50 group-hover:from-indigo-600 group-hover:to-white"
          />
        </div>,
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH_R}, 1fr)` }}
      className="grid w-fit cursor-crosshair"
    >
      {dots}
    </div>
  );
}
