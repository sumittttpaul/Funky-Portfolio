import Loading from "interface/Loading";
import { parse } from "next-useragent";
import { headers } from "next/headers";

export default function page() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const isMobile = parse(userAgent).isMobile;

  return (
    <div className="relative flex h-screen w-screen flex-col">
      <Loading isMobile={isMobile} />
    </div>
  );
}
