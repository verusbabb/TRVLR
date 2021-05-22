import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Trip from "./pages/Trip";
import CreateTrip from "./pages/CreateTrip";
import Schedule from "./pages/Schedule";
import Expenses from "./pages/Expenses";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Signout from "./pages/Signout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { useUserContext } from "./utils/userContext";
import { ProtectedRoute } from "./components/protectedRoutes";

function App() {
  const { state, dispatch } = useUserContext();

  var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function logout() {
      alert("You are now logged out.");
      dispatch({
        type: "logOut",
        isAuthenticated: "false",
      });
      localStorage.removeItem("user");
      // eslint-disable-next-line no-restricted-globals
      location.href = "/login";
    }

    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 1200000);
      // 1000 milliseconds = 1 second
    }
  };

  if (state.isAuthenticated) {
    inactivityTime();
  }

  return (
    <Router>
      {/* <Link to="/dashboard" className="brand-logo-mobile center">
              T R V L R
            </Link> */}
      <Nav />
      <main className="valign-wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/trips/:id" component={Trip} />
          <ProtectedRoute exact path="/createtrip" component={CreateTrip} />
          <ProtectedRoute
            exact
            path="/trips/:id/schedule"
            component={Schedule}
          />
          <ProtectedRoute
            exact
            path="/trips/:id/expenses"
            component={Expenses}
          />
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signout">
            <Signout />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
