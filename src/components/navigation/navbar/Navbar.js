import React from "react";
import styled from "styled-components";

import Logo from "../../logo/Logo";
import Nav from "../nav/Nav";

const NavbarWrapper = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: fit-content;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  /* background: #f2f2f2; */
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
