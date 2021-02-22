import React from "react";
import styled from "styled-components";

const IconsWrapper = styled.div`
  color: var(--color-textColor);

  & > *::nth-child(2) {
    color: var(--color-textColor);
  }
`;

const Icons = ({ children }) => {
  return <IconsWrapper>{children}</IconsWrapper>;
};

export default Icons;
