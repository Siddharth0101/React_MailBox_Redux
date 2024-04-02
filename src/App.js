import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Authentication from "./pages/Authentication/Authentication";
import Inbox from "./pages/Inbox/Inbox";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Header />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/auth",
          element: <Authentication />,
        },
        {
          path: "inbox",
          element: <Inbox />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
