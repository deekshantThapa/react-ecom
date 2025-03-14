import { NavLink } from "react-router-dom"

// react icons
import { FaMoon, FaSun } from "react-icons/fa"
import { useContext } from "react"

// context api
import MyContext from "../context/Data/MyContext"

export default function Navbar() {

  const context = useContext(MyContext)
  const {darkMode, themeToggle} = context;

  return (
    <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='order'>Order</NavLink></li>
            <li><NavLink to='dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='cart'>Cart</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
            <li onClick={themeToggle}>
              {darkMode ? <FaMoon size={19} /> : <FaSun size={19} />}
            </li>
        </ul>
    </nav>
  )
}
