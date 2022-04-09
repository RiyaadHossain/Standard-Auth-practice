import React from "react";
import { NavLink } from "react-router-dom";
// import useFirebase from "../Hooks/useFirebase";
import './Header.css'

const Header = () => {
  // const { user } = useFirebase()
  // console.log(user);
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
      {/* <span>{ user?.displayName}</span> */}
    </nav>
  );
};

export default Header;
