import React, { FC, useState, useEffect } from "react";
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
import { useAccount, useEnsName } from "wagmi";
import { ENSName, AddressDisplayEnum } from "react-ens-name";
import "../App.css";
import { calcTVS } from "../lib/calcTVS";
import _ from "lodash";
import { ParsedUrlQueryInput } from "querystring";
import { Stream } from "stream";
import { AiOutlineHolder } from "react-icons/ai";
import userEvent from "@testing-library/user-event";

interface SignalInterface {
	value: string;
	tvs: string;
	balance: string;
	signallers: any[];
	currentTime: number;
	maxSignals: number;
	sumSignals: number;
}

const SignalItem: React.FC<SignalInterface> = ({
	value,
	tvs,
	balance,
	signallers,
	currentTime,
	maxSignals,
	sumSignals
}) => {
	const { friends, signals } = useSubgraph();
	const { address } = useAccount();

	const balanceNumber: number = parseInt(balance.replace(/,/g, ""));
	const relativeColor: number = (balanceNumber / maxSignals) * 100;

	// const found = signallers.find(signaller => {
	// 	return signaller.user.user.id === address;
	//   });

	const [found, setFound] = useState("");

	useEffect(() => {
		if (address && signallers && signallers.length > 0) {
			const lookup = signallers.find((signaller) => {
				return signaller.user.user.id === address.toLowerCase();
			});
			if (lookup) {
				setFound(lookup["balance"]);
			} else {
				setFound("");
			}
		}
	}, [address, signallers]);

	// console.log("found " + found);

	function getRelativeColor() {
		if (relativeColor >= 90) {
			return "#FF0000";
		}
		if (relativeColor < 90 && relativeColor >= 70) {
			return "#FF7A00";
		}
		if (relativeColor < 70 && relativeColor >= 30) {
			return "#F3BF06";
		}
		if (relativeColor < 30 && relativeColor >= 10) {
			return "#1DD291";
		}
		if (relativeColor < 10 && relativeColor > 0) {
			return "#68DDFD";
		}
		return "#ccc";
	}

	return (
		<Box display={"flex"} w={'100%'} justifyContent={"space-between"}>
			<Accordion allowToggle w={'90%'}>
				<AccordionItem
					display={"flex"}
					flexDirection={"column"}
					borderWidth="0px"
				>
					<AccordionButton
						borderTopWidth="2px"
						borderTopStyle="solid"
						borderColor={getRelativeColor()}
						color={getRelativeColor()}
						borderLeft='2px'
						borderRight='2px'
						outline="none"
						_expanded={{
							borderBottom: "2px"
							// bg: getRelativeColor(), 
							// color: 'white'
						}}
					>
						<Box
							display={"flex"}
							w={"100%"}
							justifyContent={"start"}
							alignItems={"center"}
							py={5}
						>
							<Box w={"100%"} fontWeight={"900"} textAlign="left">{value}</Box>
							<Box alignItems={"center"}>
								{/* <Box>{tvs}</Box> */}
								<Box fontFamily="data" ml={"auto"}>{balance}</Box>
							</Box>
							<AccordionIcon />
						</Box>
					</AccordionButton>
					{signallers && signallers.length > 0
						? _.sortBy(signallers, (e) => {
								return -1 * Number(e.balance);
						  }).map((holder) => {
								return (
									<AccordionPanel color={getRelativeColor()} 
									borderColor={getRelativeColor()}
									borderLeft='2px'
									borderRight='2px'
									fontWeight={'100'}>
										<Box
											display={"flex"}
											w={"100%"}
											justifyContent={"space-between"}
											pt={3}
											borderColor={getRelativeColor()}
										>
											<Box
												display={"flex"}
												justifyContent={"space-between"}
												alignItems={"center"}
												w={"80%"}
											>
												<ENSName
													address={holder.user.user.id}
													withEllipses
													displayType={AddressDisplayEnum.FIRST4_LAST4}
												/>
											</Box>
											{/* <Box>
												{calcTVS(
													Number(holder["lastUpdatedTime"]),
													Number(currentTime),
													Number(holder["amount"]),
													Number(holder["timeValueSignal"])
												).toLocaleString("en-US")}
											</Box> */}
											<Box alignSelf={"flex-end"} fontFamily="data">
												{holder.balance}
											</Box>
										</Box>
									</AccordionPanel>
								);
						  })
						: null}
				</AccordionItem>
			</Accordion>
			<Box
				w={"200px"}
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"end"}
				alignItems={'start'}
				mt={6}
			>
				{<Box fontSize="sm" fontFamily="data" mt={2} mr={3} color={found ? 'whiteAlpha.500' : 'whiteAlpha.100'}>{found || '–'}</Box>}
				<Signaller meme={value} />
			</Box>
		</Box>
	);
};

export default SignalItem;
