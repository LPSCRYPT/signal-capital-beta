import React, { useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Box, Input, Button } from '@chakra-ui/react';
import {
  useAddAccount,
  useAddNewSignal,
  useSignalExisting,
  useWithdrawPoints,
} from '../contract/calls/sigcapfunctions';
import { useFriendInfo } from '../views/subgraph';
import { gql, useQuery } from '@apollo/client';

const TestingFunctions = () => {
  const { address } = useAccount();

  const [addAccountInput, setaddAccountInput] = useState('');
  const [addNewSignalText, setaddNewSignalText] = useState('');
  const [existingSignalText, setexistingSignalText] = useState('');
  const [withdrawPointsText, setwithdrawPointsText] = useState('');

  const [addNewSignalAmount, setaddNewSignalAmount] = useState(0);
  const [existingSignalAmount, setexistingSignalAmount] = useState(0);
  const [withdrawPointsAmount, setwithdrawPointsAmount] = useState(0);

  const fireAddAccount = useAddAccount(addAccountInput);
  const fireAddNewSignal = useAddNewSignal(
    addNewSignalText,
    addNewSignalAmount
  );
  const fireSignalExising = useSignalExisting(
    existingSignalText,
    existingSignalAmount
  );
  const fireWithdrawPoints = useWithdrawPoints(
    withdrawPointsText,
    withdrawPointsAmount
  );

  const friend = useFriendInfo(address);

  // testing state loop

  const [counter, setCounter] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    Math.floor(new Date().getTime() / 1000)
  );
  // Call setTimout after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setCounter(counter + 1), 10000);
    return () => clearTimeout(timer);
  }, [counter]);

  useEffect(() => {
    console.log('counter ', counter);
    setCurrentTime(Math.floor(new Date().getTime() / 1000));
    console.log(currentTime);
  }, [counter]);

  //
  const FRIEND_QUERY = `
  {
    friends(where: {id: "${address?.toLowerCase()}"}) {
      id
      name
      points
        holdings {
        id
        friend {
          id
        }
        amount
        timeValueSignal
        lastUpdatedTime
      }
    }
  }
    
  `;

  const FRIEND_GQL = gql(FRIEND_QUERY);

  const { loading: loadingFriend, data: dataFriend } = useQuery(FRIEND_GQL, {
    pollInterval: 2500,
  });
  //

  //

  return (
    <Box h={'60px'} borderBottom="1px " borderColor="gray.200">
      {address ? (
        <Box display={'flex'} flexDir={'column'}>
          <Box>Welcome, {address}</Box>
          <Box>
            <Button onClick={() => fireAddAccount()} border={'1px black solid'}>
              Register your account
            </Button>{' '}
            <input
              placeholder="text"
              type="text"
              style={{ border: '1px black solid' }}
              value={addAccountInput}
              onChange={(e) => setaddAccountInput(e.target.value)}
            ></input>
          </Box>
          <Box>
            <Button
              onClick={() => fireAddNewSignal()}
              border={'1px black solid'}
            >
              Add new signal
            </Button>{' '}
            <input
              placeholder="text"
              type="text"
              style={{ border: '1px black solid' }}
              value={addNewSignalText}
              onChange={(e) => setaddNewSignalText(e.target.value)}
            ></input>
            <input
              placeholder="amount"
              type="number"
              style={{ border: '1px black solid' }}
              value={addNewSignalAmount}
              onChange={(e) => setaddNewSignalAmount(Number(e.target.value))}
            ></input>
          </Box>
          <Box>
            <Button
              onClick={() => fireSignalExising()}
              border={'1px black solid'}
            >
              Add points to existing signal
            </Button>{' '}
            <input
              placeholder="text"
              type="text"
              style={{ border: '1px black solid' }}
              value={existingSignalText}
              onChange={(e) => setexistingSignalText(e.target.value)}
            ></input>
            <input
              placeholder="amount"
              type="number"
              style={{ border: '1px black solid' }}
              value={existingSignalAmount}
              onChange={(e) => setexistingSignalAmount(Number(e.target.value))}
            ></input>
          </Box>
          <Box>
            <Button
              onClick={() => fireWithdrawPoints()}
              border={'1px black solid'}
            >
              Withdraw points from signal
            </Button>{' '}
            <input
              placeholder="text"
              type="text"
              style={{ border: '1px black solid' }}
              value={withdrawPointsText}
              onChange={(e) => setwithdrawPointsText(e.target.value)}
            ></input>
            <input
              placeholder="amount"
              type="number"
              style={{ border: '1px black solid' }}
              value={withdrawPointsAmount}
              onChange={(e) => setwithdrawPointsAmount(Number(e.target.value))}
            ></input>
          </Box>
        </Box>
      ) : (
        <div>Please Connect</div>
      )}
      <Box>
        <Box>Your Signals</Box>
        {dataFriend ? JSON.stringify(dataFriend) : null}
        {/* {friend ? friend.map(f => {

        })} */}
      </Box>
    </Box>
  );
};

export default TestingFunctions;
