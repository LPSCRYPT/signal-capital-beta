import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Table,
	Thead,
	Tr,
	Th,
	TableContainer
} from "@chakra-ui/react";
import SignalItem from "../components/SignalItem";
import { useFriendInfo, useSubgraph } from "../views/subgraph";
import "../App.css";
import { calcTVS } from "../lib/calcTVS";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { useAccount } from "wagmi";

let _ = require("lodash");

enum ButtonPress {
	ascTVS = 1,
	descTVS = 2,
	ascBal = 3,
	descBal = 4
}

const SignalList = () => {
	const { friends, signals } = useSubgraph();
	const { address } = useAccount();
	const friend = useFriendInfo(address);
	// compose the signals list, with sorting parameters (by age / TVS / current balance)

	console.log("friend");
	console.log(friend);

	const [currentButton, setCurrentButton] = useState(ButtonPress.descBal);

	const [friendList, setfriendList] = useState([]);

	// const { friend } = useFriendInfo(address);

	// enum sortSwitch {
	// 	tvs = "tvs",
	// 	balance = "balance"
	// }

	// enum directionSwitch {
	// 	asc = 1,
	// 	desc = -1
	// // }

	// useEffect(() => {}, [currentButton]);

	// const [direction, setDirection] = useState(directionSwitch.desc);

	// const [sortField, setSortField] = useState(sortSwitch.tvs);

	// Timer

	const [counter, setCounter] = useState(0);
	const [currentTime, setCurrentTime] = useState(
		Math.floor(new Date().getTime() / 1000)
	);
	// Call setTimout after component mounts
	useEffect(() => {
		const timer = setTimeout(() => setCounter(counter + 1), 10000);
		return () => clearTimeout(timer);
	}, [counter]);

	useEffect(() => {
		console.log("counter ", counter);
		setCurrentTime(Math.floor(new Date().getTime() / 1000));
		console.log(currentTime);
	}, [counter]);

	// Signal Sort
	useEffect(() => {
		let localTime = Math.floor(new Date().getTime() / 1000);
		if (
			friend &&
			friend.length > 0 &&
			friend[0]["holdings"] &&
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			friend[0]["holdings"].length > 0
		) {
			let tempArr = [];
			if (
				ButtonPress.ascBal == currentButton ||
				ButtonPress.descBal == currentButton
			) {
				// sort by TVS
				let tempSwitch = ButtonPress.ascBal == currentButton ? 1 : -1;
				tempArr = _.sortBy(friend[0]["holdings"], (e: any) => {
					return tempSwitch * Number(e.amount);
				});
				console.log("tempArr", tempArr);
			}
			if (
				ButtonPress.ascTVS == currentButton ||
				ButtonPress.descTVS == currentButton
			) {
				// sort by balance
				let tempSwitch = ButtonPress.ascTVS == currentButton ? 1 : -1;
				tempArr = _.sortBy(friend[0]["holdings"], (e: any) => {
					return (
						tempSwitch *
						calcTVS(
							Number(e.lastUpdatedTime),
							localTime,
							Number(e.amount),
							Number(e.timeValueSignal)
						)
					);
				});
				console.log("tempArr", tempArr);
			}
			setfriendList(tempArr);
		}
		console.log("CHECKTHIS ", friendList);
	}, [friend, currentButton]);

	// useEffect(() => {
	// 	if (friendList && friendList.length > 0) {
	// 	}
	// }, [friendList, currentButton]);

	return (
		<TableContainer>
			<Table colorScheme="teal">
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th isNumeric>
							<Box
								display={"flex"}
								alignItems={"center"}
								justifyContent={"end"}
							>
								<Box>TVS </Box>
								<Box
									display={"flex"}
									flexDirection={"column"}
									alignItems={"center"}
									pl={2}
								>
									<Button
										variant="ghost"
										size="xs"
										color={currentButton == 1 ? "limegreen" : ""}
										border={
											currentButton == 1
												? "limegreen 1px solid"
												: "rgba(255,255,255,0) 1px solid"
										}
										onClick={() => setCurrentButton(ButtonPress.ascTVS)}
									>
										<TiArrowSortedUp />
									</Button>
									<Button
										variant="ghost"
										size="xs"
										onClick={() => setCurrentButton(ButtonPress.descTVS)}
										color={currentButton == 2 ? "limegreen" : ""}
										border={
											currentButton == 2
												? "limegreen 1px solid"
												: "rgba(255,255,255,0) 1px solid"
										}
									>
										<TiArrowSortedDown />
									</Button>
								</Box>
							</Box>
						</Th>
						<Th isNumeric>
							<Box
								display={"flex"}
								alignItems={"center"}
								justifyContent={"end"}
							>
								<Box>Allocated </Box>
								<Box
									display={"flex"}
									flexDirection={"column"}
									alignItems={"center"}
									pl={2}
								>
									<Button
										variant="ghost"
										size="xs"
										onClick={() => setCurrentButton(ButtonPress.ascBal)}
										color={currentButton == 3 ? "limegreen" : ""}
										border={
											currentButton == 3
												? "limegreen 1px solid"
												: "rgba(255,255,255,0) 1px solid"
										}
									>
										<TiArrowSortedUp />
									</Button>
									<Button
										variant="ghost"
										size="xs"
										onClick={() => setCurrentButton(ButtonPress.descBal)}
										color={currentButton == 4 ? "limegreen" : ""}
										border={
											currentButton == 4
												? "limegreen 1px solid"
												: "rgba(255,255,255,0) 1px solid"
										}
									>
										<TiArrowSortedDown />
									</Button>
								</Box>
							</Box>
						</Th>
						<Th>Signal</Th>
					</Tr>
				</Thead>
				{
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					friendList && friendList.length > 0
						? // friendList["holdings"] &&
						  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
						  // @ts-ignore
						  // friendList["holdings"].length > 0
						  /* tslint:disable */
						  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
						  // @ts-ignore

						  friendList.map((holding: { [x: string]: any }) => {
								console.log("fire");
								/* tslint:enable */
								return (
									<SignalItem
										name={holding["id"].substring(0, holding["id"].length - 43)}
										tvs={calcTVS(
											Number(holding["lastUpdatedTime"]),
											currentTime,
											Number(holding["amount"]),
											Number(holding["timeValueSignal"])
										).toLocaleString("en-US")}
										balance={Number(holding["amount"]).toLocaleString("en-US")}
									/>
								);
						  })
						: null
				}
			</Table>
		</TableContainer>
	);
};

export default SignalList;
