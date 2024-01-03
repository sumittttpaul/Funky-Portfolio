import TextTypeAnimation from "./TextTypeAnimation";

export default function Card() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-start space-y-5">
      <div className="flex w-full flex-col">
        <h2 className="block text-[35px] font-[1000]">
          <span className="to truncate bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Follow me on
          </span>
        </h2>
        <div className="block h-[53px]">
          <TextTypeAnimation />
        </div>
      </div>
      <div className="flex w-full items-center justify-start space-x-10 pl-5">
        <div className="left-[25px] h-[50px] w-[1px] bg-slate-400/50" />
        <div className="flex w-full max-w-6xl rounded-r-3xl rounded-bl-3xl rounded-tl-lg border-2 border-solid border-blue-400/20 p-2">
          <div className=" w-full overflow-y-scroll rounded-r-2xl rounded-bl-2xl rounded-tl-md bg-blue-400/20 p-5 backdrop-blur-xl">
            Sumit Paul
          </div>
        </div>
      </div>
    </div>
  );
}
