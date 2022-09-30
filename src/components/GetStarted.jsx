import { Button, Flex, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import "../css/Getstarted.css";


export default function GetStarted({setGts}) {

  let gts = document.querySelector('.getStart');

  

  return (
    <Flex direction="column" className='getStart' justifyContent="center" gap="20px" alignItems="center">
      <Button className='btn' w="30px" ml="280px" onClick={()=>setGts(false)} border="0px">X</Button>
        <h2>Sign up for free</h2>
        <h2>Full access. No credit card needed.</h2>
        <input placeholder='enter your email'></input>
        <Button borderRadius="20px" className='bt'>Continue</Button>
        or
        <Button borderRadius="20px" className='bt btn' >Sign up with 
          <Image w="30px" src='https://img.icons8.com/fluency/2x/google-logo.png'></Image>
        </Button>
    </Flex>
  )
}
