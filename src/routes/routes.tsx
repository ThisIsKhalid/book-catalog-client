import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Books from "../pages/Books/Books";
import NewBook from "../pages/Books/NewBook";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import BookDetails from "../components/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/books/add-book",
        element: <NewBook />,
      },
    ],
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
