import React, { FC } from "react";
import { Box, Tbody, Tr, Td } from "@chakra-ui/react";
import Signaller from "./Signaller";
import { useSubgraph } from "../views/subgraph";
import "../App.css";

interface SignalInterface {
	name: string;
	tvs: string;
	balance: string;
}

const SignalItem: React.FC<SignalInterface> = ({ name, tvs, balance }) => {
	const { friends, signals } = useSubgraph();

	return (
		<Tbody>
			<Tr>
				<Td>{name}</Td>
				<Td isNumeric>{tvs}</Td>
				<Td isNumeric>{balance}</Td>
				<Td>
					<Signaller />
				</Td>
			</Tr>
		</Tbody>
	);
};

export default SignalItem;
