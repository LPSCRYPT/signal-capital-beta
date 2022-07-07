import { extendTheme } from "@chakra-ui/react";
// import { flashless } from "chakra-ui-flashless";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false
};
// without overrides
const theme = extendTheme(config);

export default theme;
