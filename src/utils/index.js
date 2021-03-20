import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppWrapper = styled.div`
  width: 90vw;
  height: 90vh;
  /* overflow: hidden; */
  border-radius: 3rem;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
`;
