import Image from "next/image";
import TextAnimation1 from "../../public/text_animation_1.gif";
import TextAnimation2 from "../../public/text_animation_2.gif";
import { SpotlightCardDynamic, SpotlightDynamic } from "./Spotlight";

export default function Name({ isMobile }: { isMobile: boolean }) {
  return (
    <SpotlightDynamic
      isMobile={isMobile}
      className="flex h-full w-full flex-col items-center justify-start lg:h-[50%] lg:w-auto xl:h-auto"
    >
      <SpotlightCardDynamic
        isMobile={isMobile}
        className="box-animation-Name box-shadow w-full p-0 lg:w-auto lg:rounded-3xl lg:transition-all lg:duration-500 lg:hover:shadow-white/20"
      >
        <div className="group flex w-full flex-col border-white/20 lg:w-auto lg:rounded-3xl lg:border-2 lg:p-5">
          <h2 className="hidden text-2xl font-bold text-white/20 group-hover:text-white lg:block lg:transition-colors lg:duration-500">
            Name
          </h2>
          <h1
            className={`w-full text-start ${
              isMobile ? "text-[25px] font-[800]" : "text-[35px] font-[900]"
            } lg:text-[45px] lg:font-[1000]`}
          >
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Hello, I am
            </span>
          </h1>
          <div
            className={`${
              isMobile ? "-ml-9 -mt-6 scale-[0.8]" : "-ml-2 -mt-3 scale-100"
            } flex w-full flex-col`}
          >
            <div className="relative block h-[57px] w-[280px] lg:h-[82px] lg:w-[400px]">
              <Image
                fill
                src={TextAnimation1}
                sizes="(min-width: 1024px) 400px, 280px"
                alt="User Name Text Animation"
              />
            </div>
            <div className="relative -mt-1 block h-[58px] w-[168px] lg:-mt-2 lg:h-[83px] lg:w-[240px]">
              <Image
                fill
                src={TextAnimation2}
                sizes="(min-width: 1024px) 240px, 168px"
                alt="User Name Text Animation"
              />
            </div>
          </div>
        </div>
      </SpotlightCardDynamic>
    </SpotlightDynamic>
  );
}
