import CardItem from "../Components/CardItem/CardItem";
import Amazing from "../Pages/Amazing/Amazing";
import Brands from "../Pages/Brands/Brands";
import Home from "../Pages/Home/Home";
import IranianDesignersHome from "../Pages/IranianDesignersHome/IranianDesignersHome";
import Most_Recent from "../Pages/Most_Recent/Most_Recent";
import Popular from "../Pages/Popular/Popular";
import RecentBestSellers from "../Pages/RecentBestsellers/RecentBestsellers";
import Recent_Visit from "../Pages/Recent_Visit/Recent_Visit";
import Visited from "../Pages/Visited/Visited";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/amazing", element: <Amazing /> },
  { path: "/card-item/:cardID", element: <CardItem /> },
  { path: "/visited", element: <Visited /> },
  { path: "/best-seller", element: <RecentBestSellers /> },
  { path: "/popular/:popularName", element: <Popular /> },
  { path: "/brands", element: <Brands /> },
  { path: "/most-recent", element: <Most_Recent /> },
  { path: "/home-designers-iranian", element: <IranianDesignersHome /> },
  { path: "/recent-visit", element: <Recent_Visit /> },
];

export { routes };
