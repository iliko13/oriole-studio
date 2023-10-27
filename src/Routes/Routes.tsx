import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Store from "../Pages/Store";

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
