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
      main: '#f44336'
    },
    secondary: {
      main: '#3f51b5'
    }
  }
});

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
    </ThemeProvider>
  );
};