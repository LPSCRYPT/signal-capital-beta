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
    <Box h={'60px'} borderBottom="1px " borderColor="gray.200">
      {address ? (
        <Box>
          <Box>Welcome, {address}</Box>
          {/* <button onClick={() => disconnect()}>Disconnect</button>{' '} */}
          <input type="text"></input>
        </Box>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </Box>
  );
};

export default Headbar;
