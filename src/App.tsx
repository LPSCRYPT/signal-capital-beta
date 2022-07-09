import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignalList from "./components/SignalList";
import KeeperList from "./components/Keepers";
import YourList from "./components/YourList";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Image,
	Stack,
	Switch,
	flexbox
} from "@chakra-ui/react";
import Headbar from "./components/Headbar";
import Body from "./components/Body";
import TestingFunctions from "./components/TestingFunctions";
import { Box, Button } from "@chakra-ui/react";
import Keepers from "./components/Keepers";
import vitalyk1 from "./assets/vitalyk1.png";

function App() {
	const [shake, setShake] = useState(false);

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

	useEffect(() => {
		if (shake) {
			var e = document.getElementById("dolphintext");
			var n = document.getElementById("dolphin");
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			e.style.display = "inline";
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			n.style.opacity = "0.3";
		} else {
			var e = document.getElementById("dolphintext");
			var n = document.getElementById("dolphin");
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			e.style.display = "none";
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			n.style.opacity = ".05";
		}
	}, [shake]);
	return (
		<Box
			className="pageWrapper"
			h={"100vh"}
			w={"100vw"}
			display={"flex"}
			flexDirection={"column"}
		>
			<Headbar />
			<Body />
			<Box flex="row" padding={25} paddingBottom={500}>
				<Tabs align="center">
					<TabList>
						<Tab>Signals 📡</Tab>
						<Tab>Friends 👽</Tab>
						<Tab>You 💖</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<SignalList currentTime={currentTime} />
						</TabPanel>
						<TabPanel>
							<Keepers />
						</TabPanel>
						<TabPanel>
							<YourList currentTime={currentTime} />
						</TabPanel>
					</TabPanels>
				</Tabs>
				<Image
					// display="none"
					id="dolphin"
					className="shake"
					position="fixed"
					bottom="0"
					right="0px"
					maxW="100px"
					src={vitalyk1}
					alt="dolphin"
					onMouseOver={() => setShake(true)}
					onMouseOut={() => setShake(false)}
				/>
				<Box
					id="dolphintext"
					className="shake"
					position="fixed"
					right="0px"
					bottom="0px"
					color="green.200"
					fill="none"
					display="none"
				>
					e̸̢̧̢̢̡̧̨̢̛̛̛̯̠̞̝̙͍̼̯͈̥̱̟̣͇̜͚̱͎̙͚͚̪͇̞̠̜͇͎̙̰̘͉̦͚̳͈̙̤̮̫̱̺̞̱̳͖̩̥̺̬̟̖̜̪̦̼̳̫͍̖̞̩̟̤̻̬͕͚͖͚̤͖͚̼͚͙͚̓̈́̉̈́̒̉͂͊͛̒͋̓́̉̾̍̉͋̈́̀̅̂̿̏̊͐͗̀̂̔̽̄̈́͊̈́͒̊̾̽̿̈́̅̍̍̇̉̑͆̀͂̂͐̈́͆͋̿̍̈̍̅̔̇̍̐̇̒̒͛̋͆̒̑̈̔̀͆͂̄̉́̏̀̃̽͛̒́̍̎̋̏̉̑͋̇̆̇̾͐͒̌̀́̆͐̈̿̃͒̂́̚͘̚̚̕̕̕͜͜͜͝͝͝ͅe̴̢̢̡̧̢̢̡̛̹̙̱̥͈̱̯̺͇̺̞͔͎̠̫͇̟̯̱̦͙̗͙͇͇̰͔̬̼͚̙̬͖͕̼͙̯̻̰͚̫̮̥̖̲̟͗̌̀́͛̈́̔͒̉̾̈́̂̽̾̀̏̋͋̆̐̑̌̓̓͛̓̄́͒̓̿̅̒̄̑̇̾̇̒̌͛͒̅̈́͗̐̅̽͛͗̇͗̒̄̔͌̎̓͐̚̚̚͘̕͜͝͠͝͝͝ͅę̸̨̡̡̢̛̦͎̜̙̼̣̻̟̱͕̝̝̤͍̙̘͖͕̻̩̳̘̝̪͊̀̋̀́̋̏̿̈́͒̈̅͋̆̂͒̽̈́͐͌̄̀̄̃͂̒̊́̐͒̾̏̾̑̔̔̀͂͗̉̈́̈̀̉́̽̆̑̂̅͗͒̈́͂̄̊̈́͗̎́̆̀̽̓͐̿̓̆̾͊̔̅̿̀͆́̇̃̐̍͋̀̓̈́͒̈͗͛̊̈́̓͗̉̓͆̈́̎̈́̋̄̏̀̑͐̈́̈́͑̌̉́͆͑̏͂̈́̑̒̚̕̕̚͘̕͜͝͠͠͠͝͝͝͝͝ͅȇ̷̢̡̢̨̨̢̡̨̡̢͍͉̺̙̠̗͇̘̮̝͙͈̝̤̰̭͙̝̟̱̘̰̪̞̰͕̤͕͓͓͚̱͔̣̙͕̘̘͈̭͇̜͍̩̭̟̹͍̝̮̪̬̣̲̗̞͎̱̯̙̙͎̫̠̻̱̝̹̫͙͖͎͖͈̝̮̮͔̻̗̦̯̝̠͇̭̝̩̱̪̩͓͕̞̩̹͍̬̻͈̹̭̱̖͖̗̥̺̮̱̻̯̤̘̪̝̪̳͈͂͋́̐̅͊̽̓͆̈͋̓̃͑̂̽̿̄̈́̾̓̈̋̄̄̾́̃̀̃͑̈́̒̔͌̌͋͛́̊̈́̊͂̓̃̐̋͋͛̽͗̉͑̎͌͛̌̀̄͋͆̓̈́̽̐̽͌́͌̎̿̈̽͛̒̈́̆̆̓̑̇̂̃́̑͑̎̾̑̾̈́̈́̈̿̀̇̂̄̓̄͘̚̚͜͜͜͝͝͝͠ͅe̵̡̛̛̫̝̗̝̞̞͕̮̣̙̲̥̺̲̺̗̣̬͖̗̝̬̽͑̈̏͐̓̒̽͒̉̇͆͌̽̊̉̔̌̈͗̀͗̎̊̀̀̏̉͆̿̍̽̈́͋͋̃̃͒͛͌̀̿́̒̓͗̈́͗͗̅̓̄̃̇̊̍̂̓̋̿̀̒̾̐̽́͑̉̽̆͌͒͗̄̾̊͊͌̀́͆̊̏̐͑̆͘͘̕̚̚͘͜͝͝͠͝͝͝͝͝͝ͅẻ̶̫̜̼̺̜͖̥̞͔̟͖̪̥͚̦̭̩̹̼͖̒͂̓͒͑͒̓̊̒̐̈́̈́̉̀̔̏̈́̈̓̈́͒̀̐̏͊̀̽͑͐̃̋̑̿͗͛͛̈́̿͋͋̆̚̚͘͘͝͝͝͠͝ͅe̴̡̧̡̡̢̨̧̧̧̡̛̛͍͓̖͉̼͓̙̻͖͍̰͓̭̞̲͖̙̮̣͉̞͕̰̬̲͔͈̞͙̰̜̭̤͓̣̥͓͓̦̮͍͍͍̳̥̣̥͖̪̼̳̤̩͕̲̱̭̳͉̹̫̯͔̝̻̯̮̥͑͌̏̈́͆̎͊͑̾̈́̀̀̿̅̑͊̆̏̐̎̀̊̐̋̅̓̓͑͐̽̓̈́̉̈́́̓́̊́̃̂͒̾̑͋̎́͊̓̿̿̏͂̓̽͌̀͗̈̀̓͆̃̔̌̈́̋̿̃̿̊̑͗̽͐͊͊͋̓͘̚͘̕̕͝ͅͅͅě̸̛̥̻̭͕̹͖͔̗͂̿̃͋͌́̓̓̐̋͛̈́͆̆̀̃̂̌̂̀̕̚͘͜͝ẻ̸̢̡̨̢̨̨͓̟̩̫͈̺̫̤̳̙̻̫͓͙̠̬̖̙̱͓̦͖̻̰̮̱̬͍͉͙̥̗͚͖͕̗͚̻̣̤̥̺̱̮͍̝̩͖̞͚̼̯̻̭͚̤̤̳̫̭̫̼̹̻̫̼͉̘̼̠̹̼̜̱͚̺͎̼̘͎̫̗̹̭͑͑̃͂̂̇̒͒̔͂̓̉̋̂͆͂̆̓́̐̉͂̄̕͜͜͜͝͠͝ͅͅͅͅḛ̶̡̧̡̡̢̢̧͎̹͚̩̜͎̲͙̘̗̳̖̖̮̜͎̲̗̗̻̯͈̺̭̘̬̙͍͔̰͚̩̠̯̯̖̘̜̭̱̥͍̩͎̭̟̥͖̬͈̭͙͆̐̍̈́̀̈́̇̒̾̈͊̐͛̾̃̓͗̎̈̀̋͐͊̃̿͊̈́̉̈́̋̿̏͌̈́́̉̄̇̂̿̍̀̇͒͆̑̃́̏̓̏̊͌́̒̇͛̉̓̀̒̈̂́́̓̈́͒͛̍̊͊̄̔̀̍̕̚͘̚͜͜͠͝͠͝͠͝ͅę̸̡̢̨̡̢̡̡̢̨̨̧̨̡̺͙͈̟͕͉̟̦̩̘̝̺̭̗̰͖̩̭͓̘̠͍̘̻̝̹̖̙̦͕̘͍̟̖̜̯̞͎͎͚̯̺͓̥͍̫̞̯͎̪̬̜͍̳͉̦̻̪͍̭̣͚͚̭̠͖͓̣̺̜͉̩͙̘̯̤̥̫̩̪͚̹̦̖͕̘͎͖͎̮͙̻̞͕̭͍̹̼̋̓͂̈́̈́̑̏̿̈͜͠ͅͅͅͅé̸̢̧̢̡̛̛̠̥̪͔͉̞̗̱̞̗̫͖̹̗̠̳̦̞͓̣͇̳̦̤̺̠̜̰̼̹̦̞͔͕̏̏͊͂͐̿̎͗̎͛̆͒̑̊̑̿̈́̉̉̔͊̐͑̀̓͊͑̓̿͗͂̈̇͊͑̇̒̒̈́̽̔̾̓͑͊̊̂͐̿̌̌͑̆͛̓͆͌͆̊͗̄̕͘͘͘̕͝͝͝͠ͅͅͅḙ̵̢̨̡̧̨̢̢̢̨̧̨̧̨̢̨̨̢̢̡̛͈̼͇̞͎̞͕͔̟̫͔̼̤̫̣̹̩̘̥̰̥̙̤̱͈̝̠̰̩̬̪̣̠̹͓̠̳̼̞̤̩̹̥͔̪̠̩͉̘̟̬̱̝͓̞̹͈͙͎̭̳̦͍̙̟̘̼̪̼̭̰͈̭͖̙͙̝̬͇͎̜̻̞̩̤̟͈̹̺̗̭̘̣͍͕̰̬̪̝̬͓͉̂̈́͐͊̏̉̃̈̈́̓̈́̎̋̊̎̑̀̀́͆̽̋̆̍̂̅̌̇̉͗̿͊̌̅̓͌̆̍͊̉͊̍̑̓̽̒̌̇̔̆̋̐̓̂̓̍̿̽͋̀͌̋̈́̽̅͋͊̄̓̎̀̆́̉̚̕̕̚͜͜͜͜͜͜͜͝͠͝͝ͅͅe̶̡̢̳͈̟̥͎̳͈͈̤̺̦̳̩̥͚̣̘̻̼͛͗͐͛͒̃̈̃͒͛͋̐̈́̓̈̾̅̌̾̄͋͘͘͝͝ë̸̛̥̯̐͛͆́̄̂͂̏̄̅̀͌͑̑̊̍̓͆͛̈́̔̑́̓̎̍̒̍͑͊̐͑̌͛͆͐͗̂̃̂͆̇́̂̂̀̉̍̊͂̆͆̍́̍͊̓̓̉̈́̓̋́͗͊̑̓̋̆̐̈́͗͌̔̒͑͛̒͗̈́͗̓̽̂̈́̆̕͘̕̚̚̚̚͘͝͠͝͝͠ȩ̵̨̢̧̡̘̻̪͖̯̰̝͚͓̣̦͖̲͕͓̪͙͈͖͉̻̠͎̳͉͍͇̹͈͉̦̘̫̺̙̝̦̦̼̦̩̙̫͈͙͖͓̭̦̤̗̘̰͖̤̩͉̰̩̤̘̺̱̲̘̤̻̯̼̞̐͌͑̋̈́̉̈̑̄̽͊̒̓̈̀͑̀̓̉̀̑͗̏̈̐͂̓̑͆̈̽͌͂̉͆̈͆͊̇̊͗̃́̂̉͗̐̐̉͊̂͗̈́̂̄̊̑͒̒͊̈́͋̄̃͑̒͛́̃̓̃̽̓̔̀̂̆̃͌̽̊̃̒̈̾̽̒̍̇̏͗́͗̉͂̽̆͌̂̈́̿̀͛̀̓̾̍̊̒̏̕̚̕͘̕̕͠͝͝e̸̡̧̢̡̧̨̨̡̧̨̨̡̢̨̢̛̛̛̺̹͎͙͍͔̬̖̙̖͚͈̼͈͈̝̠̜͔̲̻͎̰̬̠̲̱̤͙̘̹̙̖̻̜̙͕͇͕͔͈̙͕̦̩̪̪̤̟̠̝̻͉̻̖̺̣̻̗̬̙̰̤̯͍̻͔͓͓͎͈̘͇̭̗̯̫̜͓̗͇͈̳̳̭͍̹̭̙͕͍̮̳̰̳̤̬̪͍̭̩̗̻͔͍͖̫̺̦̘͔͐͑̓̂͑̎́͋͊̏́̊̏̂̆̿͗̂͛́͗̉͋̉͐̉͑̾͑̑̀́͊̐̀̔̽́͆̓̄͆̅̋̀̇̀̀̊̉͆̍̇͊͋̀͂̈̇̋͛̏̈͌͛̍̑̎̆̆̌̔̓͊̆͑̅̐̏͆̉̈́̌̿̋̈́͆̓̏̓͂̐̎̂̾̐̓͒̊͛̅̑̍̎̓̍̔́̕͘͘̕͘͜͜͝͠͝͠͝͝͝͝͝͝ͅe̸̢̢̢̨̨̢̨̨̢̛̛̛̫̱̱̗͚͕̙̭͓͎͙͕͖̞̗̺̹̤̰͇̪̰̙̘͓͕͎͍̻̯͉̪̟̺̮͓͓̯̣̭̭̱͎̯̰͈̳̭̫̲͎͙͙̰̰̠̝̣̮̻̻̝̙̪̻̲̬̗̜̞̗͉̜͔͚̪̖̟͍͉͔̤̘͈͚͓̝̰̫̫͍̻̞̗̜̖͍͚̟̘̮͙͑̊̔̀̌̃̄̓̀̅̀͂͒̊͌̃͋͒͊̈́̏̓̔̃̎̅̐̒̔̓͂͐͊̾̋̈̋͑̐̃̆̑́̀͊̀͂͂̍̄̈́̐̐͛͋̽̄͒͒̊̔̈̀͆̊̈́̋͌̌̒̾̌̄̒̊͐̽̈͒̃̉̉̓͗͂̇͗̓̑̍̓̊́̆́̉̄̀̋̇̿͆̀̈́̅̏͘͘̚̕͘̚̚͘͜͜͜͜͜͠͝͝͠͝͝͝͠ͅę̷̢̨̧̡̢̗̖̜̼͙̜͎̦͍̹͉̘͉̝̙̥͕̲̞̹͚͓͕͔̟̰͇̼̼͖͖͚̺̬͉͓̣͖̩̭̥͈̖̙̰̬̟͚̱̩̣̗̮̰̤̳̙̪͇̭̝̱͙̪̼͓̩̮̜̲̭̗̣̠̹̻̗̺̻͖͙̥̭̗͈̩̲̪̠̠͍̭̱̦̥̖̱̩̹̯̮͂͊̓͗͒̍̈́̉͊̌͑͛̀͜͜ͅͅȩ̵̧̢̡̧̡̧̡̧̡̨̢̧̧̛̛̛̲̘̣̮̮̤͇̠̼̹̝͇̪̲̜̰͉̣̲͚̬̺̝̤̖̣͓̟̦̣̞̭̱͍̹͚͇̮͚̘͖̲̲͓̝̲̩̘̣̗̗̬͓̘̗͉̯̰̲̺̘͇̗̜̱̞͖̰̻͔͍͉͖̰̩̯̞͙͎̯̞̞̼̠͔̖̟͚͇̙̭̫͖̬̠͚̤͖̟͔͈̹̖͖̯̰̬̖͉̝̙̱̰͙͕̥́̋̋̍̑͒̌̂͆̽́̈́͊̈́̐̒̈́̇̀̀̐͌̉̑͑́̽̎͗͆̊͛͐̀̅̀̌͊̊̓͌̏͗̑͐̐̅̽̽̋͐̎́̓̀̔̍̽͂̉͗͑́̔̍̍̈̾̏̌͆̋̓͋̒̊̐̒͛͑̌̀̾̕̚̕̕̚͘͘̚͜͝͝͝͠͠͝͠͠͝ͅȩ̷̡̨̡̢̨̡̡̧̡̧̛̛̞̭̟͈̘̞͉͍̭̜̘͔̩̗̦̪̭̻̦͔̥̤͉̤̜̩̳͖̘̦͍̩̹̺͉̖̩̪̻͉̳̭̩͙͖͉͖̮̫̺͚̟͉̙̻̖̻̤͈̞̲̩̩͙̝̠͔͉̳̞̪̬̰͇͖̣̮̘̞͈̹̗̜͙̪͎̝͓͉̃̄̅͊̋́̒̄̓̍̐̑̾̓̌̿̂̓̉̂͒̐̓̊͂͊̕͜͠ͅͅͅͅe̸̡̡̡̨̨̧̢̡̡̢̢̨̧̛͉͙̦̗͙̫͇̜̣͚̯̥̹̣̳̞̖̤͇͎̜͔̜̘̥̙̻̬͚̪̙͕̞̙͚̳͕̫̣̣̳̺͈͓̬̺͓̝̬̣̝͚͎͓̣͈͕͓̻̩̼̗̮̤̬͉̝͓̟̲̥͔̗̓̊̾̐̀̾̄͋͛̊̈́̾̅̾̈́͒̍́̅͂͊̍̃͐̏͆̐͑̅̔̏̒͑̀͗̚̚̕̕͘͜͜͝͠͠ͅḙ̶̡̢̨̨̨̨̨̡̢̨̲͓͕͖͉̥̩͎̰̩͓̯̼̙̩̞̳̲̺̻͖͔̲̟̙͚̤̗̪͚̯̫̣̥̺̬͉͚̬͙̖̜̰̱̘̳̹͕͎̪̭̭̘̦͖̠̯̙͇̹̳̜̞̺̥͔͇̖̜͍̪̺̮͕̖͈̤͙̭̘͍̦͉̖͚̼̝͖̥͎͓̟̩͖̲͐̿͠ͅͅę̴̢̡̡̛̼̳̞͇̩̗̰̦̤̰̻͇̗͉̭̞̰̖͇̟̱̲̭̻̲̙̙͈̙̅͆̽̀̀͐̒͒̂́̄̔͐̒̔̈́̌̌̔͋̊̏̾͒̍̒̿̀̍̊̉̿̈́̎̀̑̋̿͊̓̈̎́̽̅̏̓̏̓͊̆̄̆̊̚͘͝͠ͅͅe̸̡̡̨̗̠̟̯̭̰̰̠̝̘̣̜̗͔̯̝̮̱͕͍̘͉̮̭̫̠̯̩͍̼͈̲̻̞̥͙͇̻̝̭̪̝̝̠̫̣͎͕̦̙͍̞̼͎̩̰͔̰̳̭̱̘̜̪͈͇̬̖̮͈̣̠̒͛̉͊͐͌̔̓́͐̅̇̃̆̉̓͛͑͐̍̈́͊̏̉̌͜͜͝͝͝͝ͅͅͅe̸̢̧̢̢̡̧̨̢̛̛̛̯̠̞̝̙͍̼̯͈̥̱̟̣͇̜͚̱͎̙͚͚̪͇̞̠̜͇͎̙̰̘͉̦͚̳͈̙̤̮̫̱̺̞̱̳͖̩̥̺̬̟̖̜̪̦̼̳̫͍̖̞̩̟̤̻̬͕͚͖͚̤͖͚̼͚͙͚̓̈́̉̈́̒̉͂͊͛̒͋̓́̉̾̍̉͋̈́̀̅̂̿̏̊͐͗̀̂̔̽̄̈́͊̈́͒̊̾̽̿̈́̅̍̍̇̉̑͆̀͂̂͐̈́͆͋̿̍̈̍̅̔̇̍̐̇̒̒͛̋͆̒̑̈̔̀͆͂̄̉́̏̀̃̽͛̒́̍̎̋̏̉̑͋̇̆̇̾͐͒̌̀́̆͐̈̿̃͒̂́̚͘̚̚̕̕̕͜͜͜͝͝͝ͅe̴̢̢̡̧̢̢̡̛̹̙̱̥͈̱̯̺͇̺̞͔͎̠̫͇̟̯̱̦͙̗͙͇͇̰͔̬̼͚̙̬͖͕̼͙̯̻̰͚̫̮̥̖̲̟͗̌̀́͛̈́̔͒̉̾̈́̂̽̾̀̏̋͋̆̐̑̌̓̓͛̓̄́͒̓̿̅̒̄̑̇̾̇̒̌͛͒̅̈́͗̐̅̽͛͗̇͗̒̄̔͌̎̓͐̚̚̚͘̕͜͝͠͝͝͝ͅę̸̨̡̡̢̛̦͎̜̙̼̣̻̟̱͕̝̝̤͍̙̘͖͕̻̩̳̘̝̪͊̀̋̀́̋̏̿̈́͒̈̅͋̆̂͒̽̈́͐͌̄̀̄̃͂̒̊́̐͒̾̏̾̑̔̔̀͂͗̉̈́̈̀̉́̽̆̑̂̅͗͒̈́͂̄̊̈́͗̎́̆̀̽̓͐̿̓̆̾͊̔̅̿̀͆́̇̃̐̍͋̀̓̈́͒̈͗͛̊̈́̓͗̉̓͆̈́̎̈́̋̄̏̀̑͐̈́̈́͑̌̉́͆͑̏͂̈́̑̒̚̕̕̚͘̕͜͝͠͠͠͝͝͝͝͝ͅȇ̷̢̡̢̨̨̢̡̨̡̢͍͉̺̙̠̗͇̘̮̝͙͈̝̤̰̭͙̝̟̱̘̰̪̞̰͕̤͕͓͓͚̱͔̣̙͕̘̘͈̭͇̜͍̩̭̟̹͍̝̮̪̬̣̲̗̞͎̱̯̙̙͎̫̠̻̱̝̹̫͙͖͎͖͈̝̮̮͔̻̗̦̯̝̠͇̭̝̩̱̪̩͓͕̞̩̹͍̬̻͈̹̭̱̖͖̗̥̺̮̱̻̯̤̘̪̝̪̳͈͂͋́̐̅͊̽̓͆̈͋̓̃͑̂̽̿̄̈́̾̓̈̋̄̄̾́̃̀̃͑̈́̒̔͌̌͋͛́̊̈́̊͂̓̃̐̋͋͛̽͗̉͑̎͌͛̌̀̄͋͆̓̈́̽̐̽͌́͌̎̿̈̽͛̒̈́̆̆̓̑̇̂̃́̑͑̎̾̑̾̈́̈́̈̿̀̇̂̄̓̄͘̚̚͜͜͜͝͝͝͠ͅe̵̡̛̛̫̝̗̝̞̞͕̮̣̙̲̥̺̲̺̗̣̬͖̗̝̬̽͑̈̏͐̓̒̽͒̉̇͆͌̽̊̉̔̌̈͗̀͗̎̊̀̀̏̉͆̿̍̽̈́͋͋̃̃͒͛͌̀̿́̒̓͗̈́͗͗̅̓̄̃̇̊̍̂̓̋̿̀̒̾̐̽́͑̉̽̆͌͒͗̄̾̊͊͌̀́͆̊̏̐͑̆͘͘̕̚̚͘͜͝͝͠͝͝͝͝͝͝ͅẻ̶̫̜̼̺̜͖̥̞͔̟͖̪̥͚̦̭̩̹̼͖̒͂̓͒͑͒̓̊̒̐̈́̈́̉̀̔̏̈́̈̓̈́͒̀̐̏͊̀̽͑͐̃̋̑̿͗͛͛̈́̿͋͋̆̚̚͘͘͝͝͝͠͝ͅe̴̡̧̡̡̢̨̧̧̧̡̛̛͍͓̖͉̼͓̙̻͖͍̰͓̭̞̲͖̙̮̣͉̞͕̰̬̲͔͈̞͙̰̜̭̤͓̣̥͓͓̦̮͍͍͍̳̥̣̥͖̪̼̳̤̩͕̲̱̭̳͉̹̫̯͔̝̻̯̮̥͑͌̏̈́͆̎͊͑̾̈́̀̀̿̅̑͊̆̏̐̎̀̊̐̋̅̓̓͑͐̽̓̈́̉̈́́̓́̊́̃̂͒̾̑͋̎́͊̓̿̿̏͂̓̽͌̀͗̈̀̓͆̃̔̌̈́̋̿̃̿̊̑͗̽͐͊͊͋̓͘̚͘̕̕͝ͅͅͅě̸̛̥̻̭͕̹͖͔̗͂̿̃͋͌́̓̓̐̋͛̈́͆̆̀̃̂̌̂̀̕̚͘͜͝ẻ̸̢̡̨̢̨̨͓̟̩̫͈̺̫̤̳̙̻̫͓͙̠̬̖̙̱͓̦͖̻̰̮̱̬͍͉͙̥̗͚͖͕̗͚̻̣̤̥̺̱̮͍̝̩͖̞͚̼̯̻̭͚̤̤̳̫̭̫̼̹̻̫̼͉̘̼̠̹̼̜̱͚̺͎̼̘͎̫̗̹̭͑͑̃͂̂̇̒͒̔͂̓̉̋̂͆͂̆̓́̐̉͂̄̕͜͜͜͝͠͝ͅͅͅͅḛ̶̡̧̡̡̢̢̧͎̹͚̩̜͎̲͙̘̗̳̖̖̮̜͎̲̗̗̻̯͈̺̭̘̬̙͍͔̰͚̩̠̯̯̖̘̜̭̱̥͍̩͎̭̟̥͖̬͈̭͙͆̐̍̈́̀̈́̇̒̾̈͊̐͛̾̃̓͗̎̈̀̋͐͊̃̿͊̈́̉̈́̋̿̏͌̈́́̉̄̇̂̿̍̀̇͒͆̑̃́̏̓̏̊͌́̒̇͛̉̓̀̒̈̂́́̓̈́͒͛̍̊͊̄̔̀̍̕̚͘̚͜͜͠͝͠͝͠͝ͅę̸̡̢̨̡̢̡̡̢̨̨̧̨̡̺͙͈̟͕͉̟̦̩̘̝̺̭̗̰͖̩̭͓̘̠͍̘̻̝̹̖̙̦͕̘͍̟̖̜̯̞͎͎͚̯̺͓̥͍̫̞̯͎̪̬̜͍̳͉̦̻̪͍̭̣͚͚̭̠͖͓̣̺̜͉̩͙̘̯̤̥̫̩̪͚̹̦̖͕̘͎͖͎̮͙̻̞͕̭͍̹̼̋̓͂̈́̈́̑̏̿̈͜͠ͅͅͅͅé̸̢̧̢̡̛̛̠̥̪͔͉̞̗̱̞̗̫͖̹̗̠̳̦̞͓̣͇̳̦̤̺̠̜̰̼̹̦̞͔͕̏̏͊͂͐̿̎͗̎͛̆͒̑̊̑̿̈́̉̉̔͊̐͑̀̓͊͑̓̿͗͂̈̇͊͑̇̒̒̈́̽̔̾̓͑͊̊̂͐̿̌̌͑̆͛̓͆͌͆̊͗̄̕͘͘͘̕͝͝͝͠ͅͅͅḙ̵̢̨̡̧̨̢̢̢̨̧̨̧̨̢̨̨̢̢̡̛͈̼͇̞͎̞͕͔̟̫͔̼̤̫̣̹̩̘̥̰̥̙̤̱͈̝̠̰̩̬̪̣̠̹͓̠̳̼̞̤̩̹̥͔̪̠̩͉̘̟̬̱̝͓̞̹͈͙͎̭̳̦͍̙̟̘̼̪̼̭̰͈̭͖̙͙̝̬͇͎̜̻̞̩̤̟͈̹̺̗̭̘̣͍͕̰̬̪̝̬͓͉̂̈́͐͊̏̉̃̈̈́̓̈́̎̋̊̎̑̀̀́͆̽̋̆̍̂̅̌̇̉͗̿͊̌̅̓͌̆̍͊̉͊̍̑̓̽̒̌̇̔̆̋̐̓̂̓̍̿̽͋̀͌̋̈́̽̅͋͊̄̓̎̀̆́̉̚̕̕̚͜͜͜͜͜͜͜͝͠͝͝ͅͅe̶̡̢̳͈̟̥͎̳͈͈̤̺̦̳̩̥͚̣̘̻̼͛͗͐͛͒̃̈̃͒͛͋̐̈́̓̈̾̅̌̾̄͋͘͘͝͝ë̸̛̥̯̐͛͆́̄̂͂̏̄̅̀͌͑̑̊̍̓͆͛̈́̔̑́̓̎̍̒̍͑͊̐͑̌͛͆͐͗̂̃̂͆̇́̂̂̀̉̍̊͂̆͆̍́̍͊̓̓̉̈́̓̋́͗͊̑̓̋̆̐̈́͗͌̔̒͑͛̒͗̈́͗̓̽̂̈́̆̕͘̕̚̚̚̚͘͝͠͝͝͠ȩ̵̨̢̧̡̘̻̪͖̯̰̝͚͓̣̦͖̲͕͓̪͙͈͖͉̻̠͎̳͉͍͇̹͈͉̦̘̫̺̙̝̦̦̼̦̩̙̫͈͙͖͓̭̦̤̗̘̰͖̤̩͉̰̩̤̘̺̱̲̘̤̻̯̼̞̐͌͑̋̈́̉̈̑̄̽͊̒̓̈̀͑̀̓̉̀̑͗̏̈̐͂̓̑͆̈̽͌͂̉͆̈͆͊̇̊͗̃́̂̉͗̐̐̉͊̂͗̈́̂̄̊̑͒̒͊̈́͋̄̃͑̒͛́̃̓̃̽̓̔̀̂̆̃͌̽̊̃̒̈̾̽̒̍̇̏͗́͗̉͂̽̆͌̂̈́̿̀͛̀̓̾̍̊̒̏̕̚̕͘̕̕͠͝͝e̸̡̧̢̡̧̨̨̡̧̨̨̡̢̨̢̛̛̛̺̹͎͙͍͔̬̖̙̖͚͈̼͈͈̝̠̜͔̲̻͎̰̬̠̲̱̤͙̘̹̙̖̻̜̙͕͇͕͔͈̙͕̦̩̪̪̤̟̠̝̻͉̻̖̺̣̻̗̬̙̰̤̯͍̻͔͓͓͎͈̘͇̭̗̯̫̜͓̗͇͈̳̳̭͍̹̭̙͕͍̮̳̰̳̤̬̪͍̭̩̗̻͔͍͖̫̺̦̘͔͐͑̓̂͑̎́͋͊̏́̊̏̂̆̿͗̂͛́͗̉͋̉͐̉͑̾͑̑̀́͊̐̀̔̽́͆̓̄͆̅̋̀̇̀̀̊̉͆̍̇͊͋̀͂̈̇̋͛̏̈͌͛̍̑̎̆̆̌̔̓͊̆͑̅̐̏͆̉̈́̌̿̋̈́͆̓̏̓͂̐̎̂̾̐̓͒̊͛̅̑̍̎̓̍̔́̕͘͘̕͘͜͜͝͠͝͠͝͝͝͝͝͝ͅe̸̢̢̢̨̨̢̨̨̢̛̛̛̫̱̱̗͚͕̙̭͓͎͙͕͖̞̗̺̹̤̰͇̪̰̙̘͓͕͎͍̻̯͉̪̟̺̮͓͓̯̣̭̭̱͎̯̰͈̳̭̫̲͎͙͙̰̰̠̝̣̮̻̻̝̙̪̻̲̬̗̜̞̗͉̜͔͚̪̖̟͍͉͔̤̘͈͚͓̝̰̫̫͍̻̞̗̜̖͍͚̟̘̮͙͑̊̔̀̌̃̄̓̀̅̀͂͒̊͌̃͋͒͊̈́̏̓̔̃̎̅̐̒̔̓͂͐͊̾̋̈̋͑̐̃̆̑́̀͊̀͂͂̍̄̈́̐̐͛͋̽̄͒͒̊̔̈̀͆̊̈́̋͌̌̒̾̌̄̒̊͐̽̈͒̃̉̉̓͗͂̇͗̓̑̍̓̊́̆́̉̄̀̋̇̿͆̀̈́̅̏͘͘̚̕͘̚̚͘͜͜͜͜͜͠͝͝͠͝͝͝͠ͅę̷̢̨̧̡̢̗̖̜̼͙̜͎̦͍̹͉̘͉̝̙̥͕̲̞̹͚͓͕͔̟̰͇̼̼͖͖͚̺̬͉͓̣͖̩̭̥͈̖̙̰̬̟͚̱̩̣̗̮̰̤̳̙̪͇̭̝̱͙̪̼͓̩̮̜̲̭̗̣̠̹̻̗̺̻͖͙̥̭̗͈̩̲̪̠̠͍̭̱̦̥̖̱̩̹̯̮͂͊̓͗͒̍̈́̉͊̌͑͛̀͜͜ͅͅȩ̵̧̢̡̧̡̧̡̧̡̨̢̧̧̛̛̛̲̘̣̮̮̤͇̠̼̹̝͇̪̲̜̰͉̣̲͚̬̺̝̤̖̣͓̟̦̣̞̭̱͍̹͚͇̮͚̘͖̲̲͓̝̲̩̘̣̗̗̬͓̘̗͉̯̰̲̺̘͇̗̜̱̞͖̰̻͔͍͉͖̰̩̯̞͙͎̯̞̞̼̠͔̖̟͚͇̙̭̫͖̬̠͚̤͖̟͔͈̹̖͖̯̰̬̖͉̝̙̱̰͙͕̥́̋̋̍̑͒̌̂͆̽́̈́͊̈́̐̒̈́̇̀̀̐͌̉̑͑́̽̎͗͆̊͛͐̀̅̀̌͊̊̓͌̏͗̑͐̐̅̽̽̋͐̎́̓̀̔̍̽͂̉͗͑́̔̍̍̈̾̏̌͆̋̓͋̒̊̐̒͛͑̌̀̾̕̚̕̕̚͘͘̚͜͝͝͝͠͠͝͠͠͝ͅȩ̷̡̨̡̢̨̡̡̧̡̛̛̞̭̟͈̘̞͉͍̭̜̘͔̩̗̦̪̭̻̦͔̥̤͉̤̜̩̳͖̘̦͍̩̹̺͉̖̩̪̻͉̳̭̩͙͖͉͖̮̫̺͚̟͉̙̻̖̻̤͈̞̲̩̩͙̝̠͔͉̳̞̪̬̰͇͖̣̮̘̞͈̹̗̜͙̪͎̃̄̅͊̋́̒̄̓̍̐̑̾̓̌̿̂̓̉̂͒̐̓̊͂͊̕͜͠ͅͅͅͅ
				</Box>
			</Box>
			{/* <SubgraphWrapper /> */}
			{/* <TestingFunctions /> */}
		</Box>
	);
}

export default App;
