import { ThemeProvider } from '@mui/material/styles';
import React from "react";
import {
  BrowserRouter,
  Navigate,
  useRoutes
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminInterface from '../Components/UI/AdminInterface';
import Login from "../Pages/Login";
import defaultTheme from "../../style/defaultTheme";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import PublishPage from '../Pages/Publish/PublishPage';

function Logout() {
  localStorage.removeItem('auth');
  return (<Navigate to="/login" />)
}

function PrivateRoute({ children }) {
  return JSON.parse(localStorage.getItem('user')).auth ? <AdminInterface>{children}</AdminInterface> : <Navigate to="/logout" />
}

function Routes() {
  return useRoutes([
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login /> },
    { path: '/logout', element: <Logout /> },
    { path: '/admin', element: <PrivateRoute><Dashboard /></PrivateRoute> },
    { path: '/admin/publishes', element: <PrivateRoute><PublishPage/></PrivateRoute> },
    { path: '/admin/orders', element: <PrivateRoute /> },
    { path: '/admin/payments', element: <PrivateRoute /> },
  ])
}

export default function AppRoutes() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />

    </ThemeProvider>
  );
};