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
import { useSubgraph } from "../views/subgraph";
import "../App.css";
import { calcTVS } from "../lib/calcTVS";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

let _ = require("lodash");

enum ButtonPress {
	ascTVS = 1,
	descTVS = 2,
	ascBal = 3,
	descBal = 4
}

const SignalList = () => {
	const { friends, signals } = useSubgraph();

	// compose the signals list, with sorting parameters (by age / TVS / current balance)

	console.log("friends");
	console.log(friends);
	console.log("signals");
	console.log(signals);

	const [currentButton, setCurrentButton] = useState(ButtonPress.descBal);

	const [signalsList, setSignalsList] = useState([]);

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
		if (signals && signals.length > 0) {
			let tempArr = [];
			if (
				ButtonPress.ascBal == currentButton ||
				ButtonPress.descBal == currentButton
			) {
				// sort by balance
				let tempSwitch = ButtonPress.ascBal == currentButton ? 1 : -1;
				tempArr = _.sortBy(signals, (e: any) => {
					return tempSwitch * Number(e.balance);
				});
				console.log("tempArr", tempArr);
				console.log("bal fire");
			}
			if (
				ButtonPress.ascTVS == currentButton ||
				ButtonPress.descTVS == currentButton
			) {
				// sort by TVS
				let tempSwitch = ButtonPress.ascTVS == currentButton ? 1 : -1;
				tempArr = _.sortBy(signals, (e: any) => {
					console.log(e.timeValueSignal, "LOG 1");
					let tempThing =
						tempSwitch *
						calcTVS(
							Number(e.lastUpdatedTime),
							Number(localTime),
							Number(e.balance),
							Number(e.timeValueSignal)
						);
					console.log(e.timeValueSignal, "LOG 2");
					return tempThing;
				});
				console.log("TVStempArr", tempArr);
			}
			setSignalsList(tempArr);
		}
	}, [signals, currentButton]);

	// useEffect(() => {
	// 	if (signalsList && signalsList.length > 0) {
	// 	}
	// }, [signalsList, currentButton]);

	return (
		<Box display={'flex'} w={'calc(100% - 100px)'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems="center">
			<Box>Name</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"end"}
				>
					<Box>TVS</Box>
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
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"end"}
					ml={'auto'}
					pr={'45px'}
				>
							<Box>Allocated </Box>
							<Box display={"flex"} flexDirection={"column"} pl={2}>
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
					<Box w={'100px'}>Signal</Box>
				

				{signalsList && signalsList.length > 0
					? signalsList.map((signal) => {
							return (
								<SignalItem
									name={signal["meme"]}
									tvs={calcTVS(
										Number(signal["lastUpdatedTime"]),
										currentTime,
										Number(signal["balance"]),
										Number(signal["timeValueSignal"])
									).toLocaleString("en-US")}
									balance={Number(signal["balance"]).toLocaleString("en-US")}
								/>
							);
					  })
					: null}

		</Box>
	);
};

export default SignalList;
