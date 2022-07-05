import React, { useState, useEffect } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { useFriendInfo } from '../views/subgraph';
import { useSubgraph } from '../views/subgraph';
import { useAccount } from 'wagmi';
import {
  useAddAccount
} from '../contract/calls/sigcapfunctions';

const NewSignal= () => {
  const { friends, signals } = useSubgraph();
  const { address } = useAccount();
  const friend = useFriendInfo(address);

  const [addAccountInput, setaddAccountInput] = useState('');

  const fireAddAccount = useAddAccount(addAccountInput);

  return (
    <Box display={'flex'} flexDirection={'column'} h={'100%'}>
      <p>Register a name so that we know who you are!</p>
      <Input
        placeholder="text"
        type="text"
        style={{ border: '1px black solid' }}
        value={addAccountInput}
        onChange={(e) => setaddAccountInput(e.target.value)}
      ></Input>
      <Button onClick={() => fireAddAccount()} border={'1px black solid'}>
        Register your account
      </Button>{' '}
    </Box>
  );
};

export default NewSignal;
