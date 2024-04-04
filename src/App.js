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
import { fetchData, sendRequest } from "./store/DataRequest";
let isInitial = true;
function App() {
  const items = useSelector((state) => state.Data.items);
  const isLogin = useSelector((state) => state.LogInStore.isLogged);
  const checkChanged = useSelector((state) => state.Data.changed);
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <div>{!isLogin && <Home />}</div>,
        },
        {
          path: "/auth",
          element: <Authentication />,
        },
        {
          path: "/inbox",
          element: <div>{isLogin ? <Inbox /> : <Authentication />}</div>,
        },
        {
          path: "/send",
          element: <div>{isLogin ? <Send /> : <Authentication />}</div>,
        },
        {
          path: "/draft",
          element: <div>{isLogin ? <Draft /> : <Authentication />}</div>,
        },
      ],
    },
  ]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (checkChanged) {
      dispatch(sendRequest(items));
    }
  }, [items, dispatch]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
