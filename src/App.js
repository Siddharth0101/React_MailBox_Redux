import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Authentication from "./pages/Authentication/Authentication";
import Inbox from "./pages/Inbox/Inbox";
import Send from "./pages/Send/Send";
import Draft from "./pages/Draft/Draft";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRequest } from "./store/DataRequest";
function App() {
  const items = useSelector((state) => state.Data.items);
  const dispatch = useDispatch();
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
          path: "/inbox",
          element: <Inbox />,
        },
        {
          path: "send",
          element: <Send />,
        },
        {
          path: "/draft",
          element: <Draft />,
        },
      ],
    },
  ]);
  useEffect(() => {
    dispatch(sendRequest(items));
  }, [items, dispatch]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
