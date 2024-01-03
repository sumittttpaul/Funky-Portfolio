import Image from "next/image";
import BackgroundImage from "../../public/background_image.png";

export default function Mascot() {
  return (
    <div className="relative -z-20 -mt-[200px] h-full w-auto scale-75 sm:-mt-[150px] lg:mt-0 lg:h-screen lg:w-full lg:scale-100">
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
      <div className="flex h-full min-h-[800px] w-full min-w-[360px] items-center justify-center">
        <Image
          height={800}
          width={360}
          src={BackgroundImage}
          alt="User Mascot Background Image"
          priority
        />
      </div>
    </div>
  );
}
