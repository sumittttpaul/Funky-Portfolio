import { parse } from "next-useragent";
import { headers } from "next/headers";
import Header from "components/Header";
import ClientDiv from "components/ClientDiv";
import StarsCanvas from "components/StarBackground";
import Landing from "interface/Landing";
import Loading from "interface/Loading";
import SocialHandling from "interface/SocialHandling";

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const isMobile = parse(userAgent).isMobile;

  return (
    <ClientDiv className="relative flex w-screen flex-col">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col">
        {/* Added "pt-24" between "Back to LinkedIn" button and "Hello, I am" */}
        <section
          className={`flex h-full w-full flex-col px-5 pb-5 ${
            isMobile ? "pt-[86px]" : "pt-24"
          } lg:pt-5`}
        >
          <Header isMobile={isMobile} />
          <Landing isMobile={isMobile} />
          <StarsCanvas />
        </section>
        <section className="flex h-full w-full flex-col p-5">
          <SocialHandling isMobile={isMobile} />
        </section>
      </div>
      <Loading isMobile={isMobile} />
    </ClientDiv>
  );
}
