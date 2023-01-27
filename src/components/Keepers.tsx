import React from "react";
import _ from "lodash";

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box
} from "@chakra-ui/react";
import "../App.css";
import { useSubgraph } from "../views/subgraph";
import { ethers } from "ethers";
import { ENSName, AddressDisplayEnum } from "react-ens-name";

const Keepers = () => {
	const { friends, signals } = useSubgraph();
	return (
		<Box w={"100%"} maxW="1200px">
			<Box display={"flex"} w={"100%"} justifyContent={"space-between"} py={3}>
				<Box pl={4}>Signaler</Box>
				<Box pr={10}>Allocated</Box>
			</Box>
			<Accordion allowToggle>
				{friends && friends.length > 0
					? friends.map((friend) => {
							return (
								<AccordionItem>
									<h2>
										<AccordionButton
											_expanded={{
												border: "1px solid rgb(93, 95, 239)",
												boxShadow: "rgb(93 95 239 / 75%) 0px 0px 35px"
											}}
										>
											<Box
												flex="1"
												textAlign="left"
												display={"flex"}
												justifyContent={"space-between"}
												margin={"15px"}
											>
												<Box fontFamily="body" fontWeight={"600"}>
													<ENSName
														address={friend["user"]["id"]}
														withEllipses
														displayType={AddressDisplayEnum.FIRST4_LAST4}
													/>
												</Box>
												<Box>
													{Number(friend["totalPoints"]) -
														Number(friend["availablePoints"])}
													/{friend["totalPoints"]}
												</Box>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>

									{
										// eslint-disable-next-line @typescript-eslint/ban-ts-comment
										// @ts-ignore
										friend &&
										friend["signals"] &&
										// eslint-disable-next-line @typescript-eslint/ban-ts-comment
										// @ts-ignore
										friend["signals"].length > 0
											? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
											  // @ts-ignore
											  //   friend["holdings"].map((holding) => {
											  // 		return (
											  // 			<AccordionPanel pb={4}>
											  // 				<Box
											  // 					display={"flex"}
											  // 					flexDirection={"column"}
											  // 					flexWrap={"wrap"}
											  // 				>
											  // 					<Box
											  // 						display={"flex"}
											  // 						w={"100%"}
											  // 						justifyContent={"space-between"}
											  // 					>
											  // 						<Box>
											  // 							{holding.id.substring(
											  // 								0,
											  // 								holding.id.length - 43
											  // 							)}
											  // 						</Box>
											  // 						<Box>{holding.amount}</Box>
											  // 					</Box>
											  // 				</Box>
											  // 			</AccordionPanel>
											  // 		);
											  //   })
											  _.sortBy(friend["signals"], (e) => {
													// eslint-disable-next-line @typescript-eslint/ban-ts-comment
													// @ts-ignore
													return -1 * Number(e.balance);
											  }).map((signal) => {
													return (
														<AccordionPanel pb={4} bg={"rgba(153,153,255,0.2)"}>
															<Box
																display={"flex"}
																flexDirection={"column"}
																flexWrap={"wrap"}
															>
																<Box
																	display={"flex"}
																	w={"100%"}
																	justifyContent={"space-between"}
																>
																	<Box>
																		{
																			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
																			// @ts-ignore
																			signal.signal.value
																		}
																	</Box>
																	<Box fontFamily="data" fontWeight="100">
																		{
																			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
																			// @ts-ignore
																			signal.balance
																		}
																	</Box>
																</Box>
															</Box>
														</AccordionPanel>
													);
											  })
											: null
									}
								</AccordionItem>
							);
					  })
					: null}
			</Accordion>
		</Box>
	);
};

export default Keepers;
