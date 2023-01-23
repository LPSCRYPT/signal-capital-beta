import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import {
	Box,
	Button,
	Input,
	Avatar,
	AvatarBadge,
	Stack,
	Switch,
	Text,
} from "@chakra-ui/react";
import { useAddAccount } from "../contract/calls/sigcapfunctions";
import { useFriendInfo } from "../views/subgraph";
import Logo from "../assets/darksignal_circle.png";
import "../App.css";
import { useColorMode } from "@chakra-ui/color-mode";

const Headbar = () => {
	const { address } = useAccount();
	const { connect } = useConnect({
		connector: new InjectedConnector()
	});
	const { disconnect } = useDisconnect();
	const { colorMode, toggleColorMode } = useColorMode();

	const friend = useFriendInfo(address);

	return (
		<Box
			display={"flex"}
			w="100%"
			alignItems={"center"}
			justifyContent={"space-between"}
			flexWrap={"wrap"}
			p={25}
			borderBottom={"1px solid"}
			borderBottomColor={"whiteAlpha.500"}
		>
			<Box minW={["100%", "100%", "33%", null]} display={"flex"} alignItems={"center"}>
				{/* <span style={{ fontSize: "32px" }}>📡 </span> */}
				<Text ml={5} fontSize="48px" fontWeight="100">
					<span style={{color: "yellow"}}>E</span>
					<span style={{color: "orange"}}>S</span>
					<span style={{color: "red"}}>P</span>
				</Text>
				<Text size="xs" color="rgba(255,255,255,0.5)">ALPHA</Text>
			</Box>
			<Box minW="33%">
				<Text py={3} fontSize="xs" style={{ color: 'red', textAlign: "center", border: "2px solid red"}}>(!) Be sure you are on <b>Gnosis Chain</b></Text>
			</Box>
			
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"flex-end"}
				minW="33%"
			>
				<Button variant="ghost" style={{ fontSize: "18px", marginLeft: "5px" }} onClick={toggleColorMode}>
					{colorMode === "light" ? " 🌙" : "🌞"}
				</Button>
				{address ? (
					<Box
					display={"flex"}
					w="100%"
					alignItems={"center"}
					justifyContent={"flex-end"}
				>
				<Box className="Points" marginRight={2}>
					{friend.length > 0 ? `${friend[0]["points"]}` : 0}
					<br />
					<span>
						<small>/1000</small>
					</span>
				</Box>
				<Box><Text noOfLines={1}>{friend.length > 0 ? friend[0]["name"] : address.slice(0,6) + '...' + address.slice(-4)}</Text></Box>
				</Box>
				) : (
					<Box>
					<Button onClick={() => connect()}>Connect</Button></Box>
				)}
			</Box>
		</Box>
	);
};

export default Headbar;
