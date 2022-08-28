import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Styles from "./CSS/about.module.css";

function About() {
  return (
    <div>
      <h1>
        <i>About</i>
      </h1>
      <p>About Description</p>
      <div className={Styles.container}>
        <NavLink
          className={Styles.link}
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "black",
            backgroundColor: isActive ? "black" : "white",
            transition: ".4s all ease",
            padding: "0.5rem 2rem",
            borderRadius: "1rem",
          })}
          to="/about/about2"
        >
          About2
        </NavLink>
        <NavLink
          className={Styles.link}
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "black",
            backgroundColor: isActive ? "black" : "white",
            transition: ".4s all ease",
            padding: "0.5rem 2rem",
            borderRadius: "1rem",
          })}
          to="/about/about3"
        >
          About3
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default About;
