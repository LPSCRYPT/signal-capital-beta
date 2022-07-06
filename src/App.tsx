import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignalList from "./components/SignalList";
import KeeperList from "./components/Keepers";
import YourList from "./components/YourList";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Headbar from "./components/Headbar";
import Body from "./components/Body";
import TestingFunctions from "./components/TestingFunctions";
import { Box, Button } from "@chakra-ui/react";
import Keepers from "./components/Keepers";

function App() {
	return (
		<Box
			className="pageWrapper"
			h={"100vh"}
			w={"100vw"}
			display={"flex"}
			flexDirection={"column"}
		>
			<Headbar />
			<Body />
			<Box flex="row" padding={25} paddingBottom={500}>
				<Tabs align="center">
					<TabList>
						<Tab>Signals 📡</Tab>
						<Tab>Friends 👽</Tab>
						<Tab>You 💖</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Box flex="row"></Box>
							<SignalList />
						</TabPanel>
						<TabPanel>
							<Box flex="row"></Box>
							<Keepers />
						</TabPanel>
						<TabPanel>
							<Box flex="row"></Box>
							<YourList />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
			{/* <SubgraphWrapper /> */}
			<TestingFunctions />
		</Box>
	);
}

export default App;
