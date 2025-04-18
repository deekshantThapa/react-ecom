import { Link, NavLink, useNavigate } from "react-router-dom"

// context api
import MyContext from "../context/Data/MyContext"
import { useContext } from "react"

// react toastify
import { toast } from "react-toastify"

// react icons
import { FaMoon, FaSun } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5"
import { useSelector } from "react-redux"

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

  const cartItems = useSelector(state => state.cart);
  // console.log(cartItems);
  
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

        {user?.user?.email && user?.user?.email !== 'admin@gmail.com' && 
          <li>
          <IoCartOutline size={25} />
          <span>{cartItems.length}</span>
          {/* <div className="header-cart">
            {cartItems &&
              cartItems.map((item, index) => {
                const [title, imageUrl] = item;

                return(
                  <div className="cart-item-info">
                    
                  </div>
                )
              })
            }
          </div> */}
          </li>
        }

        <li onClick={themeToggle}>
          {darkMode ? <FaMoon size={19} /> : <FaSun size={19} />}
        </li>
        
      </ul>
    </nav>
  );
}
