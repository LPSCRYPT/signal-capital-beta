import React from 'react';
import { Box, 
  Table,
  Thead,
  Tr,
  Th,
  TableContainer, } from '@chakra-ui/react';
import SignalItem from '../components/SignalItem';
import { useSubgraph } from '../views/subgraph';
import '../App.css';

const SignalList = () => {
  const { friends, signals } = useSubgraph();

  return (
    <TableContainer>
    <Table colorScheme='teal'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th isNumeric>TVS</Th>
          <Th isNumeric>Allocated</Th>
          <Th>Signal</Th>
        </Tr>
      </Thead>
      <SignalItem />
    </Table>
  </TableContainer>
  );
};

export default SignalList;
