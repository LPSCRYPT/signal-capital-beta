import React from "react";
import { Box } from "@chakra-ui/react";
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
			h={"100%"}
			w={"100%"}
			bg={"blackAlpha.100"}
			backgroundImage={signalBg}
			backgroundSize={'cover'}
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
						<p>
							Welkommen,{" "}
							<strong>
								{" "}
								{friend && friend.length > 0 ? friend[0]["name"] : address}
							</strong>
						</p>
						<p>
							{friend && friend.length > 0
								? `You have ${friend[0]["points"]} of 1000 points available to Signal.`
								: null}
						</p>
						<p>
							Update your Signals to reflect the current state of your
							interests, for the benefit of your friends!
						</p>
						<p>TVS = Time Value Signal - weighted measure of signal * time</p>
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
					alignItems={"start"}
				>
					<NewSignal />
				</Box>
			) : null}
		</Box>
	);
};

export default Body;
