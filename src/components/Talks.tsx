import { SpotlightCard, Spotlight } from "./Spotlight";

export default function Talks() {
  return (
    <Spotlight className="hidden h-auto w-auto flex-col items-start justify-center lg:mt-[10%] xl:flex">
      <SpotlightCard className="box-animation-Causes box-shadow w-full p-0 lg:w-auto lg:rounded-3xl lg:transition-all lg:duration-500 lg:hover:shadow-white/20">
        <div className="group flex w-full flex-col border-white/20 lg:w-auto lg:rounded-3xl lg:border-2 lg:p-5">
          <h2 className="mb-3 hidden text-2xl font-bold text-white/20 group-hover:text-white lg:block lg:transition-colors lg:duration-500">
            Talks About
          </h2>
          <div className="flex w-full max-w-[350px] flex-col space-y-3">
            <p className="text-pretty text-base font-normal">
              #tech, #sales, #marketing, #management, and #industryInsights
            </p>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
}
