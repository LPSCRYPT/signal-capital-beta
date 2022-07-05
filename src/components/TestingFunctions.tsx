import React, { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Box, Input, Button } from '@chakra-ui/react';
import {
  useAddAccount,
  useAddNewSignal,
  useSignalExisting,
  useWithdrawPoints,
} from '../contract/calls/sigcapfunctions';

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
    </Box>
  );
};

export default TestingFunctions;
