import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Login from "../Pages/Login";

const MyRoutes = () => {
  let routes = useRoutes([
    { path: "/login", element: <Login /> }
  ]);
  return routes;
};

export default function Routes() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
};