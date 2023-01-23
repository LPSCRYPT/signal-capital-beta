import React, { FC } from "react";
import {
	Tbody,
	Tr,
	Td,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box
} from "@chakra-ui/react";
import Signaller from "./Signaller";
import { useSubgraph } from "../views/subgraph";
import { useAccount } from "wagmi";
import "../App.css";
import { calcTVS } from "../lib/calcTVS";
import _ from "lodash";
import { ParsedUrlQueryInput } from "querystring";

interface SignalInterface {
	name: string;
	tvs: string;
	balance: string;
	holders: any[];
	currentTime: number;
	maxSignals: number;
	sumSignals: number;
}

const SignalItem: React.FC<SignalInterface> = ({
	name,
	tvs,
	balance,
	holders,
	currentTime,
	maxSignals,
	sumSignals
}) => {
	const { friends, signals } = useSubgraph();
	const { address } = useAccount();

	const balanceNumber: number = parseInt(balance.replace(/,/g, ""))
	const relativeColor: number = (balanceNumber / maxSignals) * 100
 
	function getRelativeColor() {
		if (relativeColor >= 90) {
			return '#FF0000';
		}
		if (relativeColor < 90 && relativeColor >= 70) {
			return '#FF7A00';
		}
		if (relativeColor < 70 && relativeColor >= 30) {
			return '#F3BF06';
		}
		if (relativeColor < 30 && relativeColor >= 10) {
			return '#1DD291';
		}
		if (relativeColor < 10 && relativeColor > 0) {
			return '#68DDFD';
		}
		return '#ccc';
	};


	return (
		<Box display={"flex"} w={"100%"} justifyContent={"space-between"}>
			<Accordion allowToggle w={"90%"}>
				<AccordionItem display={"flex"} flexDirection={"column"} borderWidth="0px">
					<AccordionButton
						borderTopWidth="2px"
						borderTopStyle="solid"
						borderTopColor={ getRelativeColor()} 
						color={ getRelativeColor()} 					
							_expanded={{
								borderTopWidth:"1px",
							}}
					>
						<Box
							display={"flex"}
							w={"100%"}
							justifyContent={'start'}
							alignItems={'center'}
							py={5}
						>
							<Box>{name}</Box>
							<Box alignItems={'center'} justifyContent={'end'}>
								{/* <Box>{tvs}</Box> */}
								<Box>{balance}</Box>
							</Box>
						</Box>
					</AccordionButton>
					{holders && holders.length > 0
						? _.sortBy(holders, (e) => {
								return -1 * Number(e.amount);
						  }).map((holder) => {
								return (
									<AccordionPanel>
										<Box
											display={"flex"}
											w={"100%"}
											justifyContent={"space-between"}
											py={5}
										>
											<Box
												display={"flex"}
												justifyContent={"space-between"}
												alignItems={"center"}
												w={"80%"}
											>
											<Box>{holder.friend.name}</Box>
											<Box>
												{calcTVS(
													Number(holder["lastUpdatedTime"]),
													Number(currentTime),
													Number(holder["amount"]),
													Number(holder["timeValueSignal"])
												).toLocaleString("en-US")}
											</Box>
											</Box>
											<Box alignSelf={"flex-end"}>{holder.amount}</Box>
										</Box>
									</AccordionPanel>
								);
						  })
						: null}
				</AccordionItem>
			</Accordion>
			<Box
				w={"100px"}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
			>
				<Signaller meme={name} />
			</Box>
		</Box>
	);
};

export default SignalItem;
