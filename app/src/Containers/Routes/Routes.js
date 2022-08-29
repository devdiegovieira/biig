import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import {

  BrowserRouter,
  Navigate,
  useRoutes
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login";
import Copyright from '../UI/Copyright';

function PrivateRoute({children}) {
  return localStorage.getItem('auth') ? children : <Navigate to="/login" />
}

const mdTheme = createTheme();

function Routes() {
  return useRoutes([
    { path: '/login', element: <Login/> },
    { path: '/', element: <PrivateRoute><Dashboard/></PrivateRoute> },
    
  ])
}

export default function AppRoutes() {

  return (
    <ThemeProvider theme={mdTheme}>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <Copyright sx={{ pt: 4 }} />
    </ThemeProvider>
  );
};