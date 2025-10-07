import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import Sales from "../pages/Sales";
import Users from "../pages/Users";
import NewUser from "../pages/NewUser";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Transactions from "../pages/Transactions";
import Reports from "../pages/Reports";
import Mail from "../pages/Mail";
import Feedback from "../pages/Feedback";
import Massages from "../pages/Massages";
import Manage from "../pages/Manage";
import type { routesType } from "../Types/routesType";

export const routes: routesType = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Analytics",
    element: <Analytics />,
  },
  {
    path: "/Sales",
    element: <Sales />,
  },
  {
    path: "/Users",
    element: <Users />,
  },
  {
    path: "/NewUser",
    element: <NewUser />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/Product/:id",
    element: <Product />,
  },

  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/mail",
    element: <Mail />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/massages",
    element: <Massages />,
  },
  {
    path: "/manage",
    element: <Manage />,
  },
];
