import React from 'react';
import { Box } from '@chakra-ui/react';
import SignalList from '../components/SignalList';
import { useFriendInfo } from '../views/subgraph';
import { useSubgraph } from '../views/subgraph';
import { useAccount } from 'wagmi';

const Body = () => {
  const { friends, signals } = useSubgraph();
  const { address } = useAccount();
  const friend = useFriendInfo(address);

  return (
    <Box  display={'flex'} flexDirection={'row'} h={'100%'} w={'100%'} bg={'gray.200'}>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} minHeight={'240px'} p={50} maxWidth={'650px'} alignItems={'start'}>
        <Box>
          <p>Welkommen, <strong>{' '}{friend ? friend['name']:address}</strong></p>
          <p>
          {friend ? `You have ${friend['points']} of 1000 points available to Signal.`
          : address}
          </p>
        </Box>
        <Box>
          {!friend
            ? 'Please register a name so that we know who you are!'
            : 'Please update your Signals to reflect the current state of your interests, for the benefit of your friends!'}
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
