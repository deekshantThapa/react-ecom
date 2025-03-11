import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="hgroup-wrap">
          <div className="site-branding">
            <Link to='/'>Shop.co</Link>
          </div>
          <div className="hgroup-right">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}
