export default function AboutMe({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start space-y-5">
      <div className="flex w-full flex-col">
        <h1
          className={`w-full text-start ${
            isMobile ? "text-[25px] font-[800]" : "text-[35px] font-[900]"
          } lg:text-[45px] lg:font-[1000]`}
        >
          <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
      </div>
    </div>
  );
}
