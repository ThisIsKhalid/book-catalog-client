import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../components/BookDetails";
import Books from "../pages/Books/Books";
import NewBook from "../pages/Books/NewBook";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
