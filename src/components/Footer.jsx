import { Box, Button, HStack, Heading, Input, Stack, VStack } from '@chakra-ui/react';

import React from 'react';
import {AiOutlineSend} from "react-icons"

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack>
          <Heading size='md' text >
            Subscribe to get updates.
          </Heading>
          <HStack>

    <Input placeholder='Enter Email here....' />
            <Button
            p={"0"}
            colorScheme={'blue'}
            varieant={"ghost"}
            borderRadius={'0 20px 20px 0'}
            
            
            
            >
                <AiOutlineSend size={20} />

                
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
