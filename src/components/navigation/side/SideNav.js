import React from "react";
import styled from "styled-components";
import List from "../nav/list/List";

const SideNavWrapper = styled.ul`
  & a {
    text-decoration: none;
    color: var(--color-dark);
    font-weight: 900;
  }
`;

const SideNav = () => {
  return (
    <div>
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
    </div>
  );
};

export default SideNav;
