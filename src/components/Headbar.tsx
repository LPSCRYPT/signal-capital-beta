import React, { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Box, Input } from '@chakra-ui/react';
import { useAddAccount } from '../contract/calls/sigcapfunctions';
import { useFriendInfo } from '../views/subgraph';

const Headbar = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const friend = useFriendInfo(address);
  
  return (
    <Box display={'flex'} w='100%' justifyContent={'space-between'} p={25} borderBottom={'1px solid'} borderBottomColor={'whiteAlpha.500'} bg={'blackAlpha.700'}>
      <Box w="150px"><b>SigCap</b></Box>
      {address ? (

        <Box display={'flex'} w='100%' justifyContent={'space-evenly'} >
          <Box w="auto" marginLeft="auto">{address}</Box>

        <Box>
          <Box>
            Welcome,{' '}
            {friend
              ? friend['name'] +
                `. You have ${friend['points']} of 1000 points available to Signal.`
              : address}
          </Box>
          <Box>
            {!friend
              ? 'Please register a name so that we know who you are!'
              : 'Please update your Signals to reflect the current state of your interests, for the benefit of your friends!'}
          </Box>

          {/* <button onClick={() => disconnect()}>Disconnect</button>{' '} */}
          {/* <input type="text"></input> */}
        </Box>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </Box>
  );
};

export default Headbar;
