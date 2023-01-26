import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignalList from "./components/SignalList";
import KeeperList from "./components/Keepers";
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
	Tooltip
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
import { useContractRead, useContract } from "wagmi";
import { readContract } from "@wagmi/core";
const erc20abi = require("./contract/abis/erc20abi.json");

function App() {
	const [shake, setShake] = useState(false);
	
	// const [counter, setCounter] = useState(0);
	// const [currentTime, setCurrentTime] = useState(
	// 	Math.floor(new Date().getTime() / 1000)
	// );
	const counter = useRef(0);
	const currentTime = useRef(Math.floor(new Date().getTime() / 1000));

	// const { data: callData } = useContractRead({
	// 	addressOrName: "0xdac17f958d2ee523a2206206994597c13d831ec7",
	// 	contractInterface: erc20abi,
	// 	functionName: "getOwner",
	// 	chainId: 1,
	// });

	// const contract = useContract({
	// 	addressOrName: "0xdac17f958d2ee523a2206206994597c13d831ec7",
	// 	contractInterface: erc20abi,
	// })

	// const readit = async () => {
	// 	// console.log('readbegin');
		// // const resp = await contract.getOwner();
		// const resp = await readContract({
		// addressOrName: espgoerli.memberpointsregistry,
		// contractInterface: DxDMemberPointsRegistry,
		// functionName: "getUserPoints",
		// chainId: chainId.goerli,
		// })
	// 	console.log('READ ADDRESS ',resp);

	// }

	// useEffect(() => {
	// 	console.log('effect1');
	// 	const readAsync = async () => {
	// 		await readit();
	// 	}
	// 	readAsync();
	// 	console.log('effect2')
	// }, []);

	// Call setTimout after component mounts
	useEffect(() => {
		console.log("counter 2", counter);
		const timer = setTimeout(() => counter.current++, 10000);
		return () => clearTimeout(timer);
	}, [counter]);

	useEffect(() => {
		console.log("counter ", counter);
		currentTime.current = Math.floor(new Date().getTime() / 1000);
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
						<Tab fontWeight={"700"}>
							<Image id="iconA" maxW="32px" src={iconA} alt="iconA" mr={3} />{" "}
							Signals
						</Tab>
						<Tab fontWeight={"700"}>
							<Image id="iconC" maxW="32px" src={iconC} alt="iconC" mr={3} />{" "}
							Signalers
						</Tab>
						<Tab fontWeight={"700"}>
							<Image id="iconB" maxW="32px" src={iconB} alt="iconB" mr={3} />
							You
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<SignalList currentTime={currentTime.current} />
						</TabPanel>
						<TabPanel>
							<Keepers />
						</TabPanel>
						<TabPanel>YourList</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
			{/* <SubgraphWrapper /> */}
			{/* <TestingFunctions /> */}
		</Box>
	);
}

export default App;
