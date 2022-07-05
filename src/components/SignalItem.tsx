import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSubgraph } from '../views/subgraph';
import '../App.css';

const SignalItem = () => {
  const { friends, signals } = useSubgraph();



  return (
    <Box className="Row">
      <Box display="flex" w="75%">
        <Box w="50%">
        SignalString
        </Box>
        <Box w="50%">
          TVS: 0.186
        </Box>
      </Box>
      <Box display="flex" w="25%">
        <Box w="50%">
        {JSON.stringify(friends)}
        </Box>
        <Box w="50%" className="signaller">
          <button>
            down
          </button>
          <button>
            up
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignalItem;
