import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useFriendInfo } from "../views/subgraph";
import { useSubgraph } from "../views/subgraph";
import { useAccount } from "wagmi";
import NewAccount from "./NewAccount";
import NewSignal from "./NewSignal";
import signalBg from "../assets/signal_bg_trans.png";

const Body = () => {
	const { friends, signals } = useSubgraph();
	const { address } = useAccount();
	const friend = useFriendInfo(address);

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
				{friend.length == 0 ? (
					<NewAccount />
				) : (
					<Box>
						<Text my={6} fontWeight="900" fontSize={"4xl"}>DAOCEMBER</Text>
						<Text fontSize="xl">
							Welkommen,{" "}
							<strong>
								{" "}
								{friend && friend.length > 0 ? friend[0]["name"] : address}
							</strong>
						</Text>
						<Text fontSize="sm" mt={3}>
							{friend && friend.length > 0
								? `You have ${friend[0]["points"]} of 1000 points available to Signal.`
								: null}
						</Text>
						<Text fontSize="sm" mt={3}>
							Add your signal to existing signals or add a new signal of your own.
						</Text>
						<Text fontSize="xs" mt={6}><pre>TVS (Time Value Signal): weighted measure of signal over time</pre></Text>
					</Box>
				)}
			</Box>
			{friend.length > 0 ? (
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
