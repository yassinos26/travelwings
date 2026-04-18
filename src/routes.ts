import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import Home from './components/Home';
import Flights from './components/Flights';
import Destinations from './components/Destinations';
import Deals from './components/Deals';
import About from './components/About';
import  TermsOfService  from "./components/Terms";
import  PrivacyPolicy  from "./components/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "flights", Component: Flights },
      { path: "destinations", Component: Destinations },
      { path: "deals", Component: Deals },
      { path: "about", Component: About },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "terms", Component: TermsOfService },
      { path: "*", Component: Home },
    ],
  },
]);