import React, { FC } from "react";
import { Tbody, Tr, Td, Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box } from "@chakra-ui/react";
import Signaller from "./Signaller";
import { useSubgraph } from "../views/subgraph";
import { useAccount } from "wagmi";
import "../App.css";

interface SignalInterface {
	name: string;
	tvs: string;
	balance: string;
}

const SignalItem: React.FC<SignalInterface> = ({ name, tvs, balance }) => {
	const { friends, signals } = useSubgraph();
	const { address } = useAccount();

	return (
		<Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
				<Accordion allowToggle w={'90%'}>
					<AccordionItem>
						<AccordionButton>
						<Box display={'flex'} w={'100%'} justifyContent={'space-between'} py={5}>
							<Box>{name}</Box>
							<Box>{tvs}</Box>
							<Box>{balance}</Box>
						</Box>
					</AccordionButton>
						<AccordionPanel>
							<Box display={'flex'} w={'100%'} justifyContent={'space-between'} py={5}>
								<Box>KeeperName</Box>
								<Box alignSelf={'flex-end'}>42</Box>
							</Box>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
				<Box w={'100px'}>
					<Signaller meme={name} />
				</Box>
			
		</Box>
	);
};

export default SignalItem;
