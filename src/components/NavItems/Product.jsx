import React from 'react';
import { Box, Container, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
const Product = () => {
    return (
        <>
            <Text ml="25px">monday products</Text>
            <Flex ml="25px">
                <SimpleGrid columns={2} width="70%">
                    <Box _hover={{ bg: 'rgb(24, 4, 82,0.3)' }} height='100px'>
                        <Flex gap="20px">
                            <svg width="35px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.226 21.405c-1.403-.956-1.744-2.838-.762-4.204l8.29-11.526a3.123 3.123 0 0 1 2.56-1.287 3.123 3.123 0 0 1 2.556 1.287l8.29 11.53c.983 1.365.642 3.247-.76 4.204-1.403.956-3.336.624-4.318-.742l-5.77-8.024-5.769 8.021c-.982 1.366-2.915 1.698-4.317.741z" fill="#6C6CFF"></path><path d="M2.228 3.893C.825 4.849.484 6.73 1.466 8.097l8.286 11.521c.604.841 1.57 1.29 2.55 1.288a3.124 3.124 0 0 0 2.567-1.288l8.285-11.521c.982-1.366.642-3.248-.761-4.204-1.403-.956-3.336-.624-4.318.741l-5.765 8.017-5.765-8.017C5.563 3.27 3.63 2.937 2.228 3.893z" fill="url(#paint0_linear_512_2135)"></path><path d="M8.525 7.386L4.74 12.649l3.785 5.263 3.785-5.263-3.785-5.263z" fill="#7E7EFF"></path><defs><linearGradient id="paint0_linear_512_2135" x1="14.092" y1="12.126" x2="13.145" y2="21.214" gradientUnits="userSpaceOnUse"><stop stop-color="#8F8FFF"></stop><stop offset="1" stop-color="#BABAFD"></stop></linearGradient></defs></svg>
                            <Text fontSize='2xl'>monday work management</Text>
                        </Flex>
                        <Text fontSize='1xl'>Lorem, ipsum dolor. rk management</Text>
                    </Box>
                    <Box _hover={{ bg: 'rgb(25, 24, 32,0.3)' }} height='100px'>
                        <Flex gap="20px">
                            <svg width="35px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.646 12.818a.563.563 0 0 1-.572.595H8.926a.563.563 0 0 0-.572.595 8.458 8.458 0 0 0 1.87 4.743 8.32 8.32 0 0 0 4.817 2.914 8.264 8.264 0 0 0 5.554-.832 8.385 8.385 0 0 0 3.77-4.2c.739-1.798.836-3.8.276-5.662a8.408 8.408 0 0 0-3.345-4.553 8.272 8.272 0 0 0-7.124-1.032 8.295 8.295 0 0 0-1.691.747 8.374 8.374 0 0 1 3.079 3.131l.002-.036.017.03a8.472 8.472 0 0 1 1.067 3.56z" fill="#00A0A0"></path><ellipse cx="8.333" cy="13.414" rx="8.333" ry="8.413" fill="#fff"></ellipse><ellipse cx="8.333" cy="13.414" rx="8.333" ry="8.413" fill="url(#paint0_linear_1_20)"></ellipse><path d="M12.502 20.7a8.425 8.425 0 0 0 4.165-7.287c.007-.34-.021-.595-.021-.595a.568.568 0 0 1-.572.595H8.926a.563.563 0 0 0-.572.595 8.459 8.459 0 0 0 1.87 4.743 8.353 8.353 0 0 0 2.277 1.95z" fill="url(#paint1_linear_1_20)"></path><defs><linearGradient id="paint0_linear_1_20" x1="2.538" y1="8.363" x2="16.723" y2="15.544" gradientUnits="userSpaceOnUse"><stop stop-color="#00D2D2"></stop><stop offset="1" stop-color="#00D2D2" stop-opacity=".29"></stop></linearGradient><linearGradient id="paint1_linear_1_20" x1="17.571" y1="17.755" x2="4.308" y2="15.018" gradientUnits="userSpaceOnUse"><stop stop-color="#00A0A0"></stop><stop offset="1" stop-color="#00D2D2"></stop></linearGradient></defs></svg>
                            <Text fontSize='2xl'>monday marketer</Text>
                        </Flex>
                        <Text fontSize='1xl'>Lorem, ipsum dolor. rketer</Text>
                    </Box>
                    <Box _hover={{ bg: 'rgb(2, 244, 12,0.3)' }} height='100px'>
                        <Flex gap="20px">
                            <svg width="35px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_22)"><path d="M13.319 8.717l-.045-5.75c-.488-.052-.976-.029-1.464.011-4.337.407-7.685 3.951-7.594 8.186.074 3.428 2.281 5.681 4.007 6.92 2.458 1.763 5.356 2.494 8.334 2.81 1.754.185 3.602.27 4.904.241l1.483-.03a.567.567 0 0 0 .451-.237l1.645-2.311a.565.565 0 0 0-.012-.673l-1.714-2.23a.567.567 0 0 0-.46-.22l-1.515.029c-.99.021-2.572-.045-4.119-.21-1.925-.203-3.833-.563-5.431-1.71-1.04-.746-1.622-1.57-1.642-2.506-.024-1.124.774-2.083 1.866-2.35a2.435 2.435 0 0 1 1.306.03z" fill="url(#paint0_linear_1_22)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.514 8.05c.006.312.268.553.575.614 1.103.22 1.942 1.144 1.966 2.268.02.937-.526 1.784-1.532 2.574-1.565 1.228-3.422 1.653-5.354 1.942-1.538.23-3.115.364-4.106.385l-1.445.022a.567.567 0 0 0-.529.387L.563 20.82a.566.566 0 0 0 .548.744l2.128-.037.946-.02c1.303-.028 3.145-.192 4.89-.452 1.592-.238 3.515-.613 4.836-1.207l.004-.001a13.844 13.844 0 0 0 3.365-1.956c1.67-1.311 3.78-3.657 3.706-7.085-.092-4.26-3.63-7.672-8.015-7.857a.54.54 0 0 0-.555.56l.098 4.541z" fill="url(#paint1_linear_1_22)"></path><path opacity=".6" d="M19.6 15.433a40.316 40.316 0 0 1-2.38-.18c-1.583-.167-3.153-.44-4.55-1.17-1.37.796-2.91 1.127-4.5 1.365-.81.12-1.63.215-2.37.28.742 1.009 1.633 1.789 2.423 2.356 1.428 1.024 3.005 1.7 4.66 2.15a9.734 9.734 0 0 0 1.028-.387l.004-.001a13.843 13.843 0 0 0 3.364-1.956c.766-.6 1.623-1.418 2.32-2.457z" fill="#019152"></path></g><defs><linearGradient id="paint0_linear_1_22" x1="8.643" y1="10.43" x2="13.867" y2="19.303" gradientUnits="userSpaceOnUse"><stop stop-color="#00C875"></stop><stop offset="1" stop-color="#2EAE67"></stop></linearGradient><linearGradient id="paint1_linear_1_22" x1="14.134" y1="11.595" x2="-2.952" y2="22.154" gradientUnits="userSpaceOnUse"><stop stop-color="#00CA72"></stop><stop offset="1" stop-color="#C0FFE5"></stop></linearGradient><clipPath id="clip0_1_22"><path fill="#fff" d="M0 0h25v25H0z"></path></clipPath></defs></svg>
                            <Text fontSize='2xl'>monday sales CRM</Text>
                        </Flex>
                        <Text fontSize='1xl'>Lorem, ipsum dolor. les CRM</Text>
                    </Box>
                    <Box _hover={{ bg: 'rgb(243, 24, 82,0.3)' }} height='100px'>
                        <Flex gap="20px">
                            <svg width="35px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_21)"><path d="M9.455 11.386v9.678c0 .362.292.654.653.654h4.784a.654.654 0 0 0 .654-.654v-8.791a1.681 1.681 0 0 1 3.363 0v8.791c0 .362.293.654.654.654h4.783a.654.654 0 0 0 .654-.654v-9.678C25 7.307 21.52 4 17.227 4c-4.293 0-7.772 3.307-7.772 7.386z" fill="#CA0C6B"></path><path d="M0 11.386v9.678c0 .362.293.654.654.654h4.783a.654.654 0 0 0 .654-.654v-8.791a1.681 1.681 0 0 1 3.363 0v8.791c0 .362.293.654.654.654h4.784a.654.654 0 0 0 .654-.654v-9.678C15.546 7.307 12.066 4 7.773 4 3.48 4 0 7.307 0 11.386z" fill="url(#paint0_linear_1_21)"></path><path d="M0 16.026h6.09v5.153a.54.54 0 0 1-.54.54H.54a.54.54 0 0 1-.54-.54v-5.153zM9.455 16.026h6.09v5.153a.54.54 0 0 1-.539.54H9.995a.54.54 0 0 1-.54-.54v-5.153zM18.91 16.026H25v5.153a.54.54 0 0 1-.539.54h-5.01a.54.54 0 0 1-.54-.54v-5.153z" fill="#F8C3DD"></path></g><defs><linearGradient id="paint0_linear_1_21" x1="-.507" y1="20.464" x2="24.777" y2="17.216" gradientUnits="userSpaceOnUse"><stop stop-color="#FF158A"></stop><stop offset=".766" stop-color="#FF158A" stop-opacity=".5"></stop></linearGradient><clipPath id="clip0_1_21"><path fill="#fff" d="M0 0h25v25H0z"></path></clipPath></defs></svg>
                            <Text fontSize='2xl'>monday projects</Text>
                        </Flex>
                        <Text fontSize='1xl'>Lorem, ipsum dolor. ojects</Text>
                    </Box>
                    <Box _hover={{ bg: 'rgb(24, 243, 18,0.3)' }} height='100px'>
                        <Flex gap="20px">
                            <svg width="35px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_21)"><path d="M9.455 11.386v9.678c0 .362.292.654.653.654h4.784a.654.654 0 0 0 .654-.654v-8.791a1.681 1.681 0 0 1 3.363 0v8.791c0 .362.293.654.654.654h4.783a.654.654 0 0 0 .654-.654v-9.678C25 7.307 21.52 4 17.227 4c-4.293 0-7.772 3.307-7.772 7.386z" fill="#CA0C6B"></path><path d="M0 11.386v9.678c0 .362.293.654.654.654h4.783a.654.654 0 0 0 .654-.654v-8.791a1.681 1.681 0 0 1 3.363 0v8.791c0 .362.293.654.654.654h4.784a.654.654 0 0 0 .654-.654v-9.678C15.546 7.307 12.066 4 7.773 4 3.48 4 0 7.307 0 11.386z" fill="url(#paint0_linear_1_21)"></path><path d="M0 16.026h6.09v5.153a.54.54 0 0 1-.54.54H.54a.54.54 0 0 1-.54-.54v-5.153zM9.455 16.026h6.09v5.153a.54.54 0 0 1-.539.54H9.995a.54.54 0 0 1-.54-.54v-5.153zM18.91 16.026H25v5.153a.54.54 0 0 1-.539.54h-5.01a.54.54 0 0 1-.54-.54v-5.153z" fill="#F8C3DD"></path></g><defs><linearGradient id="paint0_linear_1_21" x1="-.507" y1="20.464" x2="24.777" y2="17.216" gradientUnits="userSpaceOnUse"><stop stop-color="#FF158A"></stop><stop offset=".766" stop-color="#FF158A" stop-opacity=".5"></stop></linearGradient><clipPath id="clip0_1_21"><path fill="#fff" d="M0 0h25v25H0z"></path></clipPath></defs></svg>
                            <Text fontSize='2xl'>monday dev</Text>
                        </Flex>
                        <Text fontSize='1xl'>Lorem, ipsum dolor. v</Text>
                    </Box>
                </SimpleGrid>
                <Flex direction="column" gap="20px">
                    <Text fontSize='1xl'>more by work form</Text>
                    <Flex alignItems="center" _hover={{ bg: "rgb(24, 243, 18,0.2)" }}>
                        <img width="45px" src="https://cdn-icons-png.flaticon.com/128/922/922677.png" alt="" />
                        <Text fontSize='2xl'>work form</Text>
                    </Flex>
                    <Flex alignItems="center" _hover={{ bg: "rgb(24, 243, 18,0.2)" }}>
                        <img width="45px" src="https://cdn-icons-png.flaticon.com/512/2913/2913988.png" alt="" />
                        <Text fontSize='2xl'>Canvas</Text>
                    </Flex>


                </Flex>
            </Flex>
        </>
    );
};




export default Product;
