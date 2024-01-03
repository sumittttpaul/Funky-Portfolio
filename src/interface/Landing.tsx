import { About_ShortL, About_ShortR } from "components/About.Short";
import Name from "components/Name";
import Skills from "components/Skills";
import Mascot from "../components/Mascot";
import Preferences from "components/Preference";
import Causes from "components/Causes";
import Talks from "components/Talks";
import { parse } from "next-useragent";
import { headers } from "next/headers";

export default function Landing() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const isMobile = parse(userAgent).isMobile;

  return (
    <main className="flex h-full w-full flex-col lg:flex-row">
      <div className="flex h-full w-full flex-col justify-center">
        <Name isMobile={isMobile} />
        {!isMobile && <Causes />}
        <About_ShortL />
        <Skills isMobile={isMobile} />
      </div>
      <Mascot />
      {!isMobile && (
        <div className="flex h-full w-full flex-col justify-center lg:flex-col">
          <Preferences />
          <Talks />
          <About_ShortR />
        </div>
      )}
    </main>
  );
}
