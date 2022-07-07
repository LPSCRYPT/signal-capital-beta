import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import theme from "./theme";
import { FlashlessScript } from "chakra-ui-flashless";

const subgraphUri =
	"https://api.thegraph.com/subgraphs/name/lpscrypt/sigcapxdai2";

const defaultOptions: any = {
	query: {
		fetchPolicy: "no-cache"
	}
};

const apolloClient = new ApolloClient({
	uri: subgraphUri,
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions
});

const wagmiClient = createClient({
	autoConnect: true,
	provider: getDefaultProvider()
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		{/* <FlashlessScript theme={theme} /> */}
		<ApolloProvider client={apolloClient}>
			<WagmiConfig client={wagmiClient}>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</WagmiConfig>
		</ApolloProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
