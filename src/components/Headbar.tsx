import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Box, Input, Avatar, AvatarBadge } from "@chakra-ui/react";
import { useAddAccount } from "../contract/calls/sigcapfunctions";
import { useFriendInfo } from "../views/subgraph";
import Logo from "../assets/darksignal_circle.png";
import "../App.css";

const Headbar = () => {
	const { address } = useAccount();
	const { connect } = useConnect({
		connector: new InjectedConnector()
	});
	const { disconnect } = useDisconnect();

	const friend = useFriendInfo(address);

	return (
		<Box
			display={"flex"}
			w="100%"
			justifyContent={"space-between"}
			p={25}
			borderBottom={"1px solid"}
			borderBottomColor={"whiteAlpha.500"}
			bg={"blackAlpha.700"}
		>
			<Box w="150px" display={"flex"} alignItems={"center"}>
				<b>
					{/* <Avatar src={Logo} name="logo" size={"sm"} marginRight={3} /> */}
					<span style={{ fontSize: "32px" }}>📡 </span>
					<span style={{ fontSize: "18px" }}>SigCap</span>
				</b>
			</Box>
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
						<span><small>/1000</small></span>
					</Box>
					<Box>{friend.length > 0 ? friend[0]["name"] : address}</Box>
				</Box>
			) : (
				<button onClick={() => connect()}>Connect Wallet</button>
			)}
		</Box>
	);
};

export default Headbar;
