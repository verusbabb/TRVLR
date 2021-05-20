import { Link } from "react-router-dom";
import "./style.css";
import { useUserContext } from "../../utils/userContext";
import React from "react";
import navLinks from "../../utils/navlinks.json";
import "materialize-css"
import { Navbar } from "react-materialize";

function Nav() {
  const { state } = useUserContext();

  console.log(state);

  return (
    <>
      <header>
        <Navbar className="transparentBG no-shadows">
          <div>
            <Link to="/" className="brand-logo center">
              T R V L R
            </Link>
            <ul className="sidenav-close">
              {navLinks.map((link, index) => {
                if (state.userName && link.logged === "in")
                  return (
                    <>
                      <li key={index}>
                        <Link to={link.linkTo} className="btn transparentBG no-shadows">
                          {link.linkName}
                        </Link>
                      </li>
                    </>
                  );
                else if (!state.userName && link.logged === "out")
                  return (
                    <>
                      <li key={index}>
                        <Link to={link.linkTo} className="btn transparentBG no-shadows">
                          {link.linkName}
                        </Link>
                      </li>
                    </>
                  );
              })}
            </ul>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default Nav;
