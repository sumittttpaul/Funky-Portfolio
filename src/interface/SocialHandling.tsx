import Card from "components/Card";
import TextTypeAnimation from "components/TextTypeAnimation";

export default function SocialHandling({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start space-y-5">
      <div className="flex w-full flex-col">
        <h2
          className={`w-full text-start ${
            isMobile ? "text-[30px] font-[900]" : "text-[30px] font-[900]"
          } lg:text-[30px] lg:font-[900]`}
        >
          <span className="to truncate bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Follow me on
          </span>
        </h2>
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
