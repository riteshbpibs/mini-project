import { createGlobalStyle } from "styled-components";

import InterRegular from "assets/fonts/inter/Inter-Regular.ttf";
import InterMedium from "assets/fonts/inter/Inter-Medium.ttf";
import InterSemiBold from "assets/fonts/inter/Inter-SemiBold.ttf";
import InterBold from "assets/fonts/inter/Inter-Bold.ttf";
import InterExtraBold from "assets/fonts/inter/Inter-ExtraBold.ttf";
import InterBlack from "assets/fonts/inter/Inter-Black.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  src: url(${InterRegular}) format("truetype");
}

@font-face {
  font-family: "Inter";
  font-style: medium;
  font-weight: 500;
  src: url(${InterMedium}) format("truetype");
}

@font-face {
  font-family: "Inter";
  font-style: "semi-bold";
  font-weight: 600;
  src: url(${InterSemiBold}) format("truetype");
}

@font-face {
  font-family: "Inter";
  font-style: bold;
  font-weight: 700;
  src: url(${InterBold}) format("truetype");
}

@font-face {
  font-family: "Inter";
  font-style: extra-bold;
  font-weight: 800;
  src: url(${InterExtraBold}) format("truetype");
}

@font-face {
  font-family: "Inter";
  font-style: black;
  font-weight: 900;
  src: url(${InterBlack}) format("truetype");
}

*,
body {
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Inter", sans-serif
}

html {
  scroll-behavior: auto !important;
}

body {
  overflow-x: hidden;
  background-color: #ffffff;
}
`;

export { GlobalStyles };
