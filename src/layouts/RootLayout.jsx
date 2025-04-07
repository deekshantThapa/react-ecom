import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// react-toastify -- it gives the small popup type messages like login successful, failed, etc
import { ToastContainer } from "react-toastify";

export default function RootLayout() {

  // not showing the header and footer in login and signup page
  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname)

  return (
    <>
    <ToastContainer position="top-center" autoClose={1200} />
    {!hideLayout && <Header />}
    <main>
      <Outlet />
    </main>
    {!hideLayout && <Footer />}
    </>
  )
}