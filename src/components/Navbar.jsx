import { Link, NavLink, useNavigate } from "react-router-dom"

// react icons
import { FaMoon, FaSun } from "react-icons/fa"
import { useContext } from "react"

// context api
import MyContext from "../context/Data/MyContext"
import { toast } from "react-toastify"

export default function Navbar() {

  const context = useContext(MyContext)
  const {darkMode, themeToggle} = context;

  // handling log out

  const user = JSON.parse(localStorage.getItem('user')); 

  // const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.info("Log out successfull");
  }

  // if(!user){
  //   navigate('/login');
  // }

  return (
    <nav>
      <ul>

        <li><NavLink to="/">Home</NavLink></li>

        {user?.user?.email &&  <li><NavLink to="order">Order</NavLink></li>}
        
        {user?.user?.email === 'admin@gmail.com' && 
        <li><NavLink to="dashboard">Dashboard</NavLink></li>}

        {user?.user?.email && user?.user?.email !== 'admin@gmail.com' && <li><NavLink to="cart">Cart</NavLink></li>}

        <li><NavLink to="contact">Contact</NavLink></li>

        <li>{user?.user?.email ? 
          <Link onClick={handleLogout}>Logout</Link> : 
          <Link to={"/login"}>Login</Link>}
        </li>

        {!user?.user?.email && 
        <li><Link to={'/signup'} className="btn-primary">Signup</Link></li>}

        <li onClick={themeToggle}>
          {darkMode ? <FaMoon size={19} /> : <FaSun size={19} />}
        </li>
        
      </ul>
    </nav>
  );
}
