import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div>
      <h1>Math Magicians</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
