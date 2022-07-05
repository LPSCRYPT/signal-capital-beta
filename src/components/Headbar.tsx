import React, { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Box, Input, Avatar, AvatarBadge } from '@chakra-ui/react';
import { useAddAccount } from '../contract/calls/sigcapfunctions';
import { useFriendInfo } from '../views/subgraph';
import Logo from '../assets/darksignal_circle.png';

const Headbar = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const friend = useFriendInfo(address);

  return (
    <Box
      display={'flex'}
      w="100%"
      justifyContent={'space-between'}
      p={25}
      borderBottom={'1px solid'}
      borderBottomColor={'whiteAlpha.500'}
      bg={'blackAlpha.700'}
    >
      <Box w="150px" display={'flex'} alignItems={'center'}>
        <b><Avatar src={Logo} name="logo" size={'sm'} marginRight={3} />SigCap</b>
      </Box>
      {address ? (
        <Box display={'flex'} w="100%" justifyContent={'flex-end'}>
          <Box>
            {friend ? friend['balance'] : address}
          </Box>
          <Box>
            {friend ? friend['name'] : address}
          </Box>
        </Box>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </Box>
  );
};

export default Headbar;
