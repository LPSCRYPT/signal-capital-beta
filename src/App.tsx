import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import Headbar from './components/Headbar';
import Body from './components/Body';
import TestingFunctions from './components/TestingFunctions';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box
      className="pageWrapper"
      h={'100vh'}
      w={'100vw'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Headbar />
      {/* <Body /> */}
      <TestingFunctions />
    </Box>
  );
}

export default App;
