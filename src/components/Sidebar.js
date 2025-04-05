import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const navItems = {
  Introduction: "/",
  Globals: "/globals",
};

const Sidebar = forwardRef(function Sidebar(_, ref) {
  return (
    <div ref={ref} className="sidebar flex flex-column">
      <nav className="flex flex-column p-10 gap-5">
        <div className="logo">
          <img src={logo} alt="Anto Labs" />
        </div>
        {Object.entries(navItems).map(([name, path]) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `nav-btn text-lg ${isActive ? "active" : ""}`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
});

export default Sidebar;
