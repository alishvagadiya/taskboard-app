import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Components from "./pages/Components";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "Components",
        element: <Components />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}