import React from "react";
import UserProfile from "../components/UserProfile/UserProfile";
const Home = React.lazy(() => import("../pages/Home"));
const Authenticate = React.lazy(() => import("../pages/Authenticate"));
const Profile = React.lazy(() => import("../pages/Profile"));

const allRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    status: false,
  },
  {
    id: 2,
    path: "/auth",
    element: <Authenticate />,
    status: false,
  },
  {
    id: 3,
    path: "/profile",
    element: <UserProfile />,
    status: false,
  },
];
export default allRoutes;
