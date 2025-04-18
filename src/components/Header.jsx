import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import siteLogoImg from "../assets/Images/site-logo.png";

export default function Header() {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header className="site-header">
      <div className="container">
        <div className="hgroup-wrap">
          <div className="site-branding">
            <Link to='/'>
              <img src={siteLogoImg} alt="" />
            </Link>
          </div>
          <div className="hgroup-right">
            <Navbar />
          </div>
        </div>
        {user && 
          <div className="user-log-status">
            <span>Logged in as: {user.user.displayName}</span>
          </div>
        }
      </div>
    </header>
  )
}
