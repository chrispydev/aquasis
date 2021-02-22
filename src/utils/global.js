import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing:border-box;
    }

    html {
      /* font-size: 75.5%; */
      box-sizing: border-box;
      --color-main: ${(props) => props.theme.colors.main};
      --color-textColor: ${(props) => props.theme.colors.textColor};
      --color-textDark: ${(props) => props.theme.colors.textDark};

      @media ${(props) => props.theme.mediaQueries.small} {
          /* font-size: 70%; */
      }

      @media ${(props) => props.theme.mediaQueries.smallest} {
          /* font-size: 60%; */
      } 

       @media ${(props) => props.theme.mediaQueries.large} {
          /* font-size: 55%; */
      }
    }

    body {
      font-family: 'Roboto', sans-serif;
      line-height: 1.5;
      background-color: rgb(11 ,66 ,152);
    }

    h1 {
  color: #426696;
  font-weight: 600;
  font-size: 3rem;
  opacity: 0.8;
}
h2,
p {
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
}

h3 {
  color: #426696;
  font-weight: 600;
  opacity: 0.8;
}
`;
