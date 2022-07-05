import React, { useEffect, useState } from "react";
import { Box, Table, Thead, Tr, Th, TableContainer } from "@chakra-ui/react";
import SignalItem from "../components/SignalItem";
import { useSubgraph } from "../views/subgraph";
import "../App.css";
import { calcTVS } from "../lib/calcTVS";

let _ = require("lodash");

const SignalList = () => {
	const { friends, signals } = useSubgraph();

	// compose the signals list, with sorting parameters (by age / TVS / current balance)

	console.log("friends");
	console.log(friends);
	console.log("signals");
	console.log(signals);

	const [signalsList, setSignalsList] = useState([]);

	enum sortSwitch {
		tvs = "tvs",
		balance = "balance"
	}

	enum directionSwitch {
		asc = 1,
		desc = -1
	}

	const [direction, setDirection] = useState(directionSwitch.desc);

	const [sortField, setSortField] = useState(sortSwitch.tvs);

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
			if (sortField == sortSwitch.tvs) {
				// sort by TVS
				tempArr = _.sortBy(signals, (e: any) => {
					return direction * Number(e.balance);
				});
				console.log("tempArr", tempArr);
			}
			if (sortField == sortSwitch.balance) {
				// sort by balance
				tempArr = _.sortBy(signals, (e: any) => {
					return (
						direction *
						calcTVS(e.lastUpdatedTime, localTime, e.balance, e.timeValueSignal)
					);
				});
				console.log("tempArr", tempArr);
			}
			setSignalsList(tempArr);
		}
	}, [signals, direction, sortField]);

	useEffect(() => {
		if (signalsList && signalsList.length > 0) {
		}
	}, [signalsList]);

	return (
		<TableContainer>
			<Table colorScheme="teal">
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th isNumeric>TVS</Th>
						<Th isNumeric>Allocated</Th>
						<Th>Signal</Th>
					</Tr>
				</Thead>
				{signalsList && signalsList.length
					? signalsList.map((signal) => {
							return (
								<SignalItem
									name={signal["meme"]}
									tvs={calcTVS(
										Number(signal["lastUpdatedTime"]),
										currentTime,
										Number(signal["balance"]),
										Number(signal["timeValueSignal"])
									).toString()}
									balance={signal["balance"]}
								/>
							);
					  })
					: null}
			</Table>
		</TableContainer>
	);
};

export default SignalList;
