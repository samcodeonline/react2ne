import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        left={'4'}
        colorScheme="blue"
        m={'4'}
        p={'0'}
        w={'10'}
        h={'10'}
        broderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VidoeHub</DrawerHeader>
          <DrawerBody>

            <VStack alignItems={'flex-start'}>
              <Button varient={'ghost'} colorScheme={'blue'}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button varient={'ghost'} colorScheme={'blue'}>
                <Link to={'/'}>Videos</Link>
              </Button>

              <Button varient={'ghost'} colorScheme={'blue'}>
                <Link to={'/vidoes?category=free'}>Free Videos</Link>
              </Button>

              <Button varient={'ghost'} colorScheme={'blue'}>
                <Link to={'/uplaod'}>Uplaod here</Link>
              </Button>
            </VStack>

            <HStack>
                
            </HStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
