import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const NavbarLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
export default NavbarLayout;
