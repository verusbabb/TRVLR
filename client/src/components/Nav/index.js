import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <>
    <header>
      <nav className="transparentBG no-shadows">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">Trip Planner</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/dashboard" className="btn black">Dashboard</Link>
            </li>
            <li>
              <Link to="/signup" className="btn black"> Signup</Link>
            </li>
            <li>
              <Link to="/login" className="btn black">Login</Link>
            </li>            
          </ul>
        </div>
      </nav>
    </header>
    </>
  );
}

export default Nav;
