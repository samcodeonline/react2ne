import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'1'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={('full', '96%')}
          m={'auto'}
        >
          <Heading>Welcome Back</Heading>
          <Input placeholder={'email'} type={'email'} required />

          <Input placeholder={'password'} type={'password'} required />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>

          <Button colorScheme="blue" type={'submit'}>
            Log In
          </Button>

          <Text textAlign={'right'}>New User ? </Text>

          <Button variant={'link'} alignSelf={'flex-end'} colorScheme="blue">
            <Link to={'/signup'}>SignUp</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
