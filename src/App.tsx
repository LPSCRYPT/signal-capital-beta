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
import { Box, Button } from "@chakra-ui/react";
import Keepers from "./components/Keepers";
import vitalyk1 from "./assets/vitalyk1.png";
import iconA from "./assets/iconA.png";
import iconB from "./assets/iconB.png";
import iconC from "./assets/iconC.png";
import { useContractRead, useContract, useAccount } from "wagmi";
import { BigNumber, Bytes } from "ethers";
import { readContract } from "@wagmi/core";
// const erc20abi = require("./contract/abis/erc20abi.json");
import { chainId } from "./ref/chain";
import DxDMemberPointsRegistry from "./contract/abis/DxDMemberPointsRegistry.json";
import { espgoerli } from "./ref/addresses";

function App() {
	const { address } = useAccount();
	const [shake, setShake] = useState(false);

	// const [counter, setCounter] = useState(0);
	// const [currentTime, setCurrentTime] = useState(
	// 	Math.floor(new Date().getTime() / 1000)
	// );
	// const counter = useRef(0);
	// const currentTime = useRef(Math.floor(new Date().getTime() / 1000));

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
	const { data: hook } = useContractRead({
		//@ts-ignore
		address: espgoerli.memberpointsregistry,
		abi: DxDMemberPointsRegistry,
		functionName: "getUserPoints",
		chainId: chainId.goerli,
		args: [BigNumber.from(1), address]
	});

	// /**USEFUL CODE STARTS HERE */
	// const [tempUser, setTempUser] = useState("0");

	// const readChain = async () => {
	// 	console.log("before read");
	// 	// const net = await provider.getNetwork();
	// 	// console.log(net);
	// 	const data = await readContract({
	// 		//@ts-ignore
	// 		address: espgoerli.memberpointsregistry,
	// 		abi: DxDMemberPointsRegistry,
	// 		functionName: "getUserPoints",
	// 		chainId: chainId.goerli,
	// 		args: [BigNumber.from(1), address]
	// 	});
	// 	console.log("data", data);
	// 	console.log("after read");
	// 	//@ts-ignore
	// 	if (data && data._hex) {
	// 		//@ts-ignore
	// 		setTempUser(ethers.utils.formatUnits(data, 0));
	// 	}
	// };

	// const [ticker, setticker] = useState(true);

	// const renderCheck = useRef<number>(0);

	// useEffect(() => {
	// 	if (address && address.length == 42 && renderCheck.current == 0) {
	// 		renderCheck.current = 1;
	// 		const triggerChain = async () => {
	// 			await readChain();
	// 		};
	// 		triggerChain();
	// 		console.log("TICKED");
	// 	}
	// }, []);
	//** USEFUL CODE ENDS HERE */

	// Call setTimout after component mounts
	// useEffect(() => {
	// 	console.log("counter 2", counter);
	// 	const timer = setTimeout(() => counter.current++, 10000);
	// 	return () => clearTimeout(timer);
	// }, [counter]);

	// useEffect(() => {
	// 	console.log("counter ", counter);
	// 	currentTime.current = Math.floor(new Date().getTime() / 1000);
	// 	console.log(currentTime);
	// }, [counter]);

	return <Box>test</Box>;
}

export default App;
