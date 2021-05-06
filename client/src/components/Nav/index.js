import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/">Trip Planner</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
