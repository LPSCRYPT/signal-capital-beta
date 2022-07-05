import React from 'react';
import { Box,
  Button, Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton, Input } from '@chakra-ui/react';
import { useSubgraph } from '../views/subgraph';
import '../App.css';

const Signaller = () => {
  const { friends, signals } = useSubgraph();

  return (      
      <Box className="Signaller">
        <Popover>
          <PopoverTrigger>
            <Button>-</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Withdraw Signal</PopoverHeader>
            <PopoverBody>
              <Box flexDirection="column" display="flex">
                <Input
                placeholder="text"
                type="text"
                style={{ border: '1px black solid' }}
                value={'existingSignalText'}
                />
                <Button>Submit</Button>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button>+</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Add Signal</PopoverHeader>
            <PopoverBody>
              <Box flexDirection="column" display="flex">
                <Input
                placeholder="text"
                type="text"
                style={{ border: '1px black solid' }}
                value={'existingSignalText'}
              />
              <Button>Submit</Button>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
  );
};

export default Signaller;
