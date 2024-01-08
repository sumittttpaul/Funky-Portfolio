import { parse } from "next-useragent";
import { headers } from "next/headers";
import Header from "components/Header";
import ClientDiv from "components/ClientDiv";
import StarsCanvas from "components/StarBackground";
import Landing from "interface/Landing";
import Loading from "interface/Loading";
import SocialHandling from "interface/SocialHandling";
import AboutMe from "interface/AboutMe";
import SuggestionLabel from "interface/SuggestionLabel";
import BubbleText from "interface/BubbleText";
import LetterChanging from "interface/LetterChanging";
import TechThatIKnow from "interface/TechThatIKnow";

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const isMobile = parse(userAgent).isMobile;

  return (
    <ClientDiv className="relative flex w-screen flex-col">
      <div className="flex w-full flex-col">
        {/* Added "pt-24" between "Back to LinkedIn" button and "Hello, I am" */}
        <section className="relative mx-auto flex h-full w-full max-w-screen-max-xl">
          <div
            className={`flex h-full w-full flex-col px-5 pb-5 ${
              isMobile ? "pt-[86px]" : "pt-24"
            } lg:pt-5`}
          >
            <StarsCanvas />
            <Header isMobile={isMobile} />
            <Landing isMobile={isMobile} />
          </div>
        </section>
        <section className="flex h-full w-full flex-col">
          <TechThatIKnow isMobile={isMobile} />
        </section>
        {!isMobile && (
          <>
            {/* <section className="mt-[200px] flex w-full">
              <SuggestionLabel
                content="Hover over the text"
                className="text-blue-400"
                direction="left"
              />
            </section> */}
            <section className="mx-auto flex h-full w-full max-w-screen-max-xl flex-col p-5">
              <BubbleText />
            </section>
            {/* <section className="mb-[200px] flex w-full">
              <SuggestionLabel
                content="Hover over the text"
                className="text-blue-400"
                direction="right"
              />
            </section> */}
          </>
        )}
        <section className="mx-auto flex h-full w-full max-w-screen-max-xl flex-col p-5">
          <LetterChanging />
        </section>
        {/* <section className="flex h-full w-full flex-col">
          <AboutMe isMobile={isMobile} />
        </section> */}
        <section className="mx-auto flex h-full w-full max-w-screen-max-xl flex-col p-5">
          <SocialHandling isMobile={isMobile} />
        </section>
      </div>
      <Loading isMobile={isMobile} />
    </ClientDiv>
  );
}
