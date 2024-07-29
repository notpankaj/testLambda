import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/landing";
import AuthPage from "./pages/auth/index";
import ShopPage from "./pages/shop";
import CommercialPage from "./pages/commercial";
import PolicyReview from "./pages/policy-review";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { Toaster } from "react-hot-toast";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import VerifyAccountPage from "./pages/auth/VerifyAccont";
import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
Amplify.configure(config);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/verify-account",
    element: <VerifyAccountPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/commercial",
    element: <CommercialPage />,
  },
  {
    path: "/policyreview",
    element: <PolicyReview />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
function App() {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
