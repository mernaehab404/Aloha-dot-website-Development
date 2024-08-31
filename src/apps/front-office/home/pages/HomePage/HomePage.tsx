import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Demographic from "./Demographic/Demographic";
import HeroSection from "./HeroSection/HeroSection";
import "./HomePage.css";
import LeadingProviders from "./LeadingProviders/LeadingProviders";
import DotChatSection from "./SecondSection/SecondSection";
import UpcomingProducts from "./UpcomingProducts/UpcomingProducts";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="overflow-hidden">
        <HeroSection />
        <UpcomingProducts />
        <Demographic />
        <DotChatSection />
        <LeadingProviders />
      </div>
    </>
  );
}
