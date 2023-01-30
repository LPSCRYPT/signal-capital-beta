import React, { Fragment, useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignalList from "./components/SignalList";
import YourList from "./components/YourList";
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
import { useContractRead, useContract } from "wagmi";
import { readContract } from "@wagmi/core";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RoutedApp from "./RoutedApp";
import DefaultIndex from "./DefaultIndex";
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
		<Routes>
			<Route path=":id" element={<RoutedApp />} />
			<Route path="/" element={<DefaultIndex />} />
		</Routes>
	);
}

export default App;
