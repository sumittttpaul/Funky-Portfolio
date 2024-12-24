import { DotsAnimationR, DotsAnimationL } from "components/DotsAnimation";

export default function AboutMe({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex h-full w-full flex-col p-5">
      <div className="relative mx-auto flex h-[600px] w-full max-w-screen-max-xl flex-col place-content-center lg:h-screen">
        {/* radial gradient */}
        <div className="absolute left-0 top-0 -z-10 -ml-[300px] -mt-[200px] block aspect-square h-[600px] min-h-[600px] w-[600px] min-w-[600px] bg-gradient-radial from-dark-pink to-75% lg:ml-0 lg:mt-0" />
        <div className="absolute bottom-0 right-0 -z-10 -mb-[200px] -mr-[300px] block aspect-square h-[600px] min-h-[600px] w-[600px] min-w-[600px] bg-gradient-radial from-dark-purple to-75% lg:mb-0 lg:mr-0" />
        {/* moving radial gradient */}
        <div className="absolute -z-10 mt-[60px] flex h-full w-full place-content-center lg:mt-0">
          <div className="animating-border-radius flex aspect-square h-[300px] w-[300px] bg-gradient-to-r from-about-pink to-about-purple blur-[20px] sm:h-[400px] sm:w-[400px] lg:h-[600px] lg:w-[600px]" />
        </div>
        {/* dot grid */}
        <div className="absolute left-0 hidden h-full items-center justify-center dot-xl:flex">
          <DotsAnimationL />
        </div>
        <div className="absolute right-0 hidden h-full items-center justify-center dot-xl:flex">
          <DotsAnimationR />
        </div>
        {/* main content */}
        <div className="scroll-reveal flex flex-col space-y-5">
          <h1
            className={`text-center ${
              isMobile ? "text-[25px] font-[800]" : "text-[35px] font-[900]"
            } lg:text-[45px] lg:font-[1000]`}
          >
            <span>About Me</span>
          </h1>
          <p className="relative mx-auto block w-full max-w-lg text-center text-sm font-medium  lg:text-base">
            <span>
              &quot;I&apos;m a passionate 3rd Year BBA student at Kalinga
              University with a specialized focus in Marketing. Alongside my
              studies, I thrive on the creative intersection of business
              strategy and technological innovation. <br /> <br /> With a keen
              interest in coding and programming, I infuse my marketing
              expertise with the power of technology to create compelling and
              impactful solutions. Whether it&apos;s crafting engaging digital
              campaigns, leveraging data analytics for market insights, or
              developing innovative strategies, I&apos;m enthusiastic about
              utilizing programming skills to drive marketing success. <br />{" "}
              <br />
              My portfolio showcases a fusion of business acumen and technical
              proficiency, reflecting my dedication to bridging the gap between
              marketing strategies and cutting-edge technology. Join me on this
              journey where marketing meets the world of coding!&quot;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
