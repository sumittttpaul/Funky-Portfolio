import DotsAnimation from "components/DotsAnimation";
import LetterChanging from "interface/LetterChanging";
import Loading from "interface/Loading";
import TechThatIKnow from "interface/TechThatIKnow";
import { parse } from "next-useragent";
import { headers } from "next/headers";

export default function page() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const isMobile = parse(userAgent).isMobile;

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-body-color text-white">
      {/* <Loading isMobile={isMobile} />
      <div className="scroll-reveal flex flex-col space-y-5">
        <h1
          className={`text-center ${
            isMobile ? "text-[25px] font-[800]" : "text-[35px] font-[900]"
          } lg:text-[45px] lg:font-[1000]`}
        >
          <span>About Me</span>
        </h1>
        <p className="relative mx-auto block w-full max-w-lg text-justify text-sm font-medium drop-shadow-2xl lg:text-center lg:text-base">
          <span className="drop-shadow-xl">
            &quot;I&apos;m a passionate 3rd Year BBA student at Kalinga
            University with a specialized focus in Marketing. Alongside my
            studies, I thrive on the creative intersection of business strategy
            and technological innovation. <br /> <br /> With a keen interest in
            coding and programming, I infuse my marketing expertise with the
            power of technology to create compelling and impactful solutions.
            Whether it&apos;s crafting engaging digital campaigns, leveraging
            data analytics for market insights, or developing innovative
            strategies, I&apos;m enthusiastic about utilizing programming skills
            to drive marketing success. <br /> <br />
            My portfolio showcases a fusion of business acumen and technical
            proficiency, reflecting my dedication to bridging the gap between
            marketing strategies and cutting-edge technology. Join me on this
            journey where marketing meets the world of coding!&quot;
          </span>
        </p>
      </div> */}
      {/* <LetterChanging/> */}
      <TechThatIKnow isMobile={isMobile} />
    </div>
  );
}
