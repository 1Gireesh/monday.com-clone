import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

let arr = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum, consequuntur quaerat magnam debitis impedit harum. Cumque dic",
  "eaque soluta exercitationem debitis. Voluptatum impedit quos reprehenderit nesciunt quod maxime? Neque molestiae harum ",
  "dolor sit amet consectetur adipisicing elit. Non rerum, consequuntur quaerat magnam debitis impedit harum. Cumque dicta eaque soluta exercitationem debitis. Voluptatum impedit quos reprehenderit nesciunt quod maxime? Neque molestiae",
  "citationem debitis. Voluptatum icitationem debitis. Volupta quos reprehenderit nesciunt quod maxime? Neque molestiae harum magnam impedit quos reprehenderit nesciunt quod maxime? Neque molestiae harum magnam i"
]
let img = [
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/oscar_image.png",
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/the_student_hotel_image.png",
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/telefonica_image.png",
  "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/zippo_image.png"
]
let id;
export default function SlidingPage2() {

  let [c, setC] = useState(0);


  if(id) clearInterval(id);

  id=setInterval(()=>{
    if(c==3) setC(0)
    else  setC(c+1);
  },3000)


  return (
    <Box mt="50px">

      <HStack >
        <Text fontSize="4xl" w="45%" m="30px" >See how customers   drive impact</Text>
        <VStack >

          <Box w="70%" bg="blue" borderRadius="20px" h="300px" p="20px" pt="70px" fontSize="25px" color="white">
            {arr[c]}
          </Box>

          <HStack >
            {
              arr.map((e, i) => {
                return (<button
                key={i}
                onClick={()=>setC(i)}
                 style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    margin: "5px",
                    backgroundColor:"white"
                  }}
                >
                </button>)
              })
            }
          </HStack>
        </VStack>
      <Image
      style={{
        position:"relative",
        top:"150px",
        left:"-250px",
        borderRadius:"10px"
      }}
      alt='' height="150px" src={img[c]} ></Image>
      </HStack>
    </Box>
  )
}
