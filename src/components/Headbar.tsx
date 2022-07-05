import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Box, Input } from '@chakra-ui/react';
import { useAddAccount } from '../contract/calls/sigcapfunctions';

const Headbar = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <Box display={'flex'} w='100%' justifyContent={'space-between'} p={25} borderBottom={'1px solid'} borderBottomColor={'whiteAlpha.500'} bg={'blackAlpha.700'}>
      <Box w="150px"><b>SigCap</b></Box>
      {address ? (
        <Box display={'flex'} w='100%' justifyContent={'space-evenly'} >
          <Box w="auto" marginLeft="auto">{address}</Box>
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
