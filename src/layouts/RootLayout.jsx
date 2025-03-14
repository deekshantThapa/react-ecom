import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {

  // not showing the header and footer in login and signup page
  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname)

  return (
    <>
    {!hideLayout && <Header />}
    <main>
      <Outlet />
    </main>
    {!hideLayout && <Footer />}
    </>
  )
}