import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div
        className="navbar"
        style={{ display: "flex", alignContent: "start" }}
      >
        <div style={{ alignContent: "center" }}>
          <NavLink className="navbar-items" to="/">
            Home
          </NavLink>
        </div>
        <div style={{ alignContent: "center" }}>
          <NavLink
            className="navbar-items"
            style={{ verticalAlign: "middle" }}
            to="/about"
          >
            About Me
          </NavLink>
        </div>

        <div style={{ alignContent: "center" }}>
          <NavLink
            className="navbar-items"
            style={{ verticalAlign: "middle" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
