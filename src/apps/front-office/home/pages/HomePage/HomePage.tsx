import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";

import DotChatSection from "./DotChatSection/DotChatSection";
import HeroSectionNew from "./HeroSectionNew/HeroSectionNew";
import "./HomePage.css";
import LeadingProviders from "./LeadingProviders/LeadingProviders";
import SecondSection from "./SecondSection/SecondSection";
import UpcomingProducts from "./UpcomingProducts/UpcomingProducts";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="overflow-hidden bg-white pb-8">
        {/* <HeroSection /> */}
        <HeroSectionNew />
        <UpcomingProducts />
        <LeadingProviders />
        {/* <Demographic /> */}
        {/* <DotChatSection /> */}
        <SecondSection />
        <DotChatSection />
      </div>
    </>
  );
}
