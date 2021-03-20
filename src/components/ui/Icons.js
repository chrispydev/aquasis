import React from "react";
import styled from "styled-components";

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-textColor);
  margin-bottom: 3rem;
  font-size: 1.2rem;

  & > *::nth-child(2) {
    color: var(--color-textColor);
  }
`;

const Icons = ({ children }) => {
  return <IconsWrapper>{children}</IconsWrapper>;
};

export default Icons;
