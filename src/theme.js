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
    body: "bdr-mono",
  },
};
// without overrides
const theme = extendTheme(config);

export default theme;
