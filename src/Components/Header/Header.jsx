import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav className=" h-20 flex items-center justify-center">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to={"/products"}
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to={"/cart"}
      >
        Cart
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to={"/register"}
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to={"/login"}
      >
        Log In
      </NavLink>
    </nav>
  );
};

export default Header;
