import { SpotlightCard, Spotlight } from "./Spotlight";

export function About_ShortL() {
  return (
    <div className="mr-auto mt-1.5 flex w-full items-center justify-start lg:mt-4 lg:hidden lg:w-auto lg:max-w-lg">
      <p className="block text-pretty text-sm font-normal lg:text-base">
        I&apos;m a passionate 3rd Year BBA student at Kalinga University with a
        specialized focus in Marketing. Alongside my studies, I thrive on the
        creative intersection of business strategy and technological
        innovation...
        <span className="cursor-default whitespace-nowrap px-1 font-medium text-sky-400 transition-colors hover:text-sky-300">
          see more
        </span>
      </p>
    </div>
  );
}

export function About_ShortR() {
  return (
    <Spotlight className="mr-auto mt-1.5 hidden w-full items-center justify-center lg:mt-4 lg:max-w-[465px] 2xl:flex">
      <SpotlightCard className="box-animation-About box-shadow h-auto rounded-3xl p-0 lg:transition-all lg:duration-500 lg:hover:shadow-white/20">
        <div className=" group z-20 flex w-full flex-col rounded-3xl border-white/20 lg:border-2 lg:p-5">
          <h2 className="mb-3 hidden text-2xl font-bold text-white/20 group-hover:text-white lg:block lg:transition-colors lg:duration-500">
            About
          </h2>
          <p className="block text-pretty text-sm font-normal lg:text-base">
            I&apos;m a passionate 3rd Year BBA student at Kalinga University
            with a specialized focus in Marketing. Alongside my studies, I
            thrive on the creative intersection of business strategy and
            technological innovation...
            <span className="cursor-default whitespace-nowrap px-1 font-medium text-sky-400 transition-colors hover:text-sky-300">
              see more
            </span>
          </p>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
}
