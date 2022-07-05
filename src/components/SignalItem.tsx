import React from 'react';
import { Box,
  Tbody,
  Tr,
  Td, } from '@chakra-ui/react';
  import Signaller from './Signaller';
import { useSubgraph } from '../views/subgraph';
import '../App.css';

const SignalItem = () => {
  const { friends, signals } = useSubgraph();



  return (      
    <Tbody>
      <Tr>
        <Td>SignalString</Td>
        <Td isNumeric>0.186</Td>
        <Td isNumeric>120</Td>
        <Td>
          <Signaller />
        </Td>
      </Tr>
    </Tbody>
  );
};

export default SignalItem;
