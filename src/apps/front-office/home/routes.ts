import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import NotFoundPage from "design-system/layouts/NotFoundPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import DotChat from "../pages/DotChat/DotChat";
import TermsConditions from "../pages/informative-pages/TermsConditions/TermsConditions";
import JoinUS from "../pages/JoinUS/JoinUS";
import HomePage from "./pages/HomePage";

publicRoutes([
  {
    path: URLS.notFound,
    component: NotFoundPage,
  },
  {
    path: URLS.home,
    component: HomePage,
  },
  {
    path: URLS.pages.dotchat,
    component: DotChat,
  },
  {
    path: URLS.pages.aboutUs,
    component: AboutUs,
  },
  {
    path: URLS.contactUs,
    component: ContactUs,
  },
  {
    path: URLS.pages.termsConditions,
    component: TermsConditions,
  },
  {
    path: URLS.pages.joinUs,
    component: JoinUS,
  },
]);
