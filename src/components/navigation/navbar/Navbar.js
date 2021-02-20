import React from "react";
import styled from "styled-components";

import Logo from "../../logo/Logo";
import Nav from "../nav/Nav";

const NavbarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo to="https://www.google.com">Aquaoasis</Logo>
      <Nav />
    </NavbarWrapper>
  );
};

export default Navbar;
