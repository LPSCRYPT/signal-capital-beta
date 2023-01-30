import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
	ChakraProvider,
	localStorageManager,
	ColorModeScript
} from "@chakra-ui/react";
import { WagmiConfig, createClient, Chain, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"; //<<< new RPC
import { getDefaultProvider } from "ethers";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import theme from "./theme";
import { gnosis, mainnet } from "@wagmi/core/chains";
import { FlashlessScript } from "chakra-ui-flashless";
import { ethers } from "ethers";
import { BrowserRouter } from "react-router-dom";

const { chains, provider } = configureChains(
	[mainnet, gnosis], //  <<<<<< Gnosis Chain Addedd
	[
		jsonRpcProvider({ rpc: () => ({ http: "https://rpc.ankr.com/gnosis" }) }), //<<<< New RPC Provider
		publicProvider()
		//   publicProvider()
	]
);

const subgraphUri =
	// "https://api.thegraph.com/subgraphs/name/lpscrypt/espgoerli";
	"https://api.thegraph.com/subgraphs/name/lpscrypt/espgnosis";

const defaultOptions: any = {
	query: {
		fetchPolicy: "no-cache"
		// Access-Control-Allow-Origin: *
	}
};

const apolloClient = new ApolloClient({
	uri: subgraphUri,
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions
});

const wagmiClient = createClient({
	autoConnect: true,
	// provider: getDefaultProvider(100)
	provider: provider
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		{/* <FlashlessScript theme={theme} /> */}
		<BrowserRouter>
			<ApolloProvider client={apolloClient}>
				<WagmiConfig client={wagmiClient}>
					<ChakraProvider theme={theme} colorModeManager={localStorageManager}>
						<ColorModeScript initialColorMode={"dark"} />
						<App />
					</ChakraProvider>
				</WagmiConfig>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
