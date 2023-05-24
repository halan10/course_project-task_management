import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../../src/images/icon6.jpg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} style={{ height: 50, width: 50 }} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/todo" activeStyle>
            ToDo
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sing-up" activeStyle>
            Sing Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="singin">Sing In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
