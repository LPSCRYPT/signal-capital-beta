import React, { FC, useEffect, useMemo, useState, useRef } from "react";
import {
	useAccount,
	useConnect,
	useDisconnect,
	useEnsName,
	useContractRead,
	useProvider,
	useSigner
} from "wagmi";
import { readContract } from "@wagmi/core";
import { ethers } from "ethers";
import { InjectedConnector } from "wagmi/connectors/injected";
import {
	Box,
	Button,
	Heading,
	Image,
	Input,
	Avatar,
	AvatarBadge,
	Stack,
	Switch,
	Text
} from "@chakra-ui/react";
import { AiOutlineDisconnect, AiOutlineApi } from "react-icons/ai";
// import { useAddAccount } from "../contract/calls/sigcapfunctions.txt";
import { useFriendInfo } from "../views/subgraphnew";
import Logo from "../assets/esp_ico.png";
import "../App.css";
import { useColorMode } from "@chakra-ui/color-mode";
// import { useMemberPoints } from "../contract/calls/memberpoints.txt";
// import DxDMemberPointsRegistry from "../contract/abis/DxDMemberPointsRegistry.json";
import { espgnosis } from "../ref/addresses";
import { BigNumber, Bytes } from "ethers";
import { chainId } from "../ref/chain";
import memberpointsregistry from "../contract/abis/DxDMemberPointsRegistry.json";
import erc20abi from "../contract/abis/erc20abi.json";
import { useContractLoader } from "eth-hooks";
import { useLocation, Link } from "react-router-dom";
const DxDMemberPointsRegistry = require("../contract/abis/DxDMemberPointsRegistry.json");

interface HeadbarProps {
	route: number;
}

const Headbar: React.FC<HeadbarProps> = ({ route }) => {
	// const location = useLocation();
	const { address } = useAccount();

	// const [route, setRoute] = useState(0);

	// useEffect(() => {
	// 	console.log("location ", location);
	// 	if (location.pathname.length > 1) {
	// 		setRoute(Number(location.pathname.substring(1)));
	// 	}
	// }, [location]);

	const friend = useFriendInfo(route, address);

	const { connect } = useConnect({
		connector: new InjectedConnector()
	});
	const { disconnect } = useDisconnect();
	const { colorMode, toggleColorMode } = useColorMode();

	const { data, isError, isLoading } = useEnsName({
		address: address,
		chainId: 1
	});
	// const provider = useProvider();

	// const ContractLookup = {
	// 	// Arbitrium Contract's
	// 	100: {
	// 		contracts: {
	// 			MemberPointsRegistry: {
	// 				address: espgnosis.memberpointsregistry,
	// 				abi: DxDMemberPointsRegistry
	// 			}
	// 		}
	// 	}
	// };
	// const contracts = useContractLoader(signer, {
	// 	externalContracts: ContractLookup
	// });
	// const { data: user } = useContractRead({
	// 	//@ts-ignore
	// 	address: espgoerli.memberpointsregistry,
	// 	abi: DxDMemberPointsRegistry,
	// 	functionName: "getUserPoints",
	// 	chainId: chainId.goerli,
	// 	args: [BigNumber.from(1), address]
	// });

	const [tempUser, setTempUser] = useState("0");

	const readChain = async () => {
		console.log("before read");
		// const net = await provider.getNetwork();
		// console.log("network log ", net);
		const data = await readContract({
			//@ts-ignore
			address: espgnosis.memberpointsregistry,
			abi: DxDMemberPointsRegistry,
			functionName: "getUserPoints",
			chainId: chainId.gnosis,
			args: [BigNumber.from(route), address]
		});
		// const data = await contracts.MemberPointsRegistry.getUserPoints(1, address);
		console.log("data", data);
		console.log("after read");
		//@ts-ignore
		if (data && data._hex) {
			//@ts-ignore
			setTempUser(ethers.utils.formatUnits(data, 0));
		}
	};

	const [ticker, setticker] = useState(true);

	const renderCheck = useRef<number>(0);

	useEffect(() => {
		if (address && address.length == 42 && route != 0) {
			renderCheck.current = 1;
			const triggerChain = async () => {
				await readChain();
			};
			triggerChain();
			console.log("TICKED");
		}
	}, [route]);

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
			<Link to={"/"}>
				<Box
					minW={["100%", "100%", "33%", null]}
					display={"flex"}
					alignItems={"center"}
				>
					<Image w={"100px"} src={Logo} />
					{/* <span style={{ fontSize: "32px" }}>📡 </span> */}
					<Heading fontSize="48px" fontWeight="100">
						<span style={{ color: "#68DDFD" }}>E</span>
						<span style={{ color: "#F3BF06" }}>S</span>
						<span style={{ color: "#FF0000" }}>P</span>
					</Heading>
					<Box display={"flex"} flexDirection={"column"}>
						<Heading size="xs" color="rgba(255,255,255,0.5)">
							Gnosis
						</Heading>
						<Heading size="xs" color="rgba(255,255,255,0.5)">
							ALPHA
						</Heading>
					</Box>
					{/* <Button onClick={() => setticker(!ticker)}>press me</Button> */}
				</Box>
			</Link>
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
					background={"grey"}
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
						<Box marginRight={"3px"}>Points Balance</Box>
						<Box className="Points" marginRight={2}>
							{friend && friend["availablePoints"]
								? `${friend["availablePoints"]}`
								: tempUser}
							<br />
							<span>
								<small>
									/
									{friend && friend["totalPoints"]
										? friend["totalPoints"]
										: tempUser}
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
