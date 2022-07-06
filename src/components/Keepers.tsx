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

const Keepers = () => {
	const { friends, signals } = useSubgraph();

	return (
		<Box w={"100%"}>
			<Box display={"flex"} w={"100%"} justifyContent={"space-between"} py={3}>
				<Box pl={4}>Friend Name</Box>
				<Box pr={10}>Allocated</Box>
			</Box>
			<Accordion allowToggle>
				{friends && friends.length > 0
					? _.sortBy(friends, (e) => {
							return Math.random();
					  })
					  .map((friend) => {
							return (
								<AccordionItem py={5}>
									<h2>
										<AccordionButton>
											<Box
												flex="1"
												textAlign="left"
												display={"flex"}
												justifyContent={"space-between"}
											>
												<Box>{friend["name"]}</Box>
												<Box>{1000 - Number(friend["points"])}</Box>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>

									{
										// eslint-disable-next-line @typescript-eslint/ban-ts-comment
										// @ts-ignore
										friend &&
										friend["holdings"] &&
										// eslint-disable-next-line @typescript-eslint/ban-ts-comment
										// @ts-ignore
										friend["holdings"].length > 0
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
											  _.sortBy(friend["holdings"], (e) => {
													// eslint-disable-next-line @typescript-eslint/ban-ts-comment
													// @ts-ignore
													return -1 * Number(e.amount);
											  }).map((holding) => {
													return (
														<AccordionPanel pb={4}>
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
																			holding.id.substring(
																				0,
																				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
																				// @ts-ignore
																				holding.id.length - 43
																			)
																		}
																	</Box>
																	<Box>
																		{
																			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
																			// @ts-ignore
																			holding.amount
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
