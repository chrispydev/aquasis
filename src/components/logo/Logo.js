import React from "react";
import styled from "styled-components";

const Brand = styled.a`
  font-weight: 900;
  font-size: 1rem;
  margin-left: 1.5rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-textColor);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoImage = styled.img`
  height: 3.4rem;
  object-fit: contain;
  margin-bottom: 0.7rem;
`;

const Logo = ({ children, to }) => {
  return (
    <Brand href={to}>
      <LogoImage src="/images/logo.png" alt="aquasis" />
      {children}
    </Brand>
  );
};

export default Logo;
