import React, { Fragment, useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignalList from "./components/SignalList";
import YourList from "./components/YourList";
import KeeperList from "./components/Keepers";
import {
	Box,
	Button,
	Heading,
	Image,
	Input,
	Avatar,
	AvatarBadge,
	Stack,
	Switch,
	Text,
	DarkMode
} from "@chakra-ui/react";
import Headbar from "./components/Headbar";
import Body from "./components/Body";
// import { Box, Button } from "@chakra-ui/react";
import Keepers from "./components/Keepers";
import vitalyk1 from "./assets/vitalyk1.png";
import iconA from "./assets/iconA.png";
import iconB from "./assets/iconB.png";
import iconC from "./assets/iconC.png";
import { useContractRead, useContract } from "wagmi";
import { readContract } from "@wagmi/core";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RoutedApp from "./RoutedApp";
import Logo from "./assets/esp_ico.png";
import Git from "./assets/github.png";
const erc20abi = require("./contract/abis/erc20abi.json");

const DefaultIndex = () => {
	return (
		<DarkMode>
			<Box
				className="pageWrapper"
				h={"100vh"}
				w={"100vw"}
				display={"flex"}
				flexDirection={"column"}
			>
				<Box
					minW={["100%", "100%", "33%", null]}
					display={"flex"}
					alignItems={"center"}
				>
					<Image w={"100px"} src={Logo} />
					{/* <span style={{ fontSize: "32px" }}>📡 </span> */}
					<Heading fontSize="48px" fontWeight="100">
						<span style={{ color: "#68DDFD" }}>E</span>
						<span style={{ color: "#F3BF06" }}>S</span>
						<span style={{ color: "#FF0000" }}>P</span>
					</Heading>
					<Box display={"flex"} flexDirection={"column"}>
						<Heading size="xs" color="rgba(255,255,255,0.5)">
							Gnosis
						</Heading>
						<Heading size="xs" color="rgba(255,255,255,0.5)">
							ALPHA
						</Heading>
					</Box>
					<a style={{ marginLeft: "15px" }} href={`//github.com/LPSCRYPT/esp`}>
						{">>"}Peep the Github{"<<"}
					</a>
					{/* <Box>Check the Github</Box> */}
					{/* <Button onClick={() => setticker(!ticker)}>press me</Button> */}
				</Box>
				<Box marginLeft={"10px"}>
					<Box>Select Your Stream</Box>
					<Box marginTop={"5px"}>
						<Link to={`1`}>1: DxDAO</Link>
					</Box>
					<Box marginTop={"5px"}>
						<Link to={`2`}>2: DxDAO: Operations</Link>
					</Box>
					<Box marginTop={"5px"}>
						<Link to={`3`}>3: DxDAO: Voice</Link>
					</Box>
					<Box marginTop={"5px"}>
						<Link to={`4`}>4: DxDAO: Swapr</Link>
					</Box>
					<Box marginTop={"5px"}>
						<Link to={`5`}>5: DxDAO: Dxgov</Link>
					</Box>
					<Box marginTop={"5px"}>
						<Link to={`6`}>6: DxDAO: Carrot</Link>
					</Box>
				</Box>
			</Box>
		</DarkMode>
	);
};

export default DefaultIndex;
