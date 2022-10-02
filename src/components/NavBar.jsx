import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Flex, Image, Spacer } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import GetStartBtn from './GetStartBtn';
import UseCase from "../components/NavItems/UseCase"
import Resources from "../components/NavItems/Resources"
import Features from "../components/NavItems/Features"
import "../css/navbar.css"
import Product from './NavItems/Product';
import GetStarted from './GetStarted';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [drop, setDrop] = useState(null);
    let initArrow = ["˄", "˄", "˄", "˄"];
    const [arrow, setArrow] = useState(initArrow)
    const [gts, setGts] = useState(false);
    function handleClick(nu) {
        let arr = [...arrow]
        arr[nu] = arr[nu] == "˄" ? "˅" : "˄";
        setArrow(arr)
        drop == nu + 1 ? setDrop(0) : setDrop(nu + 1)
    }


    return (
        <Box className='header'>
            <Flex bg="white" justifyContent={"space-between"} h="60px">
                <Flex justifyContent={"space-evenly"} alignItems="center">
                    <Image w="30%" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt=""></Image>
                    <Text onClick={() => handleClick(0)} className='navitem' color="black" fontSize='1xl'>
                        Products
                        <span className='arrow'>
                            {arrow[0]}
                        </span>
                        <div className='undeline' style={{}}></div>
                    </ Text>
                    <Text onClick={() => handleClick(1)} className='navitem' color="black" fontSize='1xl'>
                        Usecases
                        <span className='arrow'>
                            {arrow[1]}
                        </span>
                        <div className='undeline' style={{}}></div>
                    </ Text>
                    <Text onClick={() => handleClick(2)} className='navitem' color="black" fontSize='1xl'>
                        Features
                        <span className='arrow'>
                            {arrow[2]}
                        </span>
                        <div className='undeline' style={{}}></div>
                    </ Text>
                    <Text onClick={() => handleClick(3)} className='navitem' color="black" fontSize='1xl'>
                        Resource
                        <span className='arrow'>
                            {arrow[3]}
                        </span>
                        <div className='undeline' style={{}}></div>
                    </Text>
                </Flex>
                <Flex gap={"20px"} alignItems="center">
                    <Text className='navitem' color="black" fontSize='1xl'>Pricing</Text >
                    <Text className='navitem' color="black" fontSize='1xl'>Contact sales</Text >
                    <Link to="/login">
                        <Text className='navitem' color="black" fontSize='1xl'>Log in</Text >
                    </Link>
                    <GetStartBtn setGts={setGts}></GetStartBtn>

                </Flex>
            </Flex>
            {
                gts && <GetStarted setGts={setGts}></GetStarted>
            }            {
                drop == 1 && <Product></Product>
            }
            {
                drop == 2 && <UseCase></UseCase>
            }
            {
                drop == 3 && <Features></Features>
            }
            {
                drop == 4 && <Resources></Resources>
            }
        </Box>
    );
}





export default NavBar;
