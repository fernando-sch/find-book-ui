import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { BookDetails } from "../pages/BookDetails/BookDetails";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <BookDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
};
