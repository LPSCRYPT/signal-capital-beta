import { extendTheme } from "@chakra-ui/react";
// import { flashless } from "chakra-ui-flashless";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  body: {
    bg: "#000",
  },
  fonts: {
    heading: "bdr-mono",
    body: "nimbus-sans-condensed",
    data: "bdr-mono",
  },
  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "21px",
    lg: "24px",
    xl: "32px",
    "2xl": "36px",
    "3xl": "42px",
    "4xl": "48px",
    "5xl": "56px",
    "6xl": "64px",
  },
};
// without overrides
const theme = extendTheme(config);

export default theme;
