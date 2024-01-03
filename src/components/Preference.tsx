import { SpotlightCard, Spotlight } from "./Spotlight";

export default function Preferences() {
  return (
    <Spotlight className="hidden h-auto w-auto flex-col items-center justify-center xl:flex">
      <SpotlightCard className="box-animation-Preference box-shadow w-full p-0 lg:w-auto lg:rounded-3xl lg:transition-all lg:duration-500 lg:hover:shadow-white/20">
        <div className="group flex w-full flex-col border-white/20 lg:w-auto lg:rounded-3xl lg:border-2 lg:p-5">
          <h2 className="mb-3 hidden text-2xl font-bold text-white/20 group-hover:text-white lg:block lg:transition-colors lg:duration-500">
            Open to Work
          </h2>
          <div className="flex w-full max-w-[300px] flex-col space-y-3">
            <div>
              <h6 className="text-sm font-bold opacity-50">Job titles</h6>
              <p className="text-pretty text-base font-normal">
                NextJs Developer · Front-end Developer · Junior Developer ·
                React Developer
              </p>
            </div>
            <div>
              <h6 className="text-sm font-bold opacity-50">Location types</h6>
              <p className="text-pretty text-base font-normal">Remote</p>
            </div>
            <div>
              <h6 className="text-sm font-bold opacity-50">Start date</h6>
              <p className="text-pretty text-base font-normal">
                Immediately, I am actively applying
              </p>
            </div>
            <div>
              <h6 className="text-sm font-bold opacity-50">Employment types</h6>
              <p className="text-pretty text-base font-normal">Full-time</p>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
}
