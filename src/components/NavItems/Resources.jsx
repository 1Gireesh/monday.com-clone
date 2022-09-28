import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Resources() {
  return (
    <div style={{margin:"30px"}}>
      <Flex mt="30px" height="600px">
        <SimpleGrid columns={3} spacing={3}>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Help center
            </Text>
            <Text fontSize={"1xl"}>
            Tutorials and how-to guides for using monday.com
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
            Get fast and 

            </Text>
            <Text fontSize={"1xl"}>
            200+ templates and workflows to get you started in minutes
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Template center
            </Text>
            <Text fontSize={"1xl"}>
            Explore the latest on productivity, product news, tips, and more    </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
            Learn more about our partnership programs

            </Text>
            <Text fontSize={"1xl"}>
              About us
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Partners
            </Text>
            <Text fontSize={"0.5xl"}>
            Learn more about our partnership programs
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Apps marketplace
            </Text>
            <Text fontSize={"0.5xl"}>
            Learn more about our partnership programs
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Webinars
            </Text>
            <Text fontSize={"0.5xl"}>
            Join us to unlock new insights at our upcoming online and offline events            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Global events
            </Text>
            <Text fontSize={"0.5xl"}>
            Learn more about our partnership programs
            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              App development
            </Text>
            <Text fontSize={"0.5xl"}>
            Join us to unlock new insights at our upcoming online and offline events            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Blog
            </Text>
            <Text fontSize={"0.5xl"}>
              Learn more about our partnership programs

            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Digital Lift
            </Text>
            <Text fontSize={"0.5xl"}>
            Helping nonprofits make a lasting impact through technology            </Text>
          </Box>
          <Box  _hover={{ cursor: "pointer",bg:"rgb(24, 4, 82,0.1)" }} height='80px'>
            <Text fontSize={"1xl"}>
              Customer stories
            </Text>
            <Text fontSize={"0.5xl"}>
            Join us to unlock new insights at our upcoming online and offline events            </Text>
          </Box>
        </SimpleGrid>
        <Flex direction="column" width="400px" height="100%" gap="30px">
          <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/header/customer_story.png" alt="" />
          <Text>Oscar saves 1,850 hours and $50,000 each month Workwith monday.com  OS</Text>
          <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/header/big-Gantt_charts_explained.jpg" alt="" />
          <Text>Oscar saves 1,850 hours and $50,000 each month Workwith monday.com  OS</Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default Resources