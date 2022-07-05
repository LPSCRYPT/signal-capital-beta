import React, { FC } from "react";
import { Tbody, Tr, Td } from "@chakra-ui/react";
import Signaller from "./Signaller";
import { useSubgraph } from "../views/subgraph";
import "../App.css";

interface KeeperInterface {
	name: string;
	tvs: string;
	balance: string;
}

const KeeperItem: React.FC<KeeperInterface> = ({ name, tvs, balance }) => {
	const { friends, signals } = useSubgraph();

	return (
		<Tbody>
			<Tr>
				<Td>{name}</Td>
				<Td isNumeric>{tvs}</Td>
				<Td isNumeric>{balance}</Td>
			</Tr>
		</Tbody>
	);
};

export default KeeperItem;
