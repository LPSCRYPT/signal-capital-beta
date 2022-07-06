import React from "react";
import { Box } from "@chakra-ui/react";
import { useFriendInfo } from "../views/subgraph";
import { useSubgraph } from "../views/subgraph";
import { useAccount } from "wagmi";
import NewAccount from "./NewAccount";
import NewSignal from "./NewSignal";

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
			bg={"blackAlpha.500"}
		>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
				minHeight={"200px"}
				p={50}
				maxWidth={"600px"}
				alignItems={"start"}
			>
				{!friend ? (
					<NewAccount />
				) : (
					<Box>
						<p>
							Welkommen, <strong> {friend ? friend["name"] : address}</strong>
						</p>
						<p>
							{friend
								? `You have ${friend["points"]} of 1000 points available to Signal.`
								: null}
						</p>
						<p>
							Update your Signals to reflect the current state of your
							interests, for the benefit of your friends!
						</p>
						<p>
							TVS = Time Value Signal - a function of the relative weights of
							signals as a function of time
						</p>
					</Box>
				)}
			</Box>
			{friend ? (
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
