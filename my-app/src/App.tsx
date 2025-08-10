import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from "./pages/FormPage/FormPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
