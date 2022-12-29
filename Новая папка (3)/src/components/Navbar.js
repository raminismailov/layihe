import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      // əsas əkran dizayn
      <NavWrapper className="navbar  ">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        <Link to="/" className="nav-link">
          <ButtonContainer>Məhsullar</ButtonContainer>
        </Link>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
              mənim səbətim
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: blue;
  .nav-link {
    color: white !important;
    font-size: 2rem;
    text-transform: capitalize;
  }
`;
