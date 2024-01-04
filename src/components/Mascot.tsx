import Image from "next/image";
import BackgroundImage from "../../public/background_image.png";

export default function Mascot({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      className={`${
        isMobile ? "scale-90 -mt-[125px]" : "scale-100 -mt-[100px]"
      } relative -z-20 flex h-full w-auto flex-col items-center justify-center lg:mt-0 lg:h-screen lg:w-full`}
    >
      <div className="absolute top-0 -z-10 flex h-full w-full items-center justify-center">
        <div className="-mt-[300px] ml-[150px] block aspect-square h-[500px] min-h-[500px] w-[500px] min-w-[500px] bg-gradient-radial from-dark-red to-75%" />
        <div className="-ml-[200px] mt-[100px] flex flex-col">
          <div
            className={`block aspect-square h-[600px] min-h-[600px] w-[600px] min-w-[600px] bg-gradient-radial from-dark-yellow to-75%`}
          />
          <div
            className={`-ml-[400px] -mt-[100px] block aspect-square h-[600px] min-h-[600px] w-[600px] min-w-[600px] bg-gradient-radial from-dark-blue to-75%`}
          />
        </div>
      </div>
      <div className="flex h-full max-h-[800px] w-full max-w-[360px] items-center justify-center">
        <div className="relative h-[600px] w-[270px] lg:h-[800px] lg:w-[360px]">
          <Image
            fill
            src={BackgroundImage}
            alt="User Mascot Background Image"
            sizes="(min-width: 1024px) 360px, 270px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
