import Image from "next/image";
import Google_Loader from "../../public/google_loader.gif";

export default function Loader() {
  return (
    <Image
      src={Google_Loader}
      height={200}
      width={200}
      alt="Loading Animation"
      className="rounded-full"
      priority
    />
  );
}
