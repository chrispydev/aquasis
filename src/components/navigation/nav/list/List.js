import React from "react";
import styled from "styled-components";

const ListWraper = styled.li`
  margin-right: 1.3rem;
  text-transform: uppercase;
`;

const List = ({ children }) => {
  return (
    <ListWraper>
      <li>{children}</li>
    </ListWraper>
  );
};

export default List;
