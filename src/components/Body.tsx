import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSubgraph } from '../views/subgraph';

const Body = () => {
  const { friends, signals } = useSubgraph();

  return (
    <Box h={'100%'} w={'100%'} bg={'gray.200'}>
      {JSON.stringify(friends)}
      <div>---</div>
      {JSON.stringify(signals)}
    </Box>
  );
};

export default Body;
