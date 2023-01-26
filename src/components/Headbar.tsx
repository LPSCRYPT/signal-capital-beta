import React, { useEffect, useMemo, useState } from "react";
import {
	useAccount,
	useConnect,
	useDisconnect,
	useEnsName,
	useContractRead,
	useProvider
} from "wagmi";
import { readContract } from "@wagmi/core";
import { ethers } from "ethers";
import { InjectedConnector } from "wagmi/connectors/injected";
import {
	Box,
	Button,
	Heading,
	Input,
	Avatar,
	AvatarBadge,
	Stack,
	Switch,
	Text
} from "@chakra-ui/react";
import { AiOutlineDisconnect, AiOutlineApi } from "react-icons/ai";
import { useAddAccount } from "../contract/calls/sigcapfunctions";
import { useFriendInfo } from "../views/subgraph";
import Logo from "../assets/darksignal_circle.png";
import "../App.css";
import { useColorMode } from "@chakra-ui/color-mode";
// import { useMemberPoints } from "../contract/calls/memberpoints.txt";
// import DxDMemberPointsRegistry from "../contract/abis/DxDMemberPointsRegistry.json";
import { espgoerli } from "../ref/addresses";
import { BigNumber, Bytes } from "ethers";
import { chainId } from "../ref/chain";
import memberpointsregistry from "../contract/abis/DxDMemberPointsRegistry.json";
import erc20abi from "../contract/abis/erc20abi.json";
const DxDMemberPointsRegistry = require("../contract/abis/DxDMemberPointsRegistry.json");

const Headbar = () => {
	const { address } = useAccount();

	const friend = useFriendInfo(address);

	const { connect } = useConnect({
		connector: new InjectedConnector()
	});
	const { disconnect } = useDisconnect();
	const { colorMode, toggleColorMode } = useColorMode();

	const { data, isError, isLoading } = useEnsName({
		address: address
	});

	// const []

	// const { data: user } = useMemberPoints(address, 1);

	// const provider = useProvider();

	// const read = new ethers.Contract(
	// 	espgoerli.memberpointsregistry,
	// 	memberpointsregistry,
	// 	provider
	// );

	// 	// const data = await read.getUserPoints(1, address);
	// 	console.log("CONTRACT DATA CALL ", data);
	// };

	// const { data: points } = useContractRead({
	// 	addressOrName: espgoerli.memberpointsregistry,
	// 	contractInterface: DxDMemberPointsRegistry,
	// 	functionName: "getUserPoints",
	// 	chainId: chainId.goerli,
	// 	cacheOnBlock: true,
	// 	// overrides: { gasLimit: 1e7 },
	// 	args: [1, address]
	// });

	// useEffect(() => {
	// 	console.log("POINTS ", points);
	// }, [points]);

	const readChain = async (abi: any) => {
		console.log('before read')
		const data = await readContract({
				addressOrName: "0xdac17f958d2ee523a2206206994597c13d831ec7",
				contractInterface: abi,
				functionName: "getOwner",
				chainId: 1,
			});
		console.log('data',data);
		console.log('after read')
	}

	const [addr, setAddr] = useState(" ");

	const [ticker, setticker] = useState(false);

	useEffect(() => {
		if (address && address.length == 42 && addr != address && ticker) {
			setAddr(address);
			const triggerChain = async () => {
				await readChain(erc20abi);
			};
			triggerChain();
			console.log("TICKED");
		}
	}, [ticker]);

	// useEffect(() => {
	// 	if (address && address.length == 42 && address != addr) {
	// 		setaddr(address);
	// 		const fetchData = async () => {
	// 			const x = await read.getUserPoints(1, address);
	// 		};
	// 		fetchData().catch(console.error);
	// 	}
	// }, [address]);

	// const { data: points } = useMemberPoints(address!, 1);

	return (
		<Box
			display={"flex"}
			w="100%"
			alignItems={"center"}
			justifyContent={"space-between"}
			flexWrap={"wrap"}
			p={25}
			borderBottom={"1px solid"}
			borderBottomColor={"whiteAlpha.500"}
		>
			<Box
				minW={["100%", "100%", "33%", null]}
				display={"flex"}
				alignItems={"center"}
			>
				{/* <span style={{ fontSize: "32px" }}>📡 </span> */}
				<Heading ml={5} fontSize="48px" fontWeight="100">
					<span style={{ color: "yellow" }}>E</span>
					<span style={{ color: "orange" }}>S</span>
					<span style={{ color: "red" }}>P</span>
				</Heading>
				<Heading size="xs" color="rgba(255,255,255,0.5)">
					ALPHA
				</Heading>
				<Button onClick={() => setticker(!ticker)}>press me</Button>
			</Box>
			{/* <Box minW="33%">
				<Text
					py={3}
					fontSize="xs"
					style={{ color: "red", textAlign: "center", border: "2px solid red" }}
				>
					(!) Be sure you are on <b>Gnosis Chain</b>
				</Text>
			</Box> */}

			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"flex-end"}
				minW="33%"
			>
				<Button
					variant="ghost"
					style={{ fontSize: "18px", marginLeft: "5px" }}
					onClick={toggleColorMode}
				>
					{colorMode === "light" ? " 🌙" : "🌞"}
				</Button>
				{address ? (
					<Box
						display={"flex"}
						w="100%"
						alignItems={"center"}
						justifyContent={"flex-end"}
					>
						<Box className="Points" marginRight={2}>
							{friend.length > 0 ? `${friend[0]["availablePoints"]}` : 0}
							<br />
							<span>
								<small>
									/{friend.length > 0 ? friend[0]["totalPoints"] : 0}
								</small>
							</span>
						</Box>
						<Box>
							<Button onClick={() => disconnect()}>
								{/* <Text>{friend.length > 0 ? friend[0]["name"] : address.slice(0,6) + '...' + address.slice(-4)}</Text> */}
								{isLoading && <Box fontSize="xs">fetching ENS</Box>}
								{isError && <Box>Error fetching ENS</Box>}
								{data ? (
									<Box>{data}</Box>
								) : (
									<Box>{address.slice(0, 6) + "..." + address.slice(-4)}</Box>
								)}
								<Box ml={3}>
									<AiOutlineDisconnect />
								</Box>
							</Button>
						</Box>
					</Box>
				) : (
					<Box>
						<Button onClick={() => connect()}>
							Connect{" "}
							<Box ml={3} color="white">
								<AiOutlineApi />
							</Box>
						</Button>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default React.memo(Headbar);
