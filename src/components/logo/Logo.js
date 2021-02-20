import React from "react";
import styled from "styled-components";

const Brand = styled.a`
  font-weight: 900;
  font-size: 1.5rem;
  margin-left: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
`;

const Logo = ({ children, to }) => {
  return <Brand href={to}>{children}</Brand>;
};

export default Logo;
