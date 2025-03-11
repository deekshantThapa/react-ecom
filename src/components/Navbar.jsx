import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='order'>Order</NavLink></li>
            <li><NavLink to='cart'>Cart</NavLink></li>
            <li><NavLink to='dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
        </ul>
    </nav>
  )
}
