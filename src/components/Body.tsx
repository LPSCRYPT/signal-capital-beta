import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useFriendInfo } from "../views/subgraph";
import { useSubgraph } from "../views/subgraph";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import NewSignal from "./NewSignal";

const Body = () => {
	const { friends, signals } = useSubgraph();
	const { address } = useAccount();
	console.log({address})
	const { connect } = useConnect({
		connector: new InjectedConnector()
	});
	const { disconnect } = useDisconnect();
	const friend = useFriendInfo(address);

	const handleConnect = () => {
		console.log("Connecting")
		connect()
	}
	const handleDisconnect = () => {
		console.log("Disconnecting")
		disconnect()
	}
	return (
		<Box
			display={"flex"}
			flexDirection={"row"}
			flexWrap={'wrap'}
			justifyContent={'center'}
			h={"100%"}
			w={"100%"}
			bg={"blackAlpha.100"}
			// backgroundImage={signalBg}
			// backgroundSize={'cover'}
		>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
				minHeight={"400px"}
				p={50}
				maxWidth={"600px"}
				alignItems={"start"}
				
			>
				{!address ? (
					<Box>
						<Box mb={6}>Connect on Gnosis Chain</Box>
						<Button onClick={handleConnect}>Connect Wallet</Button>
					</Box>
				) : (
					<Box>
						<Text my={6} fontWeight="900" fontSize={"4xl"}>DXDAO</Text>
						{/* <Text fontSize="xl">
							Welkommen,{" "}
							<strong>
								{" "}
								{friend && friend.length > 0 ? friend[0]["name"] : address}
							</strong>
						</Text> */}
						<Text fontSize="sm" mt={3}>
							{friend && friend.length > 0
								? `You have ${friend[0]["points"]} of 1000 points available to Signal.`
								: null}
						</Text>
						<Text fontSize="sm" mt={3}>
							Add your signal to existing signals or add a new signal of your own.
						</Text>
						<Box mt={6}>
							<Button onClick={handleDisconnect}>Disconnect</Button>
						</Box>
						{/* <Text fontSize="xs" mt={6}><pre>TVS (Time Value Signal): weighted measure of signal over time</pre></Text> */}
					</Box>
				)}
			</Box>
			{ address ? (
				<Box
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					minHeight={"200px"}
					p={50}
					maxWidth={"600px"}
					alignItems={"end"}
				>
					<NewSignal />
				</Box>
			) : null}
		</Box>
	);
};

export default Body;
