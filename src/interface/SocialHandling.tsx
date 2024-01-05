import Card from "components/Card";
import TextTypeAnimation from "components/TextTypeAnimation";

export default function SocialHandling({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start space-y-5">
      <div className="flex w-full flex-col">
        <h1
          className={`w-full text-start ${
            isMobile ? "text-[25px] font-[800]" : "text-[35px] font-[900]"
          } lg:text-[45px] lg:font-[1000]`}
        >
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Follow me on
          </span>
        </h1>
        <div className="-mt-3 block h-[53px]">
          <TextTypeAnimation />
        </div>
      </div>
      <div className="flex w-full items-center justify-start space-x-10 pl-5">
        <div className="left-[25px] h-[50px] w-[1px] bg-slate-400/50" />
        <Card />
      </div>
    </div>
  );
}
