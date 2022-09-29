import { Box, Center, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import "../css/Home.css"
import Page1Box from './page1Box'
export default function Home() {
  return (
    <div className='homes'>
      <div className='pg1'>
        <Center>
          <Text fontSize="7xl" w="700px">A platform built for a new way of working</Text>
        </Center>
        <Center>
          <Text fontSize="20px" w="550px">what would you like to manage with monday.com Work OS</Text>
        </Center>
        <Flex>
          <Page1Box></Page1Box>
        </Flex>
      </div>
    </div>
  )
}