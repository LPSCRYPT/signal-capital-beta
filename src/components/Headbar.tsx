import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Box } from '@chakra-ui/react';

const Headbar = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <Box h={'60px'} borderBottom="1px" borderColor="gray.200">
      {address ? (
        <Box>
          <Box>Welcome, {address}</Box>
          <button onClick={() => disconnect()}>Disconnect</button>{' '}
        </Box>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </Box>
  );
};

export default Headbar;
