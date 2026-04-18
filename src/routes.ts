import { createBrowserRouter } from "react-router";
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Flights} from './components/Flights';
import {Destinations} from './components/Destinations';
import {Deals} from './components/Deals';
import {About} from './components/About';
import {Footer} from './components/Footer';
import { TermsOfService } from "./components/Terms";
import { PrivacyPolicy } from "./components/Privacy";

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
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "cookie", Component: Cookie },
      { path: "*", Component: Home },
    ],
  },
]);