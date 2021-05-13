import { Link } from "react-router-dom";
import "./style.css";
import { useUserContext } from "../../utils/userContext";
import React, { useState, useEffect, useContext } from "react";
import navLinks from "../../utils/navlinks.json";

function Nav() {
  const { state } = useUserContext();

  console.log(state);

  return (
    <>
      <header>
        <nav className="transparentBG no-shadows">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center">
              Trip Planner
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {navLinks.map((link, index) => {
                if (state.userName && link.logged === "in")
                  return (
                    <>
                      <li key={index}>
                        <Link to={link.linkTo} className="btn black">
                          {link.linkName}
                        </Link>
                      </li>
                    </>
                  );
                else if (!state.userName && link.logged === "out")
                  return (
                    <>
                      <li key={index}>
                        <Link to={link.linkTo} className="btn black">
                          {link.linkName}
                        </Link>
                      </li>
                    </>
                  );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
