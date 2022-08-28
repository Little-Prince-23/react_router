import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./CSS/navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className={Styles.list}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "black",
                backgroundColor: isActive ? "black" : "white",
                transition: ".4s all ease",
                padding: "0.5rem 2rem",
                borderRadius: "1rem",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "black",
                backgroundColor: isActive ? "black" : "white",
                transition: ".4s all ease",
                padding: "0.5rem 2rem",
                borderRadius: "1rem",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "black",
                backgroundColor: isActive ? "black" : "white",
                transition: ".4s all ease",
                padding: "0.5rem 2rem",
                borderRadius: "1rem",
              })}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
