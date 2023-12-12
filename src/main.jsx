import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Feed from "./Components/Feed";
import VideoDetails from "./Components/VideoDetails";
import SearchFeed from "./Components/SearchFeed";
import ChannelDetails from "./Components/ChannelDetails";
import Root from "./Layout/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Feed></Feed>,
      },
      {
        path: "/video/:id",
        element: <VideoDetails></VideoDetails>,
      },
      {
        path: "/channel/:id",
        element: <ChannelDetails></ChannelDetails>,
      },
      {
        path: "/search/:searchTerm",
        element: <SearchFeed></SearchFeed>,
      },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
