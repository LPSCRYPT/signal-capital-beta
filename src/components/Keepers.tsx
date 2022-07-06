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
		<Accordion allowMultiple defaultIndex={[0]}>
			<AccordionItem>
				<h2>
				<AccordionButton>
					<Box flex='1' textAlign='left' display={'flex'} justifyContent={'space-between'}>
						<Box>KeeperName</Box>
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
						<Box>Signal Name</Box>
						<Box>69</Box>
					</Box>
				</Box>
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem>
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
	);
};

export default Keepers;
