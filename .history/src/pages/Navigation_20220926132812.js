import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default Navigation;
