import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import {
  BrowserRouter,
  Navigate,
  useRoutes
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminInterface from '../UI/AdminInterface';
import Login from "../Pages/Login";

function PrivateRoute({children}) {
  return localStorage.getItem('auth') ? <AdminInterface>{children}</AdminInterface> : <Navigate to="/login" />
}

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#db4848'
    },
    secondary: {
      main: '#eeaaaa'
    }
  }
});

function Routes() {
  return useRoutes([
    { path: '/', element: <Login/> },
    { path: '/login', element: <Login/> },
    { path: '/admin', element: <PrivateRoute><Dashboard/></PrivateRoute> },
    { path: '/admin/publishes', element: <PrivateRoute/> },
    { path: '/admin/orders', element: <PrivateRoute/> },
    { path: '/admin/payments', element: <PrivateRoute/> },
  ])
}

export default function AppRoutes() {

  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};