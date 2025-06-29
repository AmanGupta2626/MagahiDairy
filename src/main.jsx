import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgetPassword";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import { Sales } from "./pages/Sales";
import { Distributors } from "./pages/Distributors";
import { Drivers } from "./pages/Drivers";
import { Reports } from "./pages/Reports";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import Contact from "./pages/Contact";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    element: <Layout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/sales", element: <Sales /> },
      { path: "/distributors", element: <Distributors /> },
      { path: "/drivers", element: <Drivers /> },
      { path: "/reports", element: <Reports /> },
      { path: "/products", element: <Products /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </CartProvider>
  </StrictMode>
);
