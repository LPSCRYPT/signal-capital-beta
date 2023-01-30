import React, { useState, useEffect, FC } from "react";
import {
	Box,
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	Input
} from "@chakra-ui/react";
import { useSubgraph } from "../views/subgraphnew";
import { useAccount } from "wagmi";
import "../App.css";
import { useExecute } from "../contract/calls/routerexecute";
import { useBuildDxDSignal } from "../contract/calls/buildDxDSignal";
import { espgnosis } from "../ref/addresses";

interface SignallerInterface {
	meme: string;
	route: number;
}

const Signaller: React.FC<SignallerInterface> = ({ meme, route }) => {
	const { friends, signals } = useSubgraph(route);
	const { address } = useAccount();

	const [existingSignalAmount, setexistingSignalAmount] = useState(0);
	const [withdrawPointsAmount, setwithdrawPointsAmount] = useState(0);

	// const fireSignalExising = useSignalExisting(meme, existingSignalAmount);
	// const fireWithdrawPoints = useWithdrawPoints(meme, withdrawPointsAmount);

	const fireSignalExising = useExecute(
		useBuildDxDSignal(
			route,
			espgnosis.toplevelsystem,
			existingSignalAmount,
			meme,
			true
		)
	);

	const fireWithdrawPoints = useExecute(
		useBuildDxDSignal(
			route,
			espgnosis.toplevelsystem,
			withdrawPointsAmount,
			meme,
			false
		)
	);

	// useEffect(()=> {
	//   setwithdrawPointsText(meme);
	//   setexistingSignalText(meme);
	// },[meme])

	return (
		<Box className="Signaller" alignSelf="start">
			<Popover>
				<PopoverTrigger>
					<Button marginRight={1}>-</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverHeader>Withdraw Signal Weight</PopoverHeader>
					<PopoverBody>
						<Box flexDirection="column" display="flex">
							<Input
								placeholder="amount"
								type="number"
								style={{ border: "1px black solid" }}
								value={withdrawPointsAmount}
								onChange={(e) =>
									setwithdrawPointsAmount(Number(e.target.value))
								}
							/>
							<Button onClick={() => fireWithdrawPoints()}>🔥</Button>
						</Box>
					</PopoverBody>
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger>
					<Button>+</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverHeader>Add Signal Weight</PopoverHeader>
					<PopoverBody>
						<Box flexDirection="column" display="flex">
							<Input
								placeholder="amount"
								type="number"
								style={{ border: "1px black solid" }}
								value={existingSignalAmount}
								onChange={(e) =>
									setexistingSignalAmount(Number(e.target.value))
								}
							/>
							<Button onClick={() => fireSignalExising()}>🔥</Button>
						</Box>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</Box>
	);
};

export default Signaller;
