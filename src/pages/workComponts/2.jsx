import { Box, Button, HStack, Input, Spacer, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import {makeid} from "../../random";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

const Men = (
    <Menu >
        <MenuButton as={Button} >
            <img width="20px" className='tripledot' onClick={() => { }} src="https://cdn-icons-png.flaticon.com/128/17/17764.png" alt="" />

        </MenuButton>
        <MenuList>
            <MenuItem>monday {makeid(5)}</MenuItem>
            <MenuItem>{makeid(5)}</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>{makeid(5)}RM ove</MenuItem>
            <MenuItem>spacea Work</MenuItem>
            <MenuItem>{makeid(7)}</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            <MenuItem>Aworkspacea Workshop</MenuItem>
        </MenuList>
    </Menu>
)



const Two = () => {



const [side,setSide] = useState(0);
    


    return (
        <VStack className='two'>
          
         {
            !side?<img width="30px" onClick={()=>setSide(1)}  className='opensid' src="https://cdn-icons-png.flaticon.com/128/709/709586.png" alt="" />:(
               <Box className='sidebar2' w="220px">
                <HStack>
                    <HStack>
                        <Button colorScheme="teal" w="30px" h="30px">C</Button>
                        <Text fontSize="1xl" >CRM</Text>
                    </HStack>
                    <Spacer></Spacer>
                    <VStack>
                        <img width="7px" src="https://cdn-icons-png.flaticon.com/128/271/271239.png" alt="" />
                        <img width="7px" src="https://cdn-icons-png.flaticon.com/128/271/271210.png" alt="" />
                    </VStack>
                    {Men}
                    <img width="20px" className='openArrow' onClick={()=>setSide(0)} src="https://cdn-icons-png.flaticon.com/128/709/709586.png" alt="" />
                </HStack>

                <HStack>
                    <HStack mt="30px">
                        <img width="20px" className='searchi' src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="" />
                        <Input className='searchp' w="100%" h="30px" placeholder="search"></Input>
                    </HStack>
                </HStack>
                <VStack>
                    <Box className='twosm'>Draft   {Men}</Box>
                    <Box className='twosm'>Contacts{Men}</Box>
                    <Box className='twosm'>Accounts{Men}</Box>
                    <Box className='twosm'>Leads   {Men}</Box>
                    <Box className='twosm'>Activities{Men}</Box>
                    <Box className='twosm'>CRM Learning{Men}</Box>
                    <Box className='twosm'>Draft{Men}</Box>
                </VStack>
            </Box> 
            )
         } 

            



        </VStack>
    );
}

export default Two;
