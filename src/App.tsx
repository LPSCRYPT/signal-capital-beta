import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignalList from "./components/SignalList";
import KeeperList from "./components/Keepers";
import YourList from "./components/YourList";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Image,
	Stack,
	Switch,
	flexbox,
	Tooltip,
} from "@chakra-ui/react";
import Headbar from "./components/Headbar";
import Body from "./components/Body";
import TestingFunctions from "./components/TestingFunctions";
import { Box, Button } from "@chakra-ui/react";
import Keepers from "./components/Keepers";
import vitalyk1 from "./assets/vitalyk1.png";
import iconA from "./assets/iconA.png";
import iconB from "./assets/iconB.png";
import iconC from "./assets/iconC.png";

function App() {
	const [shake, setShake] = useState(false);

	const [counter, setCounter] = useState(0);
	const [currentTime, setCurrentTime] = useState(
		Math.floor(new Date().getTime() / 1000)
	);
	// Call setTimout after component mounts
	useEffect(() => {
		const timer = setTimeout(() => setCounter(counter + 1), 10000);
		return () => clearTimeout(timer);
	}, [counter]);

	useEffect(() => {
		console.log("counter ", counter);
		setCurrentTime(Math.floor(new Date().getTime() / 1000));
		console.log(currentTime);
	}, [counter]);

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
						<Tab><Image
							id="iconA"
							maxW="32px"
							src={iconA}
							alt="iconA"
						/> Signals</Tab>
						<Tab><Image
							id="iconC"
							maxW="32px"
							src={iconC}
							alt="iconC"
						/> Signalers</Tab>
						<Tab><Image
							id="iconB"
							maxW="32px"
							src={iconB}
							alt="iconB"
						/>You</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<SignalList currentTime={currentTime} />
						</TabPanel>
						<TabPanel>
							<Keepers />
						</TabPanel>
						<TabPanel>
							<YourList currentTime={currentTime} />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
			{/* <SubgraphWrapper /> */}
			{/* <TestingFunctions /> */}
		</Box>
	);
}

export default App;
