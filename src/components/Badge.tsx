import Image from "next/image";
import HotBadgeIcon from "../../public/fire-color.svg";
import TechBadgeIcon from "../../public/lightning-color.svg";
import ProgrammingBadgeIcon from "../../public/new-color.svg";
import MarketingBadgeIcon from "../../public/trending-color.svg";

function Box(props: { children: React.ReactNode; BGColor: string }) {
  return (
    <div
      className={` ${props.BGColor} relative flex items-center space-x-1.5 rounded-lg py-1.5 pl-1.5 pr-3`}
    >
      {props.children}
    </div>
  );
}

function Text(props: { children: React.ReactNode; isMobile: boolean }) {
  return (
    <h4
      className={`block ${
        props.isMobile ? "text-[11px]" : "text-[13px]"
      } font-medium lg:text-sm`}
    >
      {props.children}
    </h4>
  );
}

export function SalesBadge({ isMobile }: { isMobile: boolean }) {
  return (
    <Box BGColor={`bg-[#91020090] ${isMobile ? "w-[70px]" : "w-[80px]"}`}>
      <Image
        height={isMobile ? 17 : 20}
        width={isMobile ? 17 : 20}
        src={HotBadgeIcon}
        alt="Hot Badge Icon"
      />
      <Text isMobile={isMobile}>Sales</Text>
    </Box>
  );
}

export function TechBadge({ isMobile }: { isMobile: boolean }) {
  return (
    <Box BGColor={`bg-[#b48a0090] ${isMobile ? "w-[66px]" : "w-[76px]"}`}>
      <Image
        height={isMobile ? 17 : 20}
        width={isMobile ? 17 : 20}
        src={TechBadgeIcon}
        alt="Lightning Badge Icon"
      />
      <Text isMobile={isMobile}>Tech</Text>
    </Box>
  );
}

export function CodingBadge({ isMobile }: { isMobile: boolean }) {
  return (
    <Box BGColor={`bg-[#b48a0090] ${isMobile ? "w-[80px]" : "w-[92px]"}`}>
      <Image
        height={isMobile ? 17 : 20}
        width={isMobile ? 17 : 20}
        src={ProgrammingBadgeIcon}
        alt="New Badge Icon"
      />
      <Text isMobile={isMobile}>Coding</Text>
    </Box>
  );
}

export function MarketingBadge({ isMobile }: { isMobile: boolean }) {
  return (
    <Box
      BGColor={`bg-[#0063b490] space-x-2 ${
        isMobile ? "w-[97px]" : "w-[113px]"
      }`}
    >
      <Image
        height={isMobile ? 17 : 20}
        width={isMobile ? 17 : 20}
        src={MarketingBadgeIcon}
        alt="Trending Badge Icon"
      />
      <Text isMobile={isMobile}>Marketing</Text>
    </Box>
  );
}
