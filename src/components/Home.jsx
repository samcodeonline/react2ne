import React from 'react';
import { Box, Img, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate( -50%, -50%)',
  textTranform: 'uppercase',
  p: '4',
  size: '4xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            recusandae iusto suscipit dolore vitae perferendis harum commodi
            atque quos odio. Dolorum aliquid nisi ad assumenda inventore quae
            praesentium. Voluptatibus, maxime! Deserunt, minima. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ab repellat in minus
            sit, magnam voluptates, odit ipsa porro nam aut enim, mollitia dicta
            quibusdam at. Rem quisquam exercitationem nihil natus nesciunt
            minus! Numquam, magni voluptatum cumque dolorum repellendus ipsum
            tempore recusandae tempora illo, odio fuga, sint exercitationem
            ipsa? Obcaecati, ab.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Img src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the real You
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
        Gramers can make a living now.
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
        Dark Life Time
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img5} />
      <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
        Gramers can make a living now.
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
