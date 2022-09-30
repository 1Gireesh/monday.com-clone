import { Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

export default function Login() {
let [e,setE] = useState("")
let nv = useNavigate();
  const { email,setEmail } = useContext(authContext)
  return (
    <Flex justifyContent="center" alignItems="center" w="400px" direction="column" m='auto' gap="20px" mt="150px">
        <Text fontSize="3xl">Log in to your account</Text>
        <Text>Enter your work email address</Text>
        <Input placeholder='Example@company.com' onChange={(e)=>setE(e.target.value)}></Input>
        <Button w="100%" onClick={()=>{
          setEmail(e)
          nv("/work")
        }}>Next → </Button>
        <Text fontSize="3xl">or sign in with </Text>
        <Button className='btn'>
            <Image w="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgH4W5ek27mLBiC2F8WS9GCmB66UrnH3UwFMonwxxM3w&s" ></Image>
            google
        </Button>
        <Text fontSize="1xl"> Don't have an account yet? Sign up </Text>
    </Flex>
  )
}
