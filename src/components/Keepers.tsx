import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
  } from '@chakra-ui/react'
import "../App.css";

const Keepers = () => {

	return (
		<Box w={'100%'}>
			<Box display={'flex'} w={'100%'} justifyContent={'space-between'} py={3}>
				<Box pl={4}>Keeper Name</Box>
				<Box pr={10}>Allocated</Box>
			</Box>
			<Accordion allowMultiple defaultIndex={[0]}>
				<AccordionItem py={5}>
					<h2>
					<AccordionButton>
						<Box flex='1' textAlign='left' display={'flex'} justifyContent={'space-between'}>
							<Box>KeeperName1</Box>
							<Box>100</Box>
						</Box>
						<AccordionIcon />
					</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
					<Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'}>
						<Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
							<Box>Signal Name</Box>
							<Box>69</Box>
						</Box>
						<Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
							<Box>Signal Name1</Box>
							<Box>69</Box>
						</Box>
					</Box>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem py={5}>
					<h2>
					<AccordionButton>
						<Box flex='1' textAlign='left' display={'flex'} justifyContent={'space-between'}>
							<Box>KeeperName2</Box>
							<Box>138</Box>
						</Box>
						<AccordionIcon />
					</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
					<Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'}>
						<Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
							<Box>Signal Name</Box>
							<Box>69</Box>
						</Box>
						<Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
							<Box>Signal Name1</Box>
							<Box>69</Box>
						</Box>
					</Box>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
};

export default Keepers;
