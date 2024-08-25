import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import NotFoundPage from "design-system/layouts/NotFoundPage";
import HomePage from "./pages/HomePage";
import DotChat from "../design-system/components/DotChat/DotChat";
import ContactUs from "../design-system/components/ContactUs/ContactUs";
import JoinUS from "../design-system/components/JoinUS/JoinUS";
import Timeline from "../design-system/Indicators/ProgressBar";

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
  // {
  //   path: URLS.pages.progress,
  //   component: Timeline,
  // },
  {
    path: URLS.contactUs  ,
    component:ContactUs ,
  },
  {
    path: URLS.pages.joinUs  ,
    component:JoinUS ,
  },
]);
