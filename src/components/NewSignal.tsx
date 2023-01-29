import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { useFriendInfo } from "../views/subgraph";
import { useSubgraph } from "../views/subgraph";
import { useAccount } from "wagmi";
// import { useAddNewSignal } from "../contract/calls/sigcapfunctions.txt";
import { useExecute } from "../contract/calls/routerexecute";
import { useBuildDxDSignal } from "../contract/calls/buildDxDSignal";
import { espgnosis } from "../ref/addresses";

const NewSignal = () => {
	const { friends, signals } = useSubgraph();
	const { address } = useAccount();
	const friend = useFriendInfo(address);
	const [addNewSignalText, setaddNewSignalText] = useState("");

	const [addNewSignalAmount, setaddNewSignalAmount] = useState(0);

	const fireExecute = useExecute(
		useBuildDxDSignal(
			1,
			espgnosis.toplevelsystem,
			addNewSignalAmount,
			addNewSignalText,
			true
		)
	);

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"space-between"}
			p={5}
			border="2px solid #5d5FEF"
		>
			<Box mb={3}>+ New Signal</Box>
			<Input
				placeholder="Signal Name"
				type="text"
				style={{ border: "1px black solid" }}
				value={addNewSignalText}
				onChange={(e) => setaddNewSignalText(e.target.value)}
				mb={3}
			></Input>
			<Input
				placeholder="amount"
				type="number"
				style={{ border: "1px black solid" }}
				value={addNewSignalAmount}
				onChange={(e) => setaddNewSignalAmount(Number(e.target.value))}
				mb={3}
			></Input>
			<Button onClick={() => fireExecute()} border={"1px black solid"}>
				Submit
			</Button>{" "}
		</Box>
	);
};

export default NewSignal;
