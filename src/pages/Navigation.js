import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./HomeScreen";
import Tasks from "./TasksScreen";

function Navigation() {
  const [theme, setTheme] = useState("dark-theme");

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Router>
      <div className={theme}>
        <button className="btn" onClick={toggleTheme}>
          Change Theme
        </button>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
