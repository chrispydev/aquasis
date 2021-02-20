import React from "react";
import styled from "styled-components";

import List from "./list/List";

const NavWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-weight: bolder;

  & a {
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
    <>
      <NavWrapper>
        <List>
          <a href="https://www.google.com">Home</a>
        </List>
        <List>
          <a href="https://www.google.com">About</a>
        </List>
        <List>
          <a href="https://www.google.com">Service</a>
        </List>
        <List>
          <a href="https://www.google.com">Contact</a>
        </List>
      </NavWrapper>
    </>
  );
};

export default Nav;
