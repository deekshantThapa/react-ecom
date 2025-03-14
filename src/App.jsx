import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Registration/Login";
import SignUp from "./pages/Registration/SignUp";
import AddProduct from "./pages/Admin/AddProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct";

export default function App(){

  const customRouter = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<RootLayout />}>

        <Route index element={<Home />} />

        <Route path="order" element={<Order />} />

        <Route path="cart" element={<Cart />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="contact" element={<Contact /> } />

        <Route path="login" element={<Login />} />

        <Route path="signup" element={<SignUp />} />

        <Route path="add-product" element={<AddProduct /> } />

        <Route path="update-product" element={<UpdateProduct /> } />

        <Route path="*" element={<NotFound />} />
        
      </Route>

    )
  );

  return(
    <RouterProvider router={customRouter} />
  )
}