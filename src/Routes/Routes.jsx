import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Pages/Home/Home/Home";
import SignUp from "../component/Pages/Authentication/SignUp/SignUp";
import Login from "../component/Pages/Authentication/Login/Login";
import ItemDetails from "../component/Pages/Products/ItemDetails";
import Selling from "../component/Pages/Selling/Selling";
import Products from "../component/Pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Products />,
      },
      {
        path: "/sell",
        element: <Selling />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/list/:id",
        element: <ItemDetails />,
      },
    ],
  },
]);
