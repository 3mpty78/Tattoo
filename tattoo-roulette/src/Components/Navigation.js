import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/spin">
          <li>Spin</li>
        </NavLink>
        <NavLink to="/infos">
          <li>Infos</li>
        </NavLink>
        <NavLink to="/artists">
          <li>Artists</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
