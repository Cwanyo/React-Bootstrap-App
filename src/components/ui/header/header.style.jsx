import styled from "styled-components";

import { NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const SNavbar = styled(Navbar)`
  background-color: #49707f;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2000;
  min-height: 56px;
`;

export const SLink = styled(Link)`
  &&& {
    color: #ffffff;
    font-weight: 700;
  }
`;

export const SNavLink = styled(NavLink)`
  &&& {
    height: inherit;
    color: rgba(255, 255, 255, 0.5);
    margin: 2px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 5px;
    font-weight: 700;
    display: block;
    border-left: 0.25rem solid transparent;

    &.active {
      color: white;
      border-color: white;
    }
    &:hover:not(.active) {
      color: yellow;
      border-color: yellow;
    }
  }
`;
