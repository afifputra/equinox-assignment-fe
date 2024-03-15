import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cars from "../pages/Cars";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <>home</>,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
  {
    path: "/orders",
    element: <>orders</>,
  },
]);

function Root() {
  return <RouterProvider router={routes} />;
}

export default Root;
