import React from "react";
import Dashboard from "./pages/Dashboard";
import Trip from "./pages/Trip";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/trips/:id">
              <Trip />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
            {/* <Route>
            <NoMatch />
          </Route> */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
