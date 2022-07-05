import React from 'react';
import { Box } from '@chakra-ui/react';
import SignalList from '../components/SignalList';
import { useSubgraph } from '../views/subgraph';

const Body = () => {
  const { friends, signals } = useSubgraph();

  return (
    <Box h={'100%'} w={'100%'} bg={'gray.200'}>
      
    </Box>
  );
};

export default Body;
