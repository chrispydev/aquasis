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
      --color-mainDark: ${(props) => props.theme.colors.mainDark};
      --color-mainLight: ${(props) => props.theme.colors.mainLight};
      --color-mainLighter: ${(props) => props.theme.colors.mainLighter};
      --color-whiteColor: ${(props) => props.theme.colors.whiteColor};
      --color-textColorDark: ${(props) => props.theme.colors.textColorDark};
      --shadow: ${(props) => props.theme.colors.shadow};

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
      line-height: 1.5
    }
`;
