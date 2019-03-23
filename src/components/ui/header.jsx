import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { SNavbar, SNavLink, SLink } from "./header.style";

class Header extends Component {
  render() {
    return (
      <SNavbar collapseOnSelect expand="sm">
        <Navbar.Brand as={SLink} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={SNavLink} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link as={SNavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={SNavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </SNavbar>
    );
  }
}

export default Header;
