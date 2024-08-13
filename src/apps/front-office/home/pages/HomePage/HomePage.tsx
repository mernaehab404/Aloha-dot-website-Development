import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Directors from "apps/front-office/design-system/components/Director/Director";
import LeadingProviders from "apps/front-office/design-system/components/LeadingProviders/LeadingProviders";
import Demographic from "./Demographic/Demographic";
import HeroSection from "./HeroSection/HeroSection";
import "./HomePage.css";
import "./HomePageMediaQuery.css";
import SecondSection from "./SecondSection/SecondSection";
import UpcomingProducts from "./UpcomingProducts/UpcomingProducts";
import DotChat from "apps/front-office/design-system/components/DotChat/DotChat";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="overflow-hidden">
      
        <HeroSection />
  
        <LeadingProviders />
        <hr />
        <SecondSection />
        <UpcomingProducts />
        <Demographic />
        <Directors />
       

      </div>
    </>
  );
}
