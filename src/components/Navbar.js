import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <header className="header-layout">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <nav>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <span>&#124;</span>
        <li>
          <NavLink to="calculator" className="nav-link">Calculator</NavLink>
        </li>
        <span>&#124;</span>
        <li>
          <NavLink to="quote" className="nav-link">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
