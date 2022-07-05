import React, { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { useFriendInfo } from '../views/subgraph';
import { useSubgraph } from '../views/subgraph';
import { useAccount } from 'wagmi';
import {
  useAddNewSignal } from '../contract/calls/sigcapfunctions';

const NewSignal= () => {
  const { friends, signals } = useSubgraph();
  const { address } = useAccount();
  const friend = useFriendInfo(address);
  const [addNewSignalText, setaddNewSignalText] = useState('');

  const [addNewSignalAmount, setaddNewSignalAmount] = useState(0);

  const fireAddNewSignal = useAddNewSignal(
    addNewSignalText,
    addNewSignalAmount
  );

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} p={5} border="1px solid limegreen">
      <h4>New Signal</h4>
      <Input
        placeholder="Signal Name"
        type="text"
        style={{ border: '1px black solid' }}
        value={addNewSignalText}
        onChange={(e) => setaddNewSignalText(e.target.value)}
      ></Input>
      <Input
        placeholder="amount"
        type="number"
        style={{ border: '1px black solid' }}
        value={addNewSignalAmount}
        onChange={(e) => setaddNewSignalAmount(Number(e.target.value))}
      ></Input>
      <Button
        onClick={() => fireAddNewSignal()}
        border={'1px black solid'}
      >
        Add new signal
      </Button>{' '}
    </Box>
  );
};

export default NewSignal;
