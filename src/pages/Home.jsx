import { Box, Image, Center, Container, Flex, Text, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import "../css/Home.css"
import GetStartBtn from "../components/GetStartBtn"
import pg from "./img/pg1.png"
import pg5 from "./img/pg5.png"
import pg7 from "./img/pg7.png"
import pg9 from "./img/pg9.png"
import pg11 from "./img/pg11.png"
import pg12 from "./img/pg12.png"
import SliderPage from '../components/SliderPage'
import SlidingPage2 from '../components/SlidingPage2'
export default function Home() {
  return (
    <Box className='homes'>
      <Box className='pg1'>
        <Center>
          <Text fontSize="7xl" w="700px">A platform built for a new way of working</Text>
        </Center>
        <Center>
          <Text fontSize="20px" w="550px">what would you like to manage with monday.com Work OS</Text>
        </Center>
        <Image src={pg} alt="habha" />
        <Center>
          <GetStartBtn className="pg1btn"></GetStartBtn>
        </Center>

      </Box>

      <Box className='pg2img'> </Box>

      <Box className='pg3'>
        <Center>
          <Text fontSize="1xl">Trusted by 152,000+ customers worldwide</Text>
        </Center>
        <Flex w="100%" justifyContent="center" gap="50px">
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png'></Image>
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png'></Image>
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png'></Image>
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png'></Image>
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png'></Image>
        </Flex>
        <Flex w="100%" justifyContent="center" gap="50px">
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png'></Image>
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png'></Image>
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png'></Image>
          <Image alt='' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png'></Image>
        </Flex>
      </Box>

      <Box className='pg4'>
        <Flex mr="30px">
          <Text fontSize="4xl">The Work OS that lets you
            shape workflows, your way
          </Text>
          <Text fontSize="2xl">
            Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs.
          </Text>
        </Flex>
        <Center>
          <GetStartBtn></GetStartBtn>
        </Center>
      </Box>

      <Image src={pg5}></Image>

      {/*
scroll and static
*/}
      <Center mt="50px">
        <Text fontSize="4xl">Everything you need for any workflow</Text>
      </Center>
      <Center>
        <Text fontSize="2xl">Easily build your ideal workflow with monday.com building blocks.w</Text>
      </Center>

      <SliderPage></SliderPage>

      <Box mt="100px">
        <VStack>
          <Image src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/monday_products_small.svg'></Image>
          <Center>
            <Text textAlign="center" w="600px" fontSize="4xl">End-to-end products to run
              the core of your business</Text>
          </Center>
    <Center>
      <Text textAlign="center" w="550px" fontSize="1xl">Tailored products designed for every aspect of your teams' needs.</Text>
    </Center>
        </VStack>
      </Box>


<Image src={pg7}></Image>

<Box className='pg8vid'>
  <video autoPlay muted>
    <source src='https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/products_video.mp4'></source>
  </video>
</Box>

<SlidingPage2></SlidingPage2>

<Image src={pg9} mt="150px"></Image>
<Image src={pg11} ></Image>
<Image src={pg12} mt="150px"></Image>


    </Box>
  )
}