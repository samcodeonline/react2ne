import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'1'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={('full', '96%')}
          m={'auto'}
        >
          <Heading>Video HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input placeholder={'Name'} type={'text'} required />

          <Input placeholder={'email'} type={'email'} required />

          <Input placeholder={'password'} type={'password'} required />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>

          <Button colorScheme="blue" type={'submit'}>
            Sign up
          </Button>

          <Text textAlign={'right'}>All ready Signed Up? {'  '} </Text>

          <Button variant={'link'} alignSelf={'flex-end'} colorScheme="blue">
            <Link to={'/login'}>Login</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
