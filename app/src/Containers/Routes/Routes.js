import { ThemeProvider } from '@mui/material/styles';
import React from "react";
import {
  BrowserRouter,
  Navigate,
  useRoutes
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminInterface from '../../Components/UI/AdminInterface';
import Login from "../Pages/Login";
import defaultTheme from "../../style/defaultTheme"

function Logout() {
  localStorage.removeItem('auth');
  return (<Navigate to="/login" />)
}

function PrivateRoute({children}) {
  return localStorage.getItem('auth') ? <AdminInterface>{children}</AdminInterface> : <Navigate to="/logout" />
}

function Routes() {
  return useRoutes([
    { path: '/', element: <Login/> },
    { path: '/login', element: <Login/> },
    { path: '/logout', element: <Logout/> },
    { path: '/admin', element: <PrivateRoute><Dashboard/></PrivateRoute> },
    { path: '/admin/publishes', element: <PrivateRoute/> },
    { path: '/admin/orders', element: <PrivateRoute/> },
    { path: '/admin/payments', element: <PrivateRoute/> },
  ])
}

export default function AppRoutes() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};