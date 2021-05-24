import { Link } from "react-router-dom";
import "./style.css";
import { useUserContext } from "../../utils/userContext";
import React from "react";
import navLinks from "../../utils/navlinks.json";
import "materialize-css"
import { Navbar } from "react-materialize";

function Nav() {
  const { state } = useUserContext();

  return (
    <>
      <header>
        <Navbar className="transparentBG no-shadows"
        alignLinks="right"
        brand={<Link to="/dashboard" className="brand-logo center" id="brand-logo">
        T R V L R
      </Link>}>
          <div className="navbar-default">
            <ul className="sidenav-close">
              {navLinks.map((link, index) => {
                if (state.userName && link.logged === "in")
                  return (
                      <li key={index}>
                        <Link to={link.linkTo} className="btn transparentBG no-shadows">
                          {link.linkName}
                        </Link>
                      </li>
                  );
                else if (!state.userName && link.logged === "out")
                  return (
                      <li key={index}>
                        <Link to={link.linkTo} className="btn transparentBG no-shadows">
                          {link.linkName}
                        </Link>
                      </li>
                  );
                return "";
              })}
            </ul>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default Nav;
