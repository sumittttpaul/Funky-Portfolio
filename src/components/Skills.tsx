import {
  SalesBadge,
  TechBadge,
  CodingBadge,
  MarketingBadge,
} from "../components/Badge";
import { SpotlightCardDynamic, SpotlightDynamic } from "./Spotlight";

export default function Skills({ isMobile }: { isMobile: boolean }) {
  return (
    <SpotlightDynamic isMobile={isMobile}>
      <SpotlightCardDynamic
        isMobile={isMobile}
        className="box-animation-Skill box-shadow flex hover:shadow-white/20 lg:hidden lg:w-auto lg:max-w-[465px] lg:rounded-3xl lg:transition-all lg:duration-500 xl:flex"
      >
        <div className="group z-20 flex w-full flex-col rounded-3xl border-white/20 lg:border-2 lg:p-5">
          <h2 className="hidden text-2xl font-bold text-white/20 group-hover:text-white lg:block lg:transition-colors lg:duration-500">
            Skills
          </h2>
          <div className="mt-2 flex w-full justify-between space-x-0 lg:mt-5 lg:justify-start lg:space-x-5">
            <div className="flex flex-col items-start justify-start space-x-0 space-y-3 lg:flex-row lg:space-x-5 lg:space-y-0">
              <CodingBadge />
              <SalesBadge />
            </div>
            <div className="flex flex-col items-end justify-end space-x-0 space-y-3 lg:flex-row lg:space-x-5 lg:space-y-0">
              <MarketingBadge />
              <TechBadge />
            </div>
          </div>
        </div>
      </SpotlightCardDynamic>
    </SpotlightDynamic>
  );
}
