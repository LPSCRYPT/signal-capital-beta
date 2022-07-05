import React from 'react';
import { Box } from '@chakra-ui/react';
import SignalItem from '../components/SignalItem';
import { useSubgraph } from '../views/subgraph';
import '../App.css';

const SignalList = () => {
  const { friends, signals } = useSubgraph();

  return (
    <Box className="Row" w="100%">
      <Box className="Row" w="75%">
        <Box>
          <Box w="100%">name</Box>
          <Box w="100%">tvs</Box>
        </Box>
        <Box w="25%">signal</Box>
      </Box>
      <Box>
        <SignalItem />
      </Box>
    </Box>
  );
};

export default SignalList;
