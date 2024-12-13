import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-secondary p-4">
      <div className="glass-sm p-2 px-4 text-center text-white">
        <Link to="/" className="text-lg font-bold">
          C~<span className="color-effect font-black">Dijk</span>
        </Link>
      </div>
      <div className="flex gap-4">
        <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/advies">
          Advies
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/hr">
          HR
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/toezicht">
          Toezicht
        </NavLink>
        {/* <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/coaching">
          Coaching
        </NavLink> */}
        <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
