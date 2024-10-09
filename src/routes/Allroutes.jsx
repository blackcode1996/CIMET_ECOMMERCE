import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Wrapper from "../pages/Wrapper";
import Products from "../pages/Products";
import Singleproduct from "../pages/Singleproduct";
import Blog from "../pages/Blog";
import Singleblog from "../pages/Singleblog";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Authentication from "../pages/Authentication";
import PrivateRoute from "../pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path:"/products/:id",
        element: <Singleproduct/>
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path:"/blog/:id",
        element: <Singleblog/>
      },
      {
        path: "/cart",
        // element: <PrivateRoute><Cart /></PrivateRoute> ,
        element: <Cart /> ,
      },
      {
        path: "/profile",
        element:<PrivateRoute><Profile /> </PrivateRoute>,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
      {
        path: "/contact-us",
        element: <Authentication />,
      },
    ],
  },
]);

export const AllRoutes= ()=>{
    return <RouterProvider router={router}></RouterProvider>
}