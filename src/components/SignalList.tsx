import React from 'react';
import { Box, Button, 
  Table,
  Thead,
  Tr,
  Th,
  TableContainer, } from '@chakra-ui/react';
import SignalItem from '../components/SignalItem';
import { useSubgraph } from '../views/subgraph';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import '../App.css';

const SignalList = () => {
  const { friends, signals } = useSubgraph();

  return (
    <TableContainer>
    <Table colorScheme='teal'>
      <Thead>
        <Tr>
          <Th><Box display={'flex'} alignItems={'center'}><Box>Name</Box>
          <Box className="SortGroup" marginLeft={2} display={'flex'} flexDirection={'column'} h={'p'}>
            <Button size={'xs'} variant={'ghost'} border="none"><TiArrowSortedUp /></Button>
            <Button size={'xs'} variant={'ghost'}><TiArrowSortedDown /></Button>
          </Box>
          </Box>
          </Th>
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
