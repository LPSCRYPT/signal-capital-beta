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
			justifyContent={"space-between"}
			p={25}
			borderBottom={"1px solid"}
			borderBottomColor={"whiteAlpha.500"}
		>
			<Box w="500px" display={"flex"} alignItems={"center"}>
				{/* <span style={{ fontSize: "32px" }}>📡 </span> */}
				<Text ml={5} fontSize="48px" fontWeight="100">
					<span style={{color: "yellow"}}>E</span>
					<span style={{color: "orange"}}>S</span>
					<span style={{color: "red"}}>P</span>
				</Text>
				<Text size="xs" color="rgba(255,255,255,0.5)">ALPHA</Text>
			</Box>
			
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"flex-end"}
				>
					<span style={{ display: "flex", flexDirection: "row", paddingRight: 10 }} >
						<Stack direction="row">
							<Switch colorScheme="teal" size="lg" onChange={toggleColorMode} />
						</Stack>
						<span style={{ fontSize: "18px", marginLeft: "5px" }}>
							{colorMode === "light" ? " 🌙" : "🌞"}
						</span>
					</span>
					{address ? (
						<Box
						display={"flex"}
						w="100%"
						alignItems={"center"}
						justifyContent={"flex-end"}
					>
					<Box className="Points" marginRight={2}>
						{friend.length > 0 ? `${friend[0]["points"]}` : null}
						<br />
						<span>
							<small>/1000</small>
						</span>
					</Box>
					<Box>{friend.length > 0 ? friend[0]["name"] : address}</Box>
					</Box>
					) : (
						<Button onClick={() => connect()}>Connect Wallet</Button>
					)}
				</Box>
		</Box>
	);
};

export default Headbar;
