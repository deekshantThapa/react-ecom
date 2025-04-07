import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// protected routes
import ProtectedRouteForUser from "./components/ProtectedRoute/ProtectedRouteForUser";
import ProtectedRouteForAdmin from "./components/ProtectedRoute/ProtectedRouteForAdmin"

// pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import AddProduct from "./pages/Admin/AddProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import ProductDetail from "./pages/SingleProductDetail/SingleProductDetail";

export default function App(){

  const customRouter = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<RootLayout />}>

        {/* Authentication */}

        <Route path="login" element={<Login />} />

        <Route path="signup" element={<SignUp />} />

        {/* Protected Routes For User and Admin */}

        <Route path="order"
          element={
            <ProtectedRouteForUser>
              <Order />
            </ProtectedRouteForUser>
          }
        />

        <Route path="cart"
          element={
            <ProtectedRouteForUser>
              <Cart />
            </ProtectedRouteForUser>
          } 
        />

        <Route path="dashboard" 
          element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } 
        />

        {/* Normal Routes */}

        <Route index element={<Home />} />

        <Route path="add-product" element={<AddProduct />} />

        <Route path="update-product" element={<UpdateProduct />} />

        <Route path="product-detail/:id" element={<ProductDetail />} />

        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Route>
    )
  );

  return(
    <RouterProvider router={customRouter} />
  )
}