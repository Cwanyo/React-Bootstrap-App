import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { SNavbar, SNavLink, SLink } from "./header.style";

class Header extends Component {
  state = {
    expanded: false
  };

  toggleNavBody = () => {
    this.setState({
      expanded: this.state.expanded ? false : true
    });
  };

  hideNavBody = () => {
    this.setState({
      expanded: false
    });
  };

  render() {
    return (
      <SNavbar
        onToggle={this.toggleNavBody}
        expanded={this.state.expanded}
        expand="sm"
      >
        <Navbar.Brand as={SLink} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link onClick={this.hideNavBody} as={SNavLink} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={this.hideNavBody} as={SNavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link onClick={this.hideNavBody} as={SNavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </SNavbar>
    );
  }
}

export default Header;
