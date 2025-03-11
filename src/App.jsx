import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./Layouts/RootLayout";

// pages
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";

// context api
import MyState from "./context/data/myState";

export default function App(){

  const customRouter = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<RootLayout />}>

        <Route index element={<Home />} />

        <Route path="order" element={<Order />} />

        <Route path="cart" element={<Cart />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="contact" element={<Contact /> } />

        <Route path="*" element={<NotFound />} />
        
      </Route>

    )
  );

  return(
    
    <MyState>
      <RouterProvider router={customRouter} />
    </MyState>

  )
}